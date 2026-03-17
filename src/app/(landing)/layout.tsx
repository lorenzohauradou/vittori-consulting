import type React from 'react'
import LandingLayoutClient from '@/components/landing/shared/LandingLayoutClient'
import {
    createVideoSchema,
    createBreadcrumbSchema,
    baseUrl
} from '@/lib/metadata'

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const videoSchema = createVideoSchema()
    const breadcrumbSchema = createBreadcrumbSchema([
        { name: 'Home', url: baseUrl },
        { name: 'Video Letter', url: `${baseUrl}/video-letter` },
    ])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(videoSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            <LandingLayoutClient>
                {children}
            </LandingLayoutClient>
        </>
    )
}