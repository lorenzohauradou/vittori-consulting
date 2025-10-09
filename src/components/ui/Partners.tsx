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
        // Prima duplicazione per effetto seamless
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
        // Seconda duplicazione per garantire seamless perfetto
        { name: 'Magic Box Roma', logo: '/images/partners/logo-magic-box-roma.webp' },
        { name: 'Broker Associati', logo: '/images/partners/broker-associati.svg' },
        { name: 'Gelotti', logo: '/images/partners/gelotti.webp' },
        { name: 'Ami School', logo: '/images/partners/amischool.webp' },
        { name: 'Alberto\'s Pizza', logo: '/images/partners/albertos-pizza.webp' },
        { name: 'St. Peter Photo', logo: '/images/partners/st-peter-photo.webp' },
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
                            x: ["-50%", "-100%"], // Scorre dalla metà alla fine, poi ricomincia seamless
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30, // 30 secondi per un ciclo più lento
                                ease: "linear",
                            },
                        }}
                    >
                        {partners.map((partner, index) => {
                            const isFirstBatch = index < 12 // Primi 12 loghi originali
                            const isDuplicate = index >= 12

                            return (
                                <div
                                    key={`${partner.name}-${index}`}
                                    className="flex-shrink-0 h-20 flex items-center justify-center"
                                >
                                    <div className="whitespace-nowrap px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
                                        <Image
                                            src={partner.logo || ""}
                                            alt={`${partner.name} - Cliente VittoriConsulting Marketing Roma`}
                                            width={partner.name === 'Broker Associati' ? 100 : 140}
                                            height={partner.name === 'Broker Associati' ? 40 : 60}
                                            sizes={partner.name === 'Broker Associati' ? "100px" : "140px"}
                                            loading={isFirstBatch ? "eager" : "lazy"}
                                            priority={isFirstBatch && !isDuplicate}
                                            className={partner.name === 'Broker Associati' ? "h-auto w-auto max-h-12" : "h-auto w-auto max-h-16"}
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
