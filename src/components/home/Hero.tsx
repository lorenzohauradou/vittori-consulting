'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CustomBackground } from '@/components/ui/custom-background'
import { useOptin } from '@/contexts/OptinContext'
import Link from 'next/link'
import { Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react'

export default function Hero() {
    const [currentPhase, setCurrentPhase] = useState(0)
    const { openModal } = useOptin()
    const videoRef = useRef<HTMLVideoElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const [isMuted, setIsMuted] = useState(true)
    const [showAudioButton, setShowAudioButton] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentPhase(prev => prev === 0 ? 1 : 0)
        }, currentPhase === 0 ? 2000 : 3000)
        return () => clearTimeout(timer)
    }, [currentPhase])

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            const newMutedState = !isMuted
            setIsMuted(newMutedState)

            setShowAudioButton(true)

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            if (!newMutedState) {
                timeoutRef.current = setTimeout(() => {
                    setShowAudioButton(false)
                }, 2000)
            }
        }
    }

    return (
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
                                    onClick={openModal}
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

                        <div className="relative z-10 flex justify-center lg:justify-end">
                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="w-96 h-96 lg:h-100 lg:w-100 rounded-full overflow-hidden shadow-2xl border-8 border-[#2e54a1] backdrop-blur-sm bg-white/10 relative cursor-pointer"
                                    onClick={toggleMute}
                                >
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover pointer-events-none"
                                        style={{ objectPosition: 'center 57%' }}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        aria-label="Video presentazione Valerio Vittori - VittoriConsulting"
                                    >
                                        <source src="/videos/socialvideo.mp4" type="video/mp4" />
                                        <track kind="captions" />
                                        Video presentazione di Valerio Vittori
                                    </video>

                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-xl -z-10 scale-110"></div>
                                </motion.div>

                                {showAudioButton && (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            toggleMute()
                                        }}
                                        className="absolute top-8 right-8 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-[#2e54a1] hover:bg-white transition-all z-30 focus:outline-none focus:ring-2 focus:ring-[#2e54a1]/50 shadow-xl border-2 border-[#2e54a1]/20"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
                                        title={isMuted ? "Attiva audio" : "Disattiva audio"}
                                    >
                                        {isMuted ? (
                                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                            </svg>
                                        )}
                                    </motion.button>
                                )}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.6 }}
                                    className="absolute -bottom-30 lg:-bottom-16 left-1/2 transform -translate-x-1/2 w-full -mb-14"
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
    )
}