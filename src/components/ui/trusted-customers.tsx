'use client'

import React from 'react'
// import Image from 'next/image'
import { motion } from 'framer-motion'

interface TrustedCustomersProps {
    title?: string
    subtitle?: string
}

export function TrustedCustomers({
    title = "Si fidano di noi",
    subtitle = "Oltre 180 imprenditori hanno già trasformato il loro business"
}: TrustedCustomersProps) {
    const customers = [
        { id: 1, name: 'Cliente 1', image: '/images/customers/customer-1.jpg' },
        { id: 2, name: 'Cliente 2', image: '/images/customers/customer-2.jpg' },
        { id: 3, name: 'Cliente 3', image: '/images/customers/customer-3.jpg' },
        { id: 4, name: 'Cliente 4', image: '/images/customers/customer-4.jpg' },
        { id: 5, name: 'Cliente 5', image: '/images/customers/customer-5.jpg' },
        { id: 6, name: 'Cliente 6', image: '/images/customers/customer-6.jpg' },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 py-8"
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
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-white/30 backdrop-blur-sm bg-gradient-to-br from-white/20 to-white/10 overflow-hidden shadow-xl hover:scale-110 transition-transform cursor-pointer">
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2e54a1] to-[#4f75c7]">
                                    <span className="text-white font-bold text-lg">
                                        {customer.name.charAt(0)}
                                    </span>
                                </div>
                                {/* <Image
                                    src={customer.image}
                                    alt={customer.name}
                                    fill
                                    className="object-cover"
                                /> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <p className="text-white/90 text-lg sm:text-xl font-semibold mb-1">
                    {title}
                </p>
                <p className="text-white/70 text-sm sm:text-base">
                    {subtitle}
                </p>
            </div>
        </motion.div>
    )
}
