import type { Metadata } from 'next'
import { HeroVideo, Calculator, ProblemsSection, VeritaSection, ComparisonSection, MethodSection, TestimonialsSection, CTASection, FAQSection } from '@/components/landing/video-letter'
import Partners from '@/components/ui/Partners'
import StickyContact from '@/components/ui/sticky-contact'
import MetodoBanner from '@/components/ui/metodo-banner'
import { baseUrl } from '@/lib/metadata'

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
    return (
        <>
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