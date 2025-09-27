'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function StickyFounder() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 hidden lg:block"
        >
            <div className="bg-black text-white px-4 py-8 writing-mode-vertical-rl text-orientation-mixed">
                <div className="flex flex-col items-center space-y-2">
                    <div className="text-sm font-medium tracking-wider transform rotate-180">
                        Valerio Vittori
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
