import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const SCOPES = ['https://www.googleapis.com/auth/calendar']

function formatDateItalian(dateStr: string): string {
    const date = new Date(dateStr)
    const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']
    const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

function getOwnerEmailTemplate(name: string, email: string, phone: string, notes: string, date: string, time: string): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #2e54a1 0%, #3d6bc9 100%); border-radius: 16px 16px 0 0; padding: 30px; text-align: center;">
            <img src="https://vittoriconsulting.it/images/logo/logo-circle.webp" alt="Vittori Consulting" style="width: 60px; height: 60px; border-radius: 50%; border: 3px solid white;">
            <h1 style="color: white; margin: 15px 0 5px; font-size: 24px;">Nuova Prenotazione</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 0; font-size: 14px;">Call Strategica</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #2e54a1;">
                <h2 style="color: #2e54a1; margin: 0 0 15px; font-size: 18px;">Dettagli Appuntamento</h2>
                <p style="margin: 8px 0; color: #374151;"><strong>Data:</strong> ${formatDateItalian(date)}</p>
                <p style="margin: 8px 0; color: #374151;"><strong>Orario:</strong> ${time}</p>
            </div>
            
            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; border-left: 4px solid #10b981;">
                <h2 style="color: #10b981; margin: 0 0 15px; font-size: 18px;">Dati Cliente</h2>
                <p style="margin: 8px 0; color: #374151;"><strong>Nome:</strong> ${name}</p>
                <p style="margin: 8px 0; color: #374151;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2e54a1;">${email}</a></p>
                ${phone ? `<p style="margin: 8px 0; color: #374151;"><strong>Telefono:</strong> <a href="tel:${phone}" style="color: #2e54a1;">${phone}</a></p>` : ''}
                ${notes ? `<p style="margin: 8px 0; color: #374151;"><strong>Note:</strong> ${notes}</p>` : ''}
            </div>
            
            <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 12px; margin: 0;">Prenotazione effettuata dal sito web</p>
            </div>
        </div>
    </div>
</body>
</html>`
}

function getClientEmailTemplate(name: string, date: string, time: string): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #2e54a1 0%, #3d6bc9 100%); border-radius: 16px 16px 0 0; padding: 40px 30px; text-align: center;">
            <img src="https://vittoriconsulting.it/images/logo/logo-circle.webp" alt="Vittori Consulting" style="width: 80px; height: 80px; border-radius: 50%; border: 4px solid white; margin-bottom: 15px;">
            <h1 style="color: white; margin: 0 0 10px; font-size: 28px;">Prenotazione Confermata!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 16px;">La tua Call Strategica è stata prenotata</p>
        </div>
        
        <div style="background: white; padding: 35px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">
                Ciao <strong>${name}</strong>,<br><br>
                Grazie per aver prenotato la tua Call Strategica gratuita con Vittori Consulting!
            </p>
            
            <div style="background: linear-gradient(135deg, #2e54a1 0%, #3d6bc9 100%); border-radius: 16px; padding: 25px; text-align: center; margin: 25px 0;">
                <p style="color: rgba(255,255,255,0.8); margin: 0 0 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Appuntamento</p>
                <p style="color: white; margin: 0 0 10px; font-size: 22px; font-weight: bold;">${formatDateItalian(date)}</p>
                <div style="display: inline-block; background: white; color: #2e54a1; padding: 8px 20px; border-radius: 20px; font-weight: bold; font-size: 18px;">
                    Ore ${time}
                </div>
            </div>
            
            <div style="background: #fef3c7; border-radius: 12px; padding: 20px; margin: 25px 0; border-left: 4px solid #f59e0b;">
                <p style="color: #92400e; margin: 0; font-size: 14px; line-height: 1.6;">
                    <strong>Importante:</strong> Ti contatteremo via email o telefono poco prima della call per condividere il link della videochiamata.
                </p>
            </div>
            
            <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 25px 0;">
                Durante la call analizzeremo insieme la tua situazione attuale e ti mostreremo come possiamo aiutarti a raggiungere i tuoi obiettivi di business.
            </p>
            
            <div style="text-align: center; margin: 30px 0 20px; padding-top: 25px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px;">Ci vediamo presto!</p>
                <img src="https://vittoriconsulting.it/images/logo/firma.png" alt="Firma Valerio Vittori" style="max-width: 150px; opacity: 0.85;">
                <p style="color: #374151; font-size: 14px; font-weight: 600; margin: 10px 0 0;">Valerio Vittori</p>
                <p style="color: #6b7280; font-size: 13px; margin: 5px 0 0;">Founder, Vittori Consulting</p>
            </div>
        </div>
        
        <div style="text-align: center; padding: 20px;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0 0 10px;">
                Vittori Consulting | Marketing & Business Strategy
            </p>
            <a href="https://vittoriconsulting.it" style="color: #2e54a1; font-size: 12px; text-decoration: none;">vittoriconsulting.it</a>
        </div>
    </div>
</body>
</html>`
}

function getGoogleAuth() {
    return new google.auth.JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        scopes: SCOPES,
    })
}

// GET - Fetch available time slots
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const dateStr = searchParams.get('date')

        if (!dateStr) {
            return NextResponse.json({ error: 'Data richiesta' }, { status: 400 })
        }

        const auth = getGoogleAuth()
        const calendar = google.calendar({ version: 'v3', auth })

        const calendarId = process.env.GOOGLE_CALENDAR_ID

        if (!calendarId) {
            return NextResponse.json({ error: 'Calendar ID non configurato' }, { status: 500 })
        }

        // Get the start and end of the selected day
        const startOfDay = new Date(dateStr)
        startOfDay.setHours(0, 0, 0, 0)
        const endOfDay = new Date(dateStr)
        endOfDay.setHours(23, 59, 59, 999)

        // Fetch busy times from Google Calendar
        const freeBusy = await calendar.freebusy.query({
            requestBody: {
                timeMin: startOfDay.toISOString(),
                timeMax: endOfDay.toISOString(),
                items: [{ id: calendarId }],
            },
        })

        const busySlots = freeBusy.data.calendars?.[calendarId]?.busy || []

        // Generate available 30-minute slots (9:00 - 18:00)
        const availableSlots: string[] = []
        const workingHoursStart = 9
        const workingHoursEnd = 18
        const slotDuration = 30 // minutes

        for (let hour = workingHoursStart; hour < workingHoursEnd; hour++) {
            for (let minute = 0; minute < 60; minute += slotDuration) {
                const slotStart = new Date(dateStr)
                slotStart.setHours(hour, minute, 0, 0)
                const slotEnd = new Date(slotStart)
                slotEnd.setMinutes(slotStart.getMinutes() + slotDuration)

                // Check if slot is not in the past
                if (slotStart <= new Date()) continue

                // Check if slot overlaps with any busy time
                const isAvailable = !busySlots.some((busy) => {
                    const busyStart = new Date(busy.start!)
                    const busyEnd = new Date(busy.end!)
                    return slotStart < busyEnd && slotEnd > busyStart
                })

                if (isAvailable) {
                    availableSlots.push(
                        `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
                    )
                }
            }
        }

        return NextResponse.json({ slots: availableSlots })
    } catch (error) {
        console.error('Errore fetch calendario:', error)
        return NextResponse.json(
            { error: 'Errore nel recupero degli slot disponibili' },
            { status: 500 }
        )
    }
}

// POST - Create a new calendar event (booking)
export async function POST(request: Request) {
    try {
        const { date, time, name, email, phone, notes } = await request.json()

        if (!date || !time || !name || !email) {
            return NextResponse.json(
                { error: 'Campi obbligatori mancanti' },
                { status: 400 }
            )
        }

        const auth = getGoogleAuth()
        const calendar = google.calendar({ version: 'v3', auth })

        const calendarId = process.env.GOOGLE_CALENDAR_ID

        if (!calendarId) {
            return NextResponse.json({ error: 'Calendar ID non configurato' }, { status: 500 })
        }

        // Create event start and end times
        const [hours, minutes] = time.split(':').map(Number)
        const startTime = new Date(date)
        startTime.setHours(hours, minutes, 0, 0)
        const endTime = new Date(startTime)
        endTime.setMinutes(startTime.getMinutes() + 30) // 30 min meeting

        const event = {
            summary: `Call Strategica - ${name}`,
            description: `
Nome: ${name}
Email: ${email}
${phone ? `Telefono: ${phone}` : ''}
${notes ? `Note: ${notes}` : ''}

Prenotazione da Vittori Consulting Website
            `.trim(),
            start: {
                dateTime: startTime.toISOString(),
                timeZone: 'Europe/Rome',
            },
            end: {
                dateTime: endTime.toISOString(),
                timeZone: 'Europe/Rome',
            },
            reminders: {
                useDefault: true,
            },
        }

        const createdEvent = await calendar.events.insert({
            calendarId,
            requestBody: event,
        })

        // Send email to owner
        await resend.emails.send({
            from: 'Vittori Consulting <valerio@vittoriconsulting.it>',
            to: 'valerio.vittorii@gmail.com',
            subject: `Nuova Prenotazione: ${name} - ${formatDateItalian(date)} alle ${time}`,
            html: getOwnerEmailTemplate(name, email, phone || '', notes || '', date, time),
        })

        // Send confirmation email to client
        await resend.emails.send({
            from: 'Vittori Consulting <valerio@vittoriconsulting.it>',
            to: email,
            replyTo: 'valerio.vittorii@gmail.com',
            subject: `Prenotazione Confermata - Call Strategica ${formatDateItalian(date)}`,
            html: getClientEmailTemplate(name, date, time),
        })

        return NextResponse.json({
            success: true,
            eventId: createdEvent.data.id,
            message: 'Appuntamento prenotato con successo',
        })
    } catch (error) {
        console.error('Errore creazione evento:', error)
        return NextResponse.json(
            { error: 'Errore nella prenotazione dell\'appuntamento' },
            { status: 500 }
        )
    }
}
