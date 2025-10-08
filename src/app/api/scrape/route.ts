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
                { error: 'Impossibile analizzare il sito' },
                { status: 500 }
            )
        }

        return NextResponse.json(scrapedData)

    } catch (error) {
        console.error('[SCRAPE_API_ERROR]', error)
        return NextResponse.json(
            { error: 'Errore durante l\'analisi del sito' },
            { status: 500 }
        )
    }
}

