'use client'

import React from 'react'
import { GradientButton } from '@/components/ui/gradient-button'

export default function ComparisonSection() {
    const comparisons = [
        {
            category: 'Coinvolgimento',
            us: '100% quotidiano, Martellante',
            them: 'Ti chiamano una volta al mese',
        },
        {
            category: 'Strategia',
            us: 'Fatta su misura per te. Nessun euro sprecato.',
            them: 'Pacchetto uguale per tutti',
        },
        {
            category: 'Operatività',
            us: 'Full stack, facciamo tutto noi',
            them: 'Solo strategia o lead generation',
        },
        {
            category: 'Follow up',
            us: 'Aggressivo, ti supportiamo fino alla firma con il cliente',
            them: 'NON ESISTE',
        },
        {
            category: 'Risultato Finale',
            us: 'Ti trasformiamo il Business e lo portiamo al livello successivo!',
            them: 'Ti cambiano il logo, Ti portano followers, ma ZERO clienti',
        },
        {
            category: 'ROI e KPI reali',
            us: 'Report con numeri chiari: "Hai guadagnato X… hai speso Y"',
            them: '"Hai avuto tante visualizzazioni"',
        },
    ]

    return (
        <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-2/5 bg-[#2e54a1] transform -skew-x-12 origin-top-left"></div>
                <div className="absolute md:hidden -bottom-20 -right-40 w-3/5 h-250 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70] transform -skew-x-12"></div>

                <div className="absolute top-20 right-20 w-12 h-12 bg-blue-100 rounded-full opacity-30 animate-pulse" />
                <div className="absolute bottom-32 right-32 w-8 h-8 bg-blue-200 rounded-full opacity-40 animate-pulse delay-1000" />
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-2xl"></div>

                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce delay-500" />
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-indigo-400 rounded-full opacity-40 animate-bounce delay-1500" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block bg-gradient-to-r from-[#2e54a1] to-[#1e3a70] rounded-2xl px-8 py-4 mb-8 shadow-xl transform hover:scale-105 transition-transform">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                            Perché il METODO VITTORI 360 è Diverso
                        </h2>
                    </div>
                </div>

                <div className="hidden md:block bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#2e54a1]/20">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                                    <th className="px-6 py-6 text-left text-xl font-bold text-gray-900 border-b-2 border-gray-200 w-1/4">
                                        Quello che serve
                                    </th>
                                    <th className="px-6 py-6 text-center text-xl font-bold text-white bg-gradient-to-br from-[#2e54a1] to-[#1e3a70] border-b-2 border-[#2e54a1] w-3/8">
                                        <div className="flex items-center justify-center gap-2">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Noi</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-6 text-center text-xl font-bold text-gray-700 border-b-2 border-gray-200 w-3/8">
                                        Gli Altri
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50/50 transition-colors`}
                                    >
                                        <td className="px-6 py-5 border-b border-gray-200">
                                            <span className="font-bold text-gray-900 text-lg">{item.category}</span>
                                        </td>
                                        <td className="px-6 py-5 border-b border-gray-200 bg-[#2e54a1]/5">
                                            <div className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-[#2e54a1] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700 font-medium text-base leading-relaxed">{item.us}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 border-b border-gray-200">
                                            <div className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-600 text-base leading-relaxed">{item.them}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="md:hidden space-y-6">
                    {comparisons.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#2e54a1]/20">
                            <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 border-b-2 border-gray-200">
                                <h3 className="font-bold text-gray-900 text-lg">{item.category}</h3>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="bg-[#2e54a1]/5 rounded-xl p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-bold text-[#2e54a1] text-sm">NOI</span>
                                    </div>
                                    <p className="text-gray-700 font-medium text-sm">{item.us}</p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-bold text-gray-600 text-sm">GLI ALTRI</span>
                                    </div>
                                    <p className="text-gray-600 text-sm">{item.them}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <GradientButton
                        size="lg"
                        className="text-xl px-12 py-6 shadow-2xl hover:scale-105 transition-transform"
                    >
                        Prenota subito la tua consulenza gratuita
                    </GradientButton>
                </div>
            </div>
        </section>
    )
}

