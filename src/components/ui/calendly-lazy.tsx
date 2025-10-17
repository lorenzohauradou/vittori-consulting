'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect, useRef } from 'react'

// Carica Calendly solo quando necessario
const CalendlyEmbed = dynamic(() => import('./calendly-embed'), {
    loading: () => (
        <div className="w-full h-[1000px] flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#2e54a1] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gray-600">Caricamento calendario...</p>
            </div>
        </div>
    ),
    ssr: false,
})

export default function CalendlyLazy() {
    const [shouldLoad, setShouldLoad] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true)
                        observer.disconnect()
                    }
                })
            },
            {
                rootMargin: '100px', // Inizia a caricare 100px prima che diventi visibile
                threshold: 0.1
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    if (!shouldLoad) {
        return (
            <div
                ref={containerRef}
                className="w-full h-[1000px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200"
            >
                <div className="text-center p-8">
                    <div className="w-20 h-20 bg-[#2e54a1] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Preparazione calendario...
                    </h3>
                    <p className="text-gray-600">
                        Il calendario sta per essere caricato
                    </p>
                </div>
            </div>
        )
    }

    return <CalendlyEmbed />
}

