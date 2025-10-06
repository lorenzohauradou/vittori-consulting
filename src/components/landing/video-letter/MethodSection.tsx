'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function MethodSection() {
    const pillars = [
        {
            number: '01',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Analisi e Branding',
            description: '30 giorni in cui analizziamo alla precisione il mercato di riferimento, la tua concorrenza, definiamo chi sono i tuoi clienti ideali e creiamo la strategia di comunicazione che useremo per il progetto.',
        },
        {
            number: '02',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Attrazione: Creazione Contenuti',
            description: 'Una volta al mese giriamo shooting video professionali e definiamo la calendarizzazione di ogni singolo contenuto.',
        },
        {
            number: '03',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Conversione: Meta Advertising',
            description: 'Creiamo e gestiamo le tue campagne pubblicitarie su tutte le piattaforme social. Ottimizzando tutto con KPI alla mano.',
        },
        {
            number: '04',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Vendita: Supporto Commerciale',
            description: 'Non basta far arrivare clienti, bisogna saperli gestire. Ti supportiamo per gestire i contatti che arrivano per aiutarti a trasformarli in vendite concrete.',
        },
        {
            number: '05',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: 'Data Collection: Analisi e Report',
            subtitle: 'KPI Chiari. ROI misurabile',
            description: 'Ogni mese ti diamo un report dettagliato con tutti i numeri: saprai sempre quanto stai investendo e quanto stai guadagnando. Tutto chiaro e trasparente.',
        },
        {
            number: '06',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Check-up',
            description: 'Ogni settimana faremo il punto della situazione insieme. Non ti lasciamo mai solo.',
        },
    ]

    return (
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70] overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100/20 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/25 rounded-full opacity-50 animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/15 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-200/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-300/40 rounded-full opacity-70 animate-bounce delay-500"></div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-blue-400/30 rounded-full opacity-60 animate-bounce delay-1500"></div>
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-blue-200/50 rounded-full opacity-50 animate-bounce delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Come ti portiamo i <span className="text-blue-200">Risultati</span>
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        I PILASTRI del nostro METODO
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-white to-blue-100 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                <span className="text-[#2e54a1] font-bold text-lg">{pillar.number}</span>
                            </div>

                            <div className="mb-6 mt-4">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-white/30 transition-colors">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {pillar.title}
                                </h3>
                                {pillar.subtitle && (
                                    <p className="text-sm font-semibold text-blue-200 mb-2">
                                        {pillar.subtitle}
                                    </p>
                                )}
                            </div>

                            <p className="text-white/90 leading-relaxed">
                                {pillar.description}
                            </p>

                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

