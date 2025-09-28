'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Problem() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const [selectedTime, setSelectedTime] = useState<string>('')

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -30])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 40])
    const today = new Date()
    const disabledDays = Array.from({ length: 5 }, (_, i) => {
        const date = new Date(today)
        date.setDate(today.getDate() + i)
        return date
    })

    return (
        <section ref={containerRef} className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2e54a1]/5 via-transparent to-blue-100/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-[#2e54a1]/5"></div>

                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-20 right-20 w-32 h-32 border border-[#2e54a1]/15 rounded-full bg-gradient-to-br from-blue-100/20 to-transparent"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-32 left-20 w-24 h-24 border border-[#2e54a1]/20 rounded-full bg-gradient-to-br from-[#2e54a1]/10 to-transparent"
                />

                <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#2e54a1]/8 via-blue-100/15 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-r from-blue-200/20 via-[#2e54a1]/5 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-blue-100/10 via-[#2e54a1]/3 to-transparent rounded-full blur-3xl"></div>

                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-br from-[#2e54a1] to-blue-600 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-br from-blue-500 to-[#2e54a1] rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-gradient-to-br from-[#2e54a1] to-indigo-500 rounded-full animate-pulse delay-2000"></div>
                    <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-3000"></div>
                    <div className="absolute bottom-1/4 right-2/3 w-1 h-1 bg-[#2e54a1] rounded-full animate-ping delay-4000"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="mb-12"
                    >
                        <motion.h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                        >
                            &quot;Perché sei la persona giusta?&quot;
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2e54a1] mb-8"
                        >
                            Perché siamo l&apos;Unica scelta che ti fa davvero
                            <br />
                            <span className="relative">
                                Incassare
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#2e54a1] to-blue-600 rounded-full origin-left"
                                />
                            </span>
                        </motion.h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <div className="bg-[#2e54a1] rounded-3xl p-8 sm:p-12 shadow-xl border border-white/50">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true, margin: "-30px" }}
                                className="text-lg sm:text-xl text-white leading-relaxed mb-8"
                            >
                                Abbiamo creato un <span className="font-bold text-white">METODO</span> che sta già ribaltando i numeri di imprenditori che, come te, erano fermi e bloccati da mesi (se non anni)… e che ora ci ringraziano!
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true, margin: "-30px" }}
                                className="mb-10"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl"
                                >
                                    <div className="text-center mb-6">
                                        <h4 className="text-xl font-bold text-white mb-2">
                                            Prenota la Tua Call Strategica
                                        </h4>
                                        <p className="text-blue-100 text-sm">
                                            Seleziona una data disponibile per la tua consulenza gratuita
                                        </p>
                                    </div>

                                    <div className="flex justify-center mb-6">
                                        <Calendar
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={setSelectedDate}
                                            disabled={disabledDays}
                                            className="rounded-2xl bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg p-4"
                                            classNames={{
                                                months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                                                month: "space-y-4 w-full flex flex-col",
                                                table: "w-full h-full border-collapse space-y-1",
                                                head_row: "",
                                                row: "w-full mt-2",
                                                cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
                                                day: "h-10 w-10 p-0 font-normal text-gray-900 hover:bg-blue-100 focus:bg-blue-200 rounded-md transition-colors",
                                                day_selected: "bg-[#2e54a1] text-white hover:bg-[#2e54a1] hover:text-white focus:bg-[#2e54a1] focus:text-white",
                                                day_today: "bg-blue-50 text-[#2e54a1] font-semibold",
                                                day_outside: "text-gray-400 opacity-50",
                                                day_disabled: "text-gray-300 opacity-30 cursor-not-allowed",
                                                day_hidden: "invisible",
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-col items-center space-y-4">
                                        <Label className="text-white font-semibold text-lg">
                                            Seleziona l&apos;Orario
                                        </Label>
                                        <div className="flex flex-col items-center space-y-2">
                                            <Input
                                                type="time"
                                                id="time-picker"
                                                value={selectedTime}
                                                onChange={(e) => setSelectedTime(e.target.value)}
                                                min="09:00"
                                                max="18:00"
                                                step="1800"
                                                className="w-48 bg-white/90 backdrop-blur-sm border-white/50 focus:border-white focus:ring-white/50 text-gray-900 text-center"
                                            />
                                            <p className="text-xs text-blue-100">
                                                Orario di lavoro: 9:00 - 18:00
                                            </p>
                                        </div>

                                        {selectedDate && selectedTime && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-4 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30"
                                            >
                                                <p className="text-white text-center">
                                                    <span className="font-semibold">Appuntamento:</span>
                                                    <br />
                                                    {selectedDate.toLocaleDateString('it-IT', {
                                                        weekday: 'long',
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                    <br />
                                                    alle ore {selectedTime}
                                                </p>
                                            </motion.div>
                                        )}
                                    </div>


                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                viewport={{ once: true, margin: "-30px" }}
                                className="text-center"
                            >
                                <p className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    Ora tocca a te!
                                </p>
                                <p className="text-lg text-blue-100 mb-8">
                                    Smetti di perdere tempo e scopri la soluzione che ti farà scalare il tuo business!
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-center"
                    >
                        <motion.button
                            disabled={!selectedDate || !selectedTime}
                            whileHover={selectedDate && selectedTime ? {
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(46, 84, 161, 0.3)"
                            } : {}}
                            whileTap={selectedDate && selectedTime ? { scale: 0.95 } : {}}
                            className={`relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-full shadow-2xl transition-all duration-300 group overflow-hidden ${selectedDate && selectedTime
                                ? 'text-white bg-gradient-to-r from-[#2e54a1] to-blue-600 hover:shadow-3xl cursor-pointer'
                                : 'text-gray-400 bg-gray-300 cursor-not-allowed opacity-50'
                                }`}
                        >
                            {selectedDate && selectedTime && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 3
                                    }}
                                />
                            )}

                            <span className="relative z-10 flex items-center gap-3">
                                {selectedDate && selectedTime ? 'PRENOTA LA CALL' :
                                    !selectedDate ? 'SELEZIONA DATA E ORARIO' : 'SELEZIONA L\'ORARIO'}
                                {selectedDate && selectedTime && (
                                    <motion.svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </motion.svg>
                                )}
                            </span>
                        </motion.button>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            viewport={{ once: true, margin: "-30px" }}
                            className="text-sm text-gray-500 mt-4"
                        >
                            {selectedDate && selectedTime
                                ? 'Prenota la tua consulenza strategica gratuita'
                                : !selectedDate
                                    ? 'Seleziona data e orario per prenotare la tua call gratuita'
                                    : 'Seleziona anche l\'orario per completare la prenotazione'
                            }
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
