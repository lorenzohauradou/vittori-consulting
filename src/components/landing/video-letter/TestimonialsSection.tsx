'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Eye, TrendingUp } from 'lucide-react'

export default function TestimonialsSection() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const desktopVideoOrder = [
        {
            id: 1,
            title: 'Gelotti Gelateria',
            result: '+100 clienti che tramite video sono passati in gelateria',
            icon: 'trending',
            src: 'https://iframe.mediadelivery.net/embed/510109/d1a41484-02fd-47a0-92c1-bb1c50ba2fd7?autoplay=false&loop=false&muted=false&preload=true&responsive=true',
            aspectRatio: '16/9',
            description: 'Testimonianza Gelotti - +100 clienti grazie ai video'
        },
        {
            id: 2,
            title: 'Nicoletta - Scavolini Store Fiumicino',
            result: '+13.500€ di fatturato in 7 giorni',
            icon: 'trending',
            src: 'https://iframe.mediadelivery.net/embed/510109/48aef447-75a3-4a7e-b28d-367506aaf14e?loop=false&muted=false&preload=true&responsive=true',
            aspectRatio: '16/9',
            description: 'Testimonianza di Nicoletta - Scavolini Store Fiumicino'
        },
        {
            id: 3,
            title: 'St Peter Photo',
            result: '+6 servizi fotografici raggiunti in soli 30 giorni',
            icon: 'trending',
            src: 'https://iframe.mediadelivery.net/embed/510109/7a315d76-854f-4b1d-8b5c-430722150141?loop=false&muted=false&preload=true&responsive=true',
            aspectRatio: '16/9',
            description: 'Testimonianza di St Peter Photo'
        },
        {
            id: 4,
            title: "Alberto's Pizza",
            result: '3 milioni di visualizzazioni negli ultimi 30 giorni',
            icon: 'eye',
            src: 'https://iframe.mediadelivery.net/embed/510109/cc26ce9d-560f-448e-a3ed-4f7eb1995b7e?autoplay=false&loop=true&muted=false&preload=true&responsive=true',
            aspectRatio: '9/16',
            description: 'Testimonianza di Daniele - Alberto\'s Pizza'
        }
    ]

    const mobileVideoOrder = [
        {
            id: 1,
            title: "Alberto's Pizza",
            result: '3 milioni di visualizzazioni negli ultimi 30 giorni',
            icon: 'eye',
            src: 'https://iframe.mediadelivery.net/embed/510109/cc26ce9d-560f-448e-a3ed-4f7eb1995b7e?autoplay=false&loop=true&muted=false&preload=true&responsive=true',
            aspectRatio: '9/16',
            description: 'Testimonianza di Daniele - Alberto\'s Pizza'
        },
        {
            id: 2,
            title: 'Gelotti Gelateria',
            result: '+100 clienti che tramite video sono passati in gelateria',
            icon: 'trending',
            src: 'https://iframe.mediadelivery.net/embed/510109/d1a41484-02fd-47a0-92c1-bb1c50ba2fd7?loop=false&muted=false&preload=true&responsive=true',
            aspectRatio: '16/9',
            description: 'Testimonianza Gelotti - +100 clienti grazie ai video'
        },
        {
            id: 3,
            title: 'Nicoletta - Scavolini Store Fiumicino',
            result: '+13.500€ di fatturato in 7 giorni',
            icon: 'trending',
            src: 'https://iframe.mediadelivery.net/embed/510109/48aef447-75a3-4a7e-b28d-367506aaf14e?loop=false&muted=false&preload=true&responsive=true',
            aspectRatio: '16/9',
            description: 'Testimonianza di Nicoletta - Scavolini Store Fiumicino'
        },
        {
            id: 4,
            title: 'St Peter Photo',
            result: '+6 servizi fotografici raggiunti in soli 30 giorni',
            icon: 'trending',
            src: 'https://iframe.mediadelivery.net/embed/510109/7a315d76-854f-4b1d-8b5c-430722150141?loop=false&muted=false&preload=true&responsive=true',
            aspectRatio: '16/9',
            description: 'Testimonianza di St Peter Photo'
        }
    ]

    const videoTestimonials = isMobile ? mobileVideoOrder : desktopVideoOrder

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
            name: 'Daniele',
            role: 'Alberto\'s Pizza',
            result: '3 milioni di visualizzazioni negli ultimi 30 giorni',
            text: '"Ho notato un grande cambiamento, in positivo, da quando lavoro con il team di Valerio. Sono rimasto veramente contento e soddisfatto dei risultati ottenuti, i ragazzi sono molto professionali e in gamba, pronti a risolvere qualsiasi problema che si presenta."',
            photo: 'https://vittoriconsulting.b-cdn.net/partners/albertos-pizza.webp'
        },
        {
            id: 4,
            name: 'Alessandro',
            role: 'Machete Barber',
            result: '10 Nuovi Franchising aperti in un anno',
            text: '"Grazie al supporto di Vittori Consulting siamo passati da una singola barberia a un network di 10 franchising in solo un anno. Hanno creato una strategia vincente che ci ha permesso di crescere in modo sostenibile."',
            photo: 'https://vittoriconsulting.b-cdn.net/trusted/machete.jpg'
        },
        {
            id: 5,
            name: 'Ramona',
            role: 'Ramona Beauty',
            result: '5.000€ di Trattamenti Corpo venduti in 30 giorni',
            text: '"Sono davvero soddisfatta dei risultati. In un solo mese ho venduto trattamenti per 5.000€ grazie alle strategie del team. Finalmente riesco a far conoscere i miei servizi alle persone giuste."',
            photo: 'https://vittoriconsulting.b-cdn.net/trusted/ramona.jpg'
        },
        {
            id: 6,
            name: 'Dr. Marco Bianchi',
            role: 'Dental Clinic',
            result: '26.800€ di Cure Dentali vendute in 30 giorni',
            text: '"Collaborare con Valerio e il suo team è stata la scelta migliore per la mia clinica. In 30 giorni abbiamo generato oltre 26.000€ di fatturato con pazienti realmente interessati. Professionalità e risultati concreti."',
            photo: 'https://vittoriconsulting.b-cdn.net/trusted/dental.jpg'
        },
        {
            id: 7,
            name: 'Jacqueline Valdivia',
            role: 'Passito Spa Centro Estetico',
            result: '+20 nuovi clienti in solo 28 giorni per estetica avanzata',
            text: '"Con Vittori Consulting mi sono trovata e mi sto trovando molto bene, sono molto disponibili e fin da subito mi hanno fatto correre a differenza di altre agenzie di marketing, stiamo raggiungendo risultati veramente incredibili che in 6 anni di attività non avevo mai raggiunto. Mi stanno arrivando nuovi clienti per l\'estetica avanzata ogni mese. Li consiglierei assolutamente a tutti!"',
            photo: 'https://vittoriconsulting.b-cdn.net/trusted/jacqueline.webp'
        }

    ]

    const currentVideo = videoTestimonials[currentVideoIndex]
    const currentTestimonial = testimonials[currentTestimonialIndex]

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const nextVideo = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videoTestimonials.length)
    }

    const prevVideo = () => {
        setCurrentVideoIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length)
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

                {/* Desktop: Carosello testimonials */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 mb-20">
                    <div className="space-y-6">
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

                            <motion.div
                                key={currentTestimonialIndex}
                                initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.4, 0.0, 0.2, 1]
                                }}
                                className="flex items-center gap-3"
                            >
                                <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2e54a1] via-[#4f75c7] to-[#2e54a1] p-[3px]">
                                        <div className="w-full h-full rounded-full bg-white p-[2px]">
                                            <div className="w-full h-full rounded-full overflow-hidden">
                                                <Image
                                                    src={currentTestimonial.photo}
                                                    alt={`${currentTestimonial.name} - ${currentTestimonial.role}`}
                                                    width={56}
                                                    height={56}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base sm:text-lg">{currentTestimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{currentTestimonial.role}</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            key={`content-${currentTestimonialIndex}`}
                            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                            transition={{
                                duration: 0.6,
                                ease: [0.4, 0.0, 0.2, 1]
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                    ease: [0.4, 0.0, 0.2, 1]
                                }}
                                className="inline-block bg-gradient-to-r from-[#2e54a1] to-[#4f75c7] text-white px-6 py-3 rounded-lg font-bold text-base shadow-md mb-4"
                            >
                                {currentTestimonial.result}
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35,
                                    ease: [0.4, 0.0, 0.2, 1]
                                }}
                                className="text-lg text-gray-700 leading-relaxed mb-6 italic"
                            >
                                {currentTestimonial.text}
                            </motion.p>
                        </motion.div>

                        <div className="flex items-center gap-4 mt-6">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-[#2e54a1] hover:bg-[#2e54a1] hover:text-white text-gray-600 transition-all duration-300 flex items-center justify-center shadow-md"
                                aria-label="Testimonianza precedente"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <span className="text-sm font-bold text-gray-600">
                                {currentTestimonialIndex + 1}/{testimonials.length}
                            </span>
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-[#2e54a1] hover:bg-[#2e54a1] hover:text-white text-gray-600 transition-all duration-300 flex items-center justify-center shadow-md"
                                aria-label="Testimonianza successiva"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Box statistiche fisso a destra */}
                    <div className="flex items-center justify-center">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 w-full max-w-md">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-3xl font-black text-[#2e54a1]">189+</div>
                                    <p className="text-sm text-gray-600 mt-2">PMI trasformate</p>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-3xl font-black text-[#2e54a1]">+150%</div>
                                    <p className="text-sm text-gray-600 mt-2">fatturato medio</p>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-3xl font-black text-[#2e54a1]">5→50</div>
                                    <p className="text-sm text-gray-600 mt-2">lead al mese</p>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-3xl font-black text-[#2e54a1]">4:1</div>
                                    <p className="text-sm text-gray-600 mt-2">ROI medio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile: Scroll orizzontale testimonials */}
                <div className="lg:hidden mb-12">
                    <div className="overflow-x-auto pb-4 scrollbar-hide">
                        <div className="flex gap-6 min-w-max px-4">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex-shrink-0 w-80 space-y-4"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="relative w-12 h-12 flex items-center justify-center">
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
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 text-lg">{testimonial.name}</h5>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <div className="inline-block bg-gradient-to-r from-[#2e54a1] to-[#4f75c7] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md mb-4">
                                            {testimonial.result}
                                        </div>

                                        <blockquote className="text-gray-700 leading-relaxed text-base italic">
                                            {testimonial.text}
                                        </blockquote>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mx-4 mt-8">
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
                </div>

                {/* Video Carousel (Desktop e Mobile) */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-left md:text-center hidden md:block">
                            Guarda cosa <br className='md:hidden block' /> dicono<br className='md:hidden block' /> i nostri clienti
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col items-center gap-4"
                    >
                        <div className="md:text-center text-left">
                            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                {currentVideo.title}
                            </h4>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2e54a1] to-[#4f75c7] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md">
                                {currentVideo.icon === 'trending' ? (
                                    <TrendingUp className="w-4 h-4" />
                                ) : (
                                    <Eye className="w-4 h-4" />
                                )}
                                <span>{currentVideo.result}</span>
                            </div>
                        </div>

                        <motion.div
                            key={currentVideoIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className={`relative w-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl ${currentVideo.aspectRatio === '9/16'
                                ? 'max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] aspect-[9/16] mx-auto'
                                : 'max-w-full aspect-video'
                                }`}
                        >
                            <iframe
                                src={currentVideo.src}
                                className="w-full h-full border-0 rounded-2xl"
                                allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
                                allowFullScreen
                                title={currentVideo.description}
                            />
                        </motion.div>

                        <div className="flex items-center gap-4 mt-2">
                            <button
                                onClick={prevVideo}
                                className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-[#2e54a1] hover:bg-[#2e54a1] hover:text-white text-gray-600 transition-all duration-300 flex items-center justify-center shadow-md"
                                aria-label="Video precedente"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <span className="text-sm font-bold md:text-gray-600 text-white">
                                {currentVideoIndex + 1}/{videoTestimonials.length}
                            </span>
                            <button
                                onClick={nextVideo}
                                className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-[#2e54a1] hover:bg-[#2e54a1] hover:text-white text-gray-600 transition-all duration-300 flex items-center justify-center shadow-md"
                                aria-label="Video successivo"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="md:text-center text-right">
                    <a
                        href="#calculator-section"
                        aria-label="Vedi altri risultati e calcola la tua crescita"
                        className="inline-flex items-center gap-2 md:text-gray-900 text-white font-bold hover:text-[#2e54a1] transition-colors"
                    >
                        <span>CALCOLA IL TUO POTENZIALE</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

