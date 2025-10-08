import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

interface AnalysisInput {
    currentRevenue: number
    monthlyClients: number
    url?: string
    scrapedData?: {
        title: string
        textContent: string
        screenshotBase64?: string
    } | null
}

export async function analyzeWithAI(data: AnalysisInput) {
    const avgTicket = data.currentRevenue / 12 / data.monthlyClients
    const currentMonthly = data.currentRevenue / 12

    const systemPrompt = `Sei un consulente di marketing strategico d'élite. Analizza i dati dell'azienda e, se fornito, l'aspetto visivo del loro sito web per creare una proiezione di crescita realistica e insight di altissimo valore.

Considera:
- Strategie moderne: SEO, social media, advertising, branding, UX
- Se vedi il sito, analizza design, professionalità, user experience, call-to-action
- Sii realistico ma ottimista, basandoti su casi reali

Rispondi SEMPRE con un oggetto JSON valido con questa struttura:
{
  "projections": [
    {"month": 0, "revenue": number},
    {"month": 1, "revenue": number},
    ...fino a month 12
  ],
  "insights": ["insight basato sui dati e/o sul sito", "secondo insight", "terzo insight"],
  "summary": "Un paragrafo che riassume la situazione attuale, il potenziale e come le strategie possono sbloccarlo"
}`

    const userContent: OpenAI.Chat.ChatCompletionContentPart[] = [
        {
            type: 'text',
            text: `Analizza questa azienda:
- Fatturato annuale: €${data.currentRevenue.toLocaleString('it-IT')}
- Fatturato mensile attuale: €${currentMonthly.toLocaleString('it-IT')}
- Clienti al mese: ${data.monthlyClients}
- Ticket medio calcolato: €${avgTicket.toLocaleString('it-IT')}
${data.scrapedData ? `\n- Titolo sito: ${data.scrapedData.title}\n- Contenuto sito: ${data.scrapedData.textContent}` : ''}`
        }
    ]

    if (data.scrapedData?.screenshotBase64) {
        userContent.push({
            type: 'image_url',
            image_url: {
                url: `data:image/png;base64,${data.scrapedData.screenshotBase64}`
            }
        })
    }

    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userContent }
        ],
        response_format: { type: 'json_object' },
        temperature: 0.7,
    })

    const result = JSON.parse(response.choices[0].message.content || '{}')

    return {
        avgTicket,
        currentMonthly,
        ...result
    }
}

