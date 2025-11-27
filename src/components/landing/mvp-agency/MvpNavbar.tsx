'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PortalLink } from './PortalLink'

const CALENDLY_URL = 'https://calendly.com/valerio-vittori/30min?hide_gdpr_banner=1'

const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Workflow', href: '#process' },
    { name: 'N8N', href: '#n8n' },
    { name: 'FAQ', href: '#faq' },
]

export default function MvpNavbar() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            setIsScrolled(currentScrollY > 20)

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

    const scrollToSection = (href: string) => {
        setIsMobileMenuOpen(false)
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } ${isScrolled
                    ? 'bg-black/60 backdrop-blur-xl'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center pb-2">
                            <Image
                                src="/images/logo/reverse.png"
                                alt="VittoriConsulting"
                                width={180}
                                height={180}
                                className=" w-auto brightness-0 invert"
                                priority
                            />
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center ml-12 space-x-1">
                        {navLinks.map((link, index) => (
                            <div key={link.name} className="flex items-center">
                                <button
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-zinc-400 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </button>
                                {index < navLinks.length - 1 && (
                                    <span className="text-zinc-700 mx-1">/</span>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4 ml-auto">
                        <PortalLink
                            href="/"
                            className="hidden lg:block text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200"
                        >
                            Home
                        </PortalLink>
                        <Link
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:block bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-zinc-200 transition-all duration-300"
                        >
                            Prenota Call
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/5"
                        >
                            <span className="sr-only">Apri menu</span>
                            {!isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="pt-2 pb-4 space-y-1 border-t border-white/5 bg-black/80 backdrop-blur-xl -mx-4 px-6">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.name}
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-zinc-400 hover:text-white block w-full text-left px-3 py-2 text-base font-medium transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                ))}
                                <PortalLink
                                    href="/"
                                    className="text-zinc-500 hover:text-white block w-full text-left px-3 py-2 text-base font-medium transition-colors"
                                >
                                    Home
                                </PortalLink>
                                <div className="pt-4">
                                    <Link
                                        href={CALENDLY_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-white text-black px-6 py-3 rounded-full font-semibold text-sm"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Prenota Call
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
