import { Metadata } from 'next'
import {
    MvpNavbar,
    MvpHero,
    MvpShowcase,
    MvpFeatures,
    MvpProcess,
    // MvpPricing,
    MvpN8N,
    // MvpProjects,
    MvpFAQ,
    MvpCTA,
    MvpFooter
} from '@/components/landing/mvp-agency'
import StickyContact from '@/components/ui/sticky-contact'

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
            <MvpN8N />
            <MvpFeatures />
            {/* <MvpPricing />
            <MvpProjects /> */}
            <MvpFAQ />
            <MvpCTA />
            <MvpFooter />
        </>
    )
}
