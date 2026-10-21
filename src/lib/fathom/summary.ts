import type { FathomActionItem } from './types'

// Sezioni del riassunto Fathom che contengono le cose da fare
const NEXT_STEPS_HEADING = /^(#{1,6})\s*(prossimi passi|next steps|action items|azioni da intraprendere)\s*$/i

function secondsToTimestamp(seconds: number) {
    const total = Math.max(0, Math.floor(seconds))
    return [Math.floor(total / 3600), Math.floor((total % 3600) / 60), total % 60]
        .map((part) => String(part).padStart(2, '0'))
        .join(':')
}

// "[testo](https://fathom.video/...)" → testo + link
function splitLink(content: string) {
    const linkStart = content.lastIndexOf('](')
    if (content.startsWith('[') && content.endsWith(')') && linkStart > 0) {
        return { label: content.slice(1, linkStart), url: content.slice(linkStart + 2, -1) }
    }
    return { label: content, url: null }
}

function timestampFromUrl(url: string | null) {
    if (!url) return '00:00:00'
    try {
        const seconds = Number(new URL(url).searchParams.get('timestamp'))
        return Number.isFinite(seconds) ? secondsToTimestamp(seconds) : '00:00:00'
    } catch {
        return '00:00:00'
    }
}

// Fathom non sempre compila `action_items`, ma il riassunto ha quasi sempre la
// sezione "Prossimi passi", in due formati:
//   - [**Valerio:** Inviare il contratto](link)
//   - [**Tommaso:**](link)
//       - [Quantificare il costo dell'inazione](link)
export function actionItemsFromSummary(markdown: string | null | undefined): FathomActionItem[] {
    if (!markdown) return []
    const lines = markdown.split('\n')

    const start = lines.findIndex((line) => NEXT_STEPS_HEADING.test(line.trim()))
    if (start === -1) return []
    const headingLevel = NEXT_STEPS_HEADING.exec(lines[start].trim())![1].length

    const items: FathomActionItem[] = []
    let group: { name: string; indent: number } | null = null

    for (const line of lines.slice(start + 1)) {
        const heading = /^(#{1,6})\s/.exec(line.trim())
        if (heading && heading[1].length <= headingLevel) break

        const bullet = /^(\s*)[-*]\s+(.*\S)\s*$/.exec(line)
        if (!bullet) continue
        const indent = bullet[1].length
        const { label, url } = splitLink(bullet[2].trim())

        if (group && indent <= group.indent) group = null

        const owner = /^\*\*(.+?):?\*\*:?\s*(.*)$/.exec(label.trim())
        const ownerName = owner?.[1].replace(/:$/, '').trim()
        const name = ownerName ?? group?.name ?? null
        const text = (owner ? owner[2] : label).replace(/\*\*/g, '').trim()

        // "**Tommaso:**" senza testo: i punti sotto sono suoi
        if (ownerName && !text) {
            group = { name: ownerName, indent }
            continue
        }
        if (!text) continue

        items.push({
            description: text,
            user_generated: false,
            completed: false,
            recording_timestamp: timestampFromUrl(url),
            recording_playback_url: url ?? '',
            assignee: name ? { name, email: null, team: null } : null,
        })
    }

    return items
}
