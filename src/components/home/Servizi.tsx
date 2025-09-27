'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Servizi() {

    const servizi = [
        {
            title: "Analisi strategica e Branding",
            description: "analizziamo il mercato e i tuoi competitor per studiare la strategia adatta a te.",
            icon: (
                <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            )
        },
        {
            title: "Creazione Contenuti",
            description: "script video e shooting professionali",
            icon: (
                <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
                </svg>
            )
        },
        {
            title: "Advertising",
            description: "campagne pubblicitarie magnetiche su Google e piattaforme Meta",
            icon: (
                <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
            )
        },
        {
            title: "Web Design",
            description: "creiamo landing page, funnel, sito web",
            icon: (
                <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                </svg>
            )
        },
        {
            title: "Sales Support",
            description: "affiancamento reparto commerciale",
            icon: (
                <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            )
        },
        {
            title: "Analisi KPI e ROI",
            description: "chiaro e misurabile",
            icon: (
                <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.25l1.41-1.41L15.5 12.5 13 15l-3.5-3.5-4.5 4.5 1.41 1.41L10 13.91l3.5 3.5 2.5-2.5z" />
                </svg>
            )
        }
    ]

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 right-0 w-2/5 bg-[#2e54a1] transform skew-x-12 origin-top-right"></div>

                <div className="absolute top-20 left-20 w-12 h-12 bg-blue-100 rounded-full opacity-30 animate-pulse" />
                <div className="absolute bottom-32 left-32 w-8 h-8 bg-blue-200 rounded-full opacity-40 animate-pulse delay-1000" />
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-transparent rounded-full blur-2xl"></div>

                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce delay-500" />
                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full opacity-40 animate-bounce delay-1500" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        Cosa Facciamo per
                        <span className="text-white relative ml-2">
                            TE!
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2e54a1] to-blue-600 rounded-full origin-left" />
                        </span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {servizi.map((servizio) => (
                        <div
                            key={servizio.title}
                            className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-500"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#2e54a1]/10 to-blue-100/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {servizio.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#2e54a1] mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {servizio.title}
                                    </h3>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {servizio.description}
                            </p>
                        </div>
                    ))}
                </div>

                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-white/60 shadow-2xl">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                            E Poi?
                        </h3>

                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0">
                                    <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-2xl lg:text-3xl font-bold text-[#2e54a1] mb-1">
                                        RIPETI E SCALA
                                    </h4>
                                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                                        Replichiamo il successo su nuovi canali e mercati per una <span className="font-bold text-[#2e54a1]">crescita illimitata!!</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#2e54a1] to-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                <span className="relative z-10">INIZIA QUI</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
