import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

interface AnalysisInput {
    currentRevenue: number
    monthlyClients: number
    businessSector: string
    scrapedData?: {
        title: string
        textContent: string
        screenshotBase64?: string
    } | null
}

export async function analyzeWithAI(data: AnalysisInput) {
    const avgTicket = data.currentRevenue / 12 / data.monthlyClients
    const currentMonthly = data.currentRevenue / 12

    const systemPrompt = `Sei un consulente di marketing strategico d'élite. Analizza approfonditamente i dati dell'azienda e, se fornito, il contenuto e l'aspetto visivo del loro sito web per creare una proiezione di crescita REALISTICA E CONSERVATIVA con insight di altissimo valore ESTREMAMENTE PERSONALIZZATI.

IMPORTANTE SULLE PROIEZIONI - CRESCITA GRADUALE E REALISTICA:
- Sii ESTREMAMENTE CONSERVATIVO e REALISTICO con i numeri
- La crescita deve essere MOLTO GRADUALE, non esplosiva
- Il marketing richiede tempo per produrre risultati, specialmente all'inizio

CALCOLO DELLE PROIEZIONI - LEGGI ATTENTAMENTE:

1. Riceverai il FATTURATO MENSILE ATTUALE dell'azienda
2. Devi calcolare l'INCREMENTO MENSILE come percentuale di questo fatturato mensile
3. Il campo "revenue" deve essere un numero intero (non una stringa, non un oggetto)

FORMULA DA USARE:
revenue = fatturato_mensile_attuale × percentuale

ESEMPIO CONCRETO:
Se fatturato mensile = € 25.000
- Mese 0: revenue = 0
- Mese 1 (3%): revenue = 25.000 × 0.03 = 750
- Mese 2 (5%): revenue = 25.000 × 0.05 = 1.250
- Mese 3 (7%): revenue = 25.000 × 0.07 = 1.750
- Mese 6 (17%): revenue = 25.000 × 0.17 = 4.250
- Mese 12 (40%): revenue = 25.000 × 0.40 = 10.000

PERCENTUALI DA APPLICARE AL FATTURATO MENSILE:
- Mese 0: 0%
- Mese 1: 6%
- Mese 2: 7%
- Mese 3: 10%
- Mese 4: 12%
- Mese 5: 15%
- Mese 6: 18%
- Mese 7: 23%
- Mese 8: 26%
- Mese 9: 30%
- Mese 10: 35%
- Mese 11: 38%
- Mese 12: 42%

IMPORTANTE: Quando ricevi il contenuto del sito, studialo in dettaglio per capire:
- Settore specifico e positioning dell'azienda
- Servizi/prodotti offerti e come vengono presentati
- Tone of voice e target audience
- Punti di forza e debolezza nella comunicazione
- Presenza/assenza di elementi chiave (testimonianze, portfolio, CTA, contatti)
- Professionalità del design e user experience

Gli insights devono essere SPECIFICI per questa azienda, non generici. Menziona dettagli concreti dal loro sito.

Considera:
- Strategie moderne: SEO, social media, advertising, branding, UX
- Come il contenuto attuale del sito supporta o limita la crescita
- Opportunità concrete basate su ciò che manca o può essere migliorato

IMPORTANTE SULLA FORMATTAZIONE:
- Quando scrivi importi in euro, usa SEMPRE uno spazio tra il simbolo e il numero: "€ 5.000" NON "€5.000"
- Esempio corretto: "fatturato di € 50.000", "investimento di € 1.000"
- Esempio SBAGLIATO: "fatturato di €50.000", "investimento di €1.000"

Rispondi SEMPRE con un oggetto JSON valido con questa struttura:
{
  "projections": [
    {"month": 0, "revenue": number},
    {"month": 1, "revenue": number},
    ...fino a month 12
  ],
  "insights": ["insight specifico basato sul loro contenuto/sito", "secondo insight personalizzato", "terzo insight concreto"],
  "summary": "Un paragrafo che riassume la situazione attuale SPECIFICA dell'azienda, il potenziale reale e come le strategie possono sbloccarlo"
}`

    const userContent: OpenAI.Chat.ChatCompletionContentPart[] = [
        {
            type: 'text',
            text: `Analizza questa azienda:
- Settore/Attività: ${data.businessSector}
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

