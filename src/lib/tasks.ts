export type TaskStatus = 'todo' | 'in_progress' | 'done'
export type TaskPriority = 'low' | 'medium' | 'high'
export type TeamRole = 'admin' | 'member'

export interface TeamMember {
    id: string
    full_name: string
    role: TeamRole
}

export interface Task {
    id: string
    title: string
    description: string | null
    status: TaskStatus
    priority: TaskPriority
    due_date: string | null
    assignee_id: string | null
    created_by: string | null
    source: 'manual' | 'fathom'
    fathom_meeting_title: string | null
    fathom_meeting_at: string | null
    fathom_playback_url: string | null
    fathom_assignee: string | null
    completed_at: string | null
    created_at: string
}

export interface TaskInput {
    title: string
    description: string | null
    status: TaskStatus
    priority: TaskPriority
    due_date: string | null
    assignee_id: string | null
}

export const TASK_COLUMNS =
    'id, title, description, status, priority, due_date, assignee_id, created_by, source, fathom_meeting_title, fathom_meeting_at, fathom_playback_url, fathom_assignee, completed_at, created_at'

export const TASK_STATUSES: TaskStatus[] = ['todo', 'in_progress', 'done']
export const TASK_PRIORITIES: TaskPriority[] = ['low', 'medium', 'high']

export const STATUS_LABELS: Record<TaskStatus, string> = {
    todo: 'Da fare',
    in_progress: 'In corso',
    done: 'Fatto',
}

export const PRIORITY_LABELS: Record<TaskPriority, string> = {
    low: 'Bassa',
    medium: 'Media',
    high: 'Alta',
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

export function isUuid(value: unknown): value is string {
    return typeof value === 'string' && UUID_RE.test(value)
}

export function isTaskStatus(value: unknown): value is TaskStatus {
    return TASK_STATUSES.includes(value as TaskStatus)
}

// I dati arrivano dal browser: vanno validati anche se la UI li vincola già.
export function parseTaskInput(raw: unknown): TaskInput | { error: string } {
    if (!raw || typeof raw !== 'object') return { error: 'Dati non validi.' }
    const data = raw as Record<string, unknown>

    const title = typeof data.title === 'string' ? data.title.trim() : ''
    if (!title) return { error: 'Il titolo è obbligatorio.' }
    if (title.length > 500) return { error: 'Il titolo può avere al massimo 500 caratteri.' }

    const description = typeof data.description === 'string' ? data.description.trim() : ''
    if (description.length > 5000) return { error: 'La descrizione può avere al massimo 5000 caratteri.' }

    if (!isTaskStatus(data.status)) return { error: 'Stato non valido.' }
    if (!TASK_PRIORITIES.includes(data.priority as TaskPriority)) return { error: 'Priorità non valida.' }

    const dueDate = data.due_date || null
    if (dueDate !== null && (typeof dueDate !== 'string' || !DATE_RE.test(dueDate) || Number.isNaN(Date.parse(dueDate)))) {
        return { error: 'Data di scadenza non valida.' }
    }

    const assigneeId = data.assignee_id || null
    if (assigneeId !== null && !isUuid(assigneeId)) return { error: 'Assegnatario non valido.' }

    return {
        title,
        description: description || null,
        status: data.status,
        priority: data.priority as TaskPriority,
        due_date: dueDate,
        assignee_id: assigneeId,
    }
}

// Rispecchia la policy di delete su Supabase, per mostrare il pulsante solo quando serve.
export function canDeleteTask(task: Task, member: TeamMember) {
    if (member.role === 'admin') return true
    return task.source === 'manual' && task.created_by === member.id && task.assignee_id === member.id
}
