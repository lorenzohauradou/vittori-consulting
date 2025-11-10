import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const { name, email, phone, company, message } = await request.json()

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Campi obbligatori mancanti' },
                { status: 400 }
            )
        }

        if (supabase) {
            const { error: dbError } = await supabase.from('footer').insert({
                name,
                email,
                phone: phone || null,
                company: company || null,
                message,
                source: 'footer_form'
            })

            if (dbError) {
                console.error('Errore salvataggio database:', dbError)
            }
        }

        const emailContent = `
            <h2>Nuova richiesta di contatto</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefono:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Azienda:</strong> ${company}</p>` : ''}
            <p><strong>Messaggio:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `

        await resend.emails.send({
            from: 'VittoriConsulting <onboarding@resend.dev>',
            to: 'valerio.vittorii@gmail.com',
            replyTo: email,
            subject: `Nuovo contatto sito web: ${name}`,
            html: emailContent,
        })

        return NextResponse.json(
            { success: true, message: 'Dati inviati con successo' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Errore invio dati:', error)
        return NextResponse.json(
            { error: 'Errore durante l\'invio dei dati' },
            { status: 500 }
        )
    }
}

