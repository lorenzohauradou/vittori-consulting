import type React from 'react'
import LandingHeader from '@/components/landing/shared/LandingHeader'
import LandingFooter from '@/components/landing/shared/LandingFooter'

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <LandingHeader />
            <main className="pt-16 lg:pt-20">
                {children}
            </main>
            <LandingFooter />
        </>
    )
}