'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface IPhoneCanvasProps {
    title?: string
    description?: string
    showVideo?: boolean
    videoSrc?: string
    className?: string
}

export default function IPhoneCanvas({
    title = "Success Story",
    description = "Guarda come abbiamo trasformato questo business",
    showVideo = true,
    videoSrc,
    className = ""
}: IPhoneCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const [isMuted, setIsMuted] = useState(true)
    const [showAudioButton, setShowAudioButton] = useState(true)

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            const newMutedState = !isMuted
            setIsMuted(newMutedState)

            setShowAudioButton(true)

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            if (!newMutedState) {
                timeoutRef.current = setTimeout(() => {
                    setShowAudioButton(false)
                }, 2000)
            }
        }
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
    const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-50px" }}
                style={{
                    y,
                    rotateX,
                    rotateY,
                    scale
                }}
                className="relative"
            >
                <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                    <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20"></div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative w-full h-full bg-gradient-to-br from-blue-50 to-white rounded-[2.2rem] overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-12 bg-transparent z-10 flex items-center justify-between px-8 pt-4">
                                <span className="text-black text-sm font-semibold">9:41</span>
                                <div className="flex items-center gap-1">
                                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                                    <div className="w-6 h-3 border border-black rounded-sm">
                                        <div className="w-4 h-full bg-green-500 rounded-sm"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 pt-16 pb-8 px-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="w-full h-full rounded-2xl overflow-hidden relative"
                                >
                                    {videoSrc ? (
                                        <>
                                            <video
                                                ref={videoRef}
                                                src={videoSrc}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                onClick={toggleMute}
                                                aria-label="Video dimostrativo del caso studio"
                                                className="w-full h-full object-cover cursor-pointer"
                                            >
                                                <track kind="captions" />
                                            </video>

                                            <div
                                                className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300 cursor-pointer"
                                                onClick={toggleMute}
                                                role="button"
                                                tabIndex={0}
                                                aria-label={isMuted ? "Clicca per attivare l'audio" : "Clicca per disattivare l'audio"}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        e.preventDefault()
                                                        toggleMute()
                                                    }
                                                }}
                                            />

                                            {showAudioButton && (
                                                <motion.button
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        toggleMute()
                                                    }}
                                                    className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all z-30 focus:outline-none focus:ring-2 focus:ring-white/50"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
                                                    title={isMuted ? "Attiva audio" : "Disattiva audio"}
                                                >
                                                    {isMuted ? (
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                                        </svg>
                                                    )}
                                                </motion.button>
                                            )}
                                        </>
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#2e54a1] to-blue-600 flex flex-col items-center justify-center">
                                            {showVideo && (
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.05, 1],
                                                        opacity: [0.8, 1, 0.8]
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4"
                                                >
                                                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </motion.div>
                                            )}

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.7 }}
                                                viewport={{ once: true, margin: "-30px" }}
                                                className="text-center"
                                            >
                                                <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                                                <p className="text-white/80 text-sm">{description}</p>
                                            </motion.div>
                                        </div>
                                    )}

                                    <motion.div
                                        animate={{
                                            rotate: [0, 360]
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"
                                    />
                                    <motion.div
                                        animate={{
                                            rotate: [360, 0]
                                        }}
                                        transition={{
                                            duration: 15,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-full"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                >
                    <motion.img
                        src="/images/icons/rocket.png"
                        alt="Rocket"
                        animate={{
                            y: [0, -5, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-8 h-8"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                >
                    <motion.svg
                        animate={{
                            y: [0, 5, 0],
                            rotate: [0, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </motion.svg>
                </motion.div>
            </motion.div>
        </div>
    )
}
