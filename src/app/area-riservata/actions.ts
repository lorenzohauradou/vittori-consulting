'use server'

import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { AREA_PATH } from '@/lib/auth-cookie'

export async function signOut() {
    const supabase = await createSupabaseServerClient()
    await supabase.auth.signOut()
    redirect(`${AREA_PATH}/login`)
}
