'use client'

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useSpring, MotionValue } from "framer-motion";

const MarqueeItem = ({ children, speed }: { children: React.ReactNode; speed: MotionValue<number> }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const rectRef = useRef<DOMRect | null>(null);
    const x = useRef(0);

    const setX = () => {
        if (!itemRef.current || !rectRef.current) return;

        const xPercentage = (x.current / rectRef.current.width) * 100;

        if (xPercentage < -100) {
            x.current = 0;
        }

        itemRef.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
    };

    useEffect(() => {
        if (itemRef.current) {
            rectRef.current = itemRef.current.getBoundingClientRect();
        }
    }, []);

    useEffect(() => {
        let rafId: number;

        const loop = () => {
            x.current -= speed.get();
            setX();
            rafId = requestAnimationFrame(loop);
        };

        rafId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(rafId);
    }, [speed]);

    return (
        <div className="flex gap-8 flex-shrink-0" ref={itemRef}>
            {children}
        </div>
    );
};

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
    ];

    const speedSpring = useSpring(1, {
        damping: 40,
        stiffness: 90,
        mass: 5
    });

    const renderPartners = () => (
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

    return (
        <section className="py-10 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        HANNO SCELTO VITTORI CONSULTING
                    </h2>
                </div>

                <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-gray-50 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-gray-50 after:to-transparent after:content-['']">
                    <motion.div className="flex">
                        <MarqueeItem speed={speedSpring}>
                            {renderPartners()}
                        </MarqueeItem>
                        <MarqueeItem speed={speedSpring}>
                            {renderPartners()}
                        </MarqueeItem>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
