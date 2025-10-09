'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { GradientButton } from '@/components/ui/gradient-button'
import Link from 'next/link'

export default function LandingHeader() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < 10) {
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const scrollToCTA = () => {
        const heroSection = document.querySelector('section')
        heroSection?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo/logo.webp"
                                alt="VittoriConsulting - Marketing a 360° per PMI Roma"
                                width={300}
                                height={300}
                                priority
                                className="h-auto w-auto hover:opacity-90 transition-opacity"
                            />
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="tel:+393401287852"
                            className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-[#2e54a1] transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="font-medium">+39 3513708950</span>
                        </a>

                        <GradientButton
                            size="md"
                            onClick={scrollToCTA}
                            className="hidden sm:inline-flex"
                        >
                            Prenota Consulenza
                        </GradientButton>

                        <GradientButton
                            size="sm"
                            onClick={scrollToCTA}
                            className="sm:hidden"
                        >
                            Prenota
                        </GradientButton>
                    </div>
                </div>
            </div>
        </header>
    )
}

