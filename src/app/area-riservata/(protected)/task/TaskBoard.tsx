'use client'

import { useMemo, useOptimistic, useState, useTransition, type ReactNode } from 'react'
import { AlertTriangle, CalendarDays, Check, CircleDot, Inbox, ListTodo, PlayCircle, Plus, RefreshCw, Search, Users, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { STATUS_LABELS, TASK_STATUSES, type Task, type TaskStatus, type TeamMember } from '@/lib/tasks'
import MemberAvatar from '@/components/area-riservata/MemberAvatar'
import { teamProfile } from '@/components/area-riservata/team-profiles'
import { setTaskStatus, syncFathom } from './actions'
import { describeDueDate } from './task-format'
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
type Counts = { open: number; overdue: number }

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

    // Task aperte e scadute per ogni box (chiave: id membro, 'all', 'unassigned')
    const counts = useMemo(() => {
        const result = new Map<string, Counts>()
        const add = (key: string, overdue: boolean) => {
            const current = result.get(key) ?? { open: 0, overdue: 0 }
            result.set(key, { open: current.open + 1, overdue: current.overdue + (overdue ? 1 : 0) })
        }
        for (const task of optimisticTasks) {
            if (task.status === 'done') continue
            const overdue = !!task.due_date && task.due_date < today
            add('all', overdue)
            add(task.assignee_id ?? 'unassigned', overdue)
        }
        return result
    }, [optimisticTasks, today])

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
        done: personTasks.length - open.length,
    }

    const sections: { status: TaskStatus; tasks: Task[] }[] = [
        { status: 'in_progress', tasks: visibleTasks.filter((task) => task.status === 'in_progress').sort(compareOpenTasks) },
        { status: 'todo', tasks: visibleTasks.filter((task) => task.status === 'todo').sort(compareOpenTasks) },
        { status: 'done', tasks: visibleTasks.filter((task) => task.status === 'done').sort(compareDoneTasks) },
    ]

    const selectedName = person !== 'all' && person !== 'unassigned' ? memberNames.get(person) : undefined
    const unassignedCounts = counts.get('unassigned')
    // Nella vista di una sola persona il nome su ogni riga è superfluo
    const showAssignee = isAdmin && !selectedName

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
        <div className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex items-center gap-4">
                    {!isAdmin && <MemberAvatar name={currentMember.full_name} size="lg" />}
                    <div>
                        <h1 className="text-2xl font-bold">{isAdmin ? 'Task del team' : 'Le mie task'}</h1>
                        <p className="mt-1 text-sm text-slate-500">
                            {isAdmin
                                ? 'Scegli una persona per vedere le sue task. Quelle delle call con Fathom arrivano in automatico.'
                                : 'Le tue attività, comprese quelle emerse nelle call registrate con Fathom.'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {canSyncFathom && (
                        <button
                            type="button"
                            onClick={runSync}
                            disabled={isSyncing}
                            title="Importa i prossimi passi delle call degli ultimi 14 giorni"
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

            {isAdmin && (
                <div className="-mx-4 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 pt-1 pb-2 sm:mx-0 sm:pt-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5">
                    <PersonCard
                        selected={person === 'all'}
                        onSelect={() => setPerson('all')}
                        visual={
                            <span className="flex size-16 items-center justify-center rounded-full bg-[#2e54a1] text-white">
                                <Users className="size-7" />
                            </span>
                        }
                        title="Tutte le task"
                        subtitle="Tutto il team"
                        counts={counts.get('all')}
                    />
                    {unassignedCounts && (
                        <PersonCard
                            selected={person === 'unassigned'}
                            onSelect={() => setPerson('unassigned')}
                            visual={
                                <span className="flex size-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                                    <Inbox className="size-7" />
                                </span>
                            }
                            title="Da assegnare"
                            subtitle="Da smistare"
                            counts={unassignedCounts}
                            tone="warning"
                        />
                    )}
                    {members.map((member) => (
                        <PersonCard
                            key={member.id}
                            selected={person === member.id}
                            onSelect={() => setPerson(member.id)}
                            visual={<MemberAvatar name={member.full_name} size="lg" />}
                            title={member.id === currentMember.id ? `${member.full_name} (tu)` : member.full_name}
                            subtitle={teamProfile(member.full_name)?.title ?? (member.role === 'admin' ? 'Admin' : 'Team')}
                            counts={counts.get(member.id)}
                        />
                    ))}
                </div>
            )}

            <div className="space-y-6">
                {isAdmin && (
                    <div className="flex items-center gap-3">
                        {selectedName && <MemberAvatar name={selectedName} />}
                        <h2 className="text-lg font-semibold">
                            {selectedName ? `Task di ${selectedName}` : person === 'unassigned' ? 'Task da assegnare' : 'Tutte le task'}
                        </h2>
                    </div>
                )}

                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    <StatCard icon={ListTodo} label="Da fare" value={stats.todo} />
                    <StatCard icon={CircleDot} label="In corso" value={stats.inProgress} />
                    <StatCard icon={AlertTriangle} label="Scadute" value={stats.overdue} tone={stats.overdue > 0 ? 'danger' : 'default'} />
                    <StatCard icon={Check} label={`Fatte (${completedVisibleDays} gg)`} value={stats.done} />
                </div>

                <label className="relative block">
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
                                        assigneeName={showAssignee ? (task.assignee_id ? memberNames.get(task.assignee_id) ?? 'Ex membro' : null) : undefined}
                                        onOpen={() => setEditing(task)}
                                        onStatusChange={(next) => changeStatus(task, next)}
                                    />
                                ))}
                            </ul>
                        )}
                    </TaskSection>
                ))}
            </div>

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

function PersonCard({
    selected,
    onSelect,
    visual,
    title,
    subtitle,
    counts,
    tone = 'default',
}: {
    selected: boolean
    onSelect: () => void
    visual: ReactNode
    title: string
    subtitle: string
    counts: Counts | undefined
    tone?: 'default' | 'warning'
}) {
    const openCount = counts?.open ?? 0
    const overdueCount = counts?.overdue ?? 0

    return (
        <button
            type="button"
            onClick={onSelect}
            aria-pressed={selected}
            className={cn(
                'flex w-36 shrink-0 snap-start flex-col items-center rounded-2xl border bg-white px-3 pt-5 pb-4 text-center transition sm:w-auto',
                selected
                    ? 'border-[#2e54a1] shadow-md ring-2 ring-[#2e54a1]/15'
                    : 'border-slate-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm'
            )}
        >
            {visual}
            <p className="mt-3 w-full truncate text-sm font-semibold text-slate-900">{title}</p>
            <p className="w-full truncate text-xs text-slate-500">{subtitle}</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs">
                <span
                    className={cn(
                        'rounded-full px-2 py-0.5 font-medium tabular-nums',
                        tone === 'warning' ? 'bg-amber-50 text-amber-700' : openCount > 0 ? 'bg-blue-50 text-[#2e54a1]' : 'bg-slate-100 text-slate-500'
                    )}
                >
                    {openCount === 1 ? '1 aperta' : `${openCount} aperte`}
                </span>
                {overdueCount > 0 && (
                    <span className="rounded-full bg-red-50 px-2 py-0.5 font-medium text-red-600 tabular-nums">
                        {overdueCount === 1 ? '1 scaduta' : `${overdueCount} scadute`}
                    </span>
                )}
            </div>
        </button>
    )
}

function StatCard({
    icon: Icon,
    label,
    value,
    tone = 'default',
}: {
    icon: typeof ListTodo
    label: string
    value: number
    tone?: 'default' | 'danger'
}) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <div
                className={cn(
                    'flex size-9 items-center justify-center rounded-lg',
                    tone === 'danger' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-[#2e54a1]'
                )}
            >
                <Icon className="size-4" />
            </div>
            <div className="text-left">
                <p className="text-2xl leading-none font-bold tabular-nums">{value}</p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
            </div>
        </div>
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
            <h3 className="mb-3">{heading}</h3>
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
    // undefined = non mostrare l'assegnatario, null = da assegnare
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

            {assigneeName && <MemberAvatar name={assigneeName} className="hidden sm:inline-flex" />}

            <button type="button" onClick={onOpen} className="min-w-0 flex-1 text-left">
                <p className={cn('text-sm font-medium wrap-break-word', isDone && 'text-slate-400 line-through')}>{task.title}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                    {assigneeName && (
                        <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
                            <MemberAvatar name={assigneeName} size="xs" className="sm:hidden" />
                            {assigneeName}
                        </span>
                    )}
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
                    {assigneeName === null && (
                        <span className="inline-flex items-center gap-1 font-medium text-amber-600">
                            <Inbox className="size-3.5" />
                            Da assegnare{task.fathom_assignee && <span className="font-normal text-slate-500">· Fathom: {task.fathom_assignee}</span>}
                        </span>
                    )}
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
