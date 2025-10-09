'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TrustedCustomersProps {
    title?: string
}

export function TrustedCustomers({
}: TrustedCustomersProps) {
    const customers = [
        { id: 1, name: 'Cliente 1', image: '/images/trusted/alice.png' },
        { id: 2, name: 'Cliente 2', image: '/images/trusted/adam.png' },
        { id: 3, name: 'Cliente 3', image: '/images/trusted/fin.png' },
        { id: 4, name: 'Cliente 4', image: '/images/trusted/dorothy.png' },
        { id: 5, name: 'Cliente 5', image: '/images/trusted/brian.png' },
        { id: 6, name: 'Cliente 6', image: '/images/trusted/freya.png' },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
        >
            <div className="flex items-center justify-center">
                <div className="flex items-center -space-x-4">
                    {customers.map((customer, index) => (
                        <motion.div
                            key={customer.id}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 200
                            }}
                            className="relative"
                        >
                            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-white/30 backdrop-blur-sm bg-gradient-to-br from-white/20 to-white/10 overflow-hidden shadow-xl hover:scale-110 transition-transform cursor-pointer">
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2e54a1] to-[#4f75c7]">
                                    <span className="text-white font-bold text-lg">
                                        {customer.name.charAt(0)}
                                    </span>
                                </div>
                                <Image
                                    src={customer.image}
                                    alt={`Cliente soddisfatto VittoriConsulting - Agenzia Marketing Roma`}
                                    fill
                                    sizes="(max-width: 640px) 56px, 64px"
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="text-center space-y-3 -mt-4">
                <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <motion.svg
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.3,
                                delay: 0.6 + i * 0.1,
                                type: "spring",
                                stiffness: 200
                            }}
                            className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </motion.svg>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
