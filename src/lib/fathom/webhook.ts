import { createHmac, timingSafeEqual } from 'crypto'

const TOLERANCE_SECONDS = 5 * 60

// Verifica la firma dei webhook Fathom (schema "Standard Webhooks"):
// HMAC-SHA256 di `${id}.${timestamp}.${rawBody}` con il secret whsec_…
// https://developers.fathom.ai/webhooks#verifying-webhooks
export function verifyFathomWebhook(secret: string, headers: Headers, rawBody: string, now = Date.now()) {
    const id = headers.get('webhook-id')
    const timestamp = headers.get('webhook-timestamp')
    const signatureHeader = headers.get('webhook-signature')
    if (!id || !timestamp || !signatureHeader) return false

    // Anti-replay: rifiuta richieste vecchie o "dal futuro"
    const seconds = Number(timestamp)
    if (!Number.isInteger(seconds) || Math.abs(now / 1000 - seconds) > TOLERANCE_SECONDS) return false

    const key = Buffer.from(secret.startsWith('whsec_') ? secret.slice('whsec_'.length) : secret, 'base64')
    const expected = createHmac('sha256', key).update(`${id}.${timestamp}.${rawBody}`).digest()

    // L'header può contenere più firme separate da spazio, ognuna "v1,<base64>"
    return signatureHeader.split(' ').some((entry) => {
        const [version, signature] = entry.split(',')
        if (version !== 'v1' || !signature) return false
        const provided = Buffer.from(signature, 'base64')
        return provided.length === expected.length && timingSafeEqual(provided, expected)
    })
}
