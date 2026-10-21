// Formattazione deterministica (stessa resa su server e browser, fuso di Roma)

const dayMonth = new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'short', timeZone: 'UTC' })
const meetingDate = new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'Europe/Rome',
})

function addDays(isoDate: string, days: number) {
    const date = new Date(`${isoDate}T12:00:00Z`)
    date.setUTCDate(date.getUTCDate() + days)
    return date.toISOString().slice(0, 10)
}

export function describeDueDate(dueDate: string, today: string) {
    const label = dayMonth.format(new Date(`${dueDate}T12:00:00Z`))
    if (dueDate < today) return { label: `Scaduta il ${label}`, tone: 'overdue' as const }
    if (dueDate === today) return { label: 'Oggi', tone: 'soon' as const }
    if (dueDate === addDays(today, 1)) return { label: 'Domani', tone: 'soon' as const }
    return { label, tone: 'normal' as const }
}

export function formatMeetingDate(value: string) {
    return meetingDate.format(new Date(value))
}

export function initials(fullName: string) {
    return fullName
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]!.toUpperCase())
        .join('')
}
