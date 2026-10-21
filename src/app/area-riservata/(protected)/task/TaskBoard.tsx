'use client'

import { useMemo, useOptimistic, useState, useTransition, type ReactNode } from 'react'
import { AlertTriangle, CalendarDays, Check, CircleDot, Inbox, ListTodo, PlayCircle, Plus, RefreshCw, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { STATUS_LABELS, TASK_STATUSES, type Task, type TaskStatus, type TeamMember } from '@/lib/tasks'
import { setTaskStatus, syncFathom } from './actions'
import { describeDueDate, initials } from './task-format'
import TaskDialog from './TaskDialog'

interface TaskBoardProps {
    tasks: Task[]
    members: TeamMember[]
    currentMember: TeamMember
    today: string
    completedVisibleDays: number
    canSyncFathom: boolean
}

type PersonFilter = 'all' | 'unassigned' | string
type Notice = { tone: 'success' | 'error'; text: string }

const PRIORITY_ORDER = { high: 0, medium: 1, low: 2 }

function compareOpenTasks(a: Task, b: Task) {
    if (a.due_date !== b.due_date) {
        if (!a.due_date) return 1
        if (!b.due_date) return -1
        return a.due_date < b.due_date ? -1 : 1
    }
    if (a.priority !== b.priority) return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
    return b.created_at.localeCompare(a.created_at)
}

function compareDoneTasks(a: Task, b: Task) {
    return (b.completed_at ?? '').localeCompare(a.completed_at ?? '')
}

export default function TaskBoard({ tasks, members, currentMember, today, completedVisibleDays, canSyncFathom }: TaskBoardProps) {
    const isAdmin = currentMember.role === 'admin'
    const [person, setPerson] = useState<PersonFilter>('all')
    const [query, setQuery] = useState('')
    const [editing, setEditing] = useState<Task | 'new' | null>(null)
    const [notice, setNotice] = useState<Notice | null>(null)
    const [isSyncing, startSync] = useTransition()
    const [, startStatusChange] = useTransition()

    const [optimisticTasks, applyOptimisticStatus] = useOptimistic(
        tasks,
        (state, change: { id: string; status: TaskStatus }) =>
            state.map((task) => (task.id === change.id ? { ...task, status: change.status } : task))
    )

    const memberNames = useMemo(() => new Map(members.map((member) => [member.id, member.full_name])), [members])

    const openCountByMember = useMemo(() => {
        const counts = new Map<string, number>()
        for (const task of optimisticTasks) {
            if (task.status === 'done' || !task.assignee_id) continue
            counts.set(task.assignee_id, (counts.get(task.assignee_id) ?? 0) + 1)
        }
        return counts
    }, [optimisticTasks])

    const personTasks = optimisticTasks.filter((task) => {
        if (person === 'all') return true
        if (person === 'unassigned') return task.assignee_id === null
        return task.assignee_id === person
    })

    const needle = query.trim().toLowerCase()
    const visibleTasks = needle
        ? personTasks.filter((task) =>
            [task.title, task.description, task.fathom_meeting_title].some((text) => text?.toLowerCase().includes(needle))
        )
        : personTasks

    const open = personTasks.filter((task) => task.status !== 'done')
    const stats = {
        todo: open.filter((task) => task.status === 'todo').length,
        inProgress: open.filter((task) => task.status === 'in_progress').length,
        overdue: open.filter((task) => task.due_date && task.due_date < today).length,
        unassigned: optimisticTasks.filter((task) => task.status !== 'done' && task.assignee_id === null).length,
        done: personTasks.length - open.length,
    }

    const sections: { status: TaskStatus; tasks: Task[] }[] = [
        { status: 'in_progress', tasks: visibleTasks.filter((task) => task.status === 'in_progress').sort(compareOpenTasks) },
        { status: 'todo', tasks: visibleTasks.filter((task) => task.status === 'todo').sort(compareOpenTasks) },
        { status: 'done', tasks: visibleTasks.filter((task) => task.status === 'done').sort(compareDoneTasks) },
    ]

    function changeStatus(task: Task, status: TaskStatus) {
        startStatusChange(async () => {
            applyOptimisticStatus({ id: task.id, status })
            const result = await setTaskStatus(task.id, status)
            if (result.error) setNotice({ tone: 'error', text: result.error })
        })
    }

    function runSync() {
        startSync(async () => {
            const result = await syncFathom()
            setNotice(result.error ? { tone: 'error', text: result.error } : { tone: 'success', text: result.message ?? 'Sincronizzazione completata.' })
        })
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">{isAdmin ? 'Task del team' : 'Le mie task'}</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        {isAdmin
                            ? 'Le action item delle call registrate con Fathom arrivano qui in automatico.'
                            : 'Le tue attività, comprese quelle emerse nelle call registrate con Fathom.'}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    {canSyncFathom && (
                        <button
                            type="button"
                            onClick={runSync}
                            disabled={isSyncing}
                            title="Importa le action item delle call degli ultimi 14 giorni"
                            className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
                        >
                            <RefreshCw className={cn('size-4', isSyncing && 'animate-spin')} />
                            Sincronizza Fathom
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={() => setEditing('new')}
                        className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#2e54a1] px-4 text-sm font-semibold text-white transition hover:bg-[#25468a]"
                    >
                        <Plus className="size-4" />
                        Nuova task
                    </button>
                </div>
            </div>

            {notice && (
                <div
                    role="status"
                    className={cn(
                        'flex items-start gap-3 rounded-lg border px-4 py-3 text-sm',
                        notice.tone === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-red-200 bg-red-50 text-red-800'
                    )}
                >
                    <p className="flex-1">{notice.text}</p>
                    <button type="button" onClick={() => setNotice(null)} aria-label="Chiudi messaggio" className="opacity-60 hover:opacity-100">
                        <X className="size-4" />
                    </button>
                </div>
            )}

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                <StatCard icon={ListTodo} label="Da fare" value={stats.todo} />
                <StatCard icon={CircleDot} label="In corso" value={stats.inProgress} />
                <StatCard icon={AlertTriangle} label="Scadute" value={stats.overdue} tone={stats.overdue > 0 ? 'danger' : 'default'} />
                {isAdmin ? (
                    <StatCard
                        icon={Inbox}
                        label="Da assegnare"
                        value={stats.unassigned}
                        tone={stats.unassigned > 0 ? 'warning' : 'default'}
                        onClick={stats.unassigned > 0 ? () => setPerson('unassigned') : undefined}
                    />
                ) : (
                    <StatCard icon={Check} label={`Fatte (${completedVisibleDays} gg)`} value={stats.done} />
                )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
                {isAdmin && (
                    <select
                        value={person}
                        onChange={(event) => setPerson(event.target.value)}
                        aria-label="Filtra per persona"
                        className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm sm:w-64"
                    >
                        <option value="all">Tutto il team</option>
                        <option value="unassigned">Da assegnare ({stats.unassigned})</option>
                        {members.map((member) => (
                            <option key={member.id} value={member.id}>
                                {member.id === currentMember.id ? `${member.full_name} (tu)` : member.full_name} · {openCountByMember.get(member.id) ?? 0} aperte
                            </option>
                        ))}
                    </select>
                )}
                <label className="relative flex-1">
                    <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
                    <input
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Cerca per titolo, descrizione o meeting…"
                        aria-label="Cerca task"
                        className="h-10 w-full rounded-lg border border-slate-200 bg-white pr-3 pl-9 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[#2e54a1]/30"
                    />
                </label>
            </div>

            {sections.map(({ status, tasks: sectionTasks }) => (
                <TaskSection
                    key={status}
                    title={status === 'done' ? `Completate negli ultimi ${completedVisibleDays} giorni` : STATUS_LABELS[status]}
                    count={sectionTasks.length}
                    collapsible={status === 'done'}
                >
                    {sectionTasks.length === 0 ? (
                        <p className="rounded-lg border border-dashed border-slate-200 px-4 py-6 text-center text-sm text-slate-400">
                            {status === 'todo' ? 'Nessuna task da fare. Ottimo lavoro!' : 'Nessuna task.'}
                        </p>
                    ) : (
                        <ul className="space-y-2">
                            {sectionTasks.map((task) => (
                                <TaskRow
                                    key={task.id}
                                    task={task}
                                    today={today}
                                    assigneeName={isAdmin ? (task.assignee_id ? memberNames.get(task.assignee_id) ?? 'Ex membro' : null) : undefined}
                                    onOpen={() => setEditing(task)}
                                    onStatusChange={(next) => changeStatus(task, next)}
                                />
                            ))}
                        </ul>
                    )}
                </TaskSection>
            ))}

            {editing && (
                <TaskDialog
                    task={editing === 'new' ? null : editing}
                    members={members}
                    currentMember={currentMember}
                    defaultAssigneeId={person !== 'all' && person !== 'unassigned' ? person : currentMember.id}
                    onClose={() => setEditing(null)}
                />
            )}
        </div>
    )
}

function StatCard({
    icon: Icon,
    label,
    value,
    tone = 'default',
    onClick,
}: {
    icon: typeof ListTodo
    label: string
    value: number
    tone?: 'default' | 'warning' | 'danger'
    onClick?: () => void
}) {
    const content = (
        <>
            <div
                className={cn(
                    'flex size-9 items-center justify-center rounded-lg',
                    tone === 'danger' && 'bg-red-50 text-red-600',
                    tone === 'warning' && 'bg-amber-50 text-amber-600',
                    tone === 'default' && 'bg-blue-50 text-[#2e54a1]'
                )}
            >
                <Icon className="size-4" />
            </div>
            <div className="text-left">
                <p className="text-2xl leading-none font-bold tabular-nums">{value}</p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
            </div>
        </>
    )

    const className = 'flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4'
    return onClick ? (
        <button type="button" onClick={onClick} className={cn(className, 'transition hover:border-slate-300 hover:shadow-sm')}>
            {content}
        </button>
    ) : (
        <div className={className}>{content}</div>
    )
}

function TaskSection({
    title,
    count,
    collapsible,
    children,
}: {
    title: string
    count: number
    collapsible: boolean
    children: ReactNode
}) {
    const heading = (
        <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            {title}
            <span className="rounded-full bg-slate-200/70 px-2 py-0.5 text-xs font-medium text-slate-600 tabular-nums">{count}</span>
        </span>
    )

    if (collapsible) {
        return (
            <details className="group">
                <summary className="mb-3 cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden">
                    <span className="inline-flex items-center gap-2">
                        {heading}
                        <span className="text-xs text-slate-400 group-open:hidden">Mostra</span>
                        <span className="hidden text-xs text-slate-400 group-open:inline">Nascondi</span>
                    </span>
                </summary>
                {children}
            </details>
        )
    }

    return (
        <section>
            <h2 className="mb-3">{heading}</h2>
            {children}
        </section>
    )
}

function TaskRow({
    task,
    today,
    assigneeName,
    onOpen,
    onStatusChange,
}: {
    task: Task
    today: string
    // undefined = colonna nascosta (vista del singolo membro), null = da assegnare
    assigneeName: string | null | undefined
    onOpen: () => void
    onStatusChange: (status: TaskStatus) => void
}) {
    const isDone = task.status === 'done'
    const due = task.due_date && !isDone ? describeDueDate(task.due_date, today) : null

    return (
        <li
            className={cn(
                'flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-slate-300 sm:items-center sm:p-4',
                isDone && 'bg-slate-50/60'
            )}
        >
            <button
                type="button"
                onClick={() => onStatusChange(isDone ? 'todo' : 'done')}
                aria-label={isDone ? 'Segna come da fare' : 'Segna come completata'}
                className={cn(
                    'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition sm:mt-0',
                    isDone ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 text-transparent hover:border-emerald-500 hover:text-emerald-500'
                )}
            >
                <Check className="size-3" strokeWidth={3} />
            </button>

            <button type="button" onClick={onOpen} className="min-w-0 flex-1 text-left">
                <p className={cn('text-sm font-medium wrap-break-word', isDone && 'text-slate-400 line-through')}>{task.title}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                    {task.priority === 'high' && !isDone && (
                        <span className="inline-flex items-center gap-1 font-medium text-red-600">
                            <span className="size-1.5 rounded-full bg-red-500" />
                            Alta priorità
                        </span>
                    )}
                    {due && (
                        <span
                            className={cn(
                                'inline-flex items-center gap-1',
                                due.tone === 'overdue' && 'font-medium text-red-600',
                                due.tone === 'soon' && 'font-medium text-amber-600'
                            )}
                        >
                            <CalendarDays className="size-3.5" />
                            {due.label}
                        </span>
                    )}
                    {task.source === 'fathom' && (
                        <span className="inline-flex min-w-0 items-center gap-1 rounded bg-violet-50 px-1.5 py-0.5 font-medium text-violet-700">
                            Fathom
                            {task.fathom_meeting_title && <span className="max-w-48 truncate font-normal">· {task.fathom_meeting_title}</span>}
                        </span>
                    )}
                    {assigneeName !== undefined &&
                        (assigneeName ? (
                            <span className="inline-flex items-center gap-1.5">
                                <span className="flex size-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-semibold text-slate-600">
                                    {initials(assigneeName)}
                                </span>
                                {assigneeName}
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1 font-medium text-amber-600">
                                <Inbox className="size-3.5" />
                                Da assegnare{task.fathom_assignee && <span className="font-normal text-slate-500">· Fathom: {task.fathom_assignee}</span>}
                            </span>
                        ))}
                </div>
            </button>

            <div className="flex shrink-0 items-center gap-1">
                {task.fathom_playback_url && (
                    <a
                        href={task.fathom_playback_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Riascolta il momento della call"
                        className="hidden size-8 items-center justify-center rounded-lg text-violet-600 transition hover:bg-violet-50 sm:flex"
                    >
                        <PlayCircle className="size-4" />
                    </a>
                )}
                <select
                    value={task.status}
                    onChange={(event) => onStatusChange(event.target.value as TaskStatus)}
                    aria-label="Stato"
                    className="hidden h-8 rounded-lg border border-slate-200 bg-white px-2 text-xs text-slate-600 sm:block"
                >
                    {TASK_STATUSES.map((status) => (
                        <option key={status} value={status}>
                            {STATUS_LABELS[status]}
                        </option>
                    ))}
                </select>
            </div>
        </li>
    )
}
