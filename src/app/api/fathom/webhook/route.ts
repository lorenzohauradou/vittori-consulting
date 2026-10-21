import { NextResponse } from 'next/server'
import { verifyFathomWebhook } from '@/lib/fathom/webhook'
import { importMeetings } from '@/lib/fathom/sync'
import type { FathomMeeting } from '@/lib/fathom/types'

const MAX_BODY_BYTES = 5 * 1024 * 1024

// Fathom chiama questo endpoint quando un meeting registrato è pronto:
// le action item diventano task nell'area riservata.
export async function POST(request: Request) {
    const secret = process.env.FATHOM_WEBHOOK_SECRET
    if (!secret) {
        console.error('FATHOM_WEBHOOK_SECRET non configurata: webhook rifiutato')
        return NextResponse.json({ error: 'Webhook non configurato' }, { status: 503 })
    }

    if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY_BYTES) {
        return NextResponse.json({ error: 'Payload troppo grande' }, { status: 413 })
    }

    // La firma si calcola sul body grezzo, prima del parsing JSON
    const rawBody = await request.text()
    if (Buffer.byteLength(rawBody) > MAX_BODY_BYTES) {
        return NextResponse.json({ error: 'Payload troppo grande' }, { status: 413 })
    }

    if (!verifyFathomWebhook(secret, request.headers, rawBody)) {
        return NextResponse.json({ error: 'Firma non valida' }, { status: 401 })
    }

    let meeting: FathomMeeting
    try {
        meeting = JSON.parse(rawBody)
    } catch {
        return NextResponse.json({ error: 'JSON non valido' }, { status: 400 })
    }
    if (!meeting || typeof meeting !== 'object') {
        return NextResponse.json({ error: 'Payload non valido' }, { status: 400 })
    }

    try {
        const created = await importMeetings([meeting])
        return NextResponse.json({ received: true, created })
    } catch (error) {
        console.error('Import Fathom fallito:', error)
        // Con un 5xx Fathom ritenta l'invio; l'import è idempotente
        return NextResponse.json({ error: 'Import fallito' }, { status: 500 })
    }
}
