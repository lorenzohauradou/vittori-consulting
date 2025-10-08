'use client'

import React from 'react'
import Image from 'next/image'

export default function LandingFooter() {
    const socialLinks = [
        {
            name: 'LinkedIn',
            href: '#',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-4.262 9.781c-2.448 0-4.426-1.978-4.426-4.426s1.978-4.426 4.426-4.426 4.426 1.978 4.426 4.426-1.978 4.426-4.426 4.426z" />
                </svg>
            )
        },
        {
            name: 'Facebook',
            href: '#',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            )
        }
    ]

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="-mt-12">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <div className="items-center justify-center flex mb-6">
                            <Image
                                src="/images/logo/logo-circle.png"
                                alt="VittoriConsulting Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight text-center max-w-3xl">
                            Con noi il marketing non sarà più un peso, ma la tua <span className="text-[#2e54a1]">arma segreta</span>
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-[#2e54a1] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Telefono</p>
                                    <a href="tel:+393401287852" className="text-lg font-semibold text-white hover:text-[#2e54a1] transition-colors">
                                        +39 340 128 7852
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-[#2e54a1] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Email</p>
                                    <a href="mailto:info@vittoriconsulting.it" className="text-lg font-semibold text-white hover:text-[#2e54a1] transition-colors">
                                        info@vittoriconsulting.it
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-white mb-6">Seguici sui Social</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#2e54a1] transition-all duration-300 hover:scale-110"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <h5 className="font-bold text-white mb-3">Pronto a iniziare?</h5>
                            <p className="text-sm text-gray-300 mb-4">
                                Prenota subito la tua consulenza gratuita
                            </p>
                            <a
                                href="tel:+393401287852"
                                className="inline-flex items-center justify-center w-full bg-[#2e54a1] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#1e3a70] transition-all duration-300 hover:scale-105"
                            >
                                Chiamaci ora
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © 2025 VittoriConsulting. Tutti i diritti riservati.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Condizioni d&apos;uso
                            </a>
                            <a href="#cookie" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

