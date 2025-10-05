'use client'

import React from 'react'
import { GradientButton } from '@/components/ui/gradient-button'
import IPhoneCanvas from '@/components/ui/iphone-canvas'

export default function ProblemsSection() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <div className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full px-6 py-2 mb-8">
                        <span className="text-white font-bold text-sm uppercase tracking-wide">
                            Attenzione Imprenditori
                        </span>
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Il 90% degli Imprenditori romani<br />
                        <span className="text-blue-100">Commette questi Errori</span>
                    </h2>
                </div>

                <div className="mb-20">
                    <p className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
                        Dimmi se questa storia ti suona familiare:
                    </p>

                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 mb-8 border border-white/20">
                        <div className="space-y-8 text-xl sm:text-2xl text-white/90 leading-relaxed">
                            <p>
                                Hai iniziato con il <span className="font-bold text-white">&quot;cugino smanettone&quot;</span> che ti ha fatto un sito che <span className="font-bold text-blue-100">nessuno trova su Google</span>.
                            </p>

                            <p>
                                Poi hai provato con l&apos;agenzia <span className="font-bold text-white">&ldquo;giovane e dinamica&rdquo;</span> che ti ha fatto <span className="font-bold text-blue-100">spendere una barca di soldi</span> in pubblicità che <span className="font-bold text-blue-100">nessuno cliccava</span>.
                            </p>

                            <p>
                                Per poi farti seguire da uno <span className="font-bold text-white">stagista</span> che non sa neanche <span className="font-bold text-blue-100">cos&apos;è un funnel di vendita</span>.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-white/30">
                        <p className="text-2xl sm:text-3xl font-bold text-white leading-relaxed text-center">
                            <span className="text-blue-100">E adesso?</span> Adesso sei qui, paralizzato dalla paura di buttare altri soldi, mentre guardi i tuoi competitor <span className="text-blue-100">fatturare milioni</span> con strategie che sembrano copiate dal tuo stesso settore.
                        </p>
                    </div>
                </div>

                <div className="mb-20">
                    <h3 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
                        Il risultato?
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {[
                            'Budget marketing bruciato',
                            'Fiducia nelle agenzie: ZERO',
                            'Clienti acquisiti: praticamente nessuno',
                            'Notti insonni a chiederti dove stai sbagliando'
                        ].map((pain, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 text-xl font-semibold text-white"
                            >
                                <svg className="w-7 h-7 text-blue-200 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span>{pain}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-20">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
                        <div className="text-center mb-8">
                            <div className="inline-block bg-yellow-100 rounded-2xl px-8 py-4 mb-8 transform -rotate-1">
                                <h3 className="text-3xl sm:text-4xl font-black text-gray-900">
                                    La verità brutale è questa:
                                </h3>
                            </div>

                            <p className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
                                Non stai sbagliando tu!
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-8 text-2xl sm:text-3xl text-gray-700 leading-relaxed text-center">
                            <p>
                                Ti stanno vendendo le stesse <span className="font-bold text-[#2e54a1]">strategie fotocopia</span> che funzionavano nel 2018: lead generation, contenuti &ldquo;virali&rdquo;, branding…
                            </p>

                            <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                                E sai qual è la parte che saltano?<br />
                                <span className="text-[#2e54a1]">Quella che ti fa incassare davvero.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-20 bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <IPhoneCanvas
                                title="Metodo Vittori 360"
                                description="Il sistema che sta trasformando Roma"
                                showVideo={true}
                                videoSrc="/videos/gelotti.mov"
                            />
                        </div>

                        <div className="text-center md:text-left">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 border-2 border-white/30">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <p className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                                Mentre tu perdi tempo e soldi,
                            </p>
                            <p className="text-xl sm:text-2xl text-white/90 mb-2">
                                i tuoi competitor usano il
                            </p>
                            <p className="text-3xl sm:text-4xl font-black text-blue-100 mb-4">
                                Metodo Vittori 360
                            </p>
                            <p className="text-2xl sm:text-3xl font-bold text-white">
                                e ti stanno <span className="text-blue-100">mangiando</span> le quote di mercato.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
                    <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 leading-tight">
                        Vuoi smettere di essere il miglior venditore…<br />
                        <span className="text-[#2e54a1]">dei tuoi competitor?</span>
                    </p>

                    <GradientButton
                        size="lg"
                        className="text-xl sm:text-2xl px-12 py-6 shadow-2xl hover:scale-105 transition-transform mb-6"
                    >
                        Prenota subito la tua consulenza gratuita
                    </GradientButton>

                    <div className="flex items-center justify-center gap-2 text-gray-600 text-lg">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">100% gratuita • Nessun impegno • Risultati garantiti</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
