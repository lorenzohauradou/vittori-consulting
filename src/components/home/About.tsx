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
            photo: '/images/team/valerio.webp',
            position: 'top-right',
            delay: 0
        },
        {
            name: 'Lorenzo',
            role: 'Full Stack Developer',
            quote: 'Learn slow, fail fast, ship faster',
            photo: '/images/team/lorenzo.webp',
            position: 'center',
            delay: 0.2
        },
        {
            name: 'Camilla',
            role: 'Social Media Manager',
            quote: 'La creatività è un\'arma e lei sa come usarla',
            photo: '/images/team/camilla.webp',
            position: 'top-left',
            delay: 0.4
        },
        {
            name: 'Nicole',
            role: 'Project Manager',
            quote: 'Il Direttore d\'Orchestra del Tuo Marketing',
            photo: '/images/team/nicole.webp',
            position: 'bottom-left',
            delay: 0.6
        },
        {
            name: 'Gioele',
            role: 'Media Buyer',
            quote: 'L\'alchimista delle Conversioni',
            photo: '/images/team/gioele.webp',
            position: 'bottom-right',
            delay: 0.8
        }
    ]

    return (
        <section
            id="about"
            ref={containerRef}
            className="py-32 lg:py-48 relative overflow-hidden bg-[#2e54a1]"
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
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">
                        Ma chi siamo?
                    </h2>
                    <p className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-white">
                        Siamo <span className="font-bold text-blue-200">VittoriConsulting</span> l&apos;unica agenzia di Roma che integra marketing, operativo e commerciale: dalla strategia al branding alla vendita, grazie al <span className="font-bold text-blue-200">METODO VITTORI 360</span> che ha già cambiato il business a oltre <span className="font-bold text-white">180 imprenditori e PMI</span>
                    </p>
                </div>

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
                            videoSrc="/videos/camillavlog.mp4"
                        />
                    </div>
                    <div className="relative z-10">
                        <div className="mb-12">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white">
                                Dietro La Strategia:
                                <br />
                                <span className="relative text-blue-200">
                                    Un Team che Fa la Differenza
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full" />
                                </span>
                            </h3>
                        </div>

                        <div className="mb-12">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                                <p className="text-lg mb-6 leading-relaxed text-white">
                                    Siamo un team giovane e intraprendente, conosciamo il linguaggio dei Social e ci occupiamo di marketing a 360 gradi.
                                </p>
                                <p className="text-xl font-bold text-white">
                                    Non lasciamo nulla al caso e né al cliente: seguiamo ogni fase con <span className="font-extrabold text-blue-200">RIGORE, TRASPARENZA E RESPONSABILITÀ!</span>
                                </p>
                            </div>
                        </div>

                        <div className="mb-12">
                            <div className="grid gap-6 mb-10">
                                <div className="group flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-300/30 rounded-2xl flex items-center justify-center">
                                        <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-xl font-bold mb-2 text-blue-200">
                                            Ci definiamo:
                                        </h5>
                                        <p className="leading-relaxed text-white">
                                            • Devoti al risultato<br /> • Ossessivi con il cliente (nel senso buono)<br /> • Determinati e efficaci
                                        </p>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-300/30 rounded-2xl flex items-center justify-center">
                                        <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-xl font-bold mb-2 text-blue-200">
                                            Un mix tra:
                                        </h5>
                                        <p className="leading-relaxed text-white">
                                            Consulenti, creativi, operatori e cani da guardia della performance
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <h4 className="text-2xl font-bold mb-6 text-white">
                                    NOI CI METTIAMO LA FACCIA … E TU?
                                </h4>
                                <button
                                    onClick={openModal}
                                    className="font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl bg-white text-[#2e54a1] border-2 border-white hover:scale-105"
                                >
                                    INIZIA QUI
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
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
                    <div className={`relative w-36 h-36 mb-6 flex items-center justify-center`}>
                        {(member.name === 'Lorenzo' || member.name === 'Camilla' || member.name === 'Nicole') && (
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2e54a1] via-[#4f75c7] to-[#2e54a1] p-[5px]">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={
                                                member.name === 'Lorenzo' ? "/images/team/lorenzo.webp" :
                                                    member.name === 'Camilla' ? "/images/team/camilla.webp" :
                                                        "/images/team/nicole.webp"
                                            }
                                            alt={`${member.name} - ${member.role} VittoriConsulting Marketing Roma`}
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {member.name !== 'Lorenzo' && member.name !== 'Camilla' && member.name !== 'Nicole' && (
                            <div className={`w-32 h-32 bg-gradient-to-br ${getGradientColor(member.name)} rounded-full flex items-center justify-center shadow-lg`}>
                                <span className="text-3xl font-bold text-white">
                                    {member.name.charAt(0)}
                                </span>
                            </div>
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
                <div className={`relative w-32 h-32 mb-4 flex items-center justify-center`}>
                    {(member.name === 'Lorenzo' || member.name === 'Camilla' || member.name === 'Nicole') && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2e54a1] via-[#4f75c7] to-[#2e54a1] p-[4px]">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src={
                                            member.name === 'Lorenzo' ? "/images/team/lorenzo.webp" :
                                                member.name === 'Camilla' ? "/images/team/camilla.webp" :
                                                    "/images/team/nicole.webp"
                                        }
                                        alt={`${member.name} - ${member.role} VittoriConsulting Marketing Roma`}
                                        width={180}
                                        height={180}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {member.name !== 'Lorenzo' && member.name !== 'Camilla' && member.name !== 'Nicole' && (
                        <div className={`w-28 h-28 bg-gradient-to-br ${getGradientColor(member.name)} rounded-full flex items-center justify-center shadow-lg`}>
                            <span className="text-2xl font-bold text-white">
                                {member.name.charAt(0)}
                            </span>
                        </div>
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