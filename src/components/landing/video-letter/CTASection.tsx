'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GradientButton } from '@/components/ui/gradient-button'

export default function CTASection() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e54a1]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Smonta, ricostruisci e scala<br />
                        <span className="text-[#2e54a1]">il tuo business</span>
                    </h2>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
                        Non ci sono scorciatoie.
                    </p>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                        Affidati a <span className="font-bold text-[#2e54a1]">VittoriConsulting</span> e inizia a guardare i tuoi competitor dall&apos;alto.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#2e54a1] to-[#1e3a70] rounded-3xl p-8 sm:p-12 shadow-2xl"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                    E se non sei soddisfatto?
                                </h3>
                                <p className="text-3xl sm:text-4xl font-black text-white">
                                    Ti rimborsiamo!!
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-3 h-3 bg-[#2e54a1] rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-[#2e54a1] rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-[#2e54a1] rounded-full animate-pulse"></div>
                        </div>

                        <div className="max-w-2xl mx-auto text-center">
                            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                                Accettiamo solo un <span className="font-bold text-[#2e54a1]">numero limitato di clienti per settore</span>. Affrettati e assicurati la tua consulenza, prima che arrivi un tuo concorrente.
                            </p>

                            <GradientButton
                                size="lg"
                                className="text-lg sm:text-xl px-10 py-5 shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
                            >
                                Prenota subito la tua consulenza gratuita
                            </GradientButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

