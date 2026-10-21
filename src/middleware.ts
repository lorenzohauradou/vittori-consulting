import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { AREA_PATH, authCookieOptions } from '@/lib/auth-cookie'

// Rinnova la sessione e tiene fuori chi non è loggato. Il controllo di
// appartenenza al team è fatto lato server in ogni pagina/action (requireMember)
// e, in ultima istanza, dalla RLS su Supabase.
export async function middleware(request: NextRequest) {
    let response = NextResponse.next({ request })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookieOptions: authCookieOptions,
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet, headers) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                    response = NextResponse.next({ request })
                    cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
                    Object.entries(headers).forEach(([key, value]) => response.headers.set(key, value))
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser()

    const loginPath = `${AREA_PATH}/login`
    if (!user && request.nextUrl.pathname !== loginPath) {
        const url = request.nextUrl.clone()
        url.pathname = loginPath
        url.search = ''
        return NextResponse.redirect(url)
    }

    return response
}

export const config = {
    matcher: ['/area-riservata/:path*'],
}
