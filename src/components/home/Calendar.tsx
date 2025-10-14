'use client'

import React from 'react'
import CalendlyEmbed from '@/components/ui/calendly-embed'

export default function Calendar() {

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2e54a1]/5 via-transparent to-blue-100/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-[#2e54a1]/5"></div>

                <div className="absolute top-20 right-20 w-32 h-32 border border-[#2e54a1]/15 rounded-full bg-gradient-to-br from-blue-100/20 to-transparent" />
                <div className="absolute bottom-32 left-20 w-24 h-24 border border-[#2e54a1]/20 rounded-full bg-gradient-to-br from-[#2e54a1]/10 to-transparent" />

                <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#2e54a1]/8 via-blue-100/15 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-r from-blue-200/20 via-[#2e54a1]/5 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-blue-100/10 via-[#2e54a1]/3 to-transparent rounded-full blur-3xl"></div>

                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-br from-[#2e54a1] to-blue-600 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-br from-blue-500 to-[#2e54a1] rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-gradient-to-br from-[#2e54a1] to-indigo-500 rounded-full animate-pulse delay-2000"></div>
                    <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-3000"></div>
                    <div className="absolute bottom-1/4 right-2/3 w-1 h-1 bg-[#2e54a1] rounded-full animate-ping delay-4000"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            &quot;Perché sei la persona giusta?&quot;
                        </h2>

                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2e54a1] mb-8">
                            Perché siamo l&apos;Unica scelta che ti fa davvero
                            <br />
                            <span className="relative">
                                Incassare
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2e54a1] to-blue-600 rounded-full origin-left" />
                            </span>
                        </h3>
                    </div>

                    <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
                        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200">
                            <div className="text-center mb-6 sm:mb-8">
                                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
                                    Abbiamo creato un <span className="font-bold text-[#2e54a1]">METODO</span> che sta già ribaltando i numeri di imprenditori che, come te, erano fermi e bloccati da mesi (se non anni)… e che ora ci ringraziano!
                                </p>
                                <h4 className="text-2xl sm:text-3xl font-bold text-[#2e54a1]">
                                    Prenota la Tua Call Strategica
                                </h4>
                            </div>

                            <CalendlyEmbed />

                            <div className="text-center">
                                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2e54a1] mb-2">
                                    Ora tocca a te!
                                </p>
                                <p className="text-base sm:text-lg text-gray-600">
                                    Smetti di perdere tempo e scopri la soluzione che ti farà scalare il tuo business!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
