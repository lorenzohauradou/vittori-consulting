'use server'

import { revalidatePath } from 'next/cache'
import { requireMember } from '@/lib/team'
import { isTaskStatus, isUuid, parseTaskInput } from '@/lib/tasks'
import { syncRecentMeetings } from '@/lib/fathom/sync'

export interface ActionResult {
    error?: string
    message?: string
}

const TASKS_PATH = '/area-riservata/task'
const FATHOM_SYNC_DAYS = 14

// Ogni action ricontrolla chi sta chiamando: sono endpoint POST pubblici.
// La RLS su Supabase applica comunque le stesse regole.

export async function createTask(raw: unknown): Promise<ActionResult> {
    const { supabase, member } = await requireMember()
    const input = parseTaskInput(raw)
    if ('error' in input) return input

    const assigneeId = member.role === 'admin' ? input.assignee_id : member.id
    const { error } = await supabase.from('tasks').insert({ ...input, assignee_id: assigneeId })
    if (error) {
        console.error('Creazione task fallita:', error.message)
        return { error: 'Non è stato possibile creare la task.' }
    }

    revalidatePath(TASKS_PATH)
    return {}
}

export async function updateTask(id: unknown, raw: unknown): Promise<ActionResult> {
    const { supabase, member } = await requireMember()
    if (!isUuid(id)) return { error: 'Task non valida.' }
    const input = parseTaskInput(raw)
    if ('error' in input) return input

    // Solo gli admin possono riassegnare
    const { assignee_id, ...content } = input
    const values = member.role === 'admin' ? { ...content, assignee_id } : content

    const { data, error } = await supabase.from('tasks').update(values).eq('id', id).select('id')
    if (error) {
        console.error('Modifica task fallita:', error.message)
        return { error: 'Non è stato possibile salvare la task.' }
    }
    if (!data?.length) return { error: 'Task non trovata o non hai i permessi per modificarla.' }

    revalidatePath(TASKS_PATH)
    return {}
}

export async function setTaskStatus(id: unknown, status: unknown): Promise<ActionResult> {
    const { supabase } = await requireMember()
    if (!isUuid(id) || !isTaskStatus(status)) return { error: 'Richiesta non valida.' }

    const { data, error } = await supabase.from('tasks').update({ status }).eq('id', id).select('id')
    if (error || !data?.length) return { error: 'Non è stato possibile aggiornare lo stato.' }

    revalidatePath(TASKS_PATH)
    return {}
}

export async function deleteTask(id: unknown): Promise<ActionResult> {
    const { supabase } = await requireMember()
    if (!isUuid(id)) return { error: 'Task non valida.' }

    const { data, error } = await supabase.from('tasks').delete().eq('id', id).select('id')
    if (error) {
        console.error('Eliminazione task fallita:', error.message)
        return { error: 'Non è stato possibile eliminare la task.' }
    }
    if (!data?.length) return { error: 'Puoi eliminare solo le task che hai creato tu.' }

    revalidatePath(TASKS_PATH)
    return {}
}

export async function syncFathom(): Promise<ActionResult> {
    const { member } = await requireMember()
    if (member.role !== 'admin') return { error: 'Solo gli admin possono sincronizzare Fathom.' }

    try {
        const { meetings, created } = await syncRecentMeetings(FATHOM_SYNC_DAYS)
        revalidatePath(TASKS_PATH)
        const imported = created === 1 ? '1 nuova task importata' : `${created} nuove task importate`
        return { message: `${imported} da ${meetings} meeting degli ultimi ${FATHOM_SYNC_DAYS} giorni.` }
    } catch (error) {
        console.error('Sincronizzazione Fathom fallita:', error)
        return { error: error instanceof Error ? error.message : 'Sincronizzazione con Fathom non riuscita.' }
    }
}
