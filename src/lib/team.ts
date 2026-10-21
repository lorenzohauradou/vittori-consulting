import 'server-only'
import { cache } from 'react'
import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { AREA_PATH } from '@/lib/auth-cookie'
import type { TeamMember } from '@/lib/tasks'

// Utente loggato E presente nell'allowlist del team. Un account Supabase Auth
// da solo non basta: Auth è condiviso con il sito pubblico.
export const getCurrentMember = cache(async () => {
    const supabase = await createSupabaseServerClient()

    // getUser() valida il token con Supabase (getSession() lato server non è affidabile)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data: member } = await supabase
        .from('team_members')
        .select('id, full_name, role')
        .eq('user_id', user.id)
        .eq('active', true)
        .maybeSingle<TeamMember>()

    return member ? { supabase, member } : null
})

// Da chiamare in ogni pagina E in ogni Server Action: le action sono endpoint
// pubblici e non passano dal layout.
export async function requireMember() {
    const current = await getCurrentMember()
    if (!current) redirect(`${AREA_PATH}/login`)
    return current
}
