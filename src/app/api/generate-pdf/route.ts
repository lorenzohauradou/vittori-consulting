import { NextResponse } from 'next/server'
import { renderToBuffer } from '@react-pdf/renderer'
import { ReportDocument } from '@/components/pdf/ReportDocument'
import { generateActionPlan } from '@/lib/ai/action-plan'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { 
            currentRevenue, 
            monthlyClients, 
            avgTicket,
            projections,
            insights,
            summary,
            scrapedData,
            companyName = 'Azienda'
        } = body

        if (!currentRevenue || !monthlyClients || !projections) {
            return NextResponse.json(
                { error: 'Dati mancanti' },
                { status: 400 }
            )
        }

        const actionPlan = await generateActionPlan({
            currentRevenue,
            monthlyClients,
            avgTicket,
            projections,
            insights,
            summary,
            scrapedData
        })

        const reportData = {
            companyName,
            currentRevenue,
            monthlyClients,
            avgTicket,
            projections,
            insights,
            summary,
            actionPlan
        }

        const pdfStream = await renderToBuffer(
            ReportDocument({ data: reportData })
        )

        return new NextResponse(new Uint8Array(pdfStream), {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="Piano-Crescita-VittoriConsulting-${Date.now()}.pdf"`,
            },
        })

    } catch (error) {
        console.error('[PDF_GENERATION_ERROR]', error)
        return NextResponse.json(
            { error: 'Errore durante la generazione del PDF' },
            { status: 500 }
        )
    }
}

