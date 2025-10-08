'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GradientButton } from '@/components/ui/gradient-button'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Loader2, TrendingUp, Users, DollarSign, Download } from 'lucide-react'

interface FormData {
    currentRevenue: number
    monthlyClients: number
    url: string
}

interface AIResults {
    avgTicket: number
    currentMonthly: number
    projections: Array<{ month: number; revenue: number }>
    insights: string[]
    summary: string
}

export default function Calculator() {
    const [formData, setFormData] = useState<FormData>({
        currentRevenue: 0,
        monthlyClients: 0,
        url: '',
    })

    const [displayValues, setDisplayValues] = useState({
        currentRevenue: '',
        monthlyClients: '',
    })

    const [isLoading, setIsLoading] = useState(false)
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [scrapedData, setScrapedData] = useState<{ title: string; textContent: string; screenshotBase64: string } | null>(null)
    const [aiResults, setAiResults] = useState<AIResults | null>(null)
    const [isDownloadingPDF, setIsDownloadingPDF] = useState(false)

    const formatNumberWithDots = (value: string) => {
        const num = value.replace(/\D/g, '')
        if (!num) return ''
        return new Intl.NumberFormat('it-IT').format(parseInt(num))
    }

    const handleNumberInput = (field: 'currentRevenue' | 'monthlyClients', value: string) => {
        const numericValue = parseInt(value.replace(/\D/g, '')) || 0
        const formattedValue = formatNumberWithDots(value)

        setFormData(prev => ({ ...prev, [field]: numericValue }))
        setDisplayValues(prev => ({ ...prev, [field]: formattedValue }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.currentRevenue || !formData.monthlyClients) return

        setIsLoading(true)
        setScreenshot(null)
        setScrapedData(null)
        setAiResults(null)

        try {
            let finalScrapedData = null

            if (formData.url) {
                const scrapeResponse = await fetch('/api/scrape', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url: formData.url }),
                })

                if (scrapeResponse.ok) {
                    const data = await scrapeResponse.json()
                    finalScrapedData = data
                    setScrapedData(data)
                    setScreenshot(data.screenshotBase64)
                } else {
                    console.error('Errore durante lo scraping')
                }
            }

            const analyzeResponse = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    currentRevenue: formData.currentRevenue,
                    monthlyClients: formData.monthlyClients,
                    scrapedData: finalScrapedData
                }),
            })

            if (analyzeResponse.ok) {
                const results = await analyzeResponse.json()
                setAiResults(results)
            } else {
                console.error('Errore di analisi AI')
            }
        } catch (error) {
            console.error('Errore:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDownloadPDF = async () => {
        if (!aiResults) return

        setIsDownloadingPDF(true)

        try {
            const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    currentRevenue: formData.currentRevenue,
                    monthlyClients: formData.monthlyClients,
                    avgTicket: aiResults.avgTicket,
                    projections: aiResults.projections,
                    insights: aiResults.insights,
                    summary: aiResults.summary,
                    scrapedData: scrapedData ? { title: scrapedData.title, textContent: scrapedData.textContent } : null,
                    companyName: 'Azienda'
                }),
            })

            if (response.ok) {
                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `Piano-Crescita-VittoriConsulting-${Date.now()}.pdf`
                document.body.appendChild(a)
                a.click()
                window.URL.revokeObjectURL(url)
                document.body.removeChild(a)
            } else {
                console.error('Errore durante il download del PDF')
            }
        } catch (error) {
            console.error('Errore:', error)
        } finally {
            setIsDownloadingPDF(false)
        }
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
                        La nostra AI analizza il tuo business e crea una proiezione personalizzata di crescita
                    </p>
                    <p className="text-lg text-gray-500 font-medium">
                        Risultati reali basati su 180+ casi di successo
                    </p>
                </div>

                {!aiResults && !isLoading && (
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                Analisi Gratuita con AI
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="currentRevenue" className="text-base font-semibold text-gray-700">
                                        Fatturato annuale attuale (€)
                                    </Label>
                                    <Input
                                        id="currentRevenue"
                                        type="text"
                                        placeholder="es. 120.000"
                                        value={displayValues.currentRevenue}
                                        onChange={(e) => handleNumberInput('currentRevenue', e.target.value)}
                                        className="h-12 text-lg"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="monthlyClients" className="text-base font-semibold text-gray-700">
                                        Numero clienti al mese
                                    </Label>
                                    <Input
                                        id="monthlyClients"
                                        type="text"
                                        placeholder="es. 20"
                                        value={displayValues.monthlyClients}
                                        onChange={(e) => handleNumberInput('monthlyClients', e.target.value)}
                                        className="h-12 text-lg"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="url" className="text-base font-semibold text-gray-700">
                                        URL del tuo sito (opzionale)
                                    </Label>
                                    <Input
                                        id="url"
                                        type="url"
                                        placeholder="https://tuosito.it"
                                        value={formData.url}
                                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                        className="h-12 text-lg"
                                        disabled={isLoading}
                                    />
                                    <p className="text-sm text-gray-500">
                                        La nostra AI analizzerà il tuo sito per una proiezione più accurata
                                    </p>
                                </div>

                                <GradientButton
                                    type="submit"
                                    size="lg"
                                    className="w-full text-lg py-6"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Analisi AI in corso...
                                        </>
                                    ) : (
                                        'Calcola il tuo potenziale'
                                    )}
                                </GradientButton>
                            </form>
                        </div>
                    </div>
                )}

                {isLoading && !screenshot && (
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gradient-to-br from-[#2e54a1] to-[#4f75c7] rounded-3xl shadow-2xl p-10 text-white min-h-[400px] flex items-center justify-center">
                            <div className="text-center">
                                <Loader2 className="w-16 h-16 mx-auto mb-6 animate-spin" />
                                <h4 className="text-2xl font-bold mb-4">
                                    Analisi AI in corso..
                                </h4>
                                <p className="text-blue-100 text-lg">
                                    {formData.url
                                        ? 'Stiamo caricando il tuo sito...'
                                        : 'Stiamo elaborando la tua proiezione di crescita...'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {screenshot && !aiResults && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                            <div className="mb-6 text-center">
                                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2e54a1] to-[#4f75c7] rounded-full px-6 py-3 mb-4 shadow-lg">
                                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                    <span className="text-white font-bold">🤖 Analisi AI in corso...</span>
                                </div>
                            </div>

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#2e54a1]/20 mb-6 bg-gray-100" style={{ height: '700px' }}>
                                <motion.div
                                    initial={{ y: 0 }}
                                    animate={{ y: [0, '-40%', 0] }}
                                    transition={{
                                        duration: 20,
                                        ease: 'easeInOut',
                                        repeat: Infinity,
                                        repeatDelay: 1
                                    }}
                                    className="relative w-full"
                                >
                                    <Image
                                        src={`data:image/png;base64,${screenshot}`}
                                        alt="Screenshot del sito in analisi"
                                        width={1200}
                                        height={6000}
                                        className="w-full h-auto"
                                        unoptimized
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/60 pointer-events-none"></div>
                            </div>

                            <div className="flex items-center justify-center gap-3 bg-blue-50 rounded-xl p-4">
                                <Loader2 className="w-6 h-6 text-[#2e54a1] animate-spin" />
                                <p className="text-gray-700 font-semibold">
                                    La nostra AI sta elaborando i dati e creando la tua proiezione...
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {aiResults && (
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border-2 border-blue-200 hover:scale-105 transition-transform">
                                <DollarSign className="w-8 h-8 mx-auto mb-3 text-[#2e54a1]" />
                                <p className="text-sm text-gray-600 mb-2 font-medium">Ticket Medio</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {formatCurrency(aiResults.avgTicket)}
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border-2 border-blue-200 hover:scale-105 transition-transform">
                                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-[#2e54a1]" />
                                <p className="text-sm text-gray-600 mb-2 font-medium">Proiezione a 6 Mesi</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    +{formatCurrency(aiResults.projections[6]?.revenue || 0)}
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border-2 border-[#2e54a1] hover:scale-105 transition-transform">
                                <Users className="w-8 h-8 mx-auto mb-3 text-[#2e54a1]" />
                                <p className="text-sm text-gray-600 mb-2 font-medium">Proiezione a 12 Mesi</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    +{formatCurrency(aiResults.projections[12]?.revenue || 0)}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                                La tua Proiezione di Crescita
                            </h3>

                            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100">
                                <p className="text-base text-gray-800 leading-relaxed text-center">
                                    {aiResults.summary}
                                </p>
                            </div>

                            <div className="mb-8">
                                <ResponsiveContainer width="100%" height={350}>
                                    <LineChart data={aiResults.projections}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis
                                            dataKey="month"
                                            label={{ value: 'Mesi', position: 'insideBottom', offset: -5 }}
                                            stroke="#6b7280"
                                        />
                                        <YAxis
                                            tickFormatter={(value: number) => `€${(value / 1000).toFixed(0)}k`}
                                            stroke="#6b7280"
                                        />
                                        <Tooltip
                                            formatter={(value: number) => formatCurrency(value)}
                                            labelFormatter={(label: string | number) => `Mese ${label}`}
                                            contentStyle={{ borderRadius: '12px', border: '2px solid #2e54a1' }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="revenue"
                                            stroke="#2e54a1"
                                            strokeWidth={4}
                                            dot={{ fill: '#2e54a1', r: 6, strokeWidth: 2, stroke: '#fff' }}
                                            activeDot={{ r: 8 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-8">
                            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Insight Personalizzati</h4>
                            <div className="space-y-4">
                                {aiResults.insights.map((insight, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:border-[#2e54a1] transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2e54a1] to-[#4f75c7] flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-sm font-bold">{index + 1}</span>
                                        </div>
                                        <p className="text-base text-gray-700 leading-relaxed pt-0.5">{insight}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                                <GradientButton
                                    size="lg"
                                    className="text-xl px-12 py-6 shadow-2xl hover:scale-105 transition-transform w-full sm:w-auto"
                                >
                                    Prenota Consulenza Gratuita →
                                </GradientButton>

                                <button
                                    onClick={handleDownloadPDF}
                                    disabled={isDownloadingPDF}
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#2e54a1] text-[#2e54a1] rounded-lg font-bold text-lg hover:bg-[#2e54a1] hover:text-white transition-all shadow-lg hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                                >
                                    {isDownloadingPDF ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Generazione PDF...
                                        </>
                                    ) : (
                                        <>
                                            <Download className="w-5 h-5" />
                                            Scarica Report PDF
                                        </>
                                    )}
                                </button>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                Trasforma questi numeri in realtà. Parliamone.
                            </p>
                        </div>
                    </div>
                )}

                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-500 mb-4">
                        * Proiezioni generate da AI basate su dati reali di 180+ clienti
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-gray-600">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            <span className="font-medium">3200+ attività analizzate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">Potenziato dall&apos;AI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
