'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useOptin } from '@/contexts/OptinContext'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { openModal } = useOptin()

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

    const menuItems = [
        { label: 'Servizi', href: '#servizi' },
        { label: 'Casi Studio', href: '#testimonials' },
        { label: 'Chi Siamo', href: '#about' },
        { label: 'Contatti', href: '#footer' }
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" aria-label="Vai alla homepage Vittori Consulting" className="w-72 lg:w-100 flex items-center justify-center">
                            <Image
                                src="/images/logo/logo-extend.webp"
                                alt="Vittori Consulting"
                                width={300}
                                height={300}
                                className="lg:w-[500px] lg:h-[500px] hover:opacity-90 transition-opacity duration-100"
                            />
                        </Link>
                    </div>
                    <nav className="hidden lg:flex items-center space-x-2">
                        {menuItems.map((item, index) => (
                            <div key={item.label} className="flex items-center">
                                <a
                                    href={item.href}
                                    className="text-gray-500 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors duration-200"
                                >
                                    {item.label}
                                </a>
                                {index < menuItems.length - 1 && (
                                    <span className="text-gray-300 mx-2">/</span>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4 ml-auto">
                        <button
                            onClick={openModal}
                            className="hidden lg:block bg-gradient-to-r from-[#2e54a1] to-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                        >
                            INIZIA QUI
                        </button>

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
                    </div>
                </div>

                {isMenuOpen && (
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
                            <div className="pt-4 pb-2">
                                <button
                                    onClick={() => {
                                        openModal();
                                        setIsMenuOpen(false)
                                    }}
                                    className="w-full bg-gradient-to-r from-[#2e54a1] to-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                                >
                                    INIZIA QUI
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}