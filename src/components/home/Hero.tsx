'use client'

import React from 'react'
import { CustomBackground } from '@/components/ui/custom-background'

export default function Hero() {
    return (
        <CustomBackground variant="hero" className="min-h-screen flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                    {/* Contenuto testuale a sinistra */}
                    <div className="relative z-10 text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Da Competitor a Leader del
                            <br />
                            <span>Mercato di Roma</span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl font-semibold text-white/95 mb-6 leading-relaxed">
                            Con l&apos;unico metodo che ha già trasformato il business di <span className=" font-bold">+189 imprenditori</span> e PMI romani.
                        </h2>

                        <p className="text-lg text-white/90 mb-10 max-w-lg leading-relaxed">
                            Siamo VittoriConsulting. Niente chiacchiere. Passa dall&apos;essere &apos;un&apos;opzione&apos; a essere &apos;LA scelta&apos; con il Metodo Vittori 360.
                        </p>

                        <div className="flex flex-col gap-6 mb-8">
                            {/* Stats compatte */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-white">10+</div>
                                        <div className="text-xs text-white/80">Anni</div>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-white">92%</div>
                                        <div className="text-xs text-white/80">Successo</div>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-white">189+</div>
                                        <div className="text-xs text-white/80">Progetti</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div>
                                <button className="bg-white text-[#2563eb] px-8 py-3 rounded-full font-bold text-lg hover:bg-white/90 transition-colors shadow-lg">
                                    Parliamo di business
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Video circolare a destra */}
                    <div className="relative z-10 flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Container video circolare con effetto rilievo */}
                            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/20 backdrop-blur-sm bg-white/10 relative">
                                {/* Placeholder per il video */}
                                <div className="w-full h-full bg-[#2e54a1] flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <p className="text-lg font-semibold">Video Preview</p>
                                        <p className="text-sm opacity-80">Valerio Vittori</p>
                                    </div>
                                </div>

                                {/* Effetto glow */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-xl -z-10 scale-110"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed elements */}
            <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
                <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
                    </svg>
                </button>
                <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                </button>
                <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                </button>
            </div>
        </CustomBackground>
    )
}