import type { Metadata } from 'next'
import { requireMember } from '@/lib/team'
import { TASK_COLUMNS, type Task, type TeamMember } from '@/lib/tasks'
import TaskBoard from './TaskBoard'

export const metadata: Metadata = {
    title: 'Task',
}

const COMPLETED_VISIBLE_DAYS = 30

function todayInRome() {
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome' }).format(new Date())
}

export default async function TaskPage() {
    const { supabase, member } = await requireMember()
    const completedSince = new Date(Date.now() - COMPLETED_VISIBLE_DAYS * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)

    // La RLS restituisce già solo le task visibili: le proprie, o tutte per gli admin
    const [tasksResult, membersResult] = await Promise.all([
        supabase
            .from('tasks')
            .select(TASK_COLUMNS)
            .or(`status.neq.done,completed_at.gte.${completedSince}`)
            .order('created_at', { ascending: false })
            .overrideTypes<Task[], { merge: false }>(),
        supabase
            .from('team_members')
            .select('id, full_name, role')
            .eq('active', true)
            .order('full_name')
            .overrideTypes<TeamMember[], { merge: false }>(),
    ])

    if (tasksResult.error || membersResult.error) {
        throw new Error('Impossibile caricare le task')
    }

    return (
        <TaskBoard
            tasks={tasksResult.data}
            members={membersResult.data}
            currentMember={member}
            today={todayInRome()}
            completedVisibleDays={COMPLETED_VISIBLE_DAYS}
            canSyncFathom={member.role === 'admin' && !!process.env.FATHOM_API_KEY}
        />
    )
}
