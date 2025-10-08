import { NextResponse } from 'next/server'
import { scrapeAndScreenshot } from '@/lib/ai/scraper'
import { analyzeWithAI } from '@/lib/ai/openai'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { currentRevenue, monthlyClients, url } = body

        if (!currentRevenue || !monthlyClients) {
            return NextResponse.json(
                { error: 'Dati mancanti' },
                { status: 400 }
            )
        }

        let scrapedData = null
        if (url) {
            scrapedData = await scrapeAndScreenshot(url)
        }

        const analysis = await analyzeWithAI({
            currentRevenue,
            monthlyClients,
            url,
            scrapedData
        })

        return NextResponse.json({
            ...analysis,
            screenshot: scrapedData?.screenshotBase64 || null
        })

    } catch (error) {
        console.error('[ANALYZE_API_ERROR]', error)
        return NextResponse.json(
            { error: 'Errore durante l\'analisi' },
            { status: 500 }
        )
    }
}

