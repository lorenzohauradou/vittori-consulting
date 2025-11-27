'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    {
        question: 'Quanto tempo ci vuole per sviluppare un MVP?',
        answer: 'Dipende dalla complessità. Starter: 4-5 settimane. Growth: 6-8 settimane. Durante la discovery call analizziamo la tua idea e ti diamo una stima precisa'
    },
    {
        question: 'Cosa succede se ho bisogno di modifiche?',
        answer: 'È normale che le idee evolvano. Includiamo revisioni in ogni fase. Per modifiche significative fuori scope, ti presentiamo opzioni trasparenti prima di procedere'
    },
    {
        question: 'Il codice sarà mio al 100%?',
        answer: 'Sì. Al termine ricevi codice sorgente, documentazione e credenziali di accesso a tutti i servizi. Sei libero di continuare lo sviluppo come preferisci'
    },
    {
        question: 'Quali tecnologie utilizzate?',
        answer: 'Stack moderno e scalabile: Next.js e React per il frontend, Supabase o PostgreSQL per il database, Stripe per i pagamenti, n8n per le automazioni, Python per AI e backend complesso, e Vercel / Digital Ocean per il deploy. Possiamo adattarci a esigenze specifiche'
    },
    {
        question: 'Offrite supporto dopo il lancio?',
        answer: 'Sì, ogni pacchetto include supporto post-lancio (da 2 settimane a 3 mesi). Risolviamo bug, ottimizziamo e ti aiutiamo con i primi feedback'
    },
    {
        question: 'Come funziona il pagamento?',
        answer: '50% all\'inizio, 50% al lancio. Per progetti Scale possiamo concordare milestone intermedie. Accettiamo bonifico e carte'
    },
]

export default function MvpFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="relative py-24 sm:py-32">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-zinc-500 border border-zinc-800 rounded-full mb-6">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Domande frequenti
                    </h2>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${openIndex === i
                                    ? 'bg-white/[0.03] border border-white/10'
                                    : 'bg-transparent border border-transparent hover:bg-white/[0.02]'
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <span className={`font-medium transition-colors ${openIndex === i ? 'text-white' : 'text-zinc-300'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-white/10' : 'bg-zinc-800'
                                        }`}>
                                        {openIndex === i ? (
                                            <Minus className="w-3 h-3 text-white" />
                                        ) : (
                                            <Plus className="w-3 h-3 text-zinc-400" />
                                        )}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pt-4 text-sm text-zinc-500 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
