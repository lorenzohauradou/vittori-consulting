'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface PortalTransitionProps {
    isActive: boolean
    onComplete: () => void
    label?: string
}

export function PortalTransition({ isActive, onComplete, label = 'MVP Agency' }: PortalTransitionProps) {
    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => {
                onComplete()
            }, 1200)

            return () => clearTimeout(timer)
        }
    }, [isActive, onComplete])

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
                    style={{
                        width: '100vw',
                        height: '100dvh',
                        minHeight: '100vh',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <div className="relative flex flex-col items-center gap-8">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 48 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="h-[1px] bg-gradient-to-r from-transparent via-[#2e54a1] to-transparent"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="text-[11px] tracking-[0.4em] uppercase text-zinc-500 font-medium"
                        >
                            {label}
                        </motion.p>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent origin-center"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
