'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Palette, Code2, Blocks, TrendingUp, Headphones } from 'lucide-react'

const features = [
    {
        icon: Rocket,
        title: 'Lancio Veloce',
        description: 'MVP pronto in 4-6 settimane. Solo le funzionalità che contano. Il modo migliore per fare del sano Bootstrapping',
    },
    {
        icon: Palette,
        title: 'Design Premium',
        description: 'UX/UI moderna che ispira fiducia nei tuoi primi utenti e converte',
    },
    {
        icon: Code2,
        title: 'Codice Scalabile',
        description: 'Architettura pulita e scalabile con Next.js, Python, N8N, Supabase, Stripe, NextAuth e altro',
    },
    {
        icon: Blocks,
        title: 'Feature Core',
        description: 'Focus sulle funzionalità essenziali per validare l\'idea. È necessario che il prodotto risolva un problema reale, molto bene. Tutto il resto è noia',
    },
    {
        icon: TrendingUp,
        title: 'Strategia Lancio',
        description: 'Deploy e raccolta feedback per le iterazioni future. Integrazione strumenti di markting per il monitoraggio (Posthog)',
    },
    {
        icon: Headphones,
        title: 'Supporto Continuo',
        description: 'Aggiornamenti settimanali. Sai sempre a che punto siamo, si avanza step by step',
    }
]

export default function MvpFeatures() {
    return (
        <section id="features" className="relative py-24 sm:py-32">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500 mb-4"
                    >
                        Perché sceglierci
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl font-semibold text-white mb-4"
                    >
                        Tutto per lanciare velocemente
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-500 text-sm"
                    >
                        Non siamo una software house tradizionale.
                        Siamo partner nel tuo lancio
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                        >
                            <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                                <feature.icon className="w-4 h-4 text-zinc-400" />
                            </div>

                            <h3 className="text-sm font-medium text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
