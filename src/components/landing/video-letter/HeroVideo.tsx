'use client'

import React from 'react'
import { GradientButton } from '@/components/ui/gradient-button'

export default function HeroVideo() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#4f75c7] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="flex flex-col items-center text-center">

                    <div className="mb-12 max-w-7xl">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Marketing a 360° per imprenditori che vogliono risultati!
                        </h1>
                    </div>

                    <div className="w-full max-w-7xl mb-12">
                        <div className="relative aspect-video bg-black/20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
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

                    <div className="mb-8 max-w-4xl">
                        <p className="text-xl sm:text-2xl text-white/90 mb-6 leading-relaxed">
                            Diamo voce e visibilità alle aziende di Roma, portando più clienti e più fatturato con strategie integrate e misurabili.
                        </p>

                        <p className="text-lg sm:text-xl text-white/90 font-medium">
                            Affidati a <span className="font-bold">VittoriConsulting</span> gli ideatori del Metodo che sta rivoluzionando il business di oltre <span className="font-bold">180 Imprenditori</span> e PMI romani.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
                        <GradientButton
                            size="lg"
                            className="text-lg px-10 py-5 shadow-2xl hover:scale-105 transition-transform"
                        >
                            Prenota subito la tua consulenza gratuita
                        </GradientButton>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-white/90 text-base">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Consulenza 100% gratuita</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>180+ Imprenditori serviti</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Risultati misurabili garantiti</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

