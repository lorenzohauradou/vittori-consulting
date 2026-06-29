'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Code2 } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { NextJsIcon, PythonIcon, SupabaseIcon, StripeIcon, N8nIcon } from '@/components/icons/tech-icons'

const CALENDLY_URL = 'https://calendly.com/valerio-vittori/30min?hide_gdpr_banner=1'

const words = ['veloce', 'scalabile', 'unico']

function TypewriterText() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const word = words[currentWordIndex]
        const typeSpeed = isDeleting ? 50 : 100
        const pauseTime = isDeleting ? 50 : 2000

        if (!isDeleting && currentText === word) {
            const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
            return () => clearTimeout(timeout)
        }

        if (isDeleting && currentText === '') {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
            return
        }

        const timeout = setTimeout(() => {
            setCurrentText(prev =>
                isDeleting
                    ? prev.slice(0, -1)
                    : word.slice(0, prev.length + 1)
            )
        }, typeSpeed)

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, currentWordIndex])

    return (
        <span className="inline-flex items-baseline">
            <span className="bg-linear-to-r from-[#2e54a1] via-[#4a7dd4] to-[#2e54a1] bg-clip-text text-transparent">
                un prodotto {currentText}
            </span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="ml-1 inline-block w-[3px] sm:w-1 h-[0.9em] bg-[#2e54a1] translate-y-[0.1em]"
            />
        </span>
    )
}

const techStack = [
    { icon: NextJsIcon, name: 'Next.js', color: 'text-white' },
    { icon: PythonIcon, name: 'Python', color: 'text-[#3776AB]' },
    { icon: SupabaseIcon, name: 'Supabase', color: 'text-[#3ECF8E]' },
    { icon: StripeIcon, name: 'Stripe', color: 'text-[#635BFF]' },
    { icon: N8nIcon, name: 'n8n', color: 'text-[#EA4B71]' },
]

export default function MvpHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#09090b]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[48px_48px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-linear-to-b from-[#2e54a1]/20 via-[#2e54a1]/5 to-transparent blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
                    >
                        <Code2 className="w-4 h-4 text-[#2e54a1]" />
                        <span className="text-sm text-zinc-400">MVP Development Agency</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 sm:mb-8 leading-[1.1]"
                    >
                        La tua idea,
                        <br />
                        <TypewriterText />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
                    >
                        Dall&apos;idea iniziale al tuo prodotto digitale pronto al lancio in poche settimane.
                        <span className="hidden sm:inline"><br /></span>
                        <span className="sm:hidden"> </span>
                        Sviluppiamo software moderno, intuitivo e pronto per accogliere i tuoi primi clienti
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <Link
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-zinc-100 transition-all group"
                        >
                            Prenota una call gratuita
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <button
                            onClick={() => {
                                document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="text-zinc-400 hover:text-white px-6 py-4 text-base font-medium transition-colors"
                        >
                            Come funziona →
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
                            {techStack.map((tech, i) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="group flex flex-col items-center gap-1.5 sm:gap-2"
                                >
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                                        <tech.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${tech.color}`} />
                                    </div>
                                    <span className="text-[9px] sm:text-[10px] text-zinc-500 font-medium uppercase tracking-wider sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                        {tech.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 sm:gap-8 mt-2 sm:mt-4">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600" />
                                <span className="text-[11px] sm:text-xs text-zinc-500">3-6 settimane</span>
                            </div>
                            <div className="w-px h-3 sm:h-4 bg-zinc-800" />
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600" />
                                <span className="text-[11px] sm:text-xs text-zinc-500">Codice 100% tuo</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#09090b] to-transparent" />
        </section>
    )
}
