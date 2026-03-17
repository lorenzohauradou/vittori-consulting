import { Metadata } from 'next'
import {
    MvpNavbar,
    MvpHero,
    MvpShowcase,
    MvpFeatures,
    MvpProcess,
    // MvpPricing,
    MvpN8N,
    MvpProjects,
    MvpFAQ,
    MvpCTA,
    MvpFooter
} from '@/components/landing/mvp-agency'
import StickyContact from '@/components/ui/sticky-contact'

const baseUrl = 'https://vittoriconsulting.it'

export const metadata: Metadata = {
    title: 'MVP Agency | Sviluppo web-app e Micro-SaaS in 4-6 Settimane',
    description: 'Trasformiamo la tua idea in un prodotto digitale funzionante. Sviluppo MVP, Micro-SaaS e app con Next.js, React, Python, Supabase. Lancia in settimane, non mesi.',
    keywords: [
        'sviluppo MVP',
        'sviluppo SaaS',
        'micro-SaaS',
        'sviluppo app',
        'agenzia sviluppo software',
        'startup MVP',
        'Next.js development',
        'React development',
        'sviluppo web Italia',
        'creare app',
        'come fare un app',
        'lanciare startup',
        'prodotto digitale',
    ],
    authors: [{ name: 'Vittori Consulting' }],
    creator: 'Vittori Consulting',
    publisher: 'Vittori Consulting',
    alternates: {
        canonical: `${baseUrl}/mvp-agency`,
    },
    openGraph: {
        title: 'MVP Agency | Sviluppo web-app e Micro-SaaS in 4-6 Settimane',
        description: 'Trasformiamo la tua idea in un prodotto digitale funzionante. Lancia in settimane, non mesi.',
        url: `${baseUrl}/mvp-agency`,
        type: 'website',
        siteName: 'VittoriConsulting',
        locale: 'it_IT',
        images: [
            {
                url: 'https://vittoriconsulting.b-cdn.net/logos/logo-extend.webp',
                width: 1200,
                height: 630,
                alt: 'MVP Agency - VittoriConsulting',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MVP Agency | Sviluppo web-app e Micro-SaaS in 4-6 Settimane',
        description: 'Trasformiamo la tua idea in un prodotto digitale funzionante. Lancia in settimane, non mesi.',
        images: ['https://vittoriconsulting.b-cdn.net/logos/logo-extend.webp'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
}

export default function MvpAgencyPage() {
    return (
        <>
            <MvpNavbar />
            <MvpHero />
            <StickyContact whatsappOnly />
            <MvpShowcase />
            <MvpProcess />
            <MvpProjects />
            <MvpN8N />
            <MvpFeatures />
            {/* <MvpPricing />*/}
            <MvpFAQ />
            <MvpCTA />
            <MvpFooter />
        </>
    )
}
