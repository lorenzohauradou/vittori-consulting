'use client'

import { OptinProvider } from '@/contexts/OptinContext'
import { OptinModal } from '@/components/ui/optin-modal'
import LandingHeader from './LandingHeader'
import LandingFooter from './LandingFooter'

export default function LandingLayoutClient({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <OptinProvider>
            <OptinModal />
            <LandingHeader />
            <main className="pt-16 lg:pt-20" role="main">
                <article itemScope itemType="https://schema.org/WebPage">
                    {children}
                </article>
            </main>
            <LandingFooter />
        </OptinProvider>
    )
}

