'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GradientButton } from '@/components/ui/gradient-button'
import IPhoneCanvas from '@/components/ui/iphone-canvas'

export default function VeritaSection() {
    return (
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#1e3a70] via-[#2e54a1] to-[#3d63b8] overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100/20 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/25 rounded-full opacity-50 animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/15 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-200/20 to-transparent rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-20"
                >
                    <div className="text-center">
                        <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl px-6 py-3 mb-8 transform -rotate-1">
                            <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#2e54a1] to-[#1e3a70] bg-clip-text text-transparent">
                                La verità brutale è questa:
                            </h3>
                        </div>

                        <p className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10">
                            Non stai sbagliando tu!
                        </p>

                        <div className="max-w-3xl mx-auto space-y-8 text-xl sm:text-2xl text-gray-700 leading-relaxed">
                            <p>
                                Ti stanno vendendo le stesse <span className="font-bold text-[#2e54a1]">strategie fotocopia</span> che funzionavano nel 2018: lead generation, contenuti &ldquo;virali&rdquo;, branding…
                            </p>

                            <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                                E sai qual è la parte che saltano?<br />
                                <span className="relative inline-block mt-2">
                                    <span className="text-[#2e54a1]">Quella che ti fa incassare davvero.</span>
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                        viewport={{ once: true }}
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2e54a1] to-blue-600 rounded-full origin-left"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative z-10 flex justify-center"
                    >
                        <IPhoneCanvas
                            title="Metodo Vittori 360"
                            description="Il sistema che sta trasformando Roma"
                            showVideo={true}
                            videoSrc="/videos/testimonial/albertos.mp4"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative z-10"
                    >
                        <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl">
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-500/30 to-orange-500/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30 mb-6">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                                    Mentre tu perdi tempo e soldi,
                                </h4>
                                <p className="text-lg sm:text-xl text-white/90">
                                    i tuoi competitor usano il
                                </p>
                            </div>

                            <div className="text-center mb-8">
                                <motion.div
                                    initial={{ scale: 0.95 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 border-2 border-white/40 shadow-lg"
                                >
                                    <p className="text-3xl sm:text-4xl font-black text-white mb-2">
                                        Metodo Vittori 360°
                                    </p>
                                </motion.div>
                            </div>

                            <p className="text-xl sm:text-2xl font-bold text-white text-center leading-tight">
                                e ti stanno <span className="text-blue-200">mangiando</span> le quote di mercato.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl"
                >
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Vuoi smettere di essere il miglior venditore…
                    </p>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
                        <span className="relative inline-block">
                            <span className="text-[#2e54a1]">dei tuoi competitor?</span>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2e54a1] to-blue-600 rounded-full origin-left"
                            />
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <GradientButton
                            size="lg"
                            className="text-xl sm:text-2xl px-12 py-6 shadow-2xl"
                        >
                            Prenota subito la tua consulenza gratuita
                        </GradientButton>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
