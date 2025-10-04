'use client'

import React from 'react'

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
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Come ti portiamo i <span className="text-[#2e54a1]">Risultati</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I PILASTRI del nostro METODO
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#2e54a1]/30 transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#2e54a1] to-[#1e3a70] rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                <span className="text-white font-bold text-lg">{pillar.number}</span>
                            </div>

                            <div className="mb-6 mt-4">
                                <div className="w-16 h-16 bg-[#2e54a1]/10 rounded-xl flex items-center justify-center text-[#2e54a1] mb-4 group-hover:bg-[#2e54a1] group-hover:text-white transition-colors">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {pillar.title}
                                </h3>
                                {pillar.subtitle && (
                                    <p className="text-sm font-semibold text-[#2e54a1] mb-2">
                                        {pillar.subtitle}
                                    </p>
                                )}
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                {pillar.description}
                            </p>

                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2e54a1] to-[#1e3a70] opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-[#2e54a1] to-[#1e3a70] rounded-3xl p-8 sm:p-12 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                                    Il Metodo Completo per il Tuo Successo
                                </h3>
                                <p className="text-lg text-blue-100">
                                    Non è una semplice consulenza. È un sistema completo che copre ogni aspetto del tuo marketing, dalla strategia ai risultati misurabili.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid sm:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                <div className="text-3xl font-bold text-white mb-1">360°</div>
                                <div className="text-sm text-blue-100">Copertura completa</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                <div className="text-sm text-blue-100">Supporto continuo</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                <div className="text-3xl font-bold text-white mb-1">100%</div>
                                <div className="text-sm text-blue-100">Risultati garantiti</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

