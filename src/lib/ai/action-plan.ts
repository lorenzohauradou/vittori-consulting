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

TIMELINE REALISTICA - IMPORTANTE:
- MESE 1-2: Focus su ANALISI, AUDIT e SETUP. Nessun risultato di fatturato atteso, solo preparazione
- MESE 3-4: Inizio IMPLEMENTAZIONE strategie. Primi piccoli risultati visibili
- MESE 5-6: Strategie A REGIME. Crescita più evidente
- MESE 7-12: OTTIMIZZAZIONE e SCALING. Crescita stabile e consolidata

REQUISITI PER OGNI AZIONE:
- Descrizione dettagliata (3-5 frasi)
- Timeline specifica (es: "Settimana 1-2", "Mese 1-3")
- Risultati attesi misurabili E REALISTICI per la fase
- Risorse necessarie
- Basata SOLO sulle strategie del Metodo Vittori 360

STRUTTURA RICHIESTA:
Ogni azione deve seguire questo formato:
"[FASE X - SETTIMANA/MESE Y] Titolo Azione: Descrizione completa dell'azione, includendo cosa fare esattamente, perché è importante per questo specifico cliente, quali metriche monitorare, e risultati attesi. [Risorse: tools/persone necessarie]"

ESEMPIO:
"[FASE 1 - SETTIMANA 1-2] Audit SEO Completo: Analisi approfondita del sito web utilizzando tools come SEMrush e Google Search Console. Identificare le keyword ad alto volume per il settore, analizzare i competitor diretti, verificare la struttura tecnica del sito (velocità, mobile-first, sitemap). Questa fase è fondamentale per creare le basi solide della strategia. Risultati attesi: lista prioritizzata di 20-30 keyword target, report tecnico con 10-15 criticità da risolvere. [Risorse: SEO specialist, budget tools € 100/mese]"

IMPORTANTE SULLA FORMATTAZIONE:
- Quando scrivi importi in euro, usa SEMPRE uno spazio tra il simbolo e il numero: "€ 5.000" NON "€5.000"
- Esempio corretto: "budget di € 1.000/mese", "investimento € 500"
- Esempio SBAGLIATO: "budget di €1.000/mese", "investimento €500"

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
            '[FASE 1 - SETTIMANA 1-2] Audit Completo del Business: Analisi approfondita del sito web, analisi competitor, audit SEO tecnico e on-page. Identificare criticità tecniche, gap di contenuto e opportunità di posizionamento. Questa fase è cruciale per costruire fondamenta solide. Risultati attesi: documento dettagliato con 15-20 raccomandazioni prioritizzate e roadmap strategica. [Risorse: SEO specialist, tools analisi]',
            '[FASE 1 - SETTIMANA 3-4] Setup Tracking e Analytics: Implementazione completa di Google Analytics 4, Google Tag Manager, Meta Pixel e conversion tracking. Definire eventi chiave e obiettivi di conversione. Fondamentale per misurare i risultati futuri. Risultati attesi: dashboard personalizzata con tutti i KPI business configurati. [Risorse: Developer, analytics specialist]',
            '[FASE 1 - MESE 2] Ottimizzazione Tecnica SEO: Correzione criticità tecniche identificate, ottimizzazione titoli/meta description, miglioramento velocità sito, implementazione schema markup. Creazione piano editoriale per content marketing. Risultati attesi: +40% velocità sito, 20 articoli pianificati, fondamenta SEO solide. [Risorse: SEO specialist, copywriter]',
            '[FASE 2 - MESE 2-3] Branding e Posizionamento: Definizione USP chiara, ottimizzazione brand identity, creazione linea grafica coerente per tutti i materiali. Sviluppo storytelling aziendale e tone of voice distintivo. Risultati attesi: brand guidelines complete, materiali di comunicazione brandizzati pronti. [Risorse: Brand strategist, designer]',
            '[FASE 2 - MESE 3] Setup Campagne Advertising: Creazione account pubblicitari Meta e Google Ads, struttura campagne per awareness e conversione, creazione creative set (5-10 varianti), setup audience targeting avanzato. Risultati attesi: 3-4 campagne strutturate e pronte al lancio con test plan. [Risorse: Media buyer, designer]',
            '[FASE 3 - MESE 4] Lancio Campagne Paid - Fase Test: Attivazione graduale campagne Meta Ads (Facebook/Instagram) e Google Ads (Search/Display). Budget test iniziale conservativo € 800-1.500/mese. Testing A/B continuo su creative, copy, audience. Risultati attesi: primi dati per ottimizzazione, ROAS minimo 1.5:1. [Risorse: Media buyer, budget ads]',
            '[FASE 3 - MESE 5] Content Marketing Foundation: Pubblicazione primi articoli blog SEO-optimized, creazione contenuti social organici (15-20 post/mese), setup newsletter. Costruzione presenza digitale coerente. Risultati attesi: +20% traffico organico, 200-300 nuovi follower, engagement baseline. [Risorse: Copywriter, social media manager]',
            '[FASE 4 - MESE 6] Funnel Optimization: Analisi percorso utente con heatmaps, ottimizzazione landing pages chiave, A/B testing su CTA e form, implementazione lead magnet. Risultati attesi: +20% conversion rate, riduzione -15% bounce rate. [Risorse: CRO specialist, copywriter]',
            '[FASE 4 - MESE 7] Email Marketing Automation: Setup piattaforma email marketing professionale, creazione sequenze automatiche (welcome, nurturing, recovery cart), segmentazione database clienti. Risultati attesi: 3 funnel email attivi, 25% open rate, 3% CTR. [Risorse: Email marketer, copywriter]',
            '[FASE 5 - MESE 8] Scale Campagne Advertising: Aumento graduale budget ads (+30-50%) su campagne performanti, implementazione remarketing avanzato, testing nuovi formati e audience lookalike. Risultati attesi: ROAS 2.5:1+, mantenimento costi per conversione. [Risorse: Media buyer, budget incrementale]',
            '[FASE 5 - MESE 9-10] Social Media Expansion: Espansione presenza su canali secondari (LinkedIn/TikTok in base al settore), test collaborazioni con micro-influencer (2-3), implementazione UGC strategy. Risultati attesi: +600 follower totali, 3 collaborazioni attive. [Risorse: Social media manager, budget influencer]',
            '[FASE 6 - MESE 10-11] Partnership Strategiche e PR: Identificazione e contatto partner strategici di settore, guest posting su blog/magazine settoriali (5-8 articoli), PR digitali, partecipazione eventi online/offline. Risultati attesi: 3-4 partnership attive, 8+ menzioni brand qualificate. [Risorse: PR specialist, budget eventi]',
            '[FASE 6 - MESE 11] Ottimizzazione Avanzata: Analisi completa dati 11 mesi, ottimizzazione budget allocation tra canali, automazione processi ripetitivi, scaling verticale campagne top performer. Risultati attesi: ROI ottimizzato, efficienza operativa +30%. [Risorse: Team completo, marketing analyst]',
            '[FASE 7 - MESE 12] Report Annuale e Pianificazione: Report completo anno 1 con ROI dettagliato per ogni canale, analisi cosa ha funzionato/cosa no, definizione strategia anno 2 basata su dati reali. Risultati attesi: piano strategico dettagliato 12 mesi successivi con budget allocation. [Risorse: Marketing strategist]'
        ]
    }
}

