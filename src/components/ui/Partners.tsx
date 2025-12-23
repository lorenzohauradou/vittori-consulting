'use client'

import Image from "next/image";

const partners = [
    { name: 'Magic Box Roma', logo: 'https://vittoriconsulting.b-cdn.net/partners/logo-magic-box-roma.webp' },
    { name: 'Broker Associati', logo: 'https://vittoriconsulting.b-cdn.net/partners/broker-associati.svg' },
    { name: 'Alberto\'s Pizza', logo: 'https://vittoriconsulting.b-cdn.net/partners/albertos-pizza.webp' },
    { name: 'St. Peter Photo', logo: 'https://vittoriconsulting.b-cdn.net/partners/st-peter-photo.webp' },
    { name: 'Gelotti', logo: 'https://vittoriconsulting.b-cdn.net/partners/gelotti.webp' },
    { name: 'Passito SpA', logo: 'https://vittoriconsulting.b-cdn.net/partners/passito-spa.webp' },
    { name: 'Scavolini Store Fiumicino', logo: 'https://vittoriconsulting.b-cdn.net/partners/scavolini-store-fiumicino.webp' },
    { name: 'Caffè delle Fornaci', logo: 'https://vittoriconsulting.b-cdn.net/partners/caffefornaci.png' },
    { name: 'Il Capriccio Pizzeria', logo: 'https://vittoriconsulting.b-cdn.net/partners/capriccio.webp' },
    { name: 'Ami School', logo: 'https://vittoriconsulting.b-cdn.net/partners/amischool.webp' },
    { name: 'Summer Fest', logo: 'https://vittoriconsulting.b-cdn.net/partners/summer.webp' },
    { name: 'HeroCraft', logo: 'https://vittoriconsulting.b-cdn.net/partners/herocraft.webp' },
];

function PartnersList() {
    return (
        <>
            {partners.map((partner, index) => (
                <div key={`partner-${index}`} className="flex-shrink-0">
                    <div className="whitespace-nowrap px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50 h-24 flex items-center justify-center min-w-[140px]">
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
        </>
    );
}

export default function Partners() {
    return (
        <section className="py-10 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        HANNO SCELTO VITTORI CONSULTING
                    </h2>
                </div>

                <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-gray-50 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-gray-50 after:to-transparent after:content-['']">
                    <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
                        <div className="flex gap-8 shrink-0">
                            <PartnersList />
                        </div>
                        <div className="flex gap-8 shrink-0">
                            <PartnersList />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 10s linear infinite;
                    will-change: transform;
                }
            `}</style>
        </section>
    );
}
