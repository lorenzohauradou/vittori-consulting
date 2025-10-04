'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GradientButton } from '@/components/ui/gradient-button'

interface CalculatorData {
    currentRevenue: number
    avgTicket: number
    monthlyClients: number
    conversionRate: number
}

export default function Calculator() {
    const [data, setData] = useState<CalculatorData>({
        currentRevenue: 0,
        avgTicket: 0,
        monthlyClients: 0,
        conversionRate: 0,
    })

    const [showResults, setShowResults] = useState(false)
    const [results, setResults] = useState({
        currentMonthlyRevenue: 0,
        projectedMonthlyRevenue: 0,
        sixMonthsGrowth: 0,
        additionalRevenue: 0,
        newClients: 0,
        revenueIncrease: 0,
    })

    const calculateResults = () => {
        if (data.currentRevenue <= 0 || data.avgTicket <= 0 || data.monthlyClients <= 0) {
            return
        }

        // medie del settore marketing
        const currentMonthly = data.currentRevenue / 12
        const improvementFactor = 1.5 // 50% di miglioramento medio

        const projectedMonthly = currentMonthly * improvementFactor
        const sixMonthsTotal = (currentMonthly * 6) + (projectedMonthly * 6)
        const currentSixMonths = currentMonthly * 12
        const additionalRev = sixMonthsTotal - currentSixMonths

        const newClientsPerMonth = Math.round((projectedMonthly - currentMonthly) / data.avgTicket)
        const percentageIncrease = ((projectedMonthly - currentMonthly) / currentMonthly) * 100

        setResults({
            currentMonthlyRevenue: currentMonthly,
            projectedMonthlyRevenue: projectedMonthly,
            sixMonthsGrowth: sixMonthsTotal,
            additionalRevenue: additionalRev,
            newClients: newClientsPerMonth,
            revenueIncrease: percentageIncrease,
        })

        setShowResults(true)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        calculateResults()
    }

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value)
    }

    return (
        <section id="calculator-section" className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        Quanto puoi <span className="text-[#2e54a1]">realizzare?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                        Compila il form qui sotto per scoprire quali risultati puoi ottenere in 6 mesi di collaborazione con noi.
                    </p>
                    <p className="text-lg text-gray-500 font-medium">
                        Provalo, il tuo futuro business ti ringrazierà.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            I tuoi dati attuali
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="currentRevenue" className="text-base font-semibold text-gray-700">
                                    Fatturato annuale attuale (€)
                                </Label>
                                <Input
                                    id="currentRevenue"
                                    type="number"
                                    placeholder="es. 120000"
                                    value={data.currentRevenue || ''}
                                    onChange={(e) => setData({ ...data, currentRevenue: Number(e.target.value) })}
                                    className="h-12 text-lg"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="avgTicket" className="text-base font-semibold text-gray-700">
                                    Ticket medio per cliente (€)
                                </Label>
                                <Input
                                    id="avgTicket"
                                    type="number"
                                    placeholder="es. 500"
                                    value={data.avgTicket || ''}
                                    onChange={(e) => setData({ ...data, avgTicket: Number(e.target.value) })}
                                    className="h-12 text-lg"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="monthlyClients" className="text-base font-semibold text-gray-700">
                                    Numero clienti al mese
                                </Label>
                                <Input
                                    id="monthlyClients"
                                    type="number"
                                    placeholder="es. 20"
                                    value={data.monthlyClients || ''}
                                    onChange={(e) => setData({ ...data, monthlyClients: Number(e.target.value) })}
                                    className="h-12 text-lg"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="conversionRate" className="text-base font-semibold text-gray-700">
                                    Tasso di conversione attuale (%)
                                </Label>
                                <Input
                                    id="conversionRate"
                                    type="number"
                                    placeholder="es. 2.5"
                                    step="0.1"
                                    value={data.conversionRate || ''}
                                    onChange={(e) => setData({ ...data, conversionRate: Number(e.target.value) })}
                                    className="h-12 text-lg"
                                />
                                <p className="text-sm text-gray-500">Opzionale - se lo conosci</p>
                            </div>

                            <GradientButton
                                type="submit"
                                size="lg"
                                className="w-full text-lg py-6 mt-8"
                            >
                                Calcola il tuo potenziale
                            </GradientButton>
                        </form>
                    </div>

                    <div className="lg:sticky lg:top-8">
                        {!showResults ? (
                            <div className="bg-gradient-to-br from-[#2e54a1] to-[#4f75c7] rounded-3xl shadow-2xl p-10 text-white">
                                <div className="flex items-center justify-center h-full min-h-[500px]">
                                    <div className="text-center">
                                        <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4">
                                            Inserisci i tuoi dati
                                        </h4>
                                        <p className="text-blue-100 text-lg">
                                            Compila il form per vedere la proiezione della tua crescita
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-gradient-to-br from-[#2e54a1] to-[#4f75c7] rounded-3xl shadow-2xl p-8 sm:p-10 text-white">
                                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                                    Il tuo potenziale in 6 mesi
                                </h3>

                                <div className="space-y-6 mb-10">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-blue-100 text-sm mb-1">Fatturato mensile attuale</p>
                                                <p className="text-2xl font-bold">{formatCurrency(results.currentMonthlyRevenue)}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-blue-100 text-sm mb-1">Fatturato proiettato</p>
                                                <p className="text-2xl font-bold text-green-300">{formatCurrency(results.projectedMonthlyRevenue)}</p>
                                            </div>
                                        </div>

                                        <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-emerald-300 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${Math.min(results.revenueIncrease, 100)}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-right mt-2 text-green-300 font-bold text-lg">
                                            +{results.revenueIncrease.toFixed(0)}% di crescita
                                        </p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <p className="text-blue-100 text-sm mb-2">Guadagno aggiuntivo in 6 mesi</p>
                                        <p className="text-4xl font-bold text-yellow-300 mb-2">
                                            {formatCurrency(results.additionalRevenue)}
                                        </p>
                                        <p className="text-sm text-blue-100">
                                            Rispetto al tuo fatturato attuale
                                        </p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <p className="text-blue-100 text-sm mb-2">Nuovi clienti al mese</p>
                                        <div className="flex items-end gap-2">
                                            <p className="text-5xl font-bold">+{results.newClients}</p>
                                            <p className="text-xl text-blue-100 mb-2">clienti</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
                                    <p className="text-sm text-blue-100 mb-4">Proiezione crescita 6 mesi</p>
                                    <div className="flex items-end justify-between gap-2 h-40">
                                        {[1, 2, 3, 4, 5, 6].map((month) => {
                                            const height = ((results.currentMonthlyRevenue + (results.projectedMonthlyRevenue - results.currentMonthlyRevenue) * (month / 6)) / results.projectedMonthlyRevenue) * 100
                                            return (
                                                <div key={month} className="flex-1 flex flex-col items-center gap-2">
                                                    <div className="w-full bg-white/20 rounded-t-lg overflow-hidden relative" style={{ height: '100%' }}>
                                                        <div
                                                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-400 to-emerald-300 transition-all duration-1000 ease-out rounded-t-lg"
                                                            style={{
                                                                height: `${height}%`,
                                                                transitionDelay: `${month * 100}ms`
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-xs text-blue-100">M{month}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="text-lg mb-4 text-blue-50">
                                        Questi numeri potrebbero essere la tua realtà
                                    </p>
                                    <GradientButton
                                        size="lg"
                                        className="bg-white text-[#2e54a1] hover:bg-gray-100"
                                        onClick={() => {
                                            const ctaSection = document.getElementById('cta-section')
                                            ctaSection?.scrollIntoView({ behavior: 'smooth' })
                                        }}
                                    >
                                        Prenota la consulenza gratuita
                                    </GradientButton>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-500 mb-4">
                        * Calcoli basati su medie reali dei nostri clienti negli ultimi 24 mesi
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-gray-600">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            <span className="font-medium">180+ clienti soddisfatti</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">Risultati in 6 mesi</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">Metodo testato e garantito</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

