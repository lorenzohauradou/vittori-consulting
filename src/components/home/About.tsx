'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'


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

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const teamMembers: TeamMember[] = [
        {
            name: 'Valerio Vittori',
            role: 'Founder',
            quote: 'Ogni strategia non è teoria: è progettata per funzionare davvero',
            photo: '/images/team/valerio.jpg',
            position: 'center',
            delay: 0
        },
        {
            name: 'Camilla',
            role: 'Social Media Manager',
            quote: 'La creatività è un&apos;arma e lei sa come usarla',
            photo: '/images/team/camilla.jpg',
            position: 'top-left',
            delay: 0.2
        },
        {
            name: 'Lorenzo',
            role: 'Web Developer',
            quote: 'Lo sviluppatore dei sogni digitali',
            photo: '/images/team/lorenzo.jpg',
            position: 'top-right',
            delay: 0.4
        },
        {
            name: 'Nicole',
            role: 'Project Manager',
            quote: 'Il Direttore d&apos;Orchestra del Tuo Marketing',
            photo: '/images/team/nicole.jpg',
            position: 'bottom-left',
            delay: 0.6
        },
        {
            name: 'Gioele',
            role: 'Media Buyer',
            quote: 'L&apos;alchimista delle Conversioni',
            photo: '/images/team/gioele.jpg',
            position: 'bottom-right',
            delay: 0.8
        }
    ]

    return (
        <motion.section
            ref={containerRef}
            className="py-32 lg:py-48 relative overflow-hidden"
            initial={{ backgroundColor: "#ffffff" }}
            whileInView={{ backgroundColor: "#2e54a1" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-4 lg:px-8">
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
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
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
                        >180 imprenditori e PMI</motion.span>.
                    </motion.p>
                </motion.div>

                <div className="relative min-h-[900px] lg:min-h-[1000px] mb-24">
                    {teamMembers.map((member) => (
                        <TeamCard
                            key={member.name}
                            member={member}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-transparent backdrop-blur-md rounded-3xl shadow-xl p-8 lg:p-12"
                >
                    <motion.h3
                        className="text-2xl lg:text-3xl font-bold mb-6 text-center"
                        initial={{ color: "#111827" }}
                        whileInView={{ color: "#ffffff" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Dietro La Strategia
                    </motion.h3>
                    <motion.p
                        className="text-lg mb-8 text-center max-w-3xl mx-auto leading-relaxed"
                        initial={{ color: "#374151" }}
                        whileInView={{ color: "#ffffff" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Siamo un team giovane e intraprendente, conosciamo il linguaggio dei Social e ci occupiamo di marketing a 360 gradi. Non lasciamo nulla al caso e né al cliente: seguiamo ogni fase con rigore, trasparenza e responsabilità.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <motion.h4
                                className="text-xl font-bold mb-4"
                                initial={{ color: "#111827" }}
                                whileInView={{ color: "#ffffff" }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Ci definiamo:
                            </motion.h4>
                            <ul className="space-y-2">
                                <motion.li
                                    className="flex items-center"
                                    initial={{ color: "#374151" }}
                                    whileInView={{ color: "#ffffff" }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: 0.9 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <motion.span
                                        className="w-2 h-2 rounded-full mr-3"
                                        initial={{ backgroundColor: "#2563eb" }}
                                        whileInView={{ backgroundColor: "#93c5fd" }}
                                        transition={{ duration: 2, ease: "easeInOut", delay: 0.9 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                    ></motion.span>
                                    Devoti al risultato
                                </motion.li>
                                <motion.li
                                    className="flex items-center"
                                    initial={{ color: "#374151" }}
                                    whileInView={{ color: "#ffffff" }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <motion.span
                                        className="w-2 h-2 rounded-full mr-3"
                                        initial={{ backgroundColor: "#2563eb" }}
                                        whileInView={{ backgroundColor: "#93c5fd" }}
                                        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                    ></motion.span>
                                    Ossessivi con il cliente (nel senso buono)
                                </motion.li>
                                <motion.li
                                    className="flex items-center"
                                    initial={{ color: "#374151" }}
                                    whileInView={{ color: "#ffffff" }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: 1.1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <motion.span
                                        className="w-2 h-2 rounded-full mr-3"
                                        initial={{ backgroundColor: "#2563eb" }}
                                        whileInView={{ backgroundColor: "#93c5fd" }}
                                        transition={{ duration: 2, ease: "easeInOut", delay: 1.1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                    ></motion.span>
                                    Invasivi ma efficaci
                                </motion.li>
                            </ul>
                        </div>
                        <div>
                            <motion.h4
                                className="text-xl font-bold mb-4"
                                initial={{ color: "#111827" }}
                                whileInView={{ color: "#ffffff" }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Un mix tra:
                            </motion.h4>
                            <motion.p
                                className="leading-relaxed"
                                initial={{ color: "#374151" }}
                                whileInView={{ color: "#ffffff" }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.9 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                consulenti, creativi, operatori e cani da guardia della performance
                            </motion.p>
                        </div>
                    </div>

                    <div className="text-center">
                        <motion.h4
                            className="text-2xl font-bold mb-4"
                            initial={{ color: "#111827" }}
                            whileInView={{ color: "#ffffff" }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            NOI CI METTIAMO LA FACCIA … E TU?
                        </motion.h4>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <motion.button
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
                            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            style={{ border: "2px solid" }}
                        >
                            INIZIA QUI
                        </motion.button>
                    </motion.div>
                </motion.div>


            </div>
        </motion.section>
    )
}

function TeamCard({ member, scrollYProgress }: {
    member: TeamMember,
    scrollYProgress?: MotionValue<number>
}) {
    const getAnimationValues = (position: string) => {
        switch (position) {
            case 'center':
                return { rotate: 0, x: 0, y: 0 }
            case 'top-left':
                return { rotate: -25, x: -200, y: -150 }
            case 'top-right':
                return { rotate: 30, x: 200, y: -180 }
            case 'bottom-left':
                return { rotate: 15, x: -180, y: 200 }
            case 'bottom-right':
                return { rotate: -20, x: 220, y: 170 }
            default:
                return { rotate: 0, x: 0, y: 0 }
        }
    }

    const animationValues = getAnimationValues(member.position)

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

    const getOrbitRadius = () => {
        return 420
    }

    const getOrbitPosition = (position: string, progress: number = 0) => {
        const radius = getOrbitRadius()
        const baseAngles = {
            'top-left': -135,
            'top-right': -45,
            'bottom-right': 45,
            'bottom-left': 135
        }

        if (position === 'center') {
            return { x: 0, y: 0 }
        }

        const baseAngle = baseAngles[position as keyof typeof baseAngles] || 0
        const rotationAngle = baseAngle + (progress * 720)
        const radians = (rotationAngle * Math.PI) / 180

        return {
            x: Math.cos(radians) * radius,
            y: Math.sin(radians) * radius
        }
    }

    const orbitX = useTransform(
        scrollYProgress || { get: () => 0 } as MotionValue<number>,
        [0, 0.5, 1],
        [
            getOrbitPosition(member.position, 0).x,
            getOrbitPosition(member.position, 0.5).x,
            getOrbitPosition(member.position, 1).x
        ]
    )

    const orbitY = useTransform(
        scrollYProgress || { get: () => 0 } as MotionValue<number>,
        [0, 0.5, 1],
        [
            getOrbitPosition(member.position, 0).y,
            getOrbitPosition(member.position, 0.5).y,
            getOrbitPosition(member.position, 1).y
        ]
    )


    const getPositionClasses = (position: string) => {
        switch (position) {
            case 'center':
                return 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'
            default:
                return 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]'
        }
    }

    const cardScale = member.position === 'center' ? 1.2 : 1
    const cardSizeClasses = member.position === 'center'
        ? 'w-64 h-80 md:w-80 md:h-96'
        : 'w-52 h-68 md:w-64 md:h-80'

    return (
        <motion.div
            className={`absolute ${getPositionClasses(member.position)}`}
            style={{
                x: member.position !== 'center' ? orbitX : 0,
                y: member.position !== 'center' ? orbitY : 0
            }}
            initial={{
                opacity: 0,
                scale: 0.3,
                rotate: animationValues.rotate
            }}
            whileInView={{
                opacity: 1,
                scale: cardScale,
                rotate: 0
            }}
            transition={{
                duration: 1.2,
                delay: member.delay,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            viewport={{ once: true }}
        >
            <div className={`${cardSizeClasses} bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center`}>
                <div className={`${member.position === 'center' ? 'w-16 h-16 md:w-20 md:h-20' : 'w-12 h-12 md:w-16 md:h-16'} bg-gradient-to-br ${getGradientColor(member.name)} rounded-full mb-4 flex items-center justify-center shadow-lg`}>
                    <span className={`${member.position === 'center' ? 'text-lg md:text-2xl' : 'text-sm md:text-lg'} font-bold text-white`}>
                        {member.name.charAt(0)}
                    </span>
                </div>
                <h3 className={`font-bold text-gray-900 mb-1 ${member.position === 'center' ? 'text-lg md:text-xl' : 'text-sm md:text-lg'}`}>
                    {member.name}
                </h3>
                <p className={`text-blue-600 font-semibold mb-3 ${member.position === 'center' ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
                    {member.role}
                </p>
                <blockquote className={`text-gray-600 italic leading-relaxed ${member.position === 'center' ? 'text-xs md:text-sm' : 'text-xs'}`}>
                    &ldquo;{member.quote}&rdquo;
                </blockquote>
            </div>
        </motion.div>
    )
}