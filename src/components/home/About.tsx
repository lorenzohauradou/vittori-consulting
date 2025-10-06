'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import IPhoneCanvas from '@/components/ui/iphone-canvas'
import { useOptin } from '@/contexts/OptinContext'


interface TeamMember {
    name: string
    role: string
    quote: string
    photo: string
    position: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    delay: number
}

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { openModal } = useOptin()




    const teamMembers: TeamMember[] = [
        {
            name: 'Valerio Vittori',
            role: 'Founder',
            quote: 'Ogni strategia non è teoria: è progettata per funzionare davvero',
            photo: '/images/team/valerio.jpg',
            position: 'top-right',
            delay: 0
        },
        {
            name: 'Lorenzo',
            role: 'Full Stack Developer',
            quote: 'Fail fast, Ship faster',
            photo: '/images/team/lorenzo.jpg',
            position: 'center',
            delay: 0.2
        },
        {
            name: 'Camilla',
            role: 'Social Media Manager',
            quote: 'La creatività è un\'arma e lei sa come usarla',
            photo: '/images/team/camilla.jpg',
            position: 'top-left',
            delay: 0.4
        },
        {
            name: 'Nicole',
            role: 'Project Manager',
            quote: 'Il Direttore d\'Orchestra del Tuo Marketing',
            photo: '/images/team/nicole.jpg',
            position: 'bottom-left',
            delay: 0.6
        },
        {
            name: 'Gioele',
            role: 'Media Buyer',
            quote: 'L\'alchimista delle Conversioni',
            photo: '/images/team/gioele.jpg',
            position: 'bottom-right',
            delay: 0.8
        }
    ]

    return (
        <motion.section
            id="about"
            ref={containerRef}
            className="py-32 lg:py-48 relative overflow-hidden"
            initial={{ backgroundColor: "#ffffff" }}
            whileInView={{ backgroundColor: "#2e54a1" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.1, margin: "0px 0px -200px 0px" }}
        >
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100/20 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/25 rounded-full opacity-50 animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/15 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-200/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-300/40 rounded-full opacity-70 animate-bounce delay-500"></div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-blue-400/30 rounded-full opacity-60 animate-bounce delay-1500"></div>
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-blue-200/50 rounded-full opacity-50 animate-bounce delay-2000"></div>
                <div className="absolute top-10 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-ping delay-3000"></div>
                <div className="absolute bottom-10 right-1/5 w-2 h-2 bg-white/30 rounded-full animate-ping delay-4000"></div>
                <div className="absolute top-2/3 left-10 w-16 h-16 border-2 border-blue-200/30 rounded-full opacity-40"></div>
                <div className="absolute bottom-1/4 right-10 w-20 h-20 border border-blue-100/40 rounded-full opacity-30"></div>
                <div className="absolute top-1/4 right-1/3 w-1 h-20 bg-gradient-to-b from-blue-200/30 to-transparent rotate-45"></div>
                <div className="absolute bottom-1/3 left-1/4 w-1 h-16 bg-gradient-to-t from-blue-300/40 to-transparent rotate-12"></div>
            </div>
            <div className="max-w-[95vw] mx-auto px-2 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl lg:text-6xl font-bold mb-8"
                        initial={{ color: "#111827" }}
                        whileInView={{ color: "#ffffff" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Ma chi siamo?
                    </motion.h2>
                    <motion.p
                        className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed"
                        initial={{ color: "#374151" }}
                        whileInView={{ color: "#ffffff" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Siamo <motion.span
                            className="font-bold"
                            initial={{ color: "#2563eb" }}
                            whileInView={{ color: "#93c5fd" }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >VittoriConsulting</motion.span> l&apos;unica agenzia di Roma che integra marketing, operativo e commerciale: dalla strategia al branding alla vendita, grazie al <motion.span
                            className="font-bold"
                            initial={{ color: "#2563eb" }}
                            whileInView={{ color: "#93c5fd" }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >METODO VITTORI 360</motion.span> che ha già cambiato il business a oltre <motion.span
                            className="font-bold"
                            initial={{ color: "#111827" }}
                            whileInView={{ color: "#ffffff" }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >180 imprenditori e PMI</motion.span>
                    </motion.p>
                </motion.div>

                <div className="hidden lg:block mb-24">
                    <div className="flex gap-4 justify-between">
                        {teamMembers.map((member, index) => (
                            <TeamCard
                                key={member.name}
                                member={member}
                                index={index}
                                isMobile={false}
                            />
                        ))}
                    </div>
                </div>

                <div className="lg:hidden mb-24">
                    <div className="overflow-x-auto pb-4 scrollbar-hide">
                        <div className="flex gap-4 min-w-max pl-4 pr-20">
                            {teamMembers.map((member, index) => (
                                <TeamCard
                                    key={member.name}
                                    member={member}
                                    index={index}
                                    isMobile={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative z-10 flex justify-center lg:justify-start md:pl-16 lg:ml-16 md:ml-10">
                        <IPhoneCanvas
                            videoSrc="/videos/gelotti.mov"
                        />
                    </div>
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="mb-12"
                        >
                            <motion.h3
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
                                initial={{ color: "#111827" }}
                                whileInView={{ color: "#ffffff" }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Dietro La Strategia:
                                <br />
                                <span className="relative">
                                    <motion.span
                                        initial={{ color: "#2563eb" }}
                                        whileInView={{ color: "#93c5fd" }}
                                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        Un Team che Fa la Differenza
                                    </motion.span>
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                        viewport={{ once: true }}
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full origin-left"
                                    />
                                </span>
                            </motion.h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="mb-12"
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                                <motion.p
                                    className="text-lg mb-6 leading-relaxed"
                                    initial={{ color: "#374151" }}
                                    whileInView={{ color: "#ffffff" }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    Siamo un team giovane e intraprendente, conosciamo il linguaggio dei Social e ci occupiamo di marketing a 360 gradi.
                                </motion.p>
                                <motion.p
                                    className="text-xl font-bold"
                                    initial={{ color: "#111827" }}
                                    whileInView={{ color: "#ffffff" }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    Non lasciamo nulla al caso e né al cliente: seguiamo ogni fase con <motion.span
                                        initial={{ color: "#2563eb" }}
                                        whileInView={{ color: "#93c5fd" }}
                                        transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="font-extrabold"
                                    >RIGORE, TRASPARENZA E RESPONSABILITÀ!</motion.span>
                                </motion.p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="mb-12"
                        >
                            <div className="grid gap-6 mb-10">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    className="group flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                                >
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-300/30 rounded-2xl flex items-center justify-center">
                                        <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <motion.h5
                                            className="text-xl font-bold mb-2"
                                            initial={{ color: "#2563eb" }}
                                            whileInView={{ color: "#93c5fd" }}
                                            transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            Ci definiamo:
                                        </motion.h5>
                                        <motion.p
                                            className="leading-relaxed"
                                            initial={{ color: "#374151" }}
                                            whileInView={{ color: "#ffffff" }}
                                            transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            • Devoti al risultato<br /> • Ossessivi con il cliente (nel senso buono)<br /> • Invasivi ma efficaci
                                        </motion.p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    className="group flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                                >
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-300/30 rounded-2xl flex items-center justify-center">
                                        <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <motion.h5
                                            className="text-xl font-bold mb-2"
                                            initial={{ color: "#2563eb" }}
                                            whileInView={{ color: "#93c5fd" }}
                                            transition={{ duration: 2, ease: "easeInOut", delay: 0.9 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            Un mix tra:
                                        </motion.h5>
                                        <motion.p
                                            className="leading-relaxed"
                                            initial={{ color: "#374151" }}
                                            whileInView={{ color: "#ffffff" }}
                                            transition={{ duration: 2, ease: "easeInOut", delay: 0.9 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            Consulenti, creativi, operatori e cani da guardia della performance
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="text-center"
                            >
                                <motion.h4
                                    className="text-2xl font-bold mb-6"
                                    initial={{ color: "#111827" }}
                                    whileInView={{ color: "#ffffff" }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    NOI CI METTIAMO LA FACCIA … E TU?
                                </motion.h4>
                                <motion.button
                                    onClick={openModal}
                                    className="font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                    initial={{
                                        backgroundColor: "#2563eb",
                                        color: "#ffffff",
                                        borderColor: "#2563eb"
                                    }}
                                    whileInView={{
                                        backgroundColor: "#ffffff",
                                        color: "#2e54a1",
                                        borderColor: "#ffffff"
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    style={{ border: "2px solid" }}
                                >
                                    INIZIA QUI
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>


            </div>
        </motion.section>
    )
}

function TeamCard({ member, index, isMobile }: {
    member: TeamMember,
    index: number,
    isMobile: boolean
}) {
    const getGradientColor = (name: string) => {
        switch (name) {
            case 'Valerio Vittori':
                return 'from-blue-500 to-blue-600'
            case 'Camilla':
                return 'from-purple-500 to-purple-600'
            case 'Lorenzo':
                return 'from-green-500 to-green-600'
            case 'Nicole':
                return 'from-pink-500 to-pink-600'
            case 'Gioele':
                return 'from-orange-500 to-orange-600'
            default:
                return 'from-gray-500 to-gray-600'
        }
    }


    if (isMobile) {
        // Mobile: Cards più grandi per scroll orizzontale
        return (
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
                viewport={{ once: false }}
                className="flex-shrink-0 w-72"
            >
                <div className="w-full h-96 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300 border border-white/30">
                    <div className={`w-20 h-20 bg-gradient-to-br ${getGradientColor(member.name)} rounded-full mb-6 flex items-center justify-center shadow-lg overflow-hidden`}>
                        {member.name === 'Lorenzo' ? (
                            <Image
                                src="/images/team/lorenzo.jpeg"
                                alt="Lorenzo"
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-2xl font-bold text-white">
                                {member.name.charAt(0)}
                            </span>
                        )}
                    </div>

                    <h3 className="font-bold text-white mb-3 text-xl">
                        {member.name}
                    </h3>

                    <p className="text-blue-200 font-semibold mb-4 text-base">
                        {member.role}
                    </p>

                    <blockquote className="text-white/90 italic leading-relaxed text-sm">
                        &ldquo;{member.quote}&rdquo;
                    </blockquote>

                </div>
            </motion.div>
        )
    }


    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -150
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: 1,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
                damping: 20
            }}
            viewport={{ once: false }}
            className="flex-1 max-w-[18%]"
        >
            <div className="w-full h-80 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300 border border-white/30">
                <div className={`w-16 h-16 bg-gradient-to-br ${getGradientColor(member.name)} rounded-full mb-4 flex items-center justify-center shadow-lg overflow-hidden`}>
                    {member.name === 'Lorenzo' ? (
                        <Image
                            src="/images/team/lorenzo.jpeg"
                            alt="Lorenzo"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-xl font-bold text-white">
                            {member.name.charAt(0)}
                        </span>
                    )}
                </div>

                <h3 className="font-bold text-white mb-2 text-lg">
                    {member.name}
                </h3>

                <p className="text-blue-200 font-semibold mb-3 text-sm">
                    {member.role}
                </p>

                <blockquote className="text-white/90 italic leading-relaxed text-xs">
                    &ldquo;{member.quote}&rdquo;
                </blockquote>

            </div>
        </motion.div>
    )
}