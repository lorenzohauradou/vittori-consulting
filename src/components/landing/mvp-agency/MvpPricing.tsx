'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CALENDLY_URL = 'https://calendly.com/valerio-vittori/30min?hide_gdpr_banner=1'

const plans = [
    {
        name: 'Starter',
        description: 'Per validare la tua idea',
        price: '4.900',
        duration: '4-5 settimane',
        features: [
            'Landing + 3-5 schermate',
            'Autenticazione utenti',
            'Database e backend',
            'Design UI/UX moderno',
            'Deploy su produzione',
            '2 settimane supporto'
        ],
        popular: false
    },
    {
        name: 'Growth',
        description: 'Il più scelto',
        price: '9.900',
        duration: '6-8 settimane',
        features: [
            'Tutto di Starter, più:',
            'Fino a 10 schermate',
            'Pagamenti (Stripe)',
            'Dashboard admin',
            'API documentate',
            'Analytics integrati',
            '1 mese supporto',
            'Demo settimanali'
        ],
        popular: true
    },
    {
        name: 'Scale',
        description: 'Prodotti complessi',
        price: 'Custom',
        duration: '8-12 settimane',
        features: [
            'Tutto di Growth, più:',
            'Schermate illimitate',
            'Integrazioni custom',
            'Multi-tenancy',
            'Performance opt.',
            'Sicurezza avanzata',
            '3 mesi supporto',
            'Roadmap prodotto'
        ],
        popular: false
    }
]

export default function MvpPricing() {
    return (
        <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2e54a1]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2e54a1]/8 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        Pricing
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400"
                    >
                        Investimento chiaro e fisso. Niente sorprese.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 rounded-2xl transition-all duration-500 blur-xl group-hover:blur-2xl ${plan.popular ? 'bg-[#2e54a1]/20' : 'bg-white/5'}`} />

                            <div className={`relative backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 group-hover:bg-white/[0.04] ${plan.popular
                                ? 'bg-white/[0.03] border-2 border-[#2e54a1]/30 hover:border-[#2e54a1]/50'
                                : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
                                }`}>
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-[#2e54a1]/20 text-[#7da3e0] border border-[#2e54a1]/30 shadow-[0_0_20px_rgba(46,84,161,0.3)]">
                                            Più scelto
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-lg font-medium text-zinc-400 mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-zinc-500 mb-4">
                                        {plan.description}
                                    </p>
                                    <div className="mb-2">
                                        <span className="text-4xl sm:text-5xl font-bold text-white">
                                            {plan.price !== 'Custom' && '€'}{plan.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-zinc-500">
                                        {plan.duration}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.popular
                                                ? 'bg-[#2e54a1]/20 border border-[#2e54a1]/30'
                                                : 'bg-white/5'
                                                }`}>
                                                <Check className={`w-3 h-3 ${plan.popular ? 'text-[#7da3e0]' : 'text-zinc-500'}`} />
                                            </div>
                                            <span className="text-sm text-zinc-300 leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center w-full h-11 rounded-xl font-medium transition-all duration-300 group/btn ${plan.popular
                                        ? 'bg-white text-black hover:bg-zinc-200'
                                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                                        }`}
                                >
                                    {plan.price === 'Custom' ? 'Contattaci' : 'Inizia'}
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                                </Link>
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
                    IVA esclusa. Pagamento: 50% all&apos;inizio, 50% al lancio.
                </motion.p>
            </div>
        </section>
    )
}
