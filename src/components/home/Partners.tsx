'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Partners() {
    // Lista dei partner adattata per VittoriConsulting
    const partners = [
        { name: 'Magic Box Roma', logo: '/images/partners/magic-box-roma.png' },
        { name: 'Broker Associati', logo: '/images/partners/broker-associati.png' },
        { name: 'Gelotti', logo: '/images/partners/gelotti.png' },
        { name: 'Ami School', logo: '/images/partners/ami-school.png' },
        { name: 'Alberto\'s Pizza', logo: '/images/partners/alberto-pizza.jpg' },
        { name: 'St. Peter Photo', logo: '/images/partners/st-peter-photo.png' },
        { name: 'Passito SpA', logo: '/images/partners/passito-spa.png' },
        { name: 'Scavolini Store Fiumicino', logo: '/images/partners/scavolini-store-fiumicino.png' },
        { name: 'Il Capriccio Pizzeria', logo: '/images/partners/il-capriccio-pizzeria.png' },
        // Duplico per effetto continuo
        { name: 'Magic Box Roma', logo: '/images/partners/magic-box-roma.png' },
        { name: 'Broker Associati', logo: '/images/partners/broker-associati.png' },
        { name: 'Gelotti', logo: '/images/partners/gelotti.png' },
        { name: 'Ami School', logo: '/images/partners/ami-school.png' },
        { name: 'Alberto\'s Pizza', logo: '/images/partners/alberto-pizza.jpg' },
        { name: 'St. Peter Photo', logo: '/images/partners/st-peter-photo.png' },
        { name: 'Passito SpA', logo: '/images/partners/passito-spa.png' },
        { name: 'Scavolini Store Fiumicino', logo: '/images/partners/scavolini-store-fiumicino.png' },
        { name: 'Il Capriccio Pizzeria', logo: '/images/partners/il-capriccio-pizzeria.png' },
    ]

    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        HANNO SCELTO VITTORI CONSULTING
                    </h2>
                </div>

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
                                className="flex-shrink-0 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <div className="text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors duration-300 whitespace-nowrap px-6 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
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
