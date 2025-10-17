import type React from 'react'
import LandingLayoutClient from '@/components/landing/shared/LandingLayoutClient'
import {
    createLocalBusinessSchema,
    createVideoSchema,
    createAggregateRatingSchema,
    createBreadcrumbSchema,
    baseUrl
} from '@/lib/metadata'

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const localBusinessSchema = createLocalBusinessSchema()
    const videoSchema = createVideoSchema()
    const ratingSchema = createAggregateRatingSchema()
    const breadcrumbSchema = createBreadcrumbSchema([
        { name: 'Home', url: baseUrl },
        { name: 'Video Letter', url: `${baseUrl}/video-letter` },
    ])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(videoSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(ratingSchema),
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