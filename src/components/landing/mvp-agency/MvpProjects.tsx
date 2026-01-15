"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"

export default function Projects() {
    const ref = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    const projects = [
        {
            title: "Appuntoai",
            description: "Trasforma ore di lezioni audio/video in trascrizioni, mappe mentali, quiz e interrogazioni AI",
            media: { type: "image" as const, src: "https://vittoriconsulting.b-cdn.net/mvp/appuntoai.webp" },
            tags: ["SaaS", "Next.js", "Python", "Live Kit", "Groq"],
            link: "https://appuntoai.com",
            status: "Attivo",
            statusEmoji: "🚴",
        },
        {
            title: "Swipe Carousel",
            description: "Trasforma i caroselli dei competitor nel tuo stile unico usando l'AI",
            media: { type: "video" as const, src: "https://vz-b2f9626e-b59.b-cdn.net/5b535d49-339c-4b14-b0af-fb4f85a68759/play_720p.mp4" },
            tags: ["SaaS", "Next.js", "Python", "AI"],
            link: "https://swipecarousel.com",
            status: "Attivo",
            statusEmoji: "🚴",
        },
        {
            title: "Vittori Consulting",
            description: "Sito web agenzia marketing con design moderno e animazioni fluide",
            media: { type: "image" as const, src: "https://vittoriconsulting.b-cdn.net/mvp/vittori.webp" },
            tags: ["Next.js", "Tailwind", "Framer"],
            link: "https://vittoriconsulting.it",
            github: "https://github.com/lorenzohauradou/vittoriconsulting",
            status: "Completato",
            statusEmoji: "🚀",
        },
        {
            title: "Waibe",
            description: "Trasforma i tuoi selfie in viaggi nel tempo attraverso la storia",
            media: { type: "image" as const, src: "https://vittoriconsulting.b-cdn.net/mvp/waibe1.webp" },
            tags: ["Next.js", "Python", "AI"],
            link: "https://waibe.app",
            status: "Gratis",
        },
        {
            title: "OsFlumen",
            description: "Sito web per olio d'oliva italiano",
            media: { type: "image" as const, src: "https://vittoriconsulting.b-cdn.net/mvp/OsFlumen1.webp" },
            tags: ["React", "Tailwind"],
            link: "https://osflumen.com",
            github: "https://github.com/lorenzohauradou/osflumen",
            status: "Completato",
            statusEmoji: "🚀",
        },
        {
            title: "MagicBox Roma",
            description: "Sito web azienda di imballaggi e spedizioni con form di contatto integrato",
            media: { type: "image" as const, src: "https://vittoriconsulting.b-cdn.net/mvp/magicboxroma.webp" },
            tags: ["Next.js", "Tailwind", "Resend"],
            link: "https://magicboxroma.it",
            github: "https://github.com/lorenzohauradou/magicboxroma",
            status: "Completato",
            statusEmoji: "🚀",
        },
    ]

    return (
        <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl mx-auto px-6 mb-10"
                >
                    <h2 className="text-2xl font-medium tracking-tight text-white">Alcuni Progetti</h2>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-6 md:w-16 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-6 md:w-16 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto pb-4 px-6 md:px-16 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, x: 40 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
                            >
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block h-full"
                                >
                                    <article className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden h-full hover:bg-white/[0.04] transition-colors">
                                        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                                            {project.media.type === "video" ? (
                                                <video
                                                    src={project.media.src}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <Image
                                                    src={project.media.src}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            )}
                                        </div>

                                        <div className="p-5">
                                            <div className="flex items-start justify-between gap-4 mb-2">
                                                <h3 className="font-medium text-white group-hover:text-zinc-300 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-zinc-500 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                            </div>

                                            <p className="text-sm text-zinc-500 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.tags.slice(0, 3).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs text-zinc-500 bg-white/5 px-2 py-0.5 rounded-md"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    {project.tags.length > 3 && (
                                                        <span className="text-xs text-zinc-500">
                                                            +{project.tags.length - 3}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    {project.github && (
                                                        <button
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                e.stopPropagation()
                                                                window.open(project.github, "_blank")
                                                            }}
                                                            className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                                                            aria-label="Vedi codice sorgente"
                                                        >
                                                            <Github className="h-4 w-4 text-zinc-500" />
                                                        </button>
                                                    )}

                                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-md flex items-center gap-1 ${project.status === "Attivo"
                                                        ? "bg-green-500/10 text-green-400"
                                                        : project.status === "Gratis"
                                                            ? "bg-blue-500/10 text-blue-400"
                                                            : "bg-white/5 text-zinc-500"
                                                        }`}>
                                                        {project.statusEmoji && <span>{project.status} </span>}
                                                        {project.statusEmoji}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="mt-10 text-center"
                >
                    <a
                        href="https://github.com/lorenzohauradou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors group"
                    >
                        <Github className="h-4 w-4" />
                        Vedi altri progetti su GitHub
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
