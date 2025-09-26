'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [currentStep, setCurrentStep] = useState(0)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scrollStep = useTransform(scrollYProgress, [0, 1], [0, 6])

    useEffect(() => {
        const unsubscribe = scrollStep.onChange((latest) => {
            setCurrentStep(Math.floor(latest))
        })
        return unsubscribe
    }, [scrollStep])

    const founder = {
        name: 'Valerio Vittori',
        role: 'Founder',
        quote: 'Ogni strategia non è teoria: è progettata per funzionare davvero'
    }

    const teamMembers = [
        {
            name: 'Camilla',
            role: 'Social Media Manager',
            quote: 'La creatività è un&apos;arma e lei sa come usarla',
            color: 'from-purple-500 to-purple-600'
        },
        {
            name: 'Lorenzo',
            role: 'Web Developer',
            quote: 'Il Designer dei sogni digitali',
            color: 'from-green-500 to-green-600'
        },
        {
            name: 'Nicole',
            role: 'Project Manager',
            quote: 'Il Direttore d&apos;Orchestra del Tuo Marketing',
            color: 'from-pink-500 to-pink-600'
        },
        {
            name: 'Gioele',
            role: 'Media Buyer',
            quote: 'L&apos;alchimista delle Conversioni',
            color: 'from-orange-500 to-orange-600'
        }
    ]

    return (
        <section ref={containerRef} className="relative" style={{ height: '500vh' }}>
            <div className="sticky top-0 h-screen bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-12 h-full flex flex-col">

                    {/* Titolo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: currentStep >= 0 ? 1 : 0, y: currentStep >= 0 ? 0 : 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                            Ma chi siamo?
                        </h1>
                    </motion.div>

                    {/* Valerio - Card principale in alto */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: currentStep >= 0 ? 1 : 0, y: currentStep >= 0 ? 0 : 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center mb-12"
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md border border-gray-100">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                                    <span className="text-3xl font-bold text-white">V</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h2>
                                <p className="text-[#2563eb] font-semibold mb-4">{founder.role}</p>
                                <blockquote className="text-gray-600 italic leading-relaxed">
                                    &quot;{founder.quote}&quot;
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>

                    {/* Team cards - Fila orizzontale */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{
                                    opacity: currentStep >= index + 1 ? 1 : 0,
                                    y: currentStep >= index + 1 ? 0 : 40
                                }}
                                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                            >
                                <div className="text-center">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-md`}>
                                        <span className="text-xl font-bold text-white">
                                            {member.name.charAt(0)}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-[#2563eb] font-medium text-sm mb-3">{member.role}</p>
                                    <blockquote className="text-gray-600 text-sm italic leading-relaxed">
                                        &quot;{member.quote}&quot;
                                    </blockquote>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Testo aziendale - Semplice e pulito */}
                    {currentStep >= 4 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                                Siamo <span className="font-bold text-[#2563eb]">VittoriConsulting</span>, l&apos;unica agenzia di Roma che integra marketing, operativo e commerciale.
                                Grazie al <span className="font-bold text-[#2563eb]">METODO VITTORI 360</span> abbiamo già trasformato oltre 180 business.
                            </p>

                            {currentStep >= 5 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                                        <span className="bg-blue-50 text-[#2563eb] px-4 py-2 rounded-full font-semibold">
                                            Devoti al risultato
                                        </span>
                                        <span className="bg-blue-50 text-[#2563eb] px-4 py-2 rounded-full font-semibold">
                                            Ossessivi con il cliente
                                        </span>
                                        <span className="bg-blue-50 text-[#2563eb] px-4 py-2 rounded-full font-semibold">
                                            Invasivi ma efficaci
                                        </span>
                                    </div>

                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                                        NOI CI METTIAMO LA FACCIA … E TU?
                                    </h2>

                                    <button className="btn-gradient-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200">
                                        INIZIA QUI
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}