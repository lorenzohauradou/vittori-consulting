'use client'

import React, { useEffect } from 'react'

interface CalendlyEmbedProps {
    url?: string
    minWidth?: string
    height?: string
}

export default function CalendlyEmbed({
    url = 'https://calendly.com/valerio-vittori/30min?hide_gdpr_banner=1',
    minWidth = '320px',
    height = '1000px'
}: CalendlyEmbedProps) {
    useEffect(() => {
        const link = document.createElement('link')
        link.href = 'https://assets.calendly.com/assets/external/widget.css'
        link.rel = 'stylesheet'
        document.head.appendChild(link)
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            if (document.head.contains(link)) {
                document.head.removeChild(link)
            }
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <div
            className="calendly-inline-widget"
            data-url={url}
            style={{ minWidth, height }}
        />
    )
}

