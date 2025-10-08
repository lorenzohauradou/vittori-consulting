import OpenAI from 'openai'
import fs from 'fs'
import path from 'path'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

interface ActionPlanInput {
    currentRevenue: number
    monthlyClients: number
    avgTicket: number
    projections: Array<{ month: number; revenue: number }>
    insights: string[]
    summary: string
    scrapedData?: {
        title: string
        textContent: string
    } | null
}

export async function generateActionPlan(data: ActionPlanInput): Promise<string[]> {
    try {
        const knowledgeBasePath = path.join(process.cwd(), 'src', 'lib', 'ai', 'knowledge_base.md')
        const knowledgeBase = fs.readFileSync(knowledgeBasePath, 'utf-8')

        const systemPrompt = `Sei un consulente strategico senior di VittoriConsulting. Crea un piano d'azione COMPLETO e DETTAGLIATO di 10-15 azioni concrete per far crescere l'azienda del cliente.

KNOWLEDGE BASE:
${knowledgeBase}

REQUISITI PER OGNI AZIONE:
- Descrizione dettagliata (3-5 frasi)
- Timeline specifica (es: "Settimana 1-2", "Mese 1-3")
- Risultati attesi misurabili
- Risorse necessarie
- Basata SOLO sulle strategie del Metodo Vittori 360

STRUTTURA RICHIESTA:
Ogni azione deve seguire questo formato:
"[FASE X - SETTIMANA/MESE Y] Titolo Azione: Descrizione completa dell'azione, includendo cosa fare esattamente, perché è importante per questo specifico cliente, quali metriche monitorare, e risultati attesi. [Risorse: tools/persone necessarie]"

ESEMPIO:
"[FASE 1 - SETTIMANA 1-2] Audit SEO Completo: Analisi approfondita del sito web utilizzando tools come SEMrush e Google Search Console. Identificare le keyword ad alto volume per il settore, analizzare i competitor diretti, verificare la struttura tecnica del sito (velocità, mobile-first, sitemap). Risultati attesi: lista prioritizzata di 20-30 keyword target, report tecnico con 10-15 criticità da risolvere. [Risorse: SEO specialist, budget tools €100/mese]"

Rispondi con un oggetto JSON:
{
  "actionPlan": ["azione 1 completa...", "azione 2 completa...", ...]
}`

        const userPrompt = `Crea un piano d'azione per questa azienda:

DATI AZIENDA:
- Fatturato annuale: €${data.currentRevenue.toLocaleString('it-IT')}
- Clienti al mese: ${data.monthlyClients}
- Ticket medio: €${data.avgTicket.toLocaleString('it-IT')}
- Proiezione 6 mesi: €${data.projections[6]?.revenue.toLocaleString('it-IT')}
- Proiezione 12 mesi: €${data.projections[12]?.revenue.toLocaleString('it-IT')}

${data.scrapedData ? `SITO WEB:
- Titolo: ${data.scrapedData.title}
- Contenuto: ${data.scrapedData.textContent.substring(0, 1000)}
` : ''}

ANALISI ATTUALE:
${data.summary}

INSIGHT:
${data.insights.join('\n')}

Crea un piano d'azione personalizzato usando il Metodo Vittori 360 e le strategie della knowledge base.`

        const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ],
            response_format: { type: 'json_object' },
            temperature: 0.7,
        })

        const result = JSON.parse(response.choices[0].message.content || '{"actionPlan":[]}')
        
        // Supporta sia array diretto che oggetto con proprietà actionPlan
        return Array.isArray(result) ? result : (result.actionPlan || result.steps || [])

    } catch (error) {
        console.error('Action plan generation error:', error)
        return [
            '[FASE 1 - SETTIMANA 1-2] Audit Completo: Analisi approfondita del sito web, analisi competitor, audit SEO tecnico e on-page. Identificare criticità tecniche, gap di contenuto e opportunità di posizionamento. Risultati attesi: documento con 15-20 raccomandazioni prioritizzate. [Risorse: SEO specialist, tools analisi]',
            '[FASE 1 - SETTIMANA 3-4] Setup Tracking e Analytics: Implementazione completa di Google Analytics 4, Google Tag Manager, Meta Pixel e conversion tracking. Definire eventi chiave e obiettivi di conversione. Risultati attesi: dashboard personalizzata con KPI business. [Risorse: Developer, analytics specialist]',
            '[FASE 2 - MESE 2] Ottimizzazione SEO: Correzione criticità tecniche, ottimizzazione titoli/meta, miglioramento velocità sito, implementazione schema markup. Creazione piano editoriale per content marketing. Risultati attesi: +30% velocità sito, 20 articoli pianificati. [Risorse: SEO specialist, copywriter]',
            '[FASE 2 - MESE 2-3] Branding e Posizionamento: Definizione USP chiara, ottimizzazione brand identity, creazione linea grafica coerente per tutti i materiali. Sviluppo storytelling aziendale e tone of voice. Risultati attesi: brand guidelines complete, materiali brandizzati. [Risorse: Brand strategist, designer]',
            '[FASE 3 - MESE 3-4] Setup Advertising: Creazione account pubblicitari Meta e Google Ads, struttura campagne per awareness e conversione, creazione creative set (5-10 varianti), setup audience targeting. Risultati attesi: 3 campagne pronte al lancio. [Risorse: Media buyer, designer]',
            '[FASE 3 - MESE 4-5] Lancio Campagne Paid: Attivazione campagne Meta Ads (Facebook/Instagram) e Google Ads (Search/Display). Budget test iniziale €1000-2000/mese. Testing A/B continuo su creative, copy, audience. Risultati attesi: ROAS 2:1 minimo primo mese. [Risorse: Media buyer, budget ads]',
            '[FASE 4 - MESE 5-6] Content Marketing: Pubblicazione articoli blog SEO-optimized, creazione contenuti social (20-30 post/mese), newsletter mensile, video content per social. Risultati attesi: +50% traffico organico, 500+ nuovi follower. [Risorse: Copywriter, video maker]',
            '[FASE 4 - MESE 6-7] Funnel Optimization: Analisi percorso utente, ottimizzazione landing pages, A/B testing CTA e form, implementazione lead magnet. Riduzione bounce rate e aumento conversion rate. Risultati attesi: +30% conversion rate. [Risorse: CRO specialist, copywriter]',
            '[FASE 5 - MESE 7-8] Email Marketing Automation: Setup piattaforma email marketing, creazione sequenze automatiche (welcome, nurturing, recovery), segmentazione database. Risultati attesi: 3 funnel email attivi, 25% open rate. [Risorse: Email marketer, copywriter]',
            '[FASE 5 - MESE 8-9] Social Media Expansion: Espansione presenza su LinkedIn/TikTok, collaborazioni con micro-influencer, UGC (User Generated Content) strategy. Risultati attesi: +1000 follower totali, 5 collaborazioni. [Risorse: Social media manager]',
            '[FASE 6 - MESE 9-10] Remarketing Strategy: Implementazione campagne remarketing avanzate su Meta e Google, dynamic ads per prodotti/servizi visualizzati, lookalike audiences. Risultati attesi: ROAS 4:1 su remarketing. [Risorse: Media buyer]',
            '[FASE 6 - MESE 10-11] Partnership e PR: Identificazione partner strategici, guest posting su blog settoriali, PR digitali, partecipazione eventi settore. Risultati attesi: 5 partnership attive, 10 menzioni brand. [Risorse: PR specialist]',
            '[FASE 7 - MESE 11-12] Scale e Ottimizzazione: Aumento budget ads del 50-100%, scaling campagne performanti, automazione processi ripetitivi, ottimizzazione continua basata su dati. Risultati attesi: mantenimento ROAS, +100% traffico. [Risorse: Team completo]',
            '[FASE 7 - MESE 12] Reporting e Strategia Futura: Report completo anno 1, analisi ROI dettagliata per canale, definizione strategia anno 2 basata su learnings. Risultati attesi: piano strategico 12 mesi successivi. [Risorse: Marketing strategist]'
        ]
    }
}

