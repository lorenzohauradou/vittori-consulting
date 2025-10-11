import { NextResponse } from 'next/server'
import { analyzeWithAI } from '@/lib/ai/openai'

export const maxDuration = 60

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { currentRevenue, monthlyClients, businessSector, scrapedData } = body

        if (!currentRevenue || !monthlyClients || !businessSector) {
            return NextResponse.json(
                { error: 'Dati finanziari e settore mancanti' },
                { status: 400 }
            )
        }

        const analysis = await analyzeWithAI({
            currentRevenue,
            monthlyClients,
            businessSector,
            scrapedData
        })

        return NextResponse.json(analysis)

    } catch (error) {
        console.error('[ANALYZE_API_ERROR]', error)
        return NextResponse.json(
            { error: 'Errore durante l\'analisi AI' },
            { status: 500 }
        )
    }
}

