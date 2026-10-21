'use client'

import { useEffect, useRef, useState, useTransition, type FormEvent } from 'react'
import { ExternalLink, Loader2, Trash2, X } from 'lucide-react'
import {
    canDeleteTask,
    PRIORITY_LABELS,
    STATUS_LABELS,
    TASK_PRIORITIES,
    TASK_STATUSES,
    type Task,
    type TeamMember,
} from '@/lib/tasks'
import { createTask, deleteTask, updateTask } from './actions'
import { formatMeetingDate } from './task-format'

interface TaskDialogProps {
    task: Task | null
    members: TeamMember[]
    currentMember: TeamMember
    defaultAssigneeId: string
    onClose: () => void
}

const fieldClassName =
    'w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus-visible:border-[#2e54a1] focus-visible:ring-2 focus-visible:ring-[#2e54a1]/20'

export default function TaskDialog({ task, members, currentMember, defaultAssigneeId, onClose }: TaskDialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [error, setError] = useState<string | null>(null)
    const [isSaving, startSaving] = useTransition()
    const [isDeleting, startDeleting] = useTransition()

    const isAdmin = currentMember.role === 'admin'
    const isBusy = isSaving || isDeleting

    useEffect(() => {
        dialogRef.current?.showModal()
    }, [])

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const input = {
            title: formData.get('title'),
            description: formData.get('description'),
            status: formData.get('status'),
            priority: formData.get('priority'),
            due_date: formData.get('due_date'),
            assignee_id: isAdmin ? formData.get('assignee_id') : currentMember.id,
        }

        startSaving(async () => {
            const result = task ? await updateTask(task.id, input) : await createTask(input)
            if (result.error) setError(result.error)
            else dialogRef.current?.close()
        })
    }

    function handleDelete() {
        if (!task || !window.confirm('Eliminare definitivamente questa task?')) return
        startDeleting(async () => {
            const result = await deleteTask(task.id)
            if (result.error) setError(result.error)
            else dialogRef.current?.close()
        })
    }

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            aria-labelledby="task-dialog-title"
            className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl bg-white p-0 text-slate-900 shadow-xl backdrop:bg-slate-900/40"
        >
            <form onSubmit={handleSubmit} className="space-y-5 p-6">
                <div className="flex items-center justify-between">
                    <h2 id="task-dialog-title" className="text-lg font-semibold">
                        {task ? 'Modifica task' : 'Nuova task'}
                    </h2>
                    <button
                        type="button"
                        onClick={() => dialogRef.current?.close()}
                        aria-label="Chiudi"
                        className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="size-4" />
                    </button>
                </div>

                {task?.source === 'fathom' && (
                    <div className="rounded-lg border border-violet-100 bg-violet-50/60 px-4 py-3 text-sm">
                        <p className="font-medium text-violet-900">
                            Dalla call{task.fathom_meeting_title ? ` “${task.fathom_meeting_title}”` : ''}
                            {task.fathom_meeting_at && <span className="font-normal text-violet-700"> del {formatMeetingDate(task.fathom_meeting_at)}</span>}
                        </p>
                        {task.fathom_assignee && <p className="mt-1 text-violet-700">Fathom l’ha assegnata a: {task.fathom_assignee}</p>}
                        {task.fathom_playback_url && (
                            <a
                                href={task.fathom_playback_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center gap-1 font-medium text-violet-700 hover:underline"
                            >
                                Riascolta il momento della call
                                <ExternalLink className="size-3.5" />
                            </a>
                        )}
                    </div>
                )}

                <div className="space-y-1.5">
                    <label htmlFor="task-title" className="text-sm font-medium text-slate-700">
                        Titolo
                    </label>
                    <input
                        id="task-title"
                        name="title"
                        defaultValue={task?.title}
                        required
                        maxLength={500}
                        autoFocus={!task}
                        className={`${fieldClassName} h-10`}
                    />
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="task-description" className="text-sm font-medium text-slate-700">
                        Note <span className="font-normal text-slate-400">(facoltative)</span>
                    </label>
                    <textarea
                        id="task-description"
                        name="description"
                        defaultValue={task?.description ?? ''}
                        rows={3}
                        maxLength={5000}
                        className={`${fieldClassName} resize-y py-2`}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="space-y-1.5">
                        <label htmlFor="task-status" className="text-sm font-medium text-slate-700">
                            Stato
                        </label>
                        <select id="task-status" name="status" defaultValue={task?.status ?? 'todo'} className={`${fieldClassName} h-10`}>
                            {TASK_STATUSES.map((status) => (
                                <option key={status} value={status}>
                                    {STATUS_LABELS[status]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="task-priority" className="text-sm font-medium text-slate-700">
                            Priorità
                        </label>
                        <select id="task-priority" name="priority" defaultValue={task?.priority ?? 'medium'} className={`${fieldClassName} h-10`}>
                            {TASK_PRIORITIES.map((priority) => (
                                <option key={priority} value={priority}>
                                    {PRIORITY_LABELS[priority]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="task-due-date" className="text-sm font-medium text-slate-700">
                            Scadenza
                        </label>
                        <input
                            id="task-due-date"
                            name="due_date"
                            type="date"
                            defaultValue={task?.due_date ?? ''}
                            className={`${fieldClassName} h-10`}
                        />
                    </div>
                </div>

                {isAdmin && (
                    <div className="space-y-1.5">
                        <label htmlFor="task-assignee" className="text-sm font-medium text-slate-700">
                            Assegnata a
                        </label>
                        <select
                            id="task-assignee"
                            name="assignee_id"
                            defaultValue={task ? task.assignee_id ?? '' : defaultAssigneeId}
                            className={`${fieldClassName} h-10`}
                        >
                            <option value="">Da assegnare</option>
                            {/* Assegnatario disattivato: evita di cambiarlo senza volerlo salvando */}
                            {task?.assignee_id && !members.some((member) => member.id === task.assignee_id) && (
                                <option value={task.assignee_id}>Ex membro del team</option>
                            )}
                            {members.map((member) => (
                                <option key={member.id} value={member.id}>
                                    {member.id === currentMember.id ? `${member.full_name} (tu)` : member.full_name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {error && (
                    <p role="alert" className="text-sm text-red-600">
                        {error}
                    </p>
                )}

                <div className="flex items-center gap-2 border-t border-slate-100 pt-5">
                    {task && canDeleteTask(task, currentMember) && (
                        <button
                            type="button"
                            onClick={handleDelete}
                            disabled={isBusy}
                            className="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-60"
                        >
                            {isDeleting ? <Loader2 className="size-4 animate-spin" /> : <Trash2 className="size-4" />}
                            Elimina
                        </button>
                    )}
                    <div className="ml-auto flex gap-2">
                        <button
                            type="button"
                            onClick={() => dialogRef.current?.close()}
                            className="h-10 rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                            Annulla
                        </button>
                        <button
                            type="submit"
                            disabled={isBusy}
                            className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#2e54a1] px-4 text-sm font-semibold text-white transition hover:bg-[#25468a] disabled:opacity-60"
                        >
                            {isSaving && <Loader2 className="size-4 animate-spin" />}
                            {task ? 'Salva' : 'Crea task'}
                        </button>
                    </div>
                </div>
            </form>
        </dialog>
    )
}
