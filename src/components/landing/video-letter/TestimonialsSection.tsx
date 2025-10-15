'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Eye } from 'lucide-react'

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: 'Luigi Ferro',
            role: 'Azienda farmaceutica',
            result: '+24% in più di vendite ottimizzando KPI lato commerciale',
            text: '"Ciao Valerio. Grazie per il lavoro svolto e per avermi aiutato a riordinare e analizzare i dati condivisi. Mi è stato molto utile come base per organizzare la pianificazione a cui sto lavorando."',
            photo: 'https://vittoriconsulting.b-cdn.net/trusted/luigiferro.webp'
        },
        {
            id: 2,
            name: 'Alessia Giovannoni',
            role: 'Nutrizionista',
            result: '+2.438€ in organico nei primi 10 giorni di collaborazione',
            text: '"Comunque ragazzi volevo farvi i miei complimenti perché siete molto scrupolosi, precisi ed organizzati. Mi sento proprio al sicuro ad essermi affidata a voi! Grazie♥️"',
            photo: 'https://vittoriconsulting.b-cdn.net/trusted/alessia.webp'
        },
        {
            id: 3,
            name: 'Jacqueline Valdivia',
            role: 'Passito Spa Centro Estetico',
            result: '+20 nuovi clienti in solo 28 giorni per estetica avanzata',
            text: '"Con Vittori Consulting mi sono trovata e mi sto trovando molto bene, sono molto disponibili e fin da subito mi hanno fatto correre a differenza di altre agenzie di marketing, stiamo raggiungendo risultati veramente incredibili che in 6 anni di attività non avevo mai raggiunto. Mi stanno arrivando nuovi clienti per l\'estetica avanzata ogni mese. Li consiglierei assolutamente a tutti!"',
            photo: 'https://vittoriconsulting.b-cdn.net/trusted/jacqueline.webp'
        },
        {
            id: 4,
            name: 'Daniele',
            role: 'Alberto\'s Pizza',
            result: '3 milioni di visualizzazioni negli ultimi 30 giorni',
            text: '"Ho notato un grande cambiamento, in positivo, da quando lavoro con il team di Valerio. Sono rimasto veramente contento e soddisfatto dei risultati ottenuti, i ragazzi sono molto professionali e in gamba, pronti a risolvere qualsiasi problema che si presenta."',
            photo: 'https://vittoriconsulting.b-cdn.net/partners/albertos-pizza.webp'
        }
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1))
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1))
    }

    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute md:hidden -bottom-20 -right-60 w-4/5 h-600 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#1e3a70] transform -skew-x-12"></div>

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
                        <div className="flex items-center justify-between gap-4 mb-6">
                            <div className="flex flex-col">
                                <span className="text-6xl font-bold text-gray-900 mb-2">5.0</span>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2e54a1] via-[#4f75c7] to-[#2e54a1] p-[3px]">
                                        <div className="w-full h-full rounded-full bg-white p-[2px]">
                                            <div className="w-full h-full rounded-full overflow-hidden">
                                                <Image
                                                    src="https://vittoriconsulting.b-cdn.net/trusted/miraje.webp"
                                                    alt="Desert Miraje - Coach di crescita per donne"
                                                    width={56}
                                                    height={56}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base sm:text-lg">Desert Miraje</h4>
                                    <p className="text-gray-600 text-sm">Coach di crescita per donne</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                            &quot;Con Valerio e il suo team mi sono trovata veramente bene, mi hanno capito e mi hanno aiutato a fare il mio primo lancio online, stra consigliati per altri professionisti che si vogliono affacciare sul digitale!&quot;
                        </p>
                        <div className="bg-white md:mt-26 rounded-2xl p-6 shadow-lg border border-gray-100">
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
                        className="relative flex flex-col items-center gap-4"
                    >
                        <div className="text-center">
                            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                Alberto&apos;s Pizza
                            </h4>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2e54a1] to-[#4f75c7] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md">
                                <Eye className="w-4 h-4" />
                                <span>3 milioni di visualizzazioni negli ultimi 30 giorni</span>
                            </div>
                        </div>
                        <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] aspect-[9/16] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                            <iframe
                                src="https://iframe.mediadelivery.net/embed/510109/cc26ce9d-560f-448e-a3ed-4f7eb1995b7e?autoplay=true&loop=true&muted=false&preload=true&responsive=true"
                                className="w-full h-full border-0 rounded-2xl"
                                allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                                allowFullScreen
                                title="Video testimonianza di Alberto's Pizza - Cliente soddisfatto di VittoriConsulting Marketing Roma"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8 md:grid md:grid-cols-3 md:gap-6 md:space-y-0"
                    >
                        {testimonials.map((testimonial, index) => {
                            // Su desktop mostra solo 3 testimonianze in base a currentIndex
                            const isVisibleOnDesktop = index >= currentIndex && index < currentIndex + 3

                            return (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (index - currentIndex) * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`space-y-4 ${!isVisibleOnDesktop ? 'md:hidden' : ''}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-12 h-12 flex items-center justify-center">
                                            {testimonial.photo ? (
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2e54a1] via-[#4f75c7] to-[#2e54a1] p-[3px]">
                                                    <div className="w-full h-full rounded-full bg-white p-[2px]">
                                                        <div className="w-full h-full rounded-full overflow-hidden">
                                                            <Image
                                                                src={testimonial.photo}
                                                                alt={`${testimonial.name} - ${testimonial.role}`}
                                                                width={48}
                                                                height={48}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 bg-[#2e54a1] rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white font-bold text-lg">
                                                        {testimonial.name.charAt(0)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 text-lg">{testimonial.name}</h5>
                                            <p className="text-sm text-gray-600">{testimonial.role.split(',')[1]?.trim() || testimonial.role}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all relative">
                                        <div className="absolute -top-2 left-6">
                                            <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                            </svg>
                                        </div>

                                        <div className="mb-3 pt-4">
                                            <div className="inline-block bg-gradient-to-r from-[#2e54a1] to-[#4f75c7] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md">
                                                {testimonial.result}
                                            </div>
                                        </div>

                                        <blockquote className="text-gray-700 leading-relaxed text-base italic">
                                            {testimonial.text}
                                        </blockquote>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    <div className="flex items-center justify-between">
                        <div className="hidden md:flex items-center gap-4 mt-4">
                            <button
                                onClick={prevTestimonial}
                                aria-label="Testimonianze precedenti"
                                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#2e54a1] hover:text-[#2e54a1] transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                aria-label="Testimonianze successive"
                                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#2e54a1] hover:text-[#2e54a1] transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <a
                            href="#calculator-section"
                            aria-label="Vedi altri risultati e calcola la tua crescita"
                            className="inline-flex items-center gap-2 mt-6 md:mt-0 text-white md:text-gray-900 font-bold hover:text-[#2e54a1] transition-colors ml-auto md:ml-0"
                        >
                            <span>CALCOLA IL TUO POTENZIALE</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

