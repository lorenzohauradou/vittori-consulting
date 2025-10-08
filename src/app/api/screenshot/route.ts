import { NextResponse } from 'next/server'
import { scrapeAndScreenshot } from '@/lib/ai/scraper'

export async function POST(req: Request) {
    try {
        const { url } = await req.json()

        if (!url) {
            return NextResponse.json(
                { error: 'URL mancante' },
                { status: 400 }
            )
        }

        const scrapedData = await scrapeAndScreenshot(url)

        if (!scrapedData) {
            return NextResponse.json(
                { error: 'Impossibile catturare lo screenshot' },
                { status: 500 }
            )
        }

        return NextResponse.json({
            screenshot: scrapedData.screenshotBase64
        })

    } catch (error) {
        console.error('[SCREENSHOT_API_ERROR]', error)
        return NextResponse.json(
            { error: 'Errore durante la cattura dello screenshot' },
            { status: 500 }
        )
    }
}

