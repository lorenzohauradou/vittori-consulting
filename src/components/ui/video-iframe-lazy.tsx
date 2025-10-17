'use client'

import { useState, useEffect, useRef } from 'react'

interface VideoIframeLazyProps {
    src: string
    title: string
    aspectRatio?: '16/9' | '9/16'
}

export default function VideoIframeLazy({ src, title, aspectRatio = '16/9' }: VideoIframeLazyProps) {
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
                rootMargin: '50px', // Inizia a caricare 50px prima che diventi visibile
                threshold: 0.1
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const getContainerClasses = () => {
        const baseClasses = "relative mx-auto rounded-2xl overflow-hidden bg-black flex justify-center"
        const sizeClasses = aspectRatio === '16/9'
            ? 'w-full max-w-5xl h-[380px] sm:h-[450px] md:h-[520px] lg:h-[590px]'
            : 'w-[300px] sm:w-[350px] md:w-[400px] h-[500px] sm:h-[550px] md:h-[600px]'
        return `${baseClasses} ${sizeClasses}`
    }

    return (
        <div ref={containerRef} className={getContainerClasses()}>
            {shouldLoad ? (
                <iframe
                    src={src}
                    className="w-full h-full border-0 rounded-2xl"
                    allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    title={title}
                    loading="lazy"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <p className="text-white text-lg font-semibold">
                            Caricamento video...
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

