'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useOptin } from '@/contexts/OptinContext'

export default function FinalCTA() {
    const { openModal } = useOptin()

    const negativePoints = [
        'Strategie improvvisate',
        'Soldi bruciati in campagne inutili',
        'Invisibilità Online'
    ]

    const positivePoints = [
        { title: 'Piano strategico', subtitle: 'Costruito su misura per te' },
        { title: 'Crescita solida', subtitle: 'Zero spreco di budget' },
        { title: 'Riconoscibilità Online', subtitle: 'Diventerai impossibile da ignorare' },
        { title: 'Incremento del fatturato', subtitle: 'Cifre che prima potevi solo sognare' }
    ]

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70]">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-16"
                    >
                        Saluta per sempre:
                    </motion.h2>

                    <div className="max-w-4xl mx-auto space-y-6 mb-16">
                        {negativePoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex items-center gap-6 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-red-400/30 flex items-center justify-center flex-shrink-0 group-hover:border-red-400/50 transition-all duration-300"
                                >
                                    <span className="text-3xl">❌</span>
                                </motion.div>
                                <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold text-left">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border-2 border-white/20 shadow-2xl">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Il Marketing Non È Spesa.
                            <br />
                            <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                                È la Chiave al Tuo Successo.
                            </span>
                        </h3>
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-8">
                            Investi Senza Paura
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center mb-16">
                        Con <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">VittoriConsulting</span> ottieni:
                    </p>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {positivePoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="flex items-center gap-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border-2 border-green-400/30 shadow-xl hover:border-green-400/50 transition-all duration-300 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-4xl flex-shrink-0"
                                >
                                    ✅
                                </motion.div>
                                <div className="text-left flex-1">
                                    <p className="font-bold text-gray-900 text-xl sm:text-2xl mb-1">{point.title}</p>
                                    <p className="text-base sm:text-lg text-gray-600">{point.subtitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border-2 border-white/30 shadow-2xl text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-12"
                        >
                            La tua crescita è la nostra priorità!
                        </motion.p>

                        <motion.button
                            onClick={openModal}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{
                                scale: 1.08,
                                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center justify-center px-12 sm:px-16 py-6 sm:py-7 text-xl sm:text-2xl lg:text-3xl font-bold text-[#2e54a1] bg-white rounded-full shadow-2xl transition-all duration-300 overflow-hidden w-full sm:w-auto"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent"
                                animate={{
                                    x: ['-100%', '100%']
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 2
                                }}
                            />
                            <span className="relative z-10 flex items-center gap-3">
                                INIZIA QUI
                                <motion.svg
                                    className="w-7 h-7 sm:w-8 sm:h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                            </span>
                        </motion.button>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-base sm:text-lg text-blue-100 mt-8 italic leading-relaxed"
                        >
                            Un clic ti costa zero, ma può cambiare tutto per il tuo business.
                            <br />
                            <span className="font-bold text-white text-lg sm:text-xl">Non aspettare!</span>
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

