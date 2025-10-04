'use client'

import React, { useState } from 'react'

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: 'Quanto tempo serve per vedere risultati?',
            answer: 'In base alla nostra esperienza entro 60 giorni. Ma il nostro obiettivo è creare stabilità e crescita a lungo termine.',
        },
        {
            question: 'E se la mia azienda è piccola?',
            answer: 'Il metodo è pensato per PMI e attività locali. Adattiamo le strategie al tuo budget e al tuo mercato.',
        },
        {
            question: 'Fa al caso mio?',
            answer: 'Fa al caso tuo se sei pronto a metterti in discussione. Per clienti che vogliono farsi seguire e non solo "seguire".',
            highlight: true,
        },
        {
            question: 'Per chi non è adatto?',
            answer: 'Non fa per te se cerchi pacchetti preconfezionati, se vuoi solo un "logo" e se cerchi solo follower senza obiettivi.',
            isNegative: true,
        },
        {
            question: 'Come posso fidarmi che il mio investimento sia sicuro?',
            answer: 'Tracciamo ogni dato, monitoriamo il ROI e ti consegniamo report trasparenti con KPI reali. Sai sempre dove vanno i tuoi soldi.',
        },
        {
            question: 'Come faccio a sapere cosa cambierà se mi affido a voi?',
            answer: 'Inserisci i dati nel calcolatore qui sopra e saprai in tempo reale quanto puoi realizzare con noi entro 6 mesi.',
            hasCalculator: true,
        },
        {
            question: 'Perché scegliere voi?',
            answer: 'Perché noi non ci fermiamo ai contenuti e alle Ads, ma ti diamo una strategia completa con ideazione di contenuti virali, campagne pubblicitarie e gestione commerciale. Questo significa clienti veri, non solo like.',
            highlight: true,
        },
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#2e54a1]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <div className="flex items-center gap-3 bg-[#2e54a1]/10 rounded-full px-6 py-3">
                            <svg className="w-6 h-6 text-[#2e54a1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#2e54a1] font-bold text-sm uppercase tracking-wide">FAQ</span>
                        </div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Rispondiamo alle <span className="text-[#2e54a1]">Tue domande</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Tutto quello che devi sapere prima di iniziare
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`
                                bg-white rounded-2xl shadow-sm border-2 transition-all duration-300
                                ${openIndex === index
                                    ? 'border-[#2e54a1] shadow-lg'
                                    : 'border-gray-100 hover:border-[#2e54a1]/30'
                                }
                                ${faq.highlight ? 'ring-2 ring-[#2e54a1]/20' : ''}
                            `}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 sm:px-8 py-6 flex items-start justify-between gap-4 text-left"
                            >
                                <div className="flex items-start gap-4 flex-1">
                                    <div className={`
                                        flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                                        ${openIndex === index
                                            ? 'bg-[#2e54a1] text-white'
                                            : 'bg-[#2e54a1]/10 text-[#2e54a1]'
                                        }
                                    `}>
                                        <span className="font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                                    </div>
                                    <h3 className={`
                                        text-lg sm:text-xl font-bold transition-colors flex-1
                                        ${openIndex === index ? 'text-[#2e54a1]' : 'text-gray-900'}
                                    `}>
                                        {faq.question}
                                    </h3>
                                </div>

                                <div className={`
                                    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all
                                    ${openIndex === index
                                        ? 'bg-[#2e54a1] text-white rotate-180'
                                        : 'bg-gray-100 text-gray-600'
                                    }
                                `}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`
                                    overflow-hidden transition-all duration-300
                                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                `}
                            >
                                <div className="px-6 sm:px-8 pb-6">
                                    <div className={`
                                        pl-14 pr-4 py-4 rounded-xl
                                        ${faq.isNegative
                                            ? 'bg-gray-50 border-l-4 border-gray-400'
                                            : 'bg-[#2e54a1]/5 border-l-4 border-[#2e54a1]'
                                        }
                                    `}>
                                        <p className="text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                        {faq.hasCalculator && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' })
                                                }}
                                                className="mt-4 inline-flex items-center gap-2 text-[#2e54a1] font-semibold hover:gap-3 transition-all"
                                            >
                                                <span>Vai al calcolatore</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-[#2e54a1]/20 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="w-16 h-16 mx-auto mb-6 bg-[#2e54a1]/10 rounded-2xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#2e54a1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Hai altre domande?
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Prenota una consulenza gratuita e ti risponderemo personalmente
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="tel:+393401287852"
                                className="inline-flex items-center gap-2 text-[#2e54a1] font-semibold hover:gap-3 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>+39 340 128 7852</span>
                            </a>
                            <span className="text-gray-400">•</span>
                            <a
                                href="mailto:info@vittoriconsulting.it"
                                className="inline-flex items-center gap-2 text-[#2e54a1] font-semibold hover:gap-3 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>info@vittoriconsulting.it</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

