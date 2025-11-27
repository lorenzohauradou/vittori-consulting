'use client'

import { motion } from 'framer-motion'

const projects = [
    {
        icon: '🚀',
        title: 'SaaSMetrics',
        description: 'Dashboard analytics per startup SaaS con metriche MRR, churn e cohort analysis.',
        year: '2024',
        stats: '500+ utenti',
        status: 'Live',
        statusColor: 'emerald'
    },
    {
        icon: '📅',
        title: 'BookingFlow',
        description: 'Sistema di prenotazioni per professionisti con pagamenti Stripe e sync calendario.',
        year: '2024',
        stats: '€50k GMV',
        status: 'Live',
        statusColor: 'emerald'
    },
    {
        icon: '🛒',
        title: 'MarketHub',
        description: 'Marketplace B2B con matching AI, chat integrata e sistema di recensioni.',
        year: '2023',
        stats: '1.2k transazioni',
        status: 'Acquired',
        statusColor: 'amber'
    }
]

export default function MvpProjects() {
    return (
        <section id="projects" className="relative py-24 sm:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-zinc-500 border border-zinc-800 rounded-full mb-6">
                        Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Progetti recenti
                    </h2>
                    <p className="text-zinc-400 max-w-lg mx-auto">
                        MVP lanciati per i nostri clienti
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:bg-white/[0.04]">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center text-2xl">
                                        {project.icon}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-semibold text-white group-hover:text-[#4a7dd4] transition-colors">
                                                {project.title}
                                            </h3>
                                            <span className={`px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-full ${project.statusColor === 'emerald'
                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                }`}>
                                                {project.status}
                                            </span>
                                        </div>

                                        <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center gap-4 text-xs text-zinc-500">
                                            <span className="flex items-center gap-1.5">
                                                <span className="text-zinc-600">📅</span>
                                                {project.year}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                            <span className="flex items-center gap-1.5">
                                                <span className="text-zinc-600">📊</span>
                                                {project.stats}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-zinc-600 text-sm mt-10"
                >
                    + altri progetti in sviluppo
                </motion.p>
            </div>
        </section>
    )
}
