'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useOptin } from '@/contexts/OptinContext'

export default function Testimonials() {
    const { openModal } = useOptin()
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
    const [showVideo, setShowVideo] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [showAudioButton, setShowAudioButton] = useState(true)
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const toggleMute = () => {
        const newMutedState = !isMuted
        setIsMuted(newMutedState)
        setShowAudioButton(true)

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        if (!newMutedState) {
            timeoutRef.current = setTimeout(() => {
                setShowAudioButton(false)
            }, 2000)
        }
    }

    const openVideo = () => {
        setShowVideo(true)
        setIsMuted(false)
        setShowAudioButton(true)

        timeoutRef.current = setTimeout(() => {
            setShowAudioButton(false)
        }, 2000)
    }

    const closeVideo = () => {
        setIsMuted(true)
        setShowAudioButton(true)
        setShowVideo(false)
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    const reviews = [
        {
            name: 'Alessia Giovannoni',
            role: 'Nutrizionista',
            text: 'Comunque ragazzi volevo farvi i miei complimenti perché siete molto scrupolosi, precisi ed organizzati. Mi sento proprio al sicuro ad essermi affidata a voi! Grazie♥️',
            photo: '/images/trusted/alessia.webp'
        },
        {
            name: 'Luigi Ferro',
            role: 'Azienda farmaceutica',
            text: 'Ciao Valerio. Grazie per il lavoro svolto e per avermi aiutato a riordinare e analizzare i dati condivisi. Mi è stato molto utile come base per organizzare la pianificazione a cui sto lavorando.',
            photo: '/images/trusted/luigiferro.webp'
        },
        {
            name: 'Daniele',
            role: 'Alberto\'s Pizza',
            text: 'Ho notato un grande cambiamento, in positivo, da quando lavoro con il team di Valerio. Sono rimasto veramente contento e soddisfatto dei risultati ottenuti, i ragazzi sono molto professionali e in gamba, pronti a risolvere qualsiasi problema che si presenta.',
            photo: '/images/partners/albertos-pizza.webp'
        }
    ]

    const nextReview = () => {
        setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)
    }

    const prevReview = () => {
        setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    const currentReview = reviews[currentReviewIndex]

    const testimonials = [
        {
            company: "Alberto's Pizza",
            industry: "Ristorazione",
            result: "+300% fatturato in 6 mesi",
            video: "/videos/testimonial-albertos.mp4",
            delay: 0.1
        },
        {
            company: "Scavolini Store Fiumicino",
            industry: "Arredamento",
            result: "+150% lead qualificati",
            video: "/videos/testimonial-scavolini.mp4",
            delay: 0.2
        },
        {
            company: "Gelotti",
            industry: "Food & Beverage",
            result: "+200% vendite online",
            video: "/videos/testimonial-gelotti.mp4",
            delay: 0.3
        },
        {
            company: "Passito Spa",
            industry: "Wellness",
            result: "+180% prenotazioni",
            video: "/videos/testimonial-passito.mp4",
            delay: 0.4
        },
        {
            company: "Magic Box Roma",
            industry: "Intrattenimento",
            result: "+250% eventi organizzati",
            video: "/videos/testimonial-magicbox.mp4",
            delay: 0.5
        },
        {
            company: "Broker Associati",
            industry: "Servizi Finanziari",
            result: "+120% clienti acquisiti",
            video: "/videos/testimonial-broker.mp4",
            delay: 0.6
        }
    ]

    return (
        <section className="relative overflow-hidden bg-[#2e54a1] lg:bg-white py-24 lg:py-32" id="testimonials">

            <div className="lg:hidden absolute inset-0">
                <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100/20 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/25 rounded-full opacity-50 animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/15 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-200/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-300/40 rounded-full opacity-70 animate-bounce delay-500"></div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-blue-400/30 rounded-full opacity-60 animate-bounce delay-1500"></div>
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-blue-200/50 rounded-full opacity-50 animate-bounce delay-2000"></div>
            </div>

            <div className="hidden lg:block absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-4/2 md:w-3/5 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#4f75c7] transform -skew-x-12 origin-top-left"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10"></div>
                <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-blue-100/30 to-blue-200/20 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-20 right-32 w-16 h-16 bg-gradient-to-br from-blue-200/25 to-indigo-200/15 rounded-full opacity-50 animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-100/15 via-blue-50/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-indigo-100/10 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-br from-blue-400/60 to-blue-500/40 rounded-full opacity-70 animate-bounce delay-500"></div>
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gradient-to-br from-indigo-400/50 to-purple-400/30 rounded-full opacity-60 animate-bounce delay-1500"></div>
                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-gradient-to-br from-blue-300/40 to-cyan-300/20 rounded-full opacity-50 animate-bounce delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-left mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8 drop-shadow-lg">
                        No, non ce la cantiamo<br />e ce la suoniamo<br className='lg:hidden' />da soli
                    </h2>
                    <div className="relative inline-block mb-6 lg:mb-8">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-100 mb-4 drop-shadow-lg">
                            Parlano i Fatti:
                        </h3>
                        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full shadow-lg"></div>
                    </div>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-4xl leading-relaxed drop-shadow-md">
                        Già <span className="font-bold text-blue-100 bg-blue-900/30 px-2 py-1 rounded-lg">+189 attività</span> hanno fatto il salto di qualità
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-left mb-16"
                >
                    <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-8 drop-shadow-md max-w-3xl">
                        Guarda le video testimonianze qui sotto oppure le recensioni<br className='hidden md:block' /> di chi ci ha già scelto
                    </p>
                </motion.div>

                <div className="hidden lg:block absolute top-20 right-12 xl:right-20 z-20 max-w-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-4 relative"
                    >
                        <motion.div
                            key={currentReviewIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2e54a1] via-[#4f75c7] to-[#2e54a1] p-[3px]">
                                        <div className="w-full h-full rounded-full bg-white p-[2px]">
                                            <div className="w-full h-full rounded-full overflow-hidden">
                                                <Image
                                                    src={currentReview.photo}
                                                    alt={`${currentReview.name} - ${currentReview.role}`}
                                                    width={48}
                                                    height={48}
                                                    className="w-full h-full object-cover"
                                                    priority
                                                    aria-label={`Foto di ${currentReview.name} - ${currentReview.role} - cliente soddisfatto Vittori Consulting`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 text-lg">{currentReview.name}</h5>
                                    <p className="text-sm text-gray-600">{currentReview.role}</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all relative">
                                <div className="absolute -top-2 left-6">
                                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                    </svg>
                                </div>

                                <blockquote className="text-gray-700 leading-relaxed text-base italic pt-4">
                                    {currentReview.text}
                                </blockquote>
                            </div>
                        </motion.div>

                        <div className="flex items-center justify-end gap-3 pt-4">
                            <button
                                onClick={prevReview}
                                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#2e54a1] hover:bg-[#2e54a1] hover:text-white text-gray-600 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
                                aria-label="Recensione precedente"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextReview}
                                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#2e54a1] hover:bg-[#2e54a1] hover:text-white text-gray-600 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
                                aria-label="Prossima recensione"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-16"
                >
                    {!showVideo ? (
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 lg:p-8 border border-white/50 shadow-2xl overflow-hidden">
                            <h4 className="text-xl lg:text-2xl font-bold text-[#2e54a1] mb-6 lg:mb-8 text-center">
                                Video Testimonianze dei Nostri Clienti
                            </h4>

                            <div className="hidden lg:block overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-[#2e54a1]/20">
                                            <th className="text-left py-4 px-6 font-bold text-[#2e54a1]">Azienda</th>
                                            <th className="text-left py-4 px-6 font-bold text-[#2e54a1]">Settore</th>
                                            <th className="text-left py-4 px-6 font-bold text-[#2e54a1]">Risultato</th>
                                            <th className="text-center py-4 px-6 font-bold text-[#2e54a1]">Video</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {testimonials.map((testimonial) => (
                                            <motion.tr
                                                key={testimonial.company}
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: testimonial.delay }}
                                                viewport={{ once: true, margin: "-30px" }}
                                                className="border-b border-gray-200/50 hover:bg-blue-50/50 transition-colors duration-300"
                                            >
                                                <td className="py-6 px-6">
                                                    <div className="font-semibold text-gray-900">{testimonial.company}</div>
                                                </td>
                                                <td className="py-6 px-6">
                                                    <div className="text-gray-600">{testimonial.industry}</div>
                                                </td>
                                                <td className="py-6 px-6">
                                                    <div className="font-bold text-green-600">{testimonial.result}</div>
                                                </td>
                                                <td className="py-6 px-6 text-center">
                                                    <motion.button
                                                        onClick={() => testimonial.company === "Alberto's Pizza" && openVideo()}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className={`inline-flex items-center justify-center w-12 h-12 bg-[#2e54a1] text-white rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl ${testimonial.company === "Alberto's Pizza" ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                                                        aria-label={testimonial.company === "Alberto's Pizza" ? "Guarda la testimonianza video" : "Video non disponibile"}
                                                    >
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </motion.button>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="lg:hidden space-y-4">
                                {testimonials.map((testimonial) => (
                                    <motion.div
                                        key={testimonial.company}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: testimonial.delay }}
                                        viewport={{ once: true, margin: "-30px" }}
                                        className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-lg"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex-1">
                                                <h5 className="font-bold text-gray-900 text-lg mb-1">{testimonial.company}</h5>
                                                <p className="text-gray-600 text-sm">{testimonial.industry}</p>
                                            </div>
                                            <motion.button
                                                onClick={() => testimonial.company === "Alberto's Pizza" && openVideo()}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`inline-flex items-center justify-center w-12 h-12 bg-[#2e54a1] text-white rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl flex-shrink-0 ${testimonial.company === "Alberto's Pizza" ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </motion.button>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-3">
                                            <p className="font-bold text-green-600 text-center">{testimonial.result}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/50 shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <button
                                    onClick={closeVideo}
                                    className="flex items-center gap-2 text-[#2e54a1] hover:text-blue-600 transition-colors font-semibold"
                                    aria-label="Torna alla tabella"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    <span>Torna alla tabella</span>
                                </button>
                                <h4 className="text-xl lg:text-2xl font-bold text-[#2e54a1]">
                                    Alberto&apos;s Pizza <span className="hidden md:block">- Testimonianza</span>
                                </h4>
                            </div>

                            <div className="relative w-full max-w-sm mx-auto bg-black rounded-2xl overflow-hidden aspect-[9/16] lg:max-w-md">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover cursor-pointer"
                                    autoPlay
                                    loop
                                    muted={isMuted}
                                    playsInline
                                    onClick={toggleMute}
                                    aria-label="Video testimonianza Alberto's Pizza"
                                >
                                    <source src="/videos/testimonial/albertos.mp4" type="video/mp4" />
                                    <track kind="captions" />
                                </video>

                                {showAudioButton && (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            toggleMute()
                                        }}
                                        className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all z-20 shadow-lg"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
                                    >
                                        {isMuted ? (
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                            </svg>
                                        )}
                                    </motion.button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                <div className="lg:hidden mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2e54a1] via-[#4f75c7] to-[#2e54a1] p-[3px]">
                                    <div className="w-full h-full rounded-full bg-white p-[2px]">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <Image
                                                src="/images/trusted/alessia.webp"
                                                alt="Alessia Giovannoni - Nutrizionista"
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                                aria-label="Foto di Alessia Giovannoni - Nutrizionista - cliente soddisfatta Vittori Consulting"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h5 className="font-bold text-white text-lg drop-shadow-lg">Alessia Giovannoni</h5>
                                <p className="text-sm text-blue-200 drop-shadow-md">Nutrizionista</p>
                            </div>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all relative">
                            <div className="absolute -top-2 left-6">
                                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                </svg>
                            </div>

                            <blockquote className="text-gray-700 leading-relaxed text-base italic pt-4">
                                Comunque ragazzi volevo farvi i miei complimenti perché siete molto scrupolosi, precisi ed organizzati. Mi sento proprio al sicuro ad essermi affidata a voi! Grazie♥️
                            </blockquote>
                        </div>

                        <div className="flex items-center gap-3 mt-8">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2e54a1] via-[#4f75c7] to-[#2e54a1] p-[3px]">
                                    <div className="w-full h-full rounded-full bg-white p-[2px]">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <Image
                                                src="/images/trusted/luigiferro.webp"
                                                alt="Luigi Ferro - Azienda farmaceutica"
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                                aria-label="Foto di Luigi Ferro - Azienda farmaceutica - cliente soddisfatto Vittori Consulting"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h5 className="font-bold text-white text-lg drop-shadow-lg">Luigi Ferro</h5>
                                <p className="text-sm text-blue-200 drop-shadow-md">Azienda farmaceutica</p>
                            </div>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all relative">
                            <div className="absolute -top-2 left-6">
                                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                </svg>
                            </div>

                            <blockquote className="text-gray-700 leading-relaxed text-base italic pt-4">
                                Ciao Valerio. Grazie per il lavoro svolto e per avermi aiutato a riordinare e analizzare i dati condivisi. Mi è stato molto utile come base per organizzare la pianificazione a cui sto lavorando.
                            </blockquote>
                        </div>

                        <div className="flex items-center gap-3 mt-8">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2e54a1] via-[#4f75c7] to-[#2e54a1] p-[3px]">
                                    <div className="w-full h-full rounded-full bg-white p-[2px]">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <Image
                                                src="/images/partners/albertos-pizza.webp"
                                                alt="Daniele - Alberto's Pizza"
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                                aria-label="Foto di Daniele - Alberto's Pizza - cliente soddisfatto Vittori Consulting"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h5 className="font-bold text-white text-lg drop-shadow-lg">Daniele</h5>
                                <p className="text-sm text-blue-200 drop-shadow-md">Alberto&apos;s Pizza</p>
                            </div>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all relative">
                            <div className="absolute -top-2 left-6">
                                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                </svg>
                            </div>

                            <blockquote className="text-gray-700 leading-relaxed text-base italic pt-4">
                                Ho notato un grande cambiamento, in positivo, da quando lavoro con il team di Valerio. Sono rimasto veramente contento e soddisfatto dei risultati ottenuti, i ragazzi sono molto professionali e in gamba, pronti a risolvere qualsiasi problema che si presenta.
                            </blockquote>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center"
                >
                    <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/30 shadow-2xl">
                        <motion.h4
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white lg:text-[#2e54a1] drop-shadow-lg"
                        >
                            Vuoi vedere altre testimonianze?
                        </motion.h4>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/95 lg:text-gray-700 drop-shadow-md max-w-2xl mx-auto leading-relaxed"
                        >
                            Scopri cosa dicono di noi i clienti che hanno già fatto il salto di qualità
                        </motion.p>

                        <div className="flex justify-center items-center">
                            <motion.button
                                onClick={openModal}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="relative inline-flex items-center justify-center px-8 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl font-bold text-[#2e54a1] bg-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group overflow-hidden border-2 border-white/50"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 4
                                    }}
                                />
                                <span className="relative z-10">GUARDA LE RECENSIONI</span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
