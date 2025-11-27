'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const CALENDLY_URL = 'https://calendly.com/valerio-vittori/30min?hide_gdpr_banner=1'

export default function MvpCTA() {
    return (
        <section className="relative py-24 sm:py-32">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2e54a1]/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <Image
                            src="/images/logo/reverse.png"
                            alt="VittoriConsulting"
                            width={500}
                            height={500}
                            className="mx-auto brightness-0 invert opacity-30"
                        />
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Pronto a costruire?
                    </h2>

                    <p className="text-zinc-400 max-w-md mx-auto mb-10">
                        Prenota una discovery call gratuita di 30 minuti.
                        Analizzeremo insieme la tua idea e ti daremo un piano d&apos;azione
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-100 transition-all"
                        >
                            Prenota la call
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <p className="mt-6 text-xs text-zinc-600">
                        30 minuti • Senza impegno • Analisi gratuita
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
