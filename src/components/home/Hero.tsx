'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CustomBackground } from '@/components/ui/custom-background'
import { useOptin } from '@/contexts/OptinContext'
import Link from 'next/link'
import { Mail, Phone, Linkedin, Facebook, Instagram, Play } from 'lucide-react'
import Script from 'next/script'
import Image from 'next/image'

// BunnyCDN embed URL - for normal browsers
const HERO_VIDEO_EMBED_URL = 'https://iframe.mediadelivery.net/embed/510109/3c7e2de4-a8c3-4f2b-bd9f-1932b6e23f93?autoplay=true&loop=true&muted=true&preload=true&disableIosPlayer=true'

// Type for BunnyCDN player.js
interface BunnyPlayer {
    on: (event: string, callback: () => void) => void
    mute: () => void
    unmute: () => void
    play: () => void
}

interface PlayerJS {
    Player: new (element: HTMLIFrameElement) => BunnyPlayer
}

declare global {
    interface Window {
        playerjs?: PlayerJS
    }
}

// Detect TikTok, Instagram, Facebook in-app browsers
function isInAppBrowser(): boolean {
    if (typeof window === 'undefined') return false
    const ua = navigator.userAgent || navigator.vendor
    return /TikTok|Instagram|FBAN|FBAV|Twitter|Line\//i.test(ua)
}

export default function Hero() {
    const [currentPhase, setCurrentPhase] = useState(0)
    const { openModal, checkAuth } = useOptin()
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const playerRef = useRef<BunnyPlayer | null>(null)
    const [isInApp, setIsInApp] = useState(false)
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {
        setIsInApp(isInAppBrowser())
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentPhase(prev => prev === 0 ? 1 : 0)
        }, currentPhase === 0 ? 2000 : 3000)

        return () => clearTimeout(timer)
    }, [currentPhase])

    const initPlayer = useCallback(() => {
        if (iframeRef.current && window.playerjs && !playerRef.current) {
            try {
                const player = new window.playerjs.Player(iframeRef.current)
                player.on('ready', () => {
                    playerRef.current = player
                    player.play()
                })
            } catch (error) {
                console.log('Player init error:', error)
            }
        }
    }, [])

    const handlePlayClick = () => {
        if (isInApp) {
            // In TikTok/IG browser, open video in new tab
            window.open('https://iframe.mediadelivery.net/embed/510109/3c7e2de4-a8c3-4f2b-bd9f-1932b6e23f93?autoplay=true', '_blank')
        } else {
            setShowVideo(true)
        }
    }

    return (
        <>
            {!isInApp && (
                <Script
                    src="https://assets.mediadelivery.net/playerjs/player-0.1.0.min.js"
                    strategy="afterInteractive"
                    onLoad={initPlayer}
                />
            )}
            <CustomBackground variant="hero" className="min-h-screen flex flex-col pt-16 pb-46 lg:pb-0">
                <div className="bg-white/95 hidden md:block backdrop-blur-sm border-b max-w-4xl mx-auto rounded-3xl border-white/20 shadow-sm mt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-[#2e54a1]" />
                                    <span className="text-gray-700 font-medium">info@vittoriconsulting.it</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-[#2e54a1]" />
                                    <span className="text-gray-700 font-medium">+39 351 370 8950</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600">Seguici:</span>
                                <div className="flex items-center gap-3">
                                    <Link
                                        href="https://www.linkedin.com/in/valerio-vittori-290022233/"
                                        className="w-8 h-8 bg-[#2e54a1] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                                        aria-label="Seguici su LinkedIn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="https://www.facebook.com/profile.php?id=61578681689930"
                                        className="w-8 h-8 bg-[#2e54a1] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                                        aria-label="Seguici su Facebook"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Facebook className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/vittoriconsulting"
                                        className="w-8 h-8 bg-[#2e54a1] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                                        aria-label="Segui VittoriConsulting su Instagram"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                        <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
                            <div className="relative z-10 text-left">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                    <span className="sr-only">Agenzia Marketing Roma - Consulenza Marketing 360° per Imprenditori e PMI - VittoriConsulting</span>
                                    <div className="relative inline-block" aria-hidden="true">
                                        <AnimatePresence mode="wait">
                                            {currentPhase === 0 ? (
                                                <motion.span
                                                    key="competitor"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    Da Competitor
                                                </motion.span>
                                            ) : (
                                                <motion.span
                                                    key="leader"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6 }}
                                                    className="relative"
                                                >
                                                    A Leader
                                                    <motion.div
                                                        initial={{ scaleX: 0 }}
                                                        animate={{ scaleX: 1 }}
                                                        transition={{ duration: 0.8, delay: 0.3 }}
                                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white to-blue-200 rounded-full origin-left"
                                                    />
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <br />
                                    {" "}del
                                    <br />
                                    <span className="text-blue-100">Mercato di Roma</span>
                                </h1>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="text-xl sm:text-2xl font-semibold text-white/95 mb-6 leading-relaxed"
                                >
                                    Con l&apos;unico metodo che ha già trasformato il business di <span className="font-bold">+189 imprenditori</span> e PMI romani.
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed"
                                >
                                    Siamo VittoriConsulting. Niente chiacchiere. Passa dall&apos;essere &apos;un&apos;opzione&apos; a essere &apos;LA scelta&apos; con il Metodo Vittori 360.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="flex flex-col gap-6"
                                >
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        className="text-white/95 font-semibold text-lg mb-2"
                                    >
                                        Vuoi sapere come?
                                    </motion.p>

                                    <motion.button
                                        onClick={async () => {
                                            const isAuth = await checkAuth()
                                            if (isAuth) {
                                                window.location.href = '/video-letter'
                                            } else {
                                                openModal('video-letter')
                                            }
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-white text-[#2e54a1] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/95 transition-all duration-300 shadow-xl hover:shadow-2xl w-fit"
                                    >
                                        Parliamo di business
                                    </motion.button>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.svg
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: 1.1 + i * 0.1 }}
                                                    className="w-5 h-5 text-yellow-400 fill-current"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </motion.svg>
                                            ))}
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 1.6 }}
                                            className="text-white/90"
                                        >
                                            <span className="font-bold">4.9/5</span>
                                            <span className="text-sm ml-2 opacity-80">(127 recensioni)</span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="relative z-10 flex justify-center lg:justify-end md:-top-10">
                                <div className="relative">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                        className="w-96 h-96 lg:h-120 lg:w-120 rounded-full overflow-hidden shadow-2xl border-8 border-[#2e54a1] backdrop-blur-sm bg-black relative"
                                    >
                                        {isInApp || !showVideo ? (
                                            // Static thumbnail with play button for in-app browsers or before video loads
                                            <div
                                                className="w-full h-full relative cursor-pointer group"
                                                onClick={handlePlayClick}
                                            >
                                                <Image
                                                    src="https://vittoriconsulting.b-cdn.net/team/valerio.png"
                                                    alt="Valerio Vittori - VittoriConsulting"
                                                    fill
                                                    className="object-cover object-top"
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                                    <motion.div
                                                        animate={{ scale: [1, 1.1, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                                                    >
                                                        <Play className="w-10 h-10 text-[#2e54a1] ml-1" fill="currentColor" />
                                                    </motion.div>
                                                </div>
                                                {isInApp && (
                                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                                        <span className="bg-white/90 text-[#2e54a1] px-3 py-1 rounded-full text-sm font-medium">
                                                            Tocca per vedere il video
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            // Video iframe for normal browsers
                                            <div className="absolute inset-[-50%] w-[200%] h-[200%] flex items-center justify-center">
                                                <iframe
                                                    ref={iframeRef}
                                                    src={HERO_VIDEO_EMBED_URL}
                                                    loading="eager"
                                                    className="w-full h-full"
                                                    style={{ border: 'none' }}
                                                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                                                    allowFullScreen={false}
                                                    title="Video presentazione Valerio Vittori - VittoriConsulting"
                                                />
                                            </div>
                                        )}

                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-xl -z-10 scale-110"></div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 1.6 }}
                                        className="absolute -bottom-30 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-full -mb-14"
                                    >
                                        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/40">
                                            <div className="flex justify-between items-center gap-8">
                                                <div className="text-center">
                                                    <div className="flex items-center justify-center mb-2">
                                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="text-2xl font-bold text-gray-900">6+</div>
                                                    <div className="text-xs text-gray-600 font-medium">Anni di esperienza</div>
                                                </div>

                                                <div className="text-center">
                                                    <div className="flex items-center justify-center mb-2">
                                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="text-2xl font-bold text-gray-900">97%</div>
                                                    <div className="text-xs text-gray-600 font-medium">Tasso di successo</div>
                                                </div>

                                                <div className="text-center">
                                                    <div className="flex items-center justify-center mb-2">
                                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="text-2xl font-bold text-gray-900">189+</div>
                                                    <div className="text-xs text-gray-600 font-medium">Progetti realizzati</div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </CustomBackground>
        </>
    )
}
