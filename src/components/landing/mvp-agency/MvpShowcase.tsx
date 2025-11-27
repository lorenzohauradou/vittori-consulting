'use client'

import { motion } from 'framer-motion'
import { MoveRight, CheckCircle2, Lightbulb, Palette, Rocket, Settings, Blocks } from 'lucide-react'
import { NextJsIcon, PythonIcon, SupabaseIcon } from '@/components/icons/tech-icons'

const functionalities = [
    {
        id: 'idea-to-mvp',
        title: 'Idea to MVP',
        description: 'Trasformiamo la tua idea in un prodotto funzionante e scalabile',
        visual: () => <IdeaToMvpVisual />,
    },
    {
        id: 'design-system',
        title: 'Design System',
        description: 'UI/UX moderna che ispira fiducia nei tuoi primi utenti',
        visual: () => <DesignSystemVisual />,
    },
    {
        id: 'modern-stack',
        title: 'Stack Moderno',
        description: 'Next.js, Python, Supabase - pronto per scalare',
        visual: () => <ModernStackVisual />,
    },
    {
        id: 'agile-dev',
        title: 'Sviluppo Agile',
        description: 'Sprint settimanali con demo ogni venerdì',
        visual: () => <AgileDevVisual />,
    },
    {
        id: 'core-features',
        title: 'Feature Core',
        description: 'Focus sulle funzionalità che contano davvero',
        visual: () => <CoreFeaturesVisual />,
    },
    {
        id: 'launch-ready',
        title: 'Pronto al Lancio',
        description: 'Deploy, analytics e supporto post-lancio inclusi',
        visual: () => <LaunchReadyVisual />,
    },
]

export default function MvpShowcase() {
    return (
        <section className="relative border-y border-white/5 bg-white/[0.01] py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-10 flex items-end justify-between">
                    <div className="max-w-md">
                        <h3 className="text-xl font-medium tracking-tight text-white">
                            Tutto ciò che serve
                        </h3>
                        <p className="mt-2 text-zinc-500 text-sm">
                            Per lanciare il tuo prodotto velocemente
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative flex">
                <div
                    className="flex gap-4 px-4 pb-6 pt-2 animate-scroll hover:[animation-play-state:paused]"
                    style={{
                        animation: 'scroll 25s linear infinite alternate',
                    }}
                >
                    {functionalities.map((func, index) => (
                        <motion.div
                            key={func.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            className="relative min-w-[280px] shrink-0 overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-1 md:min-w-[340px]"
                        >
                            <div className="relative h-40 w-full overflow-hidden rounded-lg bg-black/20 p-6">
                                <func.visual />
                            </div>
                            <div className="p-4">
                                <h4 className="font-medium text-white text-sm">{func.title}</h4>
                                <p className="mt-1 text-xs text-zinc-500">{func.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% + 100vw - 32px));
                    }
                }
            `}</style>
        </section>
    )
}

function IdeaToMvpVisual() {
    return (
        <div className="relative flex h-full w-full items-center justify-center gap-4">
            <motion.div
                animate={{
                    x: [0, 30, 30, 0],
                    opacity: [1, 1, 0, 0],
                    scale: [1, 1, 0.5, 0.5]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    times: [0, 0.4, 0.6, 1],
                    ease: "easeInOut"
                }}
                className="z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10"
            >
                <Lightbulb className="h-5 w-5 text-amber-400/80" />
            </motion.div>

            <motion.div
                animate={{ opacity: [0, 0.5, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
                className="text-zinc-600"
            >
                <MoveRight className="h-4 w-4" />
            </motion.div>

            <motion.div
                animate={{
                    scale: [0.8, 0.8, 1, 1],
                    opacity: [0.5, 0.5, 1, 1]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    times: [0, 0.4, 0.6, 1],
                    ease: "easeInOut"
                }}
                className="relative flex h-14 w-12 flex-col gap-1 rounded-md border border-white/10 bg-white/5 p-2"
            >
                <div className="h-1 w-3/4 rounded-full bg-white/20" />
                <div className="h-0.5 w-full rounded-full bg-white/10" />
                <div className="h-0.5 w-full rounded-full bg-white/10" />
                <div className="h-0.5 w-2/3 rounded-full bg-white/10" />
                <motion.div
                    animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                    transition={{ delay: 1.8, duration: 0.4, repeat: Infinity, repeatDelay: 2.6 }}
                    className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/90"
                >
                    <CheckCircle2 className="h-2.5 w-2.5 text-white" />
                </motion.div>
            </motion.div>
        </div>
    )
}

function DesignSystemVisual() {
    return (
        <div className="flex h-full w-full items-center justify-center gap-3">
            <div className="flex flex-col gap-2">
                {['bg-zinc-700', 'bg-zinc-600', 'bg-zinc-500'].map((color, i) => (
                    <motion.div
                        key={color}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2, repeat: Infinity, repeatDelay: 2, duration: 0.3 }}
                        className={`h-6 w-6 rounded ${color}`}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-1.5 rounded-md border border-white/10 bg-white/5 p-3">
                <div className="h-1 w-16 rounded-full bg-white/30" />
                <div className="h-0.5 w-12 rounded-full bg-white/10" />
                <div className="flex gap-1 mt-1">
                    <div className="h-4 w-8 rounded bg-white/10" />
                    <div className="h-4 w-8 rounded bg-white/20" />
                </div>
            </div>
        </div>
    )
}

function ModernStackVisual() {
    const techs = [
        { name: 'Next.js', icon: <NextJsIcon className="h-3 w-3 text-white" /> },
        { name: 'Python', icon: <PythonIcon className="h-3 w-3 text-[#3776AB]" /> },
        { name: 'Supabase', icon: <SupabaseIcon className="h-3 w-3 text-[#3ECF8E]" /> },
    ]
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            {techs.map((tech, i) => (
                <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.3, repeat: Infinity, repeatDelay: 2.5, duration: 0.3 }}
                    className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5"
                >
                    {tech.icon}
                    <span className="text-xs text-zinc-300">{tech.name}</span>
                </motion.div>
            ))}
        </div>
    )
}
function AgileDevVisual() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex gap-1">
                {[1, 2, 3, 4].map((week) => (
                    <motion.div
                        key={week}
                        initial={{ scaleY: 0.3 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                            delay: week * 0.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                            duration: 0.3
                        }}
                        className="w-6 origin-bottom"
                    >
                        <div className="h-16 rounded-t bg-gradient-to-t from-zinc-700 to-zinc-500" />
                        <div className="mt-1 text-center text-[8px] text-zinc-500">W{week}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

function CoreFeaturesVisual() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="grid grid-cols-2 gap-2">
                {[Blocks, Settings, Palette, Rocket].map((Icon, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.15, repeat: Infinity, repeatDelay: 3, duration: 0.3 }}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                    >
                        <Icon className="h-4 w-4 text-zinc-400" />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

function LaunchReadyVisual() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <motion.div
                animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10"
            >
                <Rocket className="h-6 w-6 text-emerald-400" />
            </motion.div>
        </div>
    )
}

