'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

// BunnyCDN library ID for video embeds
const BUNNY_LIBRARY_ID = '510109'

// Helper to build BunnyCDN embed URL with iOS WebView compatibility
function buildBunnyEmbedUrl(videoId: string): string {
    return `https://iframe.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${videoId}?autoplay=true&loop=true&muted=true&preload=true&disableIosPlayer=true`
}

// Detect TikTok, Instagram, Facebook in-app browsers
function isInAppBrowser(): boolean {
    if (typeof window === 'undefined') return false
    const ua = navigator.userAgent || navigator.vendor
    return /TikTok|Instagram|FBAN|FBAV|Twitter|Line\//i.test(ua)
}

interface IPhoneCanvasProps {
    title?: string
    description?: string
    showVideo?: boolean
    videoId?: string
    className?: string
    hideAudioButton?: boolean
}

export default function IPhoneCanvas({
    title = "Success Story",
    description = "Guarda come abbiamo trasformato questo business",
    showVideo = true,
    videoId,
    className = "",
}: IPhoneCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isInApp, setIsInApp] = useState(false)
    const [showIframe, setShowIframe] = useState(false)

    useEffect(() => {
        const inApp = isInAppBrowser()
        setIsInApp(inApp)
        // On normal browsers, auto-show the video
        if (!inApp && videoId) {
            setShowIframe(true)
        }
    }, [videoId])

    const handlePlayClick = () => {
        if (isInApp && videoId) {
            // In TikTok/IG browser, open video in new tab
            window.open(`https://iframe.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${videoId}?autoplay=true`, '_blank')
        } else {
            setShowIframe(true)
        }
    }

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
            >
                <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                    <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20"></div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
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
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.15 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="w-full h-full rounded-2xl overflow-hidden relative"
                                    style={{
                                        isolation: 'isolate',
                                        contain: 'layout style paint',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        WebkitMaskImage: '-webkit-radial-gradient(white, black)'
                                    }}
                                >
                                    {videoId ? (
                                        <div className="relative w-full h-full bg-black">
                                            {isInApp || !showIframe ? (
                                                // Static thumbnail with play button for in-app browsers
                                                <div
                                                    className="w-full h-full relative cursor-pointer group bg-gradient-to-br from-[#2e54a1] to-blue-600 flex flex-col items-center justify-center"
                                                    onClick={handlePlayClick}
                                                >
                                                    <motion.div
                                                        animate={{ scale: [1, 1.1, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl mb-4"
                                                    >
                                                        <Play className="w-8 h-8 text-[#2e54a1] ml-1" fill="currentColor" />
                                                    </motion.div>
                                                    <p className="text-white text-sm font-medium">Tocca per vedere</p>
                                                </div>
                                            ) : (
                                                // Video iframe for normal browsers
                                                <iframe
                                                    src={buildBunnyEmbedUrl(videoId)}
                                                    loading="lazy"
                                                    className="w-full h-full absolute inset-0"
                                                    style={{ border: 'none' }}
                                                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                                                    allowFullScreen={false}
                                                    title="Video dimostrativo del caso studio"
                                                />
                                            )}
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#2e54a1] to-blue-600 flex flex-col items-center justify-center">
                                            {showVideo && (
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.02, 1],
                                                        opacity: [0.8, 1, 0.8]
                                                    }}
                                                    transition={{
                                                        duration: 4,
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
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.2 }}
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
                                        className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full pointer-events-none"
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
                                        className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-full pointer-events-none"
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

                {/* Decorazioni esterne */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg pointer-events-none"
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
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg pointer-events-none"
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
