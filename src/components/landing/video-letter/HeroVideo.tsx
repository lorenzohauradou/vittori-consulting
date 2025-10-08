'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GradientButton } from '@/components/ui/gradient-button'
import { TrustedCustomers } from '@/components/ui/trusted-customers'
import Image from "next/image";


const words = ['risultati!', 'crescita!', 'efficienza!', 'visibilità!', 'profitto!']

export default function HeroVideo() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[currentWordIndex]
        const typingSpeed = isDeleting ? 50 : 100
        const pauseTime = isDeleting ? 500 : 2000

        const timeout = setTimeout(() => {
            if (!isDeleting && displayText === currentWord) {
                setTimeout(() => setIsDeleting(true), pauseTime)
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false)
                setCurrentWordIndex((prev) => (prev + 1) % words.length)
            } else {
                setDisplayText(
                    isDeleting
                        ? currentWord.substring(0, displayText.length - 1)
                        : currentWord.substring(0, displayText.length + 1)
                )
            }
        }, typingSpeed)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentWordIndex])

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#4f75c7] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 max-w-7xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <div className="bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-full px-4 overflow-hidden h-14 flex items-center">
                                <div className="flex items-center">
                                    <Image
                                        src="/images/logo/logo-circle.webp"
                                        alt="Metodo Vittori 360"
                                        width={54}
                                        height={54}
                                        className="h-auto w-auto"
                                    />
                                    <span className="text-blue-100 font-bold text-sm pr-2">
                                        VITTORI CONSULTING
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
                        >
                            Marketing a{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text text-transparent">
                                    360°
                                </span>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-white to-blue-200 rounded-full origin-left"
                                />
                            </span>
                            per imprenditori che vogliono{' '}
                            <span className="relative inline-block min-w-[250px] sm:min-w-[300px]">
                                <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-clip-text text-transparent font-black">
                                    {displayText}
                                    {(isDeleting || displayText !== words[currentWordIndex]) && (
                                        <span className="animate-pulse text-blue-200">|</span>
                                    )}
                                </span>
                            </span>
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mb-8 max-w-4xl w-full"
                    >
                        <p className="text-2xl sm:text-3xl text-white leading-relaxed text-center font-medium">
                            Diamo voce e visibilità alle aziende di Roma, portando più clienti e più fatturato con <span className="font-bold text-blue-100">strategie integrate e misurabili</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="flex items-center justify-center gap-3 mb-12"
                    >
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-200 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-200 animate-pulse delay-75"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-200 animate-pulse delay-150"></div>
                        </div>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
                    </motion.div>

                    <div className="w-full max-w-7xl mb-12">
                        <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-video bg-black/20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer">
                                        <svg
                                            className="w-8 h-8 text-[#2e54a1] ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-white text-lg font-semibold">
                                        Guarda il Video
                                    </p>
                                </div>
                            </div>

                            {/* <video 
                                className="w-full h-full object-cover"
                                controls
                                poster="/path-to-thumbnail.jpg"
                            >
                                <source src="/videos/vsl-video.mp4" type="video/mp4" />
                            </video> */}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="mb-10"
                    >
                        <TrustedCustomers />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="mb-12 max-w-4xl w-full"
                    >
                        <p className="text-xl sm:text-2xl text-white/90 text-center leading-relaxed">
                            Affidati a <span className="font-bold text-blue-100">VittoriConsulting</span> gli ideatori del Metodo che sta rivoluzionando il business di oltre <span className="font-bold text-blue-100">180 Imprenditori</span> e PMI romani.
                        </p>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
                        <GradientButton
                            size="lg"
                            className="text-lg px-10 py-5 shadow-2xl hover:scale-105 transition-transform"
                        >
                            Prenota subito la tua consulenza gratuita
                        </GradientButton>
                    </div>
                </div>
            </div>
        </section >
    )
}

