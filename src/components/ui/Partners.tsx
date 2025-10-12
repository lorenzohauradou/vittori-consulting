'use client'

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useMotionValue } from "framer-motion";

export default function Partners() {
    const partners = [
        { name: 'Magic Box Roma', logo: 'https://vittoriconsulting.b-cdn.net/partners/logo-magic-box-roma.webp' },
        { name: 'Broker Associati', logo: 'https://vittoriconsulting.b-cdn.net/partners/broker-associati.svg' },
        { name: 'Alberto\'s Pizza', logo: 'https://vittoriconsulting.b-cdn.net/partners/albertos-pizza.webp' },
        { name: 'St. Peter Photo', logo: 'https://vittoriconsulting.b-cdn.net/partners/st-peter-photo.webp' },
        { name: 'Gelotti', logo: 'https://vittoriconsulting.b-cdn.net/partners/gelotti.webp' },
        { name: 'Passito SpA', logo: 'https://vittoriconsulting.b-cdn.net/partners/passito-spa.webp' },
        { name: 'Scavolini Store Fiumicino', logo: 'https://vittoriconsulting.b-cdn.net/partners/scavolini-store-fiumicino.webp' },
        { name: 'Il Capriccio Pizzeria', logo: 'https://vittoriconsulting.b-cdn.net/partners/capriccio.webp' },
        { name: 'Ami School', logo: 'https://vittoriconsulting.b-cdn.net/partners/amischool.webp' },
        { name: 'Summer Fest', logo: 'https://vittoriconsulting.b-cdn.net/partners/summer.webp' },
        { name: 'Voce', logo: 'https://vittoriconsulting.b-cdn.net/partners/voce.webp' },
        { name: 'HeroCraft', logo: 'https://vittoriconsulting.b-cdn.net/partners/herocraft.webp' },
    ]

    const duplicatedPartners = [...partners, ...partners, ...partners]
    const x = useMotionValue(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const controls = useAnimation()

    useEffect(() => {
        const animate = async () => {
            if (!containerRef.current) return

            const scrollWidth = containerRef.current.scrollWidth / 2

            await controls.start({
                x: -scrollWidth,
                transition: {
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                }
            })
        }

        animate()
    }, [controls])

    return (
        <section className="py-10 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        HANNO SCELTO VITTORI CONSULTING
                    </h2>
                </div>

                <div className="relative">
                    <motion.div
                        ref={containerRef}
                        className="flex gap-8"
                        style={{ x }}
                        animate={controls}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`partner-${index}`}
                                className="flex-shrink-0"
                            >
                                <div className="whitespace-nowrap px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50 h-24 flex items-center justify-center">
                                    <Image
                                        src={partner.logo || ""}
                                        alt={`${partner.name} - Cliente VittoriConsulting Marketing Roma`}
                                        width={100}
                                        height={100}
                                        sizes="100px"
                                        className={partner.name === 'Scavolini Store Fiumicino' ? "h-[70px] w-auto max-h-[300px] object-contain" : "h-auto w-auto max-h-20 object-contain"}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
