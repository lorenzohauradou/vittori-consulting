'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CustomBackground } from '@/components/ui/custom-background'

export default function Testimonials() {

    const testimonials = [
        {
            company: "Alberto's Pizza",
            industry: "Ristorazione",
            result: "+300% fatturato in 6 mesi",
            video: "/videos/testimonial-albertos.mp4",
            delay: 0.1
        },
        {
            company: "Scavolini Store Fiumicino",
            industry: "Arredamento",
            result: "+150% lead qualificati",
            video: "/videos/testimonial-scavolini.mp4",
            delay: 0.2
        },
        {
            company: "Gelotti",
            industry: "Food & Beverage",
            result: "+200% vendite online",
            video: "/videos/testimonial-gelotti.mp4",
            delay: 0.3
        },
        {
            company: "Passito Spa",
            industry: "Wellness",
            result: "+180% prenotazioni",
            video: "/videos/testimonial-passito.mp4",
            delay: 0.4
        },
        {
            company: "Magic Box Roma",
            industry: "Intrattenimento",
            result: "+250% eventi organizzati",
            video: "/videos/testimonial-magicbox.mp4",
            delay: 0.5
        },
        {
            company: "Broker Associati",
            industry: "Servizi Finanziari",
            result: "+120% clienti acquisiti",
            video: "/videos/testimonial-broker.mp4",
            delay: 0.6
        }
    ]

    return (
        <CustomBackground variant="hero" className="py-24 lg:py-32" id="testimonials">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
                        No, non ce la cantiamo e ce la suoniamo da soli.
                    </h2>
                    <div className="relative inline-block mb-8">
                        <h3 className="text-3xl lg:text-5xl font-bold text-blue-200 mb-4">
                            Parlano i Fatti:
                        </h3>
                        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full"></div>
                    </div>
                    <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                        Già <span className="font-bold text-blue-200">+189 attività</span> hanno fatto il salto di qualità
                    </p>
                </motion.div>

                {/* Sottotitolo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <p className="text-lg text-white/80 mb-8">
                        Guarda le video testimonianze qui sotto oppure le recensioni di chi ci ha già scelto
                    </p>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-16"
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 lg:p-8 border border-white/50 shadow-2xl overflow-hidden">
                        <h4 className="text-xl lg:text-2xl font-bold text-[#2e54a1] mb-6 lg:mb-8 text-center">
                            Video Testimonianze dei Nostri Clienti
                        </h4>

                        <div className="hidden lg:block overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-[#2e54a1]/20">
                                        <th className="text-left py-4 px-6 font-bold text-[#2e54a1]">Azienda</th>
                                        <th className="text-left py-4 px-6 font-bold text-[#2e54a1]">Settore</th>
                                        <th className="text-left py-4 px-6 font-bold text-[#2e54a1]">Risultato</th>
                                        <th className="text-center py-4 px-6 font-bold text-[#2e54a1]">Video</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {testimonials.map((testimonial) => (
                                        <motion.tr
                                            key={testimonial.company}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: testimonial.delay }}
                                            viewport={{ once: true, margin: "-30px" }}
                                            className="border-b border-gray-200/50 hover:bg-blue-50/50 transition-colors duration-300"
                                        >
                                            <td className="py-6 px-6">
                                                <div className="font-semibold text-gray-900">{testimonial.company}</div>
                                            </td>
                                            <td className="py-6 px-6">
                                                <div className="text-gray-600">{testimonial.industry}</div>
                                            </td>
                                            <td className="py-6 px-6">
                                                <div className="font-bold text-green-600">{testimonial.result}</div>
                                            </td>
                                            <td className="py-6 px-6 text-center">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center justify-center w-12 h-12 bg-[#2e54a1] text-white rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </motion.button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="lg:hidden space-y-4">
                            {testimonials.map((testimonial) => (
                                <motion.div
                                    key={testimonial.company}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: testimonial.delay }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-lg"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex-1">
                                            <h5 className="font-bold text-gray-900 text-lg mb-1">{testimonial.company}</h5>
                                            <p className="text-gray-600 text-sm">{testimonial.industry}</p>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center justify-center w-12 h-12 bg-[#2e54a1] text-white rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-3">
                                        <p className="font-bold text-green-600 text-center">{testimonial.result}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center"
                >
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 shadow-2xl">
                        <motion.h4
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-6 text-white"
                        >
                            Vuoi vedere altre testimonianze?
                        </motion.h4>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-xl mb-8 text-white/80"
                        >
                            Scopri cosa dicono di noi i clienti che hanno già fatto il salto di qualità
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#2e54a1] bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 4
                                    }}
                                />
                                <span className="relative z-10">GUARDA LE RECENSIONI</span>
                            </motion.button>

                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                viewport={{ once: true }}
                                className="text-white/60 font-medium"
                            >
                                oppure
                            </motion.span>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/60 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
                            >
                                INIZIA ANCHE TU
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </CustomBackground>
    )
}
