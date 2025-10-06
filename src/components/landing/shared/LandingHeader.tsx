'use client'

import React from 'react'
import Image from 'next/image'
import { GradientButton } from '@/components/ui/gradient-button'
import Link from 'next/link'

export default function LandingHeader() {
    const scrollToCTA = () => {
        const heroSection = document.querySelector('section')
        heroSection?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo/logo.png"
                                alt="Vittori Consulting"
                                width={300}
                                height={300}
                                className="hover:opacity-90 transition-opacity"
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
                            <span className="font-medium">+39 340 128 7852</span>
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

