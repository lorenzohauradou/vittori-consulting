'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import IPhoneCanvas from '@/components/ui/iphone-canvas'

export default function Difference() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

    const features = [
        {
            title: "Strategia",
            description: "Analisi approfondita del mercato e posizionamento strategico",
            icon: (
                <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            ),
            delay: 0.1
        },
        {
            title: "Branding",
            description: "Identità visiva e comunicazione che converte",
            icon: (
                <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            ),
            delay: 0.2
        },
        {
            title: "Performance",
            description: "Risultati misurabili e ROI garantito",
            icon: (
                <svg className="w-8 h-8 text-[#2e54a1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
            ),
            delay: 0.3
        }
    ]

    return (
        <section ref={containerRef} className="relative py-24 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 right-0 w-2/5 bg-[#2e54a1] transform skew-x-12 origin-top-right"></div>

                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-20 left-20 w-12 h-12 bg-blue-100 rounded-full opacity-30 animate-pulse"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-32 left-32 w-8 h-8 bg-blue-200 rounded-full opacity-40 animate-pulse delay-1000"
                />
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-transparent rounded-full blur-2xl"></div>

                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce delay-500"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full opacity-40 animate-bounce delay-1500"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="mb-12"
                        >
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                La Differenza la senti Subito:
                                <br />
                                <span className="text-[#2e54a1] relative">
                                    Chiarezza e <span className="font-extrabold text-gray-900">Risultati Veri</span>
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2e54a1] to-blue-600 rounded-full origin-left"
                                    />
                                </span>
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="mb-12"
                        >
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg">
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Le altre agenzie ti promettono milioni di visualizzazioni e followers.
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    Noi trasformiamo la visibilità in <span className="bg-gradient-to-r from-[#2e54a1] to-blue-600 bg-clip-text text-transparent font-extrabold">FATTURATO</span>
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="mb-12"
                        >
                            <motion.h4
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true, margin: "-30px" }}
                                className="text-2xl font-bold text-gray-900 mb-8 text-center"
                            >
                                Come?
                            </motion.h4>

                            <div className="grid gap-6 mb-10">
                                {features.map((feature) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 + feature.delay }}
                                        viewport={{ once: true, margin: "-30px" }}
                                        className="group flex items-center gap-6 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-500"
                                    >
                                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#2e54a1]/10 to-blue-100/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-xl font-bold text-[#2e54a1] mb-2 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h5>
                                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="text-center"
                            >
                                <p className="text-xl font-bold text-gray-900 bg-transparent backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm">
                                    Viralità strategica che si trasforma in contratti reali, non solo promesse
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="text-center"
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(46, 84, 161, 0.25)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#2e54a1] to-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 4
                                    }}
                                />
                                <span className="relative z-10">VOGLIO SAPERE DI PIÙ</span>
                            </motion.button>
                        </motion.div>
                    </div>

                    <div className="relative z-10 flex justify-center lg:justify-end">
                        <IPhoneCanvas videoSrc="/videos/gelotti.mov" />
                    </div>
                </div>
            </div>
        </section>
    )
}
