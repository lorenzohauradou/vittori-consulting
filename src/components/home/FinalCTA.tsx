'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useOptin } from '@/contexts/OptinContext'

export default function FinalCTA() {
    const { openModal } = useOptin()

    return (
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70]">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
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
                        className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl"
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10 sm:mb-12"
                    >
                        Saluta per sempre:
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 max-w-5xl mx-auto"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border-2 border-red-400/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">❌</span>
                            <p className="text-white font-bold text-base sm:text-lg">Strategie improvvisate</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border-2 border-red-400/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">❌</span>
                            <p className="text-white font-bold text-base sm:text-lg">Soldi bruciati in campagne inutili</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border-2 border-red-400/30 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">❌</span>
                            <p className="text-white font-bold text-base sm:text-lg">Invisibilità Online</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-12 sm:mb-16 bg-white/10 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border-2 border-white/20 shadow-2xl"
                    >
                        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            Il Marketing Non È Spesa.
                            <br />
                            <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                                È la Chiave al Tuo Successo.
                            </span>
                        </h3>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-200 mt-4 sm:mt-6"
                        >
                            Investi Senza Paura
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-12 sm:mb-16"
                    >
                        <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8">
                            Con <span className="font-bold text-blue-200">VittoriConsulting</span> ottieni:
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 max-w-4xl mx-auto">
                            <motion.div
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="flex items-start gap-3 sm:gap-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border-2 border-green-400/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <span className="text-2xl sm:text-3xl flex-shrink-0">✅</span>
                                <div className="text-left">
                                    <p className="font-bold text-gray-900 text-base sm:text-lg mb-1">Piano strategico</p>
                                    <p className="text-sm sm:text-base text-gray-600">Costruito su misura per te</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="flex items-start gap-3 sm:gap-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border-2 border-green-400/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <span className="text-2xl sm:text-3xl flex-shrink-0">✅</span>
                                <div className="text-left">
                                    <p className="font-bold text-gray-900 text-base sm:text-lg mb-1">Crescita solida</p>
                                    <p className="text-sm sm:text-base text-gray-600">Zero spreco di budget</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="flex items-start gap-3 sm:gap-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border-2 border-green-400/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <span className="text-2xl sm:text-3xl flex-shrink-0">✅</span>
                                <div className="text-left">
                                    <p className="font-bold text-gray-900 text-base sm:text-lg mb-1">Riconoscibilità Online</p>
                                    <p className="text-sm sm:text-base text-gray-600">Diventerai impossibile da ignorare</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="flex items-start gap-3 sm:gap-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border-2 border-green-400/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <span className="text-2xl sm:text-3xl flex-shrink-0">✅</span>
                                <div className="text-left">
                                    <p className="font-bold text-gray-900 text-base sm:text-lg mb-1">Incremento del fatturato</p>
                                    <p className="text-sm sm:text-base text-gray-600">Cifre che prima potevi solo sognare</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border-2 border-white/30 shadow-2xl">
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-8 sm:mb-10">
                                La tua crescita è la nostra priorità!
                            </p>

                            <motion.button
                                onClick={openModal}
                                whileHover={{
                                    scale: 1.08,
                                    boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="relative inline-flex items-center justify-center px-10 sm:px-14 lg:px-16 py-5 sm:py-6 text-lg sm:text-xl lg:text-2xl font-bold text-[#2e54a1] bg-white rounded-full shadow-2xl transition-all duration-300 group overflow-hidden hover:shadow-white/50 w-full sm:w-auto"
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
                                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                                    INIZIA QUI
                                    <motion.svg
                                        className="w-6 h-6 sm:w-7 sm:h-7"
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
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="text-sm sm:text-base text-blue-100 mt-6 sm:mt-8 italic leading-relaxed"
                            >
                                Un clic ti costa zero, ma può cambiare tutto per il tuo business.
                                <br />
                                <span className="font-bold text-white text-base sm:text-lg">Non aspettare!</span>
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

