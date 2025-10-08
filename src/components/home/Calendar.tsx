'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Calendar() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const [selectedTime, setSelectedTime] = useState<string>('')
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -30])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 40])

    const timeSlots = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
        '16:00', '16:30', '17:00', '17:30'
    ]

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDayOfWeek = firstDay.getDay()

        return { daysInMonth, startingDayOfWeek }
    }

    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth)

    const previousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
    }

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
    }

    const isDateDisabled = (day: number) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return date < today
    }

    const isSameDay = (date1: Date | undefined, day: number) => {
        if (!date1) return false
        return date1.getDate() === day &&
            date1.getMonth() === currentMonth.getMonth() &&
            date1.getFullYear() === currentMonth.getFullYear()
    }

    const selectDate = (day: number) => {
        if (isDateDisabled(day)) return
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
        setSelectedDate(newDate)
    }

    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']

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
                        className="max-w-4xl mx-auto mb-12 sm:mb-16"
                    >
                        <div className="bg-[#2e54a1] rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-xl border border-white/50">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true, margin: "-30px" }}
                                className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-6 sm:mb-8"
                            >
                                Abbiamo creato un <span className="font-bold text-white">METODO</span> che sta già ribaltando i numeri di imprenditori che, come te, erano fermi e bloccati da mesi (se non anni)… e che ora ci ringraziano!
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true, margin: "-30px" }}
                                className="mb-8 sm:mb-10"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    viewport={{ once: true, margin: "-30px" }}
                                    className="bg-white/15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/30 shadow-xl"
                                >
                                    <div className="text-center mb-6">
                                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                            Prenota la Tua Call Strategica
                                        </h4>
                                        <p className="text-blue-100 text-sm sm:text-base">
                                            Seleziona una data disponibile per la tua consulenza gratuita
                                        </p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl mb-4">
                                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={previousMonth}
                                                className="p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border border-white/30"
                                            >
                                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                            </motion.button>

                                            <h3 className="text-lg sm:text-2xl font-bold text-white">
                                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                            </h3>

                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={nextMonth}
                                                className="p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border border-white/30"
                                            >
                                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                            </motion.button>
                                        </div>

                                        <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2 sm:mb-4">
                                            {weekDays.map((day) => (
                                                <div
                                                    key={day}
                                                    className="text-center text-xs sm:text-sm font-semibold text-blue-200 py-1 sm:py-2"
                                                >
                                                    {day}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-7 gap-1 sm:gap-2">
                                            {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                                                <div key={`empty-${index}`} className="aspect-square" />
                                            ))}

                                            {Array.from({ length: daysInMonth }).map((_, index) => {
                                                const day = index + 1
                                                const disabled = isDateDisabled(day)
                                                const selected = isSameDay(selectedDate, day)

                                                return (
                                                    <motion.button
                                                        key={day}
                                                        whileHover={!disabled ? { scale: 1.05 } : {}}
                                                        whileTap={!disabled ? { scale: 0.95 } : {}}
                                                        onClick={() => selectDate(day)}
                                                        disabled={disabled}
                                                        className={`aspect-square rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-lg font-semibold transition-all duration-300 border
                                                            ${selected
                                                                ? 'bg-white text-[#2e54a1] border-white shadow-lg scale-105'
                                                                : disabled
                                                                    ? 'bg-white/5 text-white/30 border-transparent cursor-not-allowed'
                                                                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40'
                                                            }`}
                                                    >
                                                        {day}
                                                    </motion.button>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl">
                                        <label htmlFor="time-select" className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center block">
                                            Seleziona l&apos;Orario
                                        </label>

                                        <div className="relative">
                                            <select
                                                id="time-select"
                                                value={selectedTime}
                                                onChange={(e) => setSelectedTime(e.target.value)}
                                                aria-label="Seleziona orario per l'appuntamento"
                                                className="w-full appearance-none bg-white/20 backdrop-blur-sm text-white font-semibold text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 cursor-pointer hover:bg-white/30"
                                            >
                                                <option value="" disabled className="bg-[#2e54a1] text-white">
                                                    -- Seleziona un orario --
                                                </option>
                                                {timeSlots.map((time) => (
                                                    <option
                                                        key={time}
                                                        value={time}
                                                        className="bg-[#2e54a1] text-white py-2"
                                                    >
                                                        {time}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 w-5 h-5 text-white pointer-events-none" />
                                        </div>

                                        <p className="text-xs sm:text-sm text-blue-100 mt-3 text-center">
                                            Orario di lavoro: 9:00 - 18:00
                                        </p>
                                    </div>

                                    {selectedDate && selectedTime && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            className="mt-4 p-4 sm:p-6 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl border-2 border-white/40 shadow-xl"
                                        >
                                            <p className="text-white text-center text-base sm:text-lg">
                                                <span className="font-bold text-lg sm:text-xl">✓ Appuntamento Selezionato</span>
                                                <br />
                                                <span className="text-blue-100 mt-2 block text-sm sm:text-base">
                                                    {selectedDate.toLocaleDateString('it-IT', {
                                                        weekday: 'long',
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                                <span className="text-white font-semibold text-lg sm:text-xl mt-1 block">
                                                    ore {selectedTime}
                                                </span>
                                            </p>
                                        </motion.div>
                                    )}


                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                viewport={{ once: true, margin: "-30px" }}
                                className="text-center"
                            >
                                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                                    Ora tocca a te!
                                </p>
                                <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8">
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
                        className="text-center px-4"
                    >
                        <motion.button
                            disabled={!selectedDate || !selectedTime}
                            onClick={() => {
                                if (selectedDate && selectedTime) {
                                    const formattedDate = selectedDate.toISOString().split('T')[0]
                                    const calendlyUrl = `https://calendly.com/valerio-vittori/consulenza?date=${formattedDate}&time=${selectedTime}`
                                    window.open(calendlyUrl, '_blank')
                                }
                            }}
                            whileHover={selectedDate && selectedTime ? {
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(46, 84, 161, 0.3)"
                            } : {}}
                            whileTap={selectedDate && selectedTime ? { scale: 0.95 } : {}}
                            className={`relative inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl font-bold rounded-full shadow-2xl transition-all duration-300 group overflow-hidden w-full sm:w-auto ${selectedDate && selectedTime
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

                            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                                <span className="hidden sm:inline">
                                    {selectedDate && selectedTime ? 'PRENOTA LA CALL' :
                                        !selectedDate ? 'SELEZIONA DATA E ORARIO' : 'SELEZIONA L\'ORARIO'}
                                </span>
                                <span className="sm:hidden">
                                    {selectedDate && selectedTime ? 'PRENOTA LA CALL' :
                                        !selectedDate ? 'SELEZIONA DATA' : 'SELEZIONA ORARIO'}
                                </span>
                                {selectedDate && selectedTime && (
                                    <motion.svg
                                        className="w-5 h-5 sm:w-6 sm:h-6"
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
                            className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4"
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
