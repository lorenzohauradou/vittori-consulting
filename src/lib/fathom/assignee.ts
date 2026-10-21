import type { FathomAssignee } from './types'

export interface MatchableMember {
    id: string
    email: string
    full_name: string
    fathom_aliases: string[]
}

function normalize(value: string) {
    return value
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim()
}

// Trova il membro del team a cui Fathom ha assegnato l'action item.
// Nel dubbio (esterno, omonimi come le due Camilla) ritorna null e la task
// finisce in "Da assegnare": meglio un admin che smista che una task sbagliata.
export function matchAssignee(assignee: FathomAssignee | null | undefined, members: MatchableMember[]) {
    if (!assignee) return null
    const email = assignee.email ? normalize(assignee.email) : null
    const name = assignee.name ? normalize(assignee.name) : null

    // Con un'email decide solo l'email: se non è di nessuno del team è un
    // esterno (es. un cliente omonimo), anche se il nome coincide
    if (email) {
        const byEmail = members.filter(
            (member) => member.email === email || member.fathom_aliases.some((alias) => normalize(alias) === email)
        )
        return byEmail.length === 1 ? byEmail[0].id : null
    }

    if (!name) return null

    const byName = members.filter((member) =>
        [member.full_name, ...member.fathom_aliases].some((candidate) => normalize(candidate) === name)
    )
    if (byName.length === 1) return byName[0].id
    if (byName.length > 1) return null

    // Solo il nome di battesimo ("Valerio")
    if (name.includes(' ')) return null
    const byFirstName = members.filter((member) => normalize(member.full_name).split(' ')[0] === name)
    return byFirstName.length === 1 ? byFirstName[0].id : null
}
