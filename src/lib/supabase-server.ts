import 'server-only'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { authCookieOptions } from '@/lib/auth-cookie'

// Client con la sessione dell'utente: tutte le query passano dalla RLS.
export async function createSupabaseServerClient() {
    const cookieStore = await cookies()

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookieOptions: authCookieOptions,
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
                    } catch {
                        // Chiamato da un Server Component: il refresh della sessione lo fa il middleware
                    }
                },
            },
        }
    )
}
