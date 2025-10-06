'use client'

import React from 'react'
import { GradientButton } from '@/components/ui/gradient-button'

export default function CTASection() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Smonta, ricostruisci e scala il tuo business.
                        </h2>
                        <p className="text-2xl sm:text-3xl font-bold text-blue-100 mb-8">
                            Non ci sono scorciatoie.
                        </p>
                        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
                            Affidati a <span className="font-bold text-white">VittoriConsulting</span> e inizia a guardare i tuoi competitor dall&apos;alto.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-white/20 mb-12">
                        <div className="flex items-start justify-center gap-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                    E se non sei soddisfatto?
                                </h3>
                                <p className="text-3xl sm:text-4xl font-black text-white">
                                    Ti rimborsiamo!!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-8">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-3 h-3 bg-[#2e54a1] rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-[#2e54a1] rounded-full animate-pulse delay-75"></div>
                            <div className="w-3 h-3 bg-[#2e54a1] rounded-full animate-pulse delay-150"></div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                ⚠️ Posti limitati disponibili
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Accettiamo solo un <span className="font-bold text-[#2e54a1]">numero limitato di clienti per settore</span>. Affrettati e assicurati la tua consulenza, prima che arrivi un tuo concorrente.
                            </p>

                            <GradientButton
                                size="lg"
                                className="text-xl px-12 py-6 shadow-2xl hover:scale-105 transition-transform w-full sm:w-auto"
                            >
                                Prenota subito la tua consulenza gratuita
                            </GradientButton>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

