'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProblemsSection() {

    const problems = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            text: 'Hai iniziato con il "cugino smanettone" che ti ha fatto un sito che nessuno trova su Google.',
            highlight: 'nessuno trova su Google',
            color: 'red',
            imageBefore: '/images/problems/prestazioni.png',
            imageAfter: '/images/problems/prestazioni1.png'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
            ),
            text: 'Poi hai provato con l\'agenzia "giovane e dinamica" che ti ha fatto spendere una barca di soldi in pubblicità che nessuno cliccava.',
            highlight: 'nessuno cliccava',
            color: 'orange',
            imageBefore: '/images/problems/frustrato.png',
            imageAfter: '/images/problems/prestazioni.png'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            text: 'Per poi farti seguire da uno stagista che non sa neanche cos\'è un funnel di vendita.',
            highlight: 'funnel di vendita',
            color: 'purple',
            imageBefore: '/images/problems/prestazioni.png',
            imageAfter: '/images/problems/prestazioni1.png'
        }
    ]

    const painPoints = [
        { icon: '💰', text: 'Budget marketing bruciato' },
        { icon: '❌', text: 'Fiducia nelle agenzie: ZERO' },
        { icon: '📉', text: 'Clienti acquisiti: praticamente nessuno' },
        { icon: '😰', text: 'Notti insonni a chiederti dove stai sbagliando' }
    ]

    return (
        <section className="relative py-20 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
                        <span className="text-white font-bold text-sm uppercase tracking-wide">
                            ⚠️ Attenzione Imprenditori
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        Il 90% degli Imprenditori romani<br />
                        <span className="text-blue-200">Commette questi Errori</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
                        Dimmi se questa storia ti suona familiare:
                    </p>

                    <div className="max-w-5xl mx-auto space-y-12">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="rounded-2xl p-6 border border-white/20">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white">
                                            {problem.icon}
                                        </div>
                                        <p className="text-lg text-white leading-relaxed pt-2">
                                            {problem.text}
                                        </p>
                                    </div>
                                </div>

                                <div className="overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:mx-0 md:px-0 scrollbar-hide">
                                    <div className="flex md:grid md:grid-cols-[1fr_80px_1fr] gap-4 items-center min-w-max md:min-w-0">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="bg-white/5 rounded-2xl overflow-hidden relative border border-white/10 w-[340px] sm:w-[380px] md:w-auto aspect-video flex-shrink-0"
                                        >
                                            <Image
                                                src={problem.imageBefore}
                                                alt={`Prima - ${problem.text}`}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute bottom-4 left-4">
                                                <div className="bg-transparent text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg backdrop-blur-sm border border-red-400">
                                                    Prima
                                                </div>
                                            </div>
                                        </motion.div>

                                        <div className="flex items-center justify-center flex-shrink-0">
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center">
                                                <span className="text-white text-2xl md:text-2xl">→</span>
                                            </div>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="bg-white/5 rounded-2xl overflow-hidden relative border border-white/10 w-[340px] sm:w-[380px] md:w-auto aspect-video flex-shrink-0"
                                        >
                                            <Image
                                                src={problem.imageAfter}
                                                alt={`Dopo - ${problem.text}`}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute bottom-4 right-4">
                                                <div className="bg-transparent text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg backdrop-blur-sm border border-green-400">
                                                    Dopo
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/15 backdrop-blur-md rounded-3xl p-8 sm:p-12 mb-16 border border-white/30 shadow-2xl"
                >
                    <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed text-center">
                        <span className="text-blue-200">E adesso?</span> Adesso sei qui, paralizzato dalla paura di buttare altri soldi, mentre guardi i tuoi competitor <span className="text-blue-200">fatturare milioni</span> con strategie che sembrano copiate dal tuo stesso settore.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                        Il risultato?
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {painPoints.map((pain, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-4 bg-red-500/10 border border-red-400/30 rounded-xl p-5 hover:bg-red-500/15 transition-all"
                            >
                                <span className="text-3xl flex-shrink-0">{pain.icon}</span>
                                <span className="text-lg font-semibold text-white">{pain.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
