import type React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        default: 'Area riservata',
        template: '%s | Area riservata',
    },
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false },
    },
}

export default function AreaRiservataLayout({ children }: { children: React.ReactNode }) {
    return children
}
