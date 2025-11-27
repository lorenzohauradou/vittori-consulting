'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

interface PortalTransitionProps {
    isActive: boolean
    onComplete: () => void
    label?: string
}

export function PortalTransition({ isActive, onComplete, label = 'MVP Agency' }: PortalTransitionProps) {
    // Block ALL scrolling on mobile
    useEffect(() => {
        if (isActive) {
            const scrollY = window.scrollY

            // Lock the body in place
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.left = '0'
            document.body.style.right = '0'
            document.body.style.width = '100%'
            document.body.style.overflow = 'hidden'
            document.documentElement.style.overflow = 'hidden'

            // Prevent touch scrolling
            const preventScroll = (e: TouchEvent) => {
                e.preventDefault()
            }

            document.addEventListener('touchmove', preventScroll, { passive: false })
            document.addEventListener('wheel', preventScroll as EventListener, { passive: false })

            return () => {
                document.removeEventListener('touchmove', preventScroll)
                document.removeEventListener('wheel', preventScroll as EventListener)
                document.body.style.position = ''
                document.body.style.top = ''
                document.body.style.left = ''
                document.body.style.right = ''
                document.body.style.width = ''
                document.body.style.overflow = ''
                document.documentElement.style.overflow = ''
                window.scrollTo(0, scrollY)
            }
        }
    }, [isActive])

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => {
                onComplete()
            }, 1100)

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
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100vw',
                        height: '100vh',
                        touchAction: 'none',
                        overscrollBehavior: 'none',
                    }}
                    onTouchMove={(e) => e.preventDefault()}
                >
                    <div className="relative flex flex-col items-center gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Image
                                src="/images/logo/reverse.png"
                                alt="Vittori Consulting"
                                width={160}
                                height={50}
                                className="h-auto w-auto brightness-0 invert"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 64 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="h-[1px] bg-gradient-to-r from-transparent via-[#2e54a1] to-transparent"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-medium"
                        >
                            {label}
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
