'use client'

import React, { useState } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

import Image from 'next/image'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isMobile = useIsMobile()

    const menuItems = [
        { label: 'Servizi', href: '#servizi' },
        { label: 'Soluzioni', href: '#soluzioni' },
        { label: 'Chi Siamo', href: '#chi-siamo' },
        { label: 'Lavori', href: '#lavori' },
        { label: 'About', href: '#about' }
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <div className="w-100 flex items-center justify-center">
                                <Image src="/images/logo/logo-extend.png" alt="Vittori Consulting" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                    {!isMobile && (
                        <nav className="hidden lg:flex space-x-8">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                                >
                                    {item.label}
                                    <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center space-x-4">
                        <button className="btn-gradient-primary text-white px-8 py-3 rounded-full font-bold text-sm">
                            INIZIA QUI
                        </button>

                        {isMobile && (
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2563eb]"
                            >
                                <span className="sr-only">Apri menu principale</span>
                                {!isMenuOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        )}
                    </div>
                </div>

                {isMobile && isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
