'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface MetodoStep {
    name: string
    description: string
    number: number
}

interface MetodoBannerProps {
    className?: string
}

export default function MetodoBanner({ className = "" }: MetodoBannerProps) {
    const methodSteps: MetodoStep[] = [
        { name: "ANALISI", description: "Analizziamo il tuo business", number: 1 },
        { name: "ATTRAZIONE", description: "Attiriamo il target giusto", number: 2 },
        { name: "CONVERSIONE", description: "Convertiamo i visitatori", number: 3 },
        { name: "VENDITA", description: "Chiudiamo le vendite", number: 4 },
        { name: "DATA COLLECTION", description: "Raccogliamo i dati", number: 5 },
        { name: "CHECK-UP", description: "Monitoriamo i risultati", number: 6 },
        { name: "RIPETI", description: "Ottimizziamo e ripetiamo", number: 7 }
    ]

    const duplicatedSteps = [...methodSteps, ...methodSteps]

    return (
        <div className={`py-8 bg-gray-50 overflow-hidden ${className}`}>
            <div className="relative">
                <motion.div
                    className="flex items-center gap-8"
                    animate={{
                        x: [-50 * methodSteps.length * 8, 0]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear"
                        }
                    }}
                >
                    {duplicatedSteps.map((step, index) => (
                        <div
                            key={`${step.name}-${index}`}
                            className="flex-shrink-0 flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg min-w-[280px]"
                        >
                            <div className="relative">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#2e54a1] shadow-md">
                                    <span className="text-sm font-bold text-[#2e54a1]">
                                        {step.number}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-[#2e54a1] mb-1">
                                    {step.name}
                                </h4>
                                <p className="text-xs text-gray-600 leading-tight">
                                    {step.description}
                                </p>
                            </div>

                            {index < duplicatedSteps.length - 1 && (
                                <div className="flex-shrink-0 ml-2">
                                    <svg className="w-4 h-4 text-[#2e54a1]/60" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
            </div>
            <div className="relative mt-4">
                <div className="h-0.5 bg-gradient-to-r from-[#2e54a1]/20 via-[#2e54a1]/60 to-[#2e54a1]/20 mx-8"></div>
                <motion.div
                    className="absolute top-0 left-0 h-0.5 w-16 bg-gradient-to-r from-transparent via-[#2e54a1] to-transparent"
                    animate={{
                        x: ["-64px", "calc(100vw)"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 8,
                            ease: "linear"
                        }
                    }}
                />
            </div>
        </div>
    )
}
