'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PartnersProps {
    showTitle?: boolean
}

export default function Partners({ showTitle = true }: PartnersProps) {
    const partners = [
        { name: 'Magic Box Roma', logo: '/images/partners/logo-magic-box-roma.webp' },
        { name: 'Broker Associati', logo: '/images/partners/broker-associati.svg' },
        { name: 'Gelotti', logo: '/images/partners/gelotti.webp' },
        { name: 'Ami School', logo: '/images/partners/amischool.webp' },
        { name: 'Alberto\'s Pizza', logo: '/images/partners/albertos-pizza.webp' },
        { name: 'St. Peter Photo', logo: '/images/partners/st-peter-photo.webp' },
        { name: 'Passito SpA', logo: '/images/partners/passito-spa.webp' },
        { name: 'Scavolini Store Fiumicino', logo: '/images/partners/scavolini-store-fiumicino.webp' },
        { name: 'Il Capriccio Pizzeria', logo: '/images/partners/capriccio.webp' },
        { name: 'Summer Fest', logo: '/images/partners/summer.webp' },
        { name: 'Voce', logo: '/images/partners/voce.webp' },
        { name: 'HeroCraft', logo: '/images/partners/herocraft.webp' },
        // Duplico per effetto continuo
        { name: 'Magic Box Roma', logo: '/images/partners/logo-magic-box-roma.webp' },
        { name: 'Broker Associati', logo: '/images/partners/broker-associati.svg' },
        { name: 'Gelotti', logo: '/images/partners/gelotti.webp' },
        { name: 'Ami School', logo: '/images/partners/amischool.webp' },
        { name: 'Alberto\'s Pizza', logo: '/images/partners/albertos-pizza.webp' },
        { name: 'St. Peter Photo', logo: '/images/partners/st-peter-photo.webp' },
        { name: 'Passito SpA', logo: '/images/partners/passito-spa.webp' },
        { name: 'Scavolini Store Fiumicino', logo: '/images/partners/scavolini-store-fiumicino.webp' },
        { name: 'Il Capriccio Pizzeria', logo: '/images/partners/capriccio.webp' },
        { name: 'Summer Fest', logo: '/images/partners/summer.webp' },
        { name: 'Voce', logo: '/images/partners/voce.webp' },
        { name: 'HeroCraft', logo: '/images/partners/herocraft.webp' },
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
                        {partners.map((partner, index) => {
                            const isFirstBatch = index < 6
                            const isDuplicate = index >= 12

                            return (
                                <div
                                    key={`${partner.name}-${index}`}
                                    className="flex-shrink-0 h-16 flex items-center justify-center"
                                >
                                    <div className="whitespace-nowrap px-6 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
                                        <Image
                                            src={partner.logo || ""}
                                            alt={`${partner.name} - Cliente VittoriConsulting Marketing Roma`}
                                            width={100}
                                            height={40}
                                            sizes="100px"
                                            loading={isFirstBatch ? "eager" : "lazy"}
                                            priority={isFirstBatch && !isDuplicate}
                                            className="h-auto w-auto max-h-12"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
