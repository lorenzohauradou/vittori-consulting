'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface PartnersProps {
    showTitle?: boolean
}

export default function Partners({ showTitle = true }: PartnersProps) {
    const partners = [
        { name: 'Magic Box Roma', logo: '/images/partners/logo-magic-box-roma.png' },
        { name: 'Broker Associati', logo: '/images/partners/broker-associati.svg' },
        { name: 'Gelotti', logo: '/images/partners/gelotti.png' },
        { name: 'Ami School', logo: '/images/partners/amischool.png' },
        { name: 'Alberto\'s Pizza', logo: '/images/partners/albertos-pizza.jpg' },
        { name: 'St. Peter Photo', logo: '/images/partners/st-peter-photo.webp' },
        { name: 'Passito SpA', logo: '/images/partners/passito-spa.jpg' },
        { name: 'Scavolini Store Fiumicino', logo: '/images/partners/scavolini-store-fiumicino.jpg' },
        { name: 'Il Capriccio Pizzeria', logo: '/images/partners/il-capriccio-pizzeria.png' },
        { name: 'Summer Fest', logo: '/images/partners/summer.png' },
        { name: 'Voce', logo: '/images/partners/voce.png' },
        // Duplico per effetto continuo
        { name: 'Magic Box Roma', logo: '/images/partners/logo-magic-box-roma.png' },
        { name: 'Broker Associati', logo: '/images/partners/broker-associati.svg' },
        { name: 'Gelotti', logo: '/images/partners/gelotti.png' },
        { name: 'Ami School', logo: '/images/partners/amischool.png' },
        { name: 'Alberto\'s Pizza', logo: '/images/partners/albertos-pizza.jpg' },
        { name: 'St. Peter Photo', logo: '/images/partners/st-peter-photo.webp' },
        { name: 'Passito SpA', logo: '/images/partners/passito-spa.jpg' },
        { name: 'Scavolini Store Fiumicino', logo: '/images/partners/scavolini-store-fiumicino.jpg' },
        { name: 'Il Capriccio Pizzeria', logo: '/images/partners/il-capriccio-pizzeria.png' },
        { name: 'Summer Fest', logo: '/images/partners/summer.png' },
        { name: 'Voce', logo: '/images/partners/voce.png' },
    ]

    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {showTitle && (
                    <div className="text-center mb-12">
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                            HANNO SCELTO VITTORI CONSULTING
                        </h2>
                    </div>
                )}

                <div className="relative">
                    <motion.div
                        className="flex space-x-12 items-center"
                        animate={{
                            x: [0, -1400], // Muove da 0 a -1400px (larghezza approssimativa dei loghi)
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20, // 20 secondi per un ciclo completo
                                ease: "linear",
                            },
                        }}
                    >
                        {partners.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex-shrink-0 h-16 flex items-center justify-center"
                            >
                                <div className="whitespace-nowrap px-6 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
                                    <Image src={partner.logo || ''} alt={partner.name} width={100} height={100} />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
