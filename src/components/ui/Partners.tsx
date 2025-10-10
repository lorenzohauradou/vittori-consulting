'use client'

import React from "react";
import Image from "next/image";



export default function Partners() {
    const partners = [
        { name: 'Magic Box Roma', logo: '/images/partners/logo-magic-box-roma.webp' },
        { name: 'Broker Associati', logo: '/images/partners/broker-associati.svg' },
        { name: 'Alberto\'s Pizza', logo: '/images/partners/albertos-pizza.webp' },
        { name: 'St. Peter Photo', logo: '/images/partners/st-peter-photo.webp' },
        { name: 'Gelotti', logo: '/images/partners/gelotti.webp' },
        { name: 'Passito SpA', logo: '/images/partners/passito-spa.webp' },
        { name: 'Scavolini Store Fiumicino', logo: '/images/partners/scavolini-store-fiumicino.webp' },
        { name: 'Il Capriccio Pizzeria', logo: '/images/partners/capriccio.webp' },
        { name: 'Ami School', logo: '/images/partners/amischool.webp' },
        { name: 'Summer Fest', logo: '/images/partners/summer.webp' },
        { name: 'Voce', logo: '/images/partners/voce.webp' },
        { name: 'HeroCraft', logo: '/images/partners/herocraft.webp' },
    ]

    return (
        <section className="py-10 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        HANNO SCELTO VITTORI CONSULTING
                    </h2>
                </div>


                <div className="relative">
                    <div className="scroll-track">
                        <div className="scroll-content-seamless">
                            {[...partners, ...partners].map((partner, index) => (
                                <div
                                    key={`partner-${index}`}
                                    className="scroll-item-seamless"
                                >
                                    <div className="whitespace-nowrap px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
                                        <Image
                                            src={partner.logo || ""}
                                            alt={`${partner.name} - Cliente VittoriConsulting Marketing Roma`}
                                            width={partner.name === 'Scavolini Store Fiumicino' ? 300 : 300}
                                            height={partner.name === 'Scavolini Store Fiumicino' ? 300 : 300}
                                            sizes={partner.name === 'Scavolini Store Fiumicino' ? "300px" : "300px"}
                                            loading="eager"
                                            className={partner.name === 'Scavolini Store Fiumicino' ? "h-[100px] w-auto max-h-[300px]" : "h-auto w-auto max-h-24"}
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
