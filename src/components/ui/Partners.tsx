'use client'

import React from "react";
import Image from "next/image";



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

    return (
        <section className="py-10 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        HANNO SCELTO VITTORI CONSULTING
                    </h2>
                </div>


                <div className="relative">
                    <div className="scroll-track relative">
                        <div className="scroll-content-seamless">
                            {[...partners, ...partners, ...partners].map((partner, index) => (
                                <div
                                    key={`partner-${index}`}
                                    className="scroll-item-seamless relative"
                                >
                                    <div className="whitespace-nowrap px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
                                        <Image
                                            src={partner.logo || ""}
                                            alt={`${partner.name} - Cliente VittoriConsulting Marketing Roma`}
                                            width={partner.name === 'Scavolini Store Fiumicino' ? 100 : 100}
                                            height={partner.name === 'Scavolini Store Fiumicino' ? 100 : 100}
                                            sizes={partner.name === 'Scavolini Store Fiumicino' ? "100px" : "100px"}
                                            priority={index < 6}
                                            className={partner.name === 'Scavolini Store Fiumicino' ? "h-[70px] w-auto max-h-[300px] object-contain" : "h-auto w-auto max-h-24 object-contain"}
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
