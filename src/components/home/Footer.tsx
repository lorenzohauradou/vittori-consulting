'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const footerLinks = [
        { name: 'Chi Siamo', href: '#about' },
        { name: 'Contatti', href: '#contact' },
        { name: 'Servizi', href: '#services' },
        { name: 'Casi Studio', href: '#testimonials' },
        { name: 'Privacy', href: '#privacy' }
    ]

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
        <footer id="footer" className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-40 lg:w-60">
                                    <Image
                                        src="/images/logo/logo.webp"
                                        alt="VittoriConsulting Logo"
                                        width={300}
                                        height={300}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                L&apos;unica agenzia di Roma che integra marketing, operativo e commerciale.
                                Dalla strategia al branding alla vendita, grazie al <span className="font-bold text-blue-400">METODO VITTORI 360</span>.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-xl font-bold text-white mb-4">Link Utili</h4>
                            <div className="flex flex-wrap gap-6">
                                {footerLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Seguici</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                                        aria-label={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div>
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                                Vuoi saperne di più?
                            </h3>
                            <h4 className="text-xl font-bold text-blue-400 mb-8">
                                Contattaci
                            </h4>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Nome *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Il tuo nome"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="la.tua@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                            Telefono
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="+39 123 456 7890"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                            Azienda
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Nome della tua azienda"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Messaggio *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Raccontaci del tuo progetto e di come possiamo aiutarti..."
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:scale-105"
                                    >
                                        INVIA RICHIESTA
                                    </button>
                                </div>
                            </form>
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
                        <div className="flex gap-6 text-sm">
                            <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Termini di Servizio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
