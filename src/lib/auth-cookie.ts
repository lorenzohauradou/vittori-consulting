import type { CookieOptionsWithName } from '@supabase/ssr'

export const AREA_PATH = '/area-riservata'

// Sessione dell'area riservata: cookie httpOnly (non leggibile da JavaScript) e
// limitato al path dell'area, così non viaggia con le richieste del sito pubblico.
export const authCookieOptions: CookieOptionsWithName = {
    name: 'vc-team-auth',
    path: AREA_PATH,
    sameSite: 'lax',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
}
