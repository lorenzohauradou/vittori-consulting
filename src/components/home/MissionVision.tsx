'use client'

import React from 'react'
import Image from 'next/image'

export default function MissionVision() {
    return (
        <section className="relative py-16 sm:py-24 lg:py-40 overflow-hidden bg-linear-to-br from-[#2e54a1] via-[#3d63b8] to-[#4f75c7]">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div className="inline-block mb-4">
                        <span className="text-xs font-semibold text-blue-100 uppercase tracking-[0.2em] letterspacing-wider">Mission & Vision</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        La Nostra <span className="text-blue-100">Direzione</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-100 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    <div className="relative bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-2xl">
                        <div className="hidden lg:flex absolute top-8 right-8 items-center gap-4">
                            <Image
                                src="/images/logo/firma.png"
                                alt="Firma Valerio Vittori"
                                width={180}
                                height={60}
                                className="object-contain"
                            />
                            <Image
                                src="https://vittoriconsulting.b-cdn.net/logos/logo-circle.webp"
                                alt="VittoriConsulting Logo - Mission"
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="lg:hidden absolute -top-4 right-4">
                            <Image
                                src="https://vittoriconsulting.b-cdn.net/logos/logo-circle.webp"
                                alt="VittoriConsulting Logo - Mission"
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="flex items-center gap-5 mb-6 pb-6 border-b-2 border-gray-100">
                            <div className="shrink-0">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#2e54a1] to-[#4f75c7] rounded-2xl flex items-center justify-center">
                                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-[#2e54a1]">Mission</h3>
                        </div>

                        <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                            <p>
                                In Vittori Consulting aiutiamo imprenditori e PMI a smettere di sprecare budget e tempo in strategie improvvisate, per costruire finalmente un <span className="font-bold text-gray-900">business stabile, riconoscibile e profittevole</span>.
                            </p>
                            <p>
                                Il nostro obiettivo è trasformare aziende che &quot;sopravvivono online&quot; in brand che dominano il mercato, grazie a un <span className="font-bold text-gray-900">metodo integrato a 360°</span> che unisce strategia, operatività e vendita.
                            </p>
                            <p>
                                Un sistema che cresce nel tempo, con supporto costante, controllo sui numeri e <span className="font-bold text-gray-900">ROI misurabile</span>.
                            </p>
                            <div className="pt-6 mt-6 border-t border-gray-200">
                                <p className="text-lg sm:text-xl font-bold text-[#2e54a1]">
                                    Perché il vero successo non è arrivare in alto una volta, ma rimanerci con stabilità e controllo.
                                </p>
                            </div>
                        </div>

                        <div className="lg:hidden flex justify-end">
                            <Image
                                src="/images/logo/firma.png"
                                alt="Firma Valerio Vittori"
                                width={160}
                                height={53}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="relative bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-2xl">
                        <div className="hidden lg:flex absolute top-8 right-8 items-center gap-4">
                            <Image
                                src="/images/logo/firma.png"
                                alt="Firma Valerio Vittori"
                                width={180}
                                height={60}
                                className="object-contain"
                            />
                            <Image
                                src="https://vittoriconsulting.b-cdn.net/logos/logo-circle.webp"
                                alt="VittoriConsulting Logo - Vision"
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="lg:hidden absolute -top-4 right-4">
                            <Image
                                src="https://vittoriconsulting.b-cdn.net/logos/logo-circle.webp"
                                alt="VittoriConsulting Logo - Vision"
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="flex items-center gap-5 mb-6 pb-6 border-b-2 border-gray-100">
                            <div className="shrink-0">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#4f75c7] to-[#2e54a1] rounded-2xl flex items-center justify-center">
                                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-[#2e54a1]">Vision</h3>
                        </div>

                        <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                            <p>
                                La nostra vision è diventare la realtà di <span className="font-bold text-gray-900">marketing integrato</span> più riconosciuta a <span className="font-bold text-gray-900">livello internazionale</span>.
                            </p>
                            <p>
                                Il nostro obiettivo? Portare Vittori Consulting nelle mani delle <span className="font-bold text-gray-900">multinazionali</span> e dimostrare che il marketing, quando è integrato e strategico, può trasformare qualsiasi business in una <span className="font-bold text-gray-900">macchina da crescita costante</span>.
                            </p>
                        </div>

                        <div className="lg:hidden flex justify-end">
                            <Image
                                src="/images/logo/firma.png"
                                alt="Firma Valerio Vittori"
                                width={160}
                                height={53}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

