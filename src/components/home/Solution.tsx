'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Solution() {


    const methodSteps = [
        { name: "ANALISI", description: "Analizziamo il tuo business", position: { x: 50, y: 15 } },
        { name: "ATTRAZIONE", description: "Attiriamo il target giusto", position: { x: 75, y: 30 } },
        { name: "CONVERSIONE", description: "Convertiamo i visitatori", position: { x: 80, y: 55 } },
        { name: "VENDITA", description: "Chiudiamo le vendite", position: { x: 55, y: 75 } },
        { name: "DATA COLLECTION", description: "Raccogliamo i dati", position: { x: 25, y: 70 } },
        { name: "CHECK-UP", description: "Monitoriamo i risultati", position: { x: 15, y: 45 } },
        { name: "RIPETI", description: "Ottimizziamo e ripetiamo", position: { x: 30, y: 25 } }
    ]

    return (
        <section className="min-h-screen flex items-center bg-[#2e54a1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center h-full min-h-[80vh]">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                            La Soluzione:
                        </h2>
                        <div className="relative inline-block mb-8">
                            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                                Metodo Vittori 360
                            </h3>
                            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-white rounded-full"></div>
                        </div>

                        <div className="space-y-6 mb-8">
                            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                                Smontiamo il tuo business. Lo rifacciamo da zero.
                            </p>
                            <p className="text-xl lg:text-2xl text-blue-200 font-semibold">
                                Poi non ti molliamo più.
                            </p>
                        </div>

                        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/30 shadow-xl">
                            <h4 className="text-xl font-bold text-white mb-4">
                                Vuoi scoprire come funziona davvero il Metodo Vittori 360?
                            </h4>
                            <p className="text-white/90 mb-4">
                                Guarda il video: ti mostriamo, passo dopo passo, come far crescere la tua azienda.
                            </p>


                            <p className="text-white/90 mb-6">
                                Riprenditi i clienti che oggi stanno scegliendo i tuoi competitor.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-white text-[#2e54a1] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl mb-4"
                            >
                                GUARDA IL VIDEO ORA
                            </motion.button>

                            <p className="text-sm text-white/70 italic text-center">
                                Il tuo tempo è prezioso: smetti di inseguire promesse vuote, soddisfatto o rimborsato.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full h-[500px] bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-white shadow-2xl p-8">
                            <h3 className="text-2xl font-bold text-[#2e54a1] mb-8 text-center">
                                Metodo Vittori 360
                            </h3>

                            <svg className="w-full h-full" viewBox="0 0 400 400">
                                <defs>
                                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(46,84,161,0.8)" />
                                        <stop offset="100%" stopColor="rgba(59,130,246,0.6)" />
                                    </linearGradient>
                                </defs>

                                {methodSteps.map((step, index) => {
                                    const nextStep = methodSteps[(index + 1) % methodSteps.length]
                                    return (
                                        <g key={`connection-${index}`}>
                                            <motion.line
                                                x1={`${step.position.x}%`}
                                                y1={`${step.position.y}%`}
                                                x2={`${nextStep.position.x}%`}
                                                y2={`${nextStep.position.y}%`}
                                                stroke="#2e54a1"
                                                strokeWidth="2"
                                                strokeDasharray="4,4"
                                                strokeOpacity="0.6"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                            />
                                        </g>
                                    )
                                })}

                                {methodSteps.map((step, index) => (
                                    <motion.g
                                        key={step.name}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <circle
                                            cx={`${step.position.x}%`}
                                            cy={`${step.position.y}%`}
                                            r="24"
                                            fill="white"
                                            stroke="#2e54a1"
                                            strokeWidth="2"
                                            className="drop-shadow-md"
                                        />
                                        <text
                                            x={`${step.position.x}%`}
                                            y={`${step.position.y}%`}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="text-sm font-bold fill-[#2e54a1] pointer-events-none"
                                        >
                                            {index + 1}
                                        </text>
                                        <text
                                            x={`${step.position.x}%`}
                                            y={`${step.position.y + 12}%`}
                                            textAnchor="middle"
                                            className="text-xs font-semibold fill-[#2e54a1] pointer-events-none"
                                        >
                                            {step.name}
                                        </text>
                                    </motion.g>
                                ))}
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
