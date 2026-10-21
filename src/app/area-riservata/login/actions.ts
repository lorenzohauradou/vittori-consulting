'use server'

import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { createSupabaseAdminClient } from '@/lib/supabase-admin'
import { AREA_PATH } from '@/lib/auth-cookie'

export interface LoginState {
    step: 'email' | 'code'
    email?: string
    error?: string
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

function readEmail(formData: FormData) {
    const email = String(formData.get('email') ?? '').trim().toLowerCase()
    return EMAIL_RE.test(email) && email.length <= 254 ? email : null
}

async function sendCode(formData: FormData): Promise<LoginState> {
    const email = readEmail(formData)
    if (!email) return { step: 'email', error: 'Inserisci un indirizzo email valido.' }

    try {
        const admin = createSupabaseAdminClient()
        const { data: member } = await admin
            .from('team_members')
            .select('user_id')
            .eq('email', email)
            .eq('active', true)
            .maybeSingle()

        // Il codice parte solo per le email del team
        if (member) {
            if (!member.user_id) {
                // Primo accesso: le registrazioni pubbliche su Supabase sono
                // disattivate, quindi l'account lo crea il server
                const { error } = await admin.auth.admin.createUser({ email, email_confirm: true })
                if (error && error.code !== 'email_exists') throw error
            }

            const supabase = await createSupabaseServerClient()
            const { error } = await supabase.auth.signInWithOtp({ email, options: { shouldCreateUser: false } })
            if (error) console.error('Invio codice area riservata fallito:', error.message)
        }
    } catch (error) {
        console.error('Errore login area riservata:', error)
    }

    // Stessa risposta per tutti: non riveliamo quali email fanno parte del team
    return { step: 'code', email }
}

async function verifyCode(formData: FormData): Promise<LoginState> {
    const email = readEmail(formData)
    if (!email) return { step: 'email', error: 'Inserisci un indirizzo email valido.' }

    const token = String(formData.get('code') ?? '').replace(/\D/g, '')
    if (token.length < 6 || token.length > 10) {
        return { step: 'code', email, error: 'Inserisci il codice che hai ricevuto via email.' }
    }

    const supabase = await createSupabaseServerClient()
    const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email' })
    if (error || !data.user) {
        return { step: 'code', email, error: 'Codice errato o scaduto. Richiedine uno nuovo.' }
    }

    const { data: member } = await supabase
        .from('team_members')
        .select('id')
        .eq('user_id', data.user.id)
        .eq('active', true)
        .maybeSingle()

    if (!member) {
        await supabase.auth.signOut()
        return { step: 'email', error: 'Questo account non ha accesso all’area riservata.' }
    }

    redirect(`${AREA_PATH}/task`)
}

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
    switch (formData.get('intent')) {
        case 'verify':
            return verifyCode(formData)
        case 'change-email':
            return { step: 'email' }
        default:
            return sendCode(formData)
    }
}
