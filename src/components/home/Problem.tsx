'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Problem() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -30])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 40])

    return (
        <section ref={containerRef} className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2e54a1]/5 via-transparent to-blue-100/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-[#2e54a1]/5"></div>

                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-20 right-20 w-32 h-32 border border-[#2e54a1]/15 rounded-full bg-gradient-to-br from-blue-100/20 to-transparent"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-32 left-20 w-24 h-24 border border-[#2e54a1]/20 rounded-full bg-gradient-to-br from-[#2e54a1]/10 to-transparent"
                />

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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="mb-12"
                    >
                        <motion.h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                        >
                            &quot;Perché sei la persona giusta?&quot;
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2e54a1] mb-8"
                        >
                            Perché siamo l&apos;Unica scelta che ti fa davvero
                            <br />
                            <span className="relative">
                                Incassare
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2e54a1] to-blue-600 rounded-full origin-left"
                                />
                            </span>
                        </motion.h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <div className="bg-[#2e54a1] rounded-3xl p-8 sm:p-12 shadow-xl border border-white/50">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true, margin: "-30px" }}
                                className="text-lg sm:text-xl text-white leading-relaxed mb-8"
                            >
                                Abbiamo creato un <span className="font-bold text-white">METODO</span> che sta già ribaltando i numeri di imprenditori che, come te, erano fermi e bloccati da mesi (se non anni)… e che ora ci ringraziano!
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true, margin: "-30px" }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 mb-4 bg-white/30 rounded-xl flex items-center justify-center">
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Metodo Testato</h4>
                                        <p className="text-sm text-blue-100">Strategia provata su centinaia di business</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 mb-4 bg-white/30 rounded-xl flex items-center justify-center">
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Risultati Garantiti</h4>
                                        <p className="text-sm text-blue-100">ROI misurabili e crescita sostenibile</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.0 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 mb-4 bg-white/30 rounded-xl flex items-center justify-center">
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Clienti Soddisfatti</h4>
                                        <p className="text-sm text-blue-100">189+ imprenditori che ci ringraziano</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                viewport={{ once: true, margin: "-30px" }}
                                className="text-center"
                            >
                                <p className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    Ora tocca a te!
                                </p>
                                <p className="text-lg text-blue-100 mb-8">
                                    Smetti di perdere tempo e scopri la soluzione che ti farà scalare il tuo business!
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-center"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(46, 84, 161, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-[#2e54a1] to-blue-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                animate={{
                                    x: ['-100%', '100%']
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                }}
                            />

                            <span className="relative z-10 flex items-center gap-3">
                                INIZIA QUI
                                <motion.svg
                                    className="w-6 h-6"
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
                            transition={{ duration: 0.5, delay: 1.2 }}
                            viewport={{ once: true, margin: "-30px" }}
                            className="text-sm text-gray-500 mt-4"
                        >
                            Scopri il metodo che ha già trasformato 189+ business
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute top-1/4 left-10 hidden lg:block"
            >
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-16 h-16 bg-gradient-to-br from-[#2e54a1]/20 to-blue-200/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30"
                >
                    <span className="text-2xl">📈</span>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute bottom-1/4 right-10 hidden lg:block"
            >
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                        rotate: [0, -3, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-green-200/30 to-emerald-200/40 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30"
                >
                    <span className="text-lg">💎</span>
                </motion.div>
            </motion.div>
        </section>
    )
}
