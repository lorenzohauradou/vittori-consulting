'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function TestimonialsSection() {
    const stats = [
        {
            number: '189+',
            label: 'PMI hanno già trasformato il loro business',
        },
        {
            number: '+150%',
            label: 'di fatturato medio nei primi 6 mesi',
            highlight: true,
        },
        {
            number: '5 → 50',
            label: 'lead qualificati al mese in media',
        },
        {
            number: '4:1',
            label: 'ROI medio su tutte le campagne',
            highlight: true,
        },
    ]

    const duplicatedStats = [...stats, ...stats, ...stats]

    const finalNumbers = [
        { value: '+150%', label: 'di ROI' },
        { value: '+300', label: 'vendite gestite' },
        { value: '+180', label: 'collaborazioni' },
    ]

    // Placeholder per video testimonianze - da sostituire con veri video
    const testimonials = [
        { id: 1, name: 'Cliente 1', role: 'PMI Roma', video: null },
        { id: 2, name: 'Cliente 2', role: 'Ristorante', video: null },
        { id: 3, name: 'Cliente 3', role: 'E-commerce', video: null },
    ]

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e54a1]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Non crederci sulla parola:<br />
                        <span className="text-[#2e54a1]">guarda i risultati</span>
                    </h2>
                </div>

                <div className="py-8 mb-16">
                    <div className="relative">
                        <motion.div
                            className="flex items-center gap-6"
                            animate={{
                                x: [-300 * stats.length, 0]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear"
                                }
                            }}
                        >
                            {duplicatedStats.map((stat, index) => (
                                <div
                                    key={`stat-${index}`}
                                    className={`
                                        flex-shrink-0 rounded-2xl p-6 text-center min-w-[280px] shadow-lg
                                        ${stat.highlight
                                            ? 'bg-gradient-to-br from-[#2e54a1] to-[#1e3a70] text-white'
                                            : 'bg-white border-2 border-gray-100'
                                        }
                                    `}
                                >
                                    <div className={`text-4xl font-black mb-3 ${stat.highlight ? 'text-white' : 'text-[#2e54a1]'}`}>
                                        {stat.number}
                                    </div>
                                    <p className={`text-sm leading-tight ${stat.highlight ? 'text-blue-100' : 'text-gray-700'}`}>
                                        {stat.label}
                                    </p>
                                    {stat.highlight && (
                                        <div className="mt-3 inline-flex items-center justify-center w-6 h-6 bg-white rounded-full">
                                            <svg className="w-4 h-4 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
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

                <div className="mb-16">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-[#2e54a1]/10 rounded-full px-6 py-3 mb-4">
                            <span className="text-[#2e54a1] font-bold text-sm uppercase tracking-wide">
                                Video Testimonianze
                            </span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Leggi qui / Guarda video
                        </h3>
                        <p className="text-lg text-gray-600">
                            Ascolta direttamente dai nostri clienti
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-[#2e54a1]/30 transition-all duration-300 hover:shadow-2xl"
                            >
                                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-[#2e54a1]/10 rounded-full flex items-center justify-center group-hover:bg-[#2e54a1] transition-colors">
                                            <svg className="w-8 h-8 text-[#2e54a1] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-500 font-medium">Video Testimonianza</p>
                                    </div>

                                    {/* <video 
                                        className="w-full h-full object-cover"
                                        controls
                                        poster="/path-to-thumbnail.jpg"
                                    >
                                        <source src="/videos/testimonial-1.mp4" type="video/mp4" />
                                    </video> */}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-[#2e54a1]/10 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#2e54a1]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#2e54a1] to-[#1e3a70] rounded-3xl p-8 sm:p-12 shadow-2xl">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                            Alcuni Numeri
                        </h3>
                        <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {finalNumbers.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 text-center hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="text-5xl sm:text-6xl font-black text-white mb-3">
                                    {item.value}
                                </div>
                                <div className="text-lg text-blue-100 font-medium">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-xl text-blue-100">
                            Questi non sono solo numeri, sono <span className="font-bold text-white">storie di successo reali</span> di imprenditori come te.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

