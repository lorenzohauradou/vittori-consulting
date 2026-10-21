import 'server-only'
import { createClient } from '@supabase/supabase-js'

// Bypassa la RLS: solo lato server e solo per operazioni di sistema
// (creazione account al primo accesso, import da Fathom).
export function createSupabaseAdminClient() {
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!serviceRoleKey) {
        throw new Error('SUPABASE_SERVICE_ROLE_KEY non configurata')
    }

    return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceRoleKey, {
        auth: { persistSession: false, autoRefreshToken: false },
    })
}
