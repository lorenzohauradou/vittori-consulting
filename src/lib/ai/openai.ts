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

IMPORTANTE SULLA STRUTTURA DEI DATI DI RISPOSTA:
- Il campo "revenue" nelle proiezioni deve contenere SOLO l'INCREMENTO MENSILE di fatturato generato dal servizio di marketing
- NON includere il fatturato base dell'azienda
- Il mese 0 deve essere SEMPRE 0 (punto di partenza)
- La crescita deve partire bassa e aumentare gradualmente in modo esponenziale
- Calcola l'incremento come PERCENTUALE del FATTURATO MENSILE BASE (fatturato annuale diviso 12)

TIMELINE DI CRESCITA (percentuale del FATTURATO MENSILE BASE):
- Mese 0: 0% → revenue: 0
- Mese 1: 2-3% del fatturato mensile → crescita iniziale bassa
- Mese 2: 4-5% del fatturato mensile → setup completato
- Mese 3: 6-8% del fatturato mensile → prime strategie attive
- Mese 4: 9-11% del fatturato mensile → momentum positivo
- Mese 5: 12-14% del fatturato mensile → crescita consolidata
- Mese 6: 15-18% del fatturato mensile → strategie funzionano bene
- Mese 7: 19-22% del fatturato mensile → ottimizzazione continua
- Mese 8: 23-26% del fatturato mensile → crescita sostenuta
- Mese 9: 27-30% del fatturato mensile → espansione
- Mese 10: 31-33% del fatturato mensile → massima efficacia
- Mese 11: 34-36% del fatturato mensile → crescita matura
- Mese 12: 37-40% del fatturato mensile → risultato annuale ottimale

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

