import 'server-only'
import { createHash } from 'crypto'
import { createSupabaseAdminClient } from '@/lib/supabase-admin'
import { matchAssignee, type MatchableMember } from './assignee'
import { actionItemsFromSummary } from './summary'
import type { FathomActionItem, FathomAssignee, FathomMeeting, FathomMeetingListResponse } from './types'

const FATHOM_API_URL = 'https://api.fathom.ai/external/v1'
const MAX_PAGES = 20

// Le action item non hanno un id: la chiave le identifica in modo stabile,
// così webhook ripetuti e sincronizzazioni manuali non creano doppioni.
function actionItemKey(meeting: FathomMeeting, item: FathomActionItem) {
    return createHash('sha256')
        .update([meeting.recording_id ?? meeting.url, item.recording_timestamp, item.description].join('|'))
        .digest('hex')
}

// I link finiscono in un href: accettiamo solo https verso Fathom
function fathomUrl(value: unknown) {
    if (typeof value !== 'string') return null
    try {
        const url = new URL(value)
        const isFathomHost = ['fathom.video', 'fathom.ai'].some(
            (host) => url.hostname === host || url.hostname.endsWith(`.${host}`)
        )
        return url.protocol === 'https:' && isFathomHost ? url.toString() : null
    } catch {
        return null
    }
}

// Una data non valida farebbe fallire l'import (e Fathom ritenterebbe all'infinito)
function isoDate(...values: unknown[]) {
    const value = values.find((candidate) => typeof candidate === 'string' && !Number.isNaN(Date.parse(candidate)))
    return typeof value === 'string' ? value : null
}

function describeAssignee(assignee: FathomAssignee | null | undefined) {
    if (!assignee) return null
    const parts = [assignee.name, assignee.email && `<${assignee.email}>`].filter(Boolean)
    return parts.length > 0 ? parts.join(' ') : null
}

// Le action item di Fathom se presenti, altrimenti i "Prossimi passi" del riassunto
function meetingActionItems(meeting: FathomMeeting): FathomActionItem[] {
    if (Array.isArray(meeting.action_items) && meeting.action_items.length > 0) return meeting.action_items
    return actionItemsFromSummary(meeting.default_summary?.markdown_formatted)
}

// Trasforma le action item dei meeting in task. Ritorna quante task sono nuove.
export async function importMeetings(meetings: FathomMeeting[]) {
    const entries = meetings.flatMap((meeting) =>
        meetingActionItems(meeting)
            .filter((item) => typeof item?.description === 'string' && item.description.trim())
            .map((item) => ({ meeting, item }))
    )
    if (entries.length === 0) return 0

    const supabase = createSupabaseAdminClient()

    const { data: members, error: membersError } = await supabase
        .from('team_members')
        .select('id, email, full_name, fathom_aliases')
        .eq('active', true)
        .overrideTypes<MatchableMember[], { merge: false }>()
    if (membersError) throw membersError

    const rows = entries.map(({ meeting, item }) => ({
        item_key: actionItemKey(meeting, item),
        recording_id: Number.isInteger(meeting.recording_id) ? meeting.recording_id : null,
        title: item.description.trim().slice(0, 500),
        status: item.completed ? 'done' : 'todo',
        assignee_id: matchAssignee(item.assignee, members ?? []),
        meeting_title: (meeting.meeting_title || meeting.title || '').slice(0, 300) || null,
        meeting_at: isoDate(meeting.recording_start_time, meeting.scheduled_start_time, meeting.created_at),
        playback_url: fathomUrl(item.recording_playback_url) ?? fathomUrl(meeting.share_url),
        fathom_assignee: describeAssignee(item.assignee)?.slice(0, 300) ?? null,
    }))

    const { data: created, error } = await supabase.rpc('import_fathom_tasks', { items: rows })
    if (error) throw error
    return created as number
}

// Recupera dall'API i meeting degli ultimi giorni: rete di sicurezza se un
// webhook è andato perso, e utile per importare lo storico la prima volta.
export async function syncRecentMeetings(days: number) {
    const apiKey = process.env.FATHOM_API_KEY
    if (!apiKey) throw new Error('FATHOM_API_KEY non configurata')

    const createdAfter = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()
    const meetings: FathomMeeting[] = []
    let cursor: string | null = null

    for (let page = 0; page < MAX_PAGES; page++) {
        const url = new URL(`${FATHOM_API_URL}/meetings`)
        url.searchParams.set('include_action_items', 'true')
        url.searchParams.set('include_summary', 'true')
        url.searchParams.set('created_after', createdAfter)
        if (cursor) url.searchParams.set('cursor', cursor)

        const response = await fetch(url, { headers: { 'X-Api-Key': apiKey }, cache: 'no-store' })
        if (response.status === 429) throw new Error('Troppe richieste a Fathom, riprova tra un minuto.')
        if (!response.ok) throw new Error(`Fathom API ha risposto ${response.status}`)

        const body = (await response.json()) as FathomMeetingListResponse
        meetings.push(...body.items)
        cursor = body.next_cursor
        if (!cursor) break
    }

    return { meetings: meetings.length, created: await importMeetings(meetings) }
}
