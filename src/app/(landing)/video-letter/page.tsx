import type { Metadata } from 'next'
import { HeroVideo, Calculator, ProblemsSection, ComparisonSection, MethodSection, TestimonialsSection, CTASection, FAQSection } from '@/components/landing/video-letter'
import Partners from '@/components/ui/Partners'

export const metadata: Metadata = {
    title: 'Marketing a 360° per Imprenditori | VittoriConsulting',
    description: 'Diamo voce e visibilità alle aziende di Roma. Oltre 180 imprenditori hanno già trasformato il loro business. Prenota la tua consulenza gratuita.',
    keywords: ['marketing 360', 'consulenza marketing Roma', 'crescita business', 'metodo vittori'],
    openGraph: {
        title: 'Marketing a 360° per Imprenditori | VittoriConsulting',
        description: 'Oltre 180 imprenditori hanno già trasformato il loro business.',
        url: 'https://vittoriconsulting.it/video-letter',
        type: 'website',
    },
}

export default function VideoLetter() {
    return (
        <>
            <HeroVideo />
            <Calculator />
            <Partners />
            <ProblemsSection />
            <ComparisonSection />
            <MethodSection />
            <TestimonialsSection />
            <CTASection />
            <FAQSection />
        </>
    )
}