'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ProblemsSection() {
    return (
        <section className="relative py-16 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border-2 border-blue-300/30 rounded-full px-6 py-2 mb-6">
                        <span className="text-blue-100 font-bold text-sm uppercase tracking-wide">
                            ⚠️ Attenzione Imprenditori
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                        Il 90% degli Imprenditori romani
                    </h2>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
                        Commette questi Errori
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-2xl sm:text-3xl font-bold text-white/90 mb-8 text-center">
                        Dimmi se questa storia ti suona familiare:
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    Hai iniziato con il <span className="font-bold text-cyan-300">&quot;cugino smanettone&quot;</span> che ti ha fatto un sito che <span className="font-bold text-white">nessuno trova su Google</span>.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 rounded-2xl overflow-hidden aspect-video relative"
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-3 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-white/50 text-sm">Immagine placeholder</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 rounded-2xl overflow-hidden aspect-video relative order-2 lg:order-1"
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-3 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-white/50 text-sm">Immagine placeholder</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 order-1 lg:order-2"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                                    </svg>
                                </div>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    Poi hai provato con l&apos;agenzia <span className="font-bold text-cyan-300">&ldquo;giovane e dinamica&rdquo;</span> che ti ha fatto <span className="font-bold text-white">spendere una barca di soldi</span> in pubblicità che <span className="font-bold text-white">nessuno cliccava</span>.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    Per poi farti seguire da uno <span className="font-bold text-cyan-300">stagista</span> che non sa neanche <span className="font-bold text-white">cos&apos;è un funnel di vendita</span>.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 rounded-2xl overflow-hidden aspect-video relative"
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-3 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-white/50 text-sm">Immagine placeholder</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20"
                >
                    <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed text-center">
                        <span className="text-cyan-300">E adesso?</span> Adesso sei qui, paralizzato dalla paura di buttare altri soldi, mentre guardi i tuoi competitor <span className="text-cyan-300">fatturare milioni</span> con strategie che sembrano copiate dal tuo stesso settore.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                        Il risultato?
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {[
                            { icon: '💰', text: 'Budget marketing bruciato' },
                            { icon: '❌', text: 'Fiducia nelle agenzie: ZERO' },
                            { icon: '📉', text: 'Clienti acquisiti: praticamente nessuno' },
                            { icon: '😰', text: 'Notti insonni a chiederti dove stai sbagliando' }
                        ].map((pain, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 bg-red-500/10 border border-red-500/20 rounded-xl p-4"
                            >
                                <span className="text-3xl">{pain.icon}</span>
                                <span className="text-lg font-semibold text-white">{pain.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
