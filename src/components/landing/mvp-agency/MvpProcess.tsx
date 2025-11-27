'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

const steps = [
    {
        number: '01',
        title: 'Discovery Call',
        subtitle: 'Strategia',
        description:
            'Analizziamo la tua idea, definiamo le funzionalità core e creiamo un piano d\'azione. In questa fase viene descritto il backend dell\'applicazione web e tutte le sue funzioni',
        icon: MessageSquare,
    },
    {
        number: '02',
        title: 'Design & Prototipo',
        subtitle: 'Human-in-the-loop',
        description:
            'Wireframe e design ad alta fedeltà. Vedi le prime versioni per decidere il design finale, approvi a ogni step. Sarai inondato di screenshot, preparati',
        icon: PenTool,
    },
    {
        number: '03',
        title: 'Sviluppo Agile',
        description:
            'Sprint settimanali con demo per verificare le funzionalità discusse in fase 1. Codebase pulita, architettura scalabile, zero sorprese',
        icon: Code,
    },
    {
        number: '04',
        title: 'Lancio',
        description:
            'Deploy su produzione, supporto al lancio e raccolta feedback per le iterazioni future',
        icon: Rocket,
    },
]

export default function MvpProcess() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    })

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <section id="process" className="relative overflow-hidden py-24 lg:py-32">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

            <div className="container mx-auto px-6" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-20 max-w-2xl text-center space-y-4"
                >
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
                        Processo
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        Da zero a produzione in quattro step
                    </h2>
                    <p className="text-zinc-500">
                        Ogni fase mantiene la qualità al centro
                    </p>
                </motion.div>

                <div className="relative mx-auto max-w-4xl">
                    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 md:block">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute top-0 w-full bg-gradient-to-b from-zinc-500 via-zinc-600 to-transparent opacity-50"
                        />
                    </div>

                    <div className="space-y-12 md:space-y-20">
                        {steps.map((step, index) => (
                            <StepCard key={step.number} step={step} index={index} />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02]">
                        <span className="text-zinc-400 text-sm">Tempo totale:</span>
                        <span className="text-lg font-semibold text-white">3-6 settimane</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
    const stepRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: stepRef,
        offset: ['start end', 'center center'],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [index % 2 === 0 ? -30 : 30, 0]
    )

    return (
        <motion.div
            ref={stepRef}
            style={{ opacity, x }}
            className={cn(
                "relative grid gap-8 md:grid-cols-2 md:gap-12",
                index % 2 === 0 ? "md:text-right" : "md:text-left"
            )}
        >
            <div className={cn(
                "relative z-10",
                index % 2 === 1 && "md:col-start-2"
            )}>
                <div className={cn(
                    "flex flex-col gap-4",
                    index % 2 === 0 ? "md:items-end" : "md:items-start"
                )}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                        <step.icon className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="space-y-2">
                        <div className={cn(
                            "flex items-center gap-2",
                            index % 2 === 0 && "md:flex-row-reverse"
                        )}>
                            <span className="text-xs font-mono text-zinc-600">{step.number}</span>
                            {step.subtitle && (
                                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
                                    {step.subtitle}
                                </span>
                            )}
                        </div>
                        <h3 className="text-xl font-medium text-white">{step.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                    </div>
                </div>
            </div>

            <div className="absolute left-4 top-0 hidden -translate-x-1/2 md:left-1/2 md:flex">
                <motion.div
                    style={{ scale: scrollYProgress, opacity: scrollYProgress }}
                    className="h-3 w-3 rounded-full border-2 border-[#0a0a0a] bg-zinc-500"
                />
            </div>

            <div className={cn(
                "hidden md:block",
                index % 2 === 0 ? "col-start-2" : "col-start-1"
            )} />
        </motion.div>
    )
}
