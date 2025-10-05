'use client'

import React from 'react'
import { GradientButton } from '@/components/ui/gradient-button'

export default function ProblemsSection() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full px-6 py-2 mb-6">
                        <span className="text-white font-bold text-sm uppercase tracking-wide">
                            ⚠️ Attenzione Imprenditori
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Il 90% degli Imprenditori romani<br />
                        <span className="text-blue-100">Commette questi Errori</span>
                    </h2>
                </div>

                <div className="mb-16">
                    <p className="text-2xl font-bold text-white mb-8 text-center">
                        Dimmi se questa storia ti suona familiare:
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-l-4 border-white/30 shadow-lg hover:bg-white/15 transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🤦</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg text-white/90">
                                        Hai iniziato con il <span className="font-bold text-white">&quot;cugino smanettone&quot;</span> che ti ha fatto un sito che <span className="font-bold text-blue-100">nessuno trova su Google</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-l-4 border-blue-200/50 shadow-lg hover:bg-white/15 transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">💸</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg text-white/90">
                                        Poi hai provato con l&apos;agenzia <span className="font-bold text-white">&ldquo;giovane e dinamica&rdquo;</span> che ti ha fatto <span className="font-bold text-blue-100">spendere una barca di soldi</span> in pubblicità che <span className="font-bold text-blue-100">nessuno cliccava</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-l-4 border-blue-100 shadow-lg hover:bg-white/15 transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🤷</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg text-white/90">
                                        Per poi farti seguire da uno <span className="font-bold text-white">stagista</span> che non sa neanche <span className="font-bold text-blue-100">cos&apos;è un funnel di vendita</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-white/30">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-2xl">😰</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg text-white">
                                        <span className="font-bold text-white">E adesso?</span> Adesso sei qui, <span className="font-bold">paralizzato dalla paura</span> di buttare altri soldi, mentre guardi i tuoi competitor <span className="font-bold text-blue-100">fatturare milioni</span> con strategie che sembrano copiate dal tuo stesso settore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-white/20">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                            Il risultato?
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                            {[
                                'Budget marketing bruciato',
                                'Fiducia nelle agenzie: ZERO',
                                'Clienti acquisiti: praticamente nessuno',
                                'Notti insonni a chiederti dove stai sbagliando'
                            ].map((pain, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                                >
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-semibold text-base sm:text-lg">
                                        {pain}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
                        <div className="text-center mb-6">
                            <div className="inline-block bg-gradient-to-br from-[#2e54a1] to-[#1e3a70] rounded-2xl px-6 py-3 mb-4 transform -rotate-2 shadow-lg">
                                <h3 className="text-2xl sm:text-3xl font-black text-white">
                                    La verità brutale è questa:
                                </h3>
                            </div>
                        </div>

                        <p className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
                            Non stai sbagliando tu!
                        </p>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg mb-6 border border-gray-200">
                            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                                Ti stanno vendendo le stesse <span className="font-bold text-[#2e54a1]">strategie fotocopia</span> che funzionavano nel 2018: lead generation, contenuti &ldquo;virali&rdquo;, branding…
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#2e54a1] to-[#1e3a70] rounded-2xl p-6 sm:p-8 shadow-lg">
                            <p className="text-xl sm:text-2xl font-bold text-white text-center">
                                E sai qual è la parte che saltano?<br />
                                <span className="text-blue-100">Quella che ti fa incassare davvero.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-white/30">
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center animate-pulse shadow-lg">
                                <svg className="w-10 h-10 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Mentre tu perdi tempo e soldi,
                            </p>
                            <p className="text-xl sm:text-2xl text-blue-100 mb-4">
                                i tuoi competitor usano il
                            </p>
                            <p className="text-3xl sm:text-5xl font-black text-white mb-4 drop-shadow-lg">
                                Metodo Vittori 360
                            </p>
                            <p className="text-2xl sm:text-3xl font-bold text-white">
                                e ti stanno <span className="text-blue-100">mangiando</span> le quote di mercato.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                            Vuoi smettere di essere il miglior venditore…<br />
                            <span className="text-[#2e54a1]">dei tuoi competitor?</span>
                        </p>

                        <GradientButton
                            size="lg"
                            className="text-xl px-12 py-6 shadow-2xl hover:scale-105 transition-transform"
                        >
                            Prenota subito la tua consulenza gratuita
                        </GradientButton>

                        <div className="mt-6 flex items-center justify-center gap-2 text-gray-600">
                            <svg className="w-5 h-5 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">100% gratuita • Nessun impegno • Risultati garantiti</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
