'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CustomBackground } from '@/components/ui/custom-background'
import { useOptin } from '@/contexts/OptinContext'

export default function Hero() {
    const [currentPhase, setCurrentPhase] = useState(0)
    const { openModal } = useOptin()

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentPhase(prev => prev === 0 ? 1 : 0)
        }, currentPhase === 0 ? 2000 : 3000)
        return () => clearTimeout(timer)
    }, [currentPhase])

    return (
        <CustomBackground variant="hero" className="min-h-screen flex flex-col pt-16">
            <div className="bg-white/95 hidden md:block backdrop-blur-sm border-b max-w-4xl mx-auto rounded-3xl border-white/20 shadow-sm mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span className="text-gray-700 font-medium">info@vittoriconsulting.it</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                <span className="text-gray-700 font-medium">+39 340 128 7852</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600">Seguici:</span>
                            <div className="flex items-center gap-3">
                                <a href="#" className="w-8 h-8 bg-[#2e54a1] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 bg-[#2e54a1] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 bg-[#2e54a1] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-4.262 9.781c-2.448 0-4.426-1.978-4.426-4.426s1.978-4.426 4.426-4.426 4.426 1.978 4.426 4.426-1.978 4.426-4.426 4.426z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
                        <div className="relative z-10 text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                <div className="relative inline-block">
                                    <AnimatePresence mode="wait">
                                        {currentPhase === 0 ? (
                                            <motion.span
                                                key="competitor"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                Da Competitor
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="leader"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6 }}
                                                className="relative"
                                            >
                                                A Leader
                                                <motion.div
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 0.8, delay: 0.3 }}
                                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white to-blue-200 rounded-full origin-left"
                                                />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <br />
                                {" "}del
                                <br />
                                <span className="text-blue-100">Mercato di Roma</span>
                            </h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-xl sm:text-2xl font-semibold text-white/95 mb-6 leading-relaxed"
                            >
                                Con l&apos;unico metodo che ha già trasformato il business di <span className="font-bold">+189 imprenditori</span> e PMI romani.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed"
                            >
                                Siamo VittoriConsulting. Niente chiacchiere. Passa dall&apos;essere &apos;un&apos;opzione&apos; a essere &apos;LA scelta&apos; con il Metodo Vittori 360.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="flex flex-col gap-6"
                            >
                                <motion.button
                                    onClick={openModal}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white text-[#2e54a1] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/95 transition-all duration-300 shadow-xl hover:shadow-2xl w-fit"
                                >
                                    Parliamo di business
                                </motion.button>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.svg
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                                                className="w-5 h-5 text-yellow-400 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </motion.svg>
                                        ))}
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 1.4 }}
                                        className="text-white/90"
                                    >
                                        <span className="font-bold">4.9/5</span>
                                        <span className="text-sm ml-2 opacity-80">(127 recensioni)</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative z-10 flex justify-center lg:justify-end">
                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/20 backdrop-blur-sm bg-white/10 relative"
                                >
                                    <div className="w-full h-full bg-[#2e54a1] flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: 1 }}
                                                className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center"
                                            >
                                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </motion.div>
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 1.2 }}
                                                className="text-lg font-semibold"
                                            >
                                                Video Preview
                                            </motion.p>
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 1.4 }}
                                                className="text-sm opacity-80"
                                            >
                                                Valerio Vittori
                                            </motion.p>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-xl -z-10 scale-110"></div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.6 }}
                                    className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full mb-6"
                                >
                                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/40">
                                        <div className="flex justify-between items-center gap-8">
                                            <div className="text-center">
                                                <div className="flex items-center justify-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="text-2xl font-bold text-gray-900">10+</div>
                                                <div className="text-xs text-gray-600 font-medium">Anni di esperienza</div>
                                            </div>

                                            <div className="text-center">
                                                <div className="flex items-center justify-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="text-2xl font-bold text-gray-900">97%</div>
                                                <div className="text-xs text-gray-600 font-medium">Tasso di successo</div>
                                            </div>

                                            <div className="text-center">
                                                <div className="flex items-center justify-center mb-2">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="text-2xl font-bold text-gray-900">189+</div>
                                                <div className="text-xs text-gray-600 font-medium">Progetti realizzati</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </CustomBackground>
    )
}