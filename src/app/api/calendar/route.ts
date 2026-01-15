import { NextResponse } from 'next/server'
import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/calendar']

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
