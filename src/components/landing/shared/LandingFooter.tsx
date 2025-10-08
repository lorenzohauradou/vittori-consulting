'use client'

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export default function LandingFooter() {
    const socialLinks = [
        {
            name: 'LinkedIn',
            href: '#',
            icon: <Linkedin className="w-6 h-6" />
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/vittoriconsulting',
            icon: <Instagram className="w-6 h-6" />
        },
        {
            name: 'Facebook',
            href: '#',
            icon: <Facebook className="w-6 h-6" />
        }
    ]

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="-mt-12">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <div className="items-center justify-left flex -mt-6">
                            <Image
                                src="/images/logo/logo-circle.webp"
                                alt="VittoriConsulting Logo"
                                width={100}
                                height={100}
                            />
                            <span className="text-blue-100 font-bold text-2xl pr-8 mr-2 italic"> VittoriConsulting </span>
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
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#2e54a1] transition-all duration-300 hover:scale-110"
                                        aria-label={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.icon}
                                    </Link>
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
                        <div className="text-gray-400 text-sm text-center md:text-left">
                            <p>© 2025 VittoriConsulting. Tutti i diritti riservati.</p>
                            <p className="text-xs mt-1">P.IVA: 02463360566</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Condizioni d&apos;uso
                            </Link>
                            <Link href="#cookie" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

