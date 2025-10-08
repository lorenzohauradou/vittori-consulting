import type { Metadata } from 'next'
import { HeroVideo, Calculator, ProblemsSection, VeritaSection, ComparisonSection, MethodSection, TestimonialsSection, CTASection, FAQSection } from '@/components/landing/video-letter'
import Partners from '@/components/ui/Partners'
import StickyContact from '@/components/ui/sticky-contact'
import MetodoBanner from '@/components/ui/metodo-banner'
import { baseUrl, createFAQSchema } from '@/lib/metadata'

export const metadata: Metadata = {
    title: 'Marketing a 360° per Imprenditori',
    description: 'Diamo voce e visibilità alle aziende di Roma. Oltre 180 imprenditori hanno già trasformato il loro business. Prenota la tua consulenza gratuita.',
    keywords: ['marketing 360', 'consulenza marketing Roma', 'crescita business', 'metodo vittori', 'consulenza gratuita'],
    alternates: {
        canonical: `${baseUrl}/video-letter`,
    },
    openGraph: {
        title: 'Marketing a 360° per Imprenditori | VittoriConsulting',
        description: 'Oltre 180 imprenditori hanno già trasformato il loro business con il Metodo Vittori 360.',
        url: `${baseUrl}/video-letter`,
        type: 'website',
        images: [
            {
                url: '/images/logo/logo-extend.png',
                width: 1200,
                height: 630,
                alt: 'VittoriConsulting - Marketing 360',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Marketing a 360° per Imprenditori | VittoriConsulting',
        description: 'Oltre 180 imprenditori hanno già trasformato il loro business.',
        images: ['/images/logo/logo-extend.png'],
    },
}

export default function VideoLetter() {
    const faqSchema = createFAQSchema([
        {
            question: 'Quanto tempo serve per vedere risultati?',
            answer: 'In base alla nostra esperienza entro 60 giorni. Ma il nostro obiettivo è creare stabilità e crescita a lungo termine.',
        },
        {
            question: 'E se la mia azienda è piccola?',
            answer: 'Il metodo è pensato per PMI e attività locali. Adattiamo le strategie al tuo budget e al tuo mercato.',
        },
        {
            question: 'Fa al caso mio?',
            answer: 'Fa al caso tuo se sei pronto a metterti in discussione. Per clienti che vogliono farsi seguire e non solo "seguire".',
        },
        {
            question: 'Per chi non è adatto?',
            answer: 'Non fa per te se cerchi pacchetti preconfezionati, se vuoi solo un "logo" e se cerchi solo follower senza obiettivi.',
        },
        {
            question: 'Come posso fidarmi che il mio investimento sia sicuro?',
            answer: 'Tracciamo ogni dato, monitoriamo il ROI e ti consegniamo report trasparenti con KPI reali. Sai sempre dove vanno i tuoi soldi.',
        },
        {
            question: 'Come faccio a sapere cosa cambierà se mi affido a voi?',
            answer: 'Inserisci i dati nel calcolatore qui sopra e saprai in tempo reale quanto puoi realizzare con noi entro 6 mesi.',
        },
        {
            question: 'Perché scegliere voi?',
            answer: 'Perché noi non ci fermiamo ai contenuti e alle Ads, ma ti diamo una strategia completa con ideazione di contenuti virali, campagne pubblicitarie e gestione commerciale. Questo significa clienti veri, non solo like.',
        },
    ])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <StickyContact />
            <HeroVideo />
            <Calculator />
            <Partners />
            <ProblemsSection />
            <Partners showTitle={false} />
            <VeritaSection />
            <MetodoBanner />
            <ComparisonSection />
            <MetodoBanner reverse />
            <MethodSection />
            <TestimonialsSection />
            <Partners showTitle={true} />
            <CTASection />
            <FAQSection />
        </>
    )
}