'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProblemsSection() {

    const problems = [
        {
            number: '01',
            text: 'Hai iniziato con il "cugino smanettone" che ti ha fatto un sito che nessuno trova su Google.'
        },
        {
            number: '02',
            text: 'Poi hai provato con l\'agenzia "giovane e dinamica" che ti ha fatto spendere una barca di soldi in pubblicità che nessuno cliccava.'
        },
        {
            number: '03',
            text: 'Per poi farti seguire da uno stagista che non sa neanche cos\'è un funnel di vendita.'
        }
    ]

    const painPoints = [
        { icon: '💰', text: 'Budget marketing bruciato' },
        { icon: '❌', text: 'Fiducia nelle agenzie: ZERO' },
        { icon: '📉', text: 'Clienti acquisiti: praticamente nessuno' },
        { icon: '😰', text: 'Notti insonni a chiederti dove stai sbagliando' }
    ]

    return (
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70] overflow-hidden">
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
                    >
                        <span className="text-white font-bold text-sm uppercase tracking-wide">
                            ⚠️ Attenzione Imprenditori
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Il 90% degli Imprenditori romani<br />
                        <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                            Commette questi Errori
                        </span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mb-20"
                >
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-16">
                        Dimmi se questa storia ti suona familiare:
                    </p>

                    <div className="max-w-5xl mx-auto space-y-8 lg:space-y-12">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                className="flex items-start gap-6 lg:gap-8 group"
                            >
                                <div className="flex-shrink-0">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300"
                                    >
                                        <span className="text-3xl lg:text-4xl font-bold text-white">
                                            {problem.number}
                                        </span>
                                    </motion.div>
                                </div>
                                <div className="flex-1 pt-2">
                                    <p className="text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed font-medium">
                                        {problem.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-16 lg:mt-20 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                    >
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/problems/frustrato.png"
                                alt="Prima della trasformazione"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute top-4 left-4">
                                <div className="bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                    Prima
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/problems/sollevato.png"
                                alt="Dopo la trasformazione"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute top-4 left-4">
                                <div className="bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                    Dopo
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border-2 border-white/20 shadow-2xl">
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed text-center">
                            <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">E adesso?</span>
                            {' '}Adesso sei qui, paralizzato dalla paura di buttare altri soldi, mentre guardi i tuoi competitor{' '}
                            <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">fatturare milioni</span>
                            {' '}con strategie che sembrano copiate dal tuo stesso settore.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
                    >
                        Il risultato?
                    </motion.h3>

                    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {painPoints.map((pain, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all"
                            >
                                <span className="text-4xl flex-shrink-0">{pain.icon}</span>
                                <span className="text-lg sm:text-xl font-semibold text-white">{pain.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
