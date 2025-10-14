'use client'

import React from 'react'

export default function MissionVision() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#4f75c7]">
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100/20 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/25 rounded-full opacity-50 animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/15 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-200/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-300/40 rounded-full opacity-70 animate-bounce delay-500"></div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-blue-400/30 rounded-full opacity-60 animate-bounce delay-1500"></div>
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-blue-200/50 rounded-full opacity-50 animate-bounce delay-2000"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 lg:mb-20">
                    <div className="inline-block mb-6">
                        <span className="text-sm font-bold text-blue-100 uppercase tracking-widest drop-shadow-lg">Mission & Vision</span>
                        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-blue-100 to-transparent mt-2"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                        Cosa Ci <span className="text-blue-100">Muove</span>
                    </h2>
                </div>

                <div className="space-y-12 lg:space-y-16">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-2xl p-8 sm:p-10 lg:p-14 shadow-2xl hover:shadow-3xl hover:bg-white transition-all duration-500">
                            <div className="flex items-start gap-6 mb-8">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#2e54a1] to-[#4f75c7] rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2e54a1] mb-2">Mission</h3>
                                    <div className="h-1 w-24 bg-gradient-to-r from-[#2e54a1] to-transparent rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                                <p>
                                    In Vittori Consulting aiutiamo imprenditori e PMI a smettere di sprecare budget e tempo in strategie improvvisate, per costruire finalmente un business stabile, riconoscibile e profittevole.
                                </p>
                                <p>
                                    Il nostro obiettivo è trasformare aziende che &quot;sopravvivono online&quot; in brand che dominano il mercato, grazie a un metodo integrato a 360° che unisce strategia, operatività e vendita.
                                </p>
                                <p>
                                    Un sistema che cresce nel tempo, con supporto costante, controllo sui numeri e ROI misurabile.
                                </p>
                                <p className="text-xl font-bold text-[#2e54a1] pt-6 mt-6 border-t-2 border-[#2e54a1]/20">
                                    Perché il vero successo non è arrivare in alto una volta, ma rimanerci con stabilità e controllo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-2xl p-8 sm:p-10 lg:p-14 shadow-2xl hover:shadow-3xl hover:bg-white transition-all duration-500">
                            <div className="flex items-start gap-6 mb-8">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#4f75c7] to-[#2e54a1] rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2e54a1] mb-2">Vision</h3>
                                    <div className="h-1 w-24 bg-gradient-to-r from-[#2e54a1] to-transparent rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                                <p>
                                    La nostra vision è diventare la realtà di marketing integrato più riconosciuta a livello internazionale.
                                </p>
                                <p>
                                    Il nostro obiettivo? Portare Vittori Consulting nelle mani delle multinazionali e dimostrare che il marketing, quando è integrato e strategico, può trasformare qualsiasi business in una macchina da crescita costante.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

