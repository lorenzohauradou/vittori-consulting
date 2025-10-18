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

TIMELINE DI CRESCITA MENSILE (% rispetto al mese precedente):
- Mese 1: 0% (ZERO crescita - fase di setup, analisi e strategia)
- Mese 2: 0% (ZERO crescita - implementazione strategie e setup campagne)
- Mese 3: 0-1% (piccola crescita - test iniziali e ottimizzazione)
- Mese 4: 0-2% (inizio a vedere i PRIMISSIMI risultati)
- Mese 5: 2-4% (primi risultati tangibili)
- Mese 6: 3-5% (le strategie iniziano a funzionare)
- Mese 7: 4-6% (crescita più evidente)
- Mesi 8-12: 5-8% (strategie a regime, crescita consolidata)

VINCOLI ASSOLUTI DI CRESCITA TOTALE (rispetto al fatturato mensile di partenza):
- Mesi 1-3: ZERO crescita assoluta
- Mese 6: MAX +15% rispetto al mese 0
- Mese 12: MAX +40% rispetto al mese 0
- Esempio: se parte da € 5.000/mese → mesi 1-3 esattamente € 5.000/mese, mese 6 MAX € 5.750/mese, mese 12 MAX € 7.000/mese
- Esempio: se parte da € 50.000/mese → mesi 1-3 esattamente € 50.000/mese, mese 6 MAX € 57.500/mese, mese 12 MAX € 70.000/mese

RAGIONAMENTO IN PERCENTUALE:
- La crescita deve essere PROPORZIONALE al fatturato di partenza
- Un'azienda che fattura € 5.000/anno non può raggiungere € 20.000/anno in 12 mesi
- Un'azienda che fattura € 500.000/anno può crescere in valore assoluto di più, ma sempre in % realistica
- Considera il settore: alcuni settori hanno margini di crescita più limitati di altri

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

