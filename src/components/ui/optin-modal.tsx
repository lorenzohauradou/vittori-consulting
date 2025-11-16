'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from './input'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { useOptin } from '@/contexts/OptinContext'
import Image from 'next/image'

export function OptinModal() {
    const { isOpen, closeModal, redirectTarget } = useOptin()
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    const CALENDLY_URL = 'https://calendly.com/valerio-vittori/30min?hide_gdpr_banner=1'
    const SITE_URL = process.env.NEXT_PUBLIC_URL || 'https://www.vittoriconsulting.it'

    const capitalizeFirst = (str: string) => {
        if (!str) return str
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            if (supabase) {
                const { data: authData, error: authError } = await supabase.auth.signUp({
                    email: formData.email,
                    password: Math.random().toString(36).slice(-12) + 'Aa1!',
                    options: {
                        data: {
                            first_name: formData.firstName,
                            last_name: formData.lastName,
                            phone: formData.phone,
                            full_name: `${formData.firstName} ${formData.lastName}`
                        },
                        emailRedirectTo: `${SITE_URL}/video-letter`
                    }
                })

                if (authError) {
                    console.error('Error signing up:', authError)
                }

                if (authData?.user) {
                    const { error: profileError } = await supabase.from('profiles').insert({
                        id: authData.user.id,
                        email: formData.email,
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        phone: formData.phone,
                        full_name: `${formData.firstName} ${formData.lastName}`,
                        source: redirectTarget === 'calendly' ? 'calendly_optin' : 'video_letter_optin'
                    })

                    if (profileError) {
                        console.error('Error creating profile:', profileError)
                    }
                }
            }

            localStorage.setItem('userOptedIn', 'true')
            localStorage.setItem('userEmail', formData.email)

            closeModal()

            if (redirectTarget === 'calendly') {
                window.location.href = CALENDLY_URL
            } else {
                router.push('/video-letter')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            closeModal()

            if (redirectTarget === 'calendly') {
                window.location.href = CALENDLY_URL
            } else {
                router.push('/video-letter')
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2e54a1] via-blue-500 to-[#2e54a1]" />

                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8 pt-10">
                                <div className="text-center mb-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                        className="w-24 h-24 mx-auto mb-2 relative"
                                    >
                                        <Image
                                            src="https://vittoriconsulting.b-cdn.net/logos/logo-circle.webp"
                                            alt="VittoriConsulting Logo - Metodo Vittori 360 Marketing Roma"
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>

                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        {redirectTarget === 'calendly'
                                            ? 'Prenota la tua consulenza gratuita'
                                            : 'Scopri il Metodo Vittori 360'
                                        }
                                    </h2>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {redirectTarget === 'calendly'
                                            ? 'Inserisci i tuoi dati per prenotare la tua consulenza gratuita con VittoriConsulting e trasformare il tuo business'
                                            : 'Inserisci i tuoi dati per accedere al video esclusivo e scoprire come trasformare il tuo business'
                                        }
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <Input
                                                type="text"
                                                placeholder="Nome"
                                                required
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: capitalizeFirst(e.target.value) })}
                                                className="h-11 rounded-xl border-gray-200 focus:border-[#2e54a1] transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                type="text"
                                                placeholder="Cognome"
                                                required
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: capitalizeFirst(e.target.value) })}
                                                className="h-11 rounded-xl border-gray-200 focus:border-[#2e54a1] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="h-11 rounded-xl border-gray-200 focus:border-[#2e54a1] transition-colors"
                                    />

                                    <Input
                                        type="tel"
                                        placeholder="Telefono"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="h-11 rounded-xl border-gray-200 focus:border-[#2e54a1] transition-colors"
                                    />

                                    <motion.button
                                        type="submit"
                                        disabled={isLoading}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full h-12 bg-gradient-to-r from-[#2e54a1] to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span>Caricamento...</span>
                                            </div>
                                        ) : redirectTarget === 'calendly' ? (
                                            'Prenota la Consulenza Gratuita'
                                        ) : (
                                            'Accedi al Video Esclusivo'
                                        )}
                                    </motion.button>
                                </form>

                                <p className="text-xs text-gray-500 text-center mt-6">
                                    I tuoi dati sono al sicuro. Non condivideremo mai le tue informazioni.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
