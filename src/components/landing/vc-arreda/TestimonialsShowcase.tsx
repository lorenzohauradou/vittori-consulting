'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from 'lucide-react'

export type Testimonial = {
    id: string
    name?: string
    company?: string
    result?: string
    logo?: {
        src: string
        alt: string
        onWhite?: boolean
    }
    aspect: '16/9' | '9/16'
    preload?: boolean
}

type Props = {
    testimonials: Testimonial[]
    libraryId: string
    logoSrc: string
    /** Classe del font display (serif) definito lato server. */
    displayClass?: string
}

/** Palette "showroom": bordeaux del brand, avorio dei materiali, ottone dei dettagli. */
const C = {
    burgundy: '#6B1C23',
    burgundyDeep: '#4E1319',
    burgundyInk: '#3C0E13',
    ivory: '#F7F1E7',
    ivoryDim: '#ECE2D1',
    brass: '#C4A06A',
    brassLight: '#E6CC9B',
}

const BRASS_EDGE = `linear-gradient(150deg, ${C.brassLight} 0%, ${C.brass} 30%, #9C7840 55%, ${C.brassLight} 78%, ${C.brass} 100%)`

function embedUrl(libraryId: string, id: string, active: boolean) {
    return `https://iframe.mediadelivery.net/embed/${libraryId}/${id}?loop=false&muted=false&preload=${active}&responsive=true`
}

function initialsOf(item: Testimonial) {
    const source = item.company || item.name || 'VC'
    return source
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? '')
        .join('')
}

/** Etichetta corta usata nella barra delle miniature. */
function shortLabel(item: Testimonial) {
    return item.company || item.name || 'Testimonianza'
}

export default function TestimonialsShowcase({ testimonials, libraryId, logoSrc, displayClass = '' }: Props) {
    const prefersReducedMotion = useReducedMotion()
    const total = testimonials.length
    const [[index, direction], setSlide] = useState<[number, number]>([0, 0])

    const paginate = useCallback(
        (dir: number) => {
            setSlide(([current]) => [(current + dir + total) % total, dir])
        },
        [total],
    )

    const goTo = useCallback((next: number) => {
        setSlide(([current]) => [next, next > current ? 1 : -1])
    }, [])

    useEffect(() => {
        if (total < 2) return
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') paginate(1)
            if (event.key === 'ArrowLeft') paginate(-1)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [paginate, total])

    const active = testimonials[index]

    const slideVariants = {
        enter: (dir: number) => ({
            opacity: 0,
            x: prefersReducedMotion ? 0 : dir > 0 ? 60 : -60,
        }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => ({
            opacity: 0,
            x: prefersReducedMotion ? 0 : dir > 0 ? -60 : 60,
        }),
    }

    return (
        <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: C.burgundy }}>
            <Backdrop />

            <header className="relative z-10 flex flex-col items-center px-5 pt-10 sm:pt-14">
                <Image
                    src={logoSrc}
                    alt="VC Arreda"
                    width={1340}
                    height={385}
                    className="h-auto w-70 sm:w-95 lg:w-110"
                    priority
                />
                <div
                    className="mt-8 h-px w-24 sm:w-32"
                    style={{ background: `linear-gradient(90deg, transparent, ${C.brass}, transparent)` }}
                />
            </header>

            {/* Intro */}
            <section className="relative z-10 mx-auto max-w-5xl px-5 pt-10 text-center sm:px-8">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-[11px] font-semibold uppercase tracking-[0.34em]"
                    style={{ color: C.brassLight }}
                >
                    Storie dei nostri partner
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
                    className={`mt-5 text-[2rem] leading-[1.12] tracking-tight text-white sm:text-[2.75rem] md:text-5xl lg:text-[3.4rem] ${displayClass}`}
                >
                    Risultati reali,
                    <span className="block" style={{ color: C.brassLight }}>
                        raccontati da chi li ha ottenuti
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.16, ease: 'easeOut' }}
                    className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
                >
                    Titolari di showroom di arredamento che hanno scelto il{' '}
                    <span className="font-semibold text-white">metodo VC Arreda</span> e raccontano, senza filtri,
                    la loro esperienza con noi
                </motion.p>

            </section>

            {/* Slider */}
            <section className="relative z-10 mx-auto mt-16 max-w-7xl px-5 sm:mt-20 sm:px-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2">
                        <span
                            className="text-3xl font-bold tabular-nums sm:text-4xl"
                            style={{ color: C.brassLight }}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-white/45">/ {String(total).padStart(2, '0')}</span>
                    </div>

                    {total > 1 && (
                        <div className="flex items-center gap-3">
                            <NavButton label="Testimonianza precedente" onClick={() => paginate(-1)}>
                                <ArrowLeft className="h-5 w-5" />
                            </NavButton>
                            <NavButton label="Testimonianza successiva" onClick={() => paginate(1)}>
                                <ArrowRight className="h-5 w-5" />
                            </NavButton>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={active.id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            drag={total > 1 ? 'x' : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.16}
                            onDragEnd={(_, info) => {
                                const power = info.offset.x + info.velocity.x * 0.2
                                if (power < -90) paginate(1)
                                else if (power > 90) paginate(-1)
                            }}
                            className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10"
                        >
                            <div
                                className={
                                    active.aspect === '9/16'
                                        ? 'order-2 mx-auto w-full max-w-[320px] sm:max-w-90 lg:order-1 lg:col-span-5 lg:mx-0 lg:ml-auto'
                                        : 'order-2 lg:order-1 lg:col-span-8'
                                }
                            >
                                <VideoFrame
                                    key={active.id}
                                    aspect={active.aspect}
                                    src={embedUrl(libraryId, active.id, true)}
                                    title={`Testimonianza ${shortLabel(active)}`}
                                />
                            </div>

                            <div
                                className={
                                    active.aspect === '9/16'
                                        ? 'order-1 flex items-center lg:order-2 lg:col-span-7'
                                        : 'order-1 lg:order-2 lg:col-span-4'
                                }
                            >
                                <div className={active.aspect === '9/16' ? 'w-full max-w-md' : 'h-full'}>
                                    <InfoPanel
                                        item={active}
                                        displayClass={displayClass}
                                        fill={active.aspect !== '9/16'}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {total > 1 && (
                    <ThumbnailRail testimonials={testimonials} index={index} onSelect={goTo} />
                )}
            </section>

            {/* CTA */}
            <section className="relative z-10 mx-auto mt-20 max-w-4xl px-5 pb-20 text-center sm:px-8 sm:pb-24">
                <Panel className="px-6 py-12 sm:px-14 sm:py-16">
                    <p
                        className="text-[11px] font-semibold uppercase tracking-[0.3em]"
                        style={{ color: '#9C7840' }}
                    >
                        Il prossimo passo
                    </p>
                    <h2
                        className={`mt-4 text-[1.75rem] leading-tight sm:text-4xl ${displayClass}`}
                        style={{ color: C.burgundyDeep }}
                    >
                        Il prossimo risultato può essere il tuo
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: 'rgba(60,14,19,0.68)' }}>
                        Scopri come funziona il metodo VC Arreda e quali risultati concreti puoi ottenere per il tuo showroom
                    </p>
                    <Link
                        href="/vc-arreda-vsl"
                        className="group mt-9 inline-flex items-center gap-2 rounded-sm px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:scale-[1.02] sm:text-base"
                        style={{ backgroundColor: C.burgundy, boxShadow: '0 16px 34px rgba(60,14,19,0.32)' }}
                    >
                        Guarda il metodo
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </Panel>
            </section>
        </main>
    )
}

function Backdrop() {
    return (
        <>
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `radial-gradient(60% 40% at 85% 25%, rgba(196,160,106,0.14) 0%, rgba(0,0,0,0) 70%), radial-gradient(55% 40% at 8% 60%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 70%), linear-gradient(180deg, ${C.burgundy} 0%, ${C.burgundy} 30%, #5C171D 70%, ${C.burgundyDeep} 100%)`,
                }}
            />
            {/* grana leggera: dà al fondo la texture di un tessuto d'arredo */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
                }}
            />
        </>
    )
}

/** Pannello avorio pieno, con filo d'ottone sul bordo superiore. */
function Panel({
    children,
    className = '',
    tone = 'ivory',
}: {
    children: React.ReactNode
    className?: string
    tone?: 'ivory' | 'dim'
}) {
    return (
        <div
            className={`relative overflow-hidden rounded-sm ${className}`}
            style={{
                backgroundColor: tone === 'ivory' ? C.ivory : C.ivoryDim,
                border: '1px solid rgba(156,120,64,0.28)',
                boxShadow: '0 24px 54px rgba(45,10,14,0.34)',
            }}
        >
            <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: BRASS_EDGE }} />
            {children}
        </div>
    )
}



function NavButton({
    children,
    label,
    onClick,
}: {
    children: React.ReactNode
    label: string
    onClick: () => void
}) {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            style={{
                backgroundColor: C.ivory,
                color: C.burgundy,
                border: '1px solid rgba(156,120,64,0.45)',
                boxShadow: '0 10px 24px rgba(45,10,14,0.3)',
            }}
        >
            {children}
        </button>
    )
}

/** Il video è incorniciato come un quadro: cornice in ottone su fondo avorio. */
function VideoFrame({ aspect, src, title }: { aspect: string; src: string; title: string }) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div
            className="rounded-sm p-0.5"
            style={{ background: BRASS_EDGE, boxShadow: '0 30px 70px rgba(45,10,14,0.45)' }}
        >
            <div className="rounded-[2px] p-2 sm:p-2.5" style={{ backgroundColor: C.ivory }}>
                <div
                    className="relative w-full overflow-hidden rounded-[2px]"
                    style={{ aspectRatio: aspect, backgroundColor: C.burgundyInk }}
                >
                    {!loaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="flex h-16 w-16 items-center justify-center rounded-full"
                                style={{ border: `1px solid ${C.brass}`, color: C.brassLight }}
                            >
                                <Play className="h-6 w-6 translate-x-px" fill="currentColor" />
                            </div>
                        </div>
                    )}
                    <iframe
                        src={src}
                        title={title}
                        loading="lazy"
                        onLoad={() => setLoaded(true)}
                        className="absolute inset-0 h-full w-full border-0"
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

function LogoBadge({ item, size = 'lg' }: { item: Testimonial; size?: 'lg' | 'sm' }) {
    const big = size === 'lg'

    if (!item.logo) {
        return (
            <div
                className={`flex shrink-0 items-center justify-center rounded-sm font-semibold ${big ? 'h-19 w-19 text-xl' : 'h-14 w-14 text-sm'
                    }`}
                style={{
                    backgroundColor: '#FFFFFF',
                    color: C.burgundy,
                    border: '1px solid rgba(156,120,64,0.35)',
                }}
            >
                {initialsOf(item)}
            </div>
        )
    }

    return (
        <div
            className={`flex shrink-0 items-center justify-center rounded-sm bg-white ${big ? 'h-19 min-w-33 px-5' : 'h-14 min-w-23 px-3'
                }`}
            style={{ border: '1px solid rgba(156,120,64,0.35)' }}
        >
            <Image
                src={item.logo.src}
                alt={item.logo.alt}
                width={240}
                height={96}
                className={`w-auto object-contain ${big ? 'max-h-14' : 'max-h-10'}`}
                unoptimized
            />
        </div>
    )
}

function InfoPanel({
    item,
    displayClass,
    fill,
}: {
    item: Testimonial
    displayClass: string
    /** Nel formato orizzontale il pannello accompagna l'altezza della cornice video. */
    fill: boolean
}) {
    const hasIdentity = Boolean(item.name || item.company || item.logo)

    return (
        <Panel className={`flex flex-col gap-6 p-6 sm:p-8 ${fill ? 'h-full' : ''}`}>
            {hasIdentity && (
                <div className="flex items-center gap-4">
                    <LogoBadge item={item} />
                    <div className="min-w-0">
                        {item.name && (
                            <p
                                className={`truncate text-xl leading-tight sm:text-2xl ${displayClass}`}
                                style={{ color: C.burgundyDeep }}
                            >
                                {item.name}
                            </p>
                        )}
                        {item.company && (
                            <p
                                className="mt-1 text-sm font-medium uppercase tracking-widest"
                                style={{ color: 'rgba(60,14,19,0.55)' }}
                            >
                                {item.company}
                            </p>
                        )}
                        {!item.name && !item.company && item.logo && (
                            <p className="text-sm" style={{ color: 'rgba(60,14,19,0.6)' }}>
                                {item.logo.alt}
                            </p>
                        )}
                    </div>
                </div>
            )}

            <div className="h-px w-full" style={{ backgroundColor: 'rgba(156,120,64,0.28)' }} />

            {item.result && (
                <div className={fill ? 'flex flex-1 flex-col justify-center' : ''}>
                    <p
                        className="text-[10px] font-semibold uppercase tracking-[0.26em]"
                        style={{ color: '#9C7840' }}
                    >
                        Risultato
                    </p>
                    <p
                        className="mt-3 text-[1.5rem] font-bold leading-[1.2] tracking-tight sm:text-[1.75rem]"
                        style={{ color: C.burgundy }}
                    >
                        {item.result}
                    </p>
                </div>
            )}

        </Panel>
    )
}

function ThumbnailRail({
    testimonials,
    index,
    onSelect,
}: {
    testimonials: Testimonial[]
    index: number
    onSelect: (next: number) => void
}) {
    return (
        <div className="mt-10 -mx-5 overflow-x-auto px-5 pb-3 scrollbar-hide sm:mx-0 sm:px-0">
            <div className="flex min-w-max gap-4 sm:min-w-0 sm:grid sm:grid-cols-2 lg:grid-cols-4">
                {testimonials.map((item, i) => {
                    const isActive = i === index
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelect(i)}
                            aria-current={isActive}
                            className="group relative w-67 overflow-hidden rounded-sm p-4 text-left transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                            style={{
                                backgroundColor: isActive ? C.ivory : C.ivoryDim,
                                border: `1px solid ${isActive ? 'rgba(156,120,64,0.65)' : 'rgba(156,120,64,0.22)'}`,
                                boxShadow: isActive
                                    ? '0 18px 38px rgba(45,10,14,0.34)'
                                    : '0 10px 22px rgba(45,10,14,0.2)',
                                opacity: isActive ? 1 : 0.82,
                            }}
                        >
                            {isActive && (
                                <span
                                    className="absolute inset-x-0 top-0 h-0.75"
                                    style={{ background: BRASS_EDGE }}
                                />
                            )}
                            <div className="flex items-center gap-3">
                                <LogoBadge item={item} size="sm" />
                                <div className="min-w-0 flex-1">
                                    <p
                                        className="truncate text-sm font-semibold"
                                        style={{ color: C.burgundyDeep }}
                                    >
                                        {shortLabel(item)}
                                    </p>
                                    <p
                                        className="truncate text-xs"
                                        style={{ color: 'rgba(60,14,19,0.55)' }}
                                    >
                                        {item.result ?? item.name ?? 'Guarda la storia'}
                                    </p>
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
