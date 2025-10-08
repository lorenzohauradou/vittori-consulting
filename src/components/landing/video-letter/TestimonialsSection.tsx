'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: 'Alberto Rossi',
            role: 'CEO, Alberto\'s Pizza',
            text: 'VittoriConsulting ha trasformato completamente il nostro business. Grazie al loro metodo abbiamo triplicato il fatturato in soli 6 mesi. Il team è sempre disponibile e professionale.',
            video: null,
            logo: '/images/partners/albertos-pizza.jpg'
        },
        {
            id: 2,
            name: 'Marco Bianchi',
            role: 'Founder, Scavolini Store',
            text: 'Collaborare con VittoriConsulting è stata la scelta migliore per la nostra attività. Lead qualificati aumentati del 150% e un supporto costante in ogni fase del progetto.',
            video: null,
            logo: '/images/partners/scavolini-store-fiumicino.jpg'
        },
        {
            id: 3,
            name: 'Giulia Verdi',
            role: 'Owner, Gelotti',
            text: 'Professionalità, competenza e risultati concreti. Il metodo Vittori 360 funziona davvero. Le nostre vendite online sono cresciute del 200% e continuiamo a crescere.',
            video: null,
            logo: '/images/partners/gelotti.png'
        },
        {
            id: 4,
            name: 'Laura Neri',
            role: 'Director, Passito Spa',
            text: 'Risultati oltre ogni aspettativa. Le prenotazioni sono aumentate del 180% e la nostra brand awareness è cresciuta esponenzialmente. Team fantastico!',
            video: null,
            logo: '/images/partners/passito-spa.jpg'
        }
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3))
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, testimonials.length - 3) : prev - 3))
    }

    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute md:hidden -bottom-20 -right-60 w-4/5 h-500 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70] transform -skew-x-12"></div>

                <div className="absolute top-20 right-20 w-12 h-12 bg-blue-100 rounded-full opacity-30 animate-pulse" />
                <div className="absolute bottom-24 right-26 w-8 h-8 bg-blue-200 rounded-full opacity-40 animate-pulse delay-1000" />
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-2xl"></div>

                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce delay-500" />
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-indigo-400 rounded-full opacity-40 animate-bounce delay-1500" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-4 leading-tight">
                        Non crederci sulla parola: {' '}
                        <span className="font-bold text-[#2e54a1] italic">guarda i risultati</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Già <span className="font-bold">+189 attività</span> hanno fatto il salto di qualità
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center">
                                <span className="text-6xl font-bold text-gray-900">5.0</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            VittoriConsulting ha trasformato completamente il nostro business con il Metodo Vittori 360. Professionalità e risultati concreti in ogni fase del progetto.
                        </p>

                        <div className="pt-4">
                            <h4 className="font-bold text-gray-900 text-xl">Daniele</h4>
                            <p className="text-gray-600">Alberto&apos;s Pizza</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-black text-[#2e54a1]">189+</div>
                                    <p className="text-xs text-gray-600 mt-1">PMI trasformate</p>
                                </div>
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-black text-[#2e54a1]">+150%</div>
                                    <p className="text-xs text-gray-600 mt-1">fatturato medio</p>
                                </div>
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-black text-[#2e54a1]">5→50</div>
                                    <p className="text-xs text-gray-600 mt-1">lead al mese</p>
                                </div>
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-black text-[#2e54a1]">4:1</div>
                                    <p className="text-xs text-gray-600 mt-1">ROI medio</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all hover:scale-110 shadow-xl">
                                    <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mb-12">
                    <div className="overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:mx-0 md:px-0 scrollbar-hide">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex md:grid md:grid-cols-3 gap-6 mb-8 min-w-max md:min-w-0"
                        >
                            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all w-[320px] md:w-auto flex-shrink-0"
                                >
                                    <div className="mb-4">
                                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white font-bold text-lg">C</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                                        {testimonial.text}
                                    </p>

                                    <div className="border-t border-gray-100 pt-4">
                                        <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#2e54a1] hover:text-[#2e54a1] transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#2e54a1] hover:text-[#2e54a1] transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white md:text-gray-900 font-bold hover:text-[#2e54a1] transition-colors"
                        >
                            <span>VEDI ALTRI RISULTATI</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

