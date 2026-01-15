'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    isSameMonth,
    isSameDay,
    isToday,
    isBefore,
} from 'date-fns'
import { it } from 'date-fns/locale'
import { ChevronLeft, ChevronRight, Clock, User, Mail, Phone, MessageSquare, Loader2, Calendar, CalendarCheck } from 'lucide-react'


interface BookingData {
    name: string
    email: string
    phone: string
    notes: string
}

type Step = 'date' | 'time' | 'form' | 'success'

export default function CustomCalendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [availableSlots, setAvailableSlots] = useState<string[]>([])
    const [loadingSlots, setLoadingSlots] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [step, setStep] = useState<Step>('date')
    const [formData, setFormData] = useState<BookingData>({
        name: '',
        email: '',
        phone: '',
        notes: '',
    })

    const fetchAvailableSlots = useCallback(async (date: Date) => {
        setLoadingSlots(true)
        try {
            const dateStr = format(date, 'yyyy-MM-dd')
            const res = await fetch(`/api/calendar?date=${dateStr}`)
            const data = await res.json()
            if (data.slots) {
                setAvailableSlots(data.slots)
            }
        } catch (error) {
            console.error('Errore fetch slots:', error)
            setAvailableSlots([])
        } finally {
            setLoadingSlots(false)
        }
    }, [])

    useEffect(() => {
        if (selectedDate) {
            fetchAvailableSlots(selectedDate)
        }
    }, [selectedDate, fetchAvailableSlots])

    const handleDateClick = (day: Date) => {
        if (isBefore(day, new Date()) && !isToday(day)) return
        setSelectedDate(day)
        setSelectedTime(null)
        setStep('time')
    }

    const handleTimeClick = (time: string) => {
        setSelectedTime(time)
        setStep('form')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedDate || !selectedTime) return

        setSubmitting(true)
        try {
            const res = await fetch('/api/calendar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    date: format(selectedDate, 'yyyy-MM-dd'),
                    time: selectedTime,
                    ...formData,
                }),
            })

            const data = await res.json()
            if (data.success) {
                setStep('success')
            } else {
                alert(data.error || 'Errore nella prenotazione')
            }
        } catch (error) {
            console.error('Errore prenotazione:', error)
            alert('Errore nella prenotazione')
        } finally {
            setSubmitting(false)
        }
    }


    const renderHeader = () => {
        return (
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Mese precedente"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h3 className="text-lg font-semibold text-gray-900 capitalize">
                    {format(currentMonth, 'MMMM yyyy', { locale: it })}
                </h3>
                <button
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Mese successivo"
                >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        )
    }

    const renderDays = () => {
        const days = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']
        return (
            <div className="grid grid-cols-7 mb-2">
                {days.map((day) => (
                    <div
                        key={day}
                        className="text-center text-sm font-medium text-gray-500 py-2"
                    >
                        {day}
                    </div>
                ))}
            </div>
        )
    }

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth)
        const monthEnd = endOfMonth(monthStart)
        const startDate = startOfWeek(monthStart, { weekStartsOn: 1 })
        const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 })

        const rows = []
        let days = []
        let day = startDate

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const cloneDay = day
                const isPast = isBefore(day, new Date()) && !isToday(day)
                const isCurrentMonth = isSameMonth(day, monthStart)
                const isSelected = selectedDate && isSameDay(day, selectedDate)
                const isTodayDate = isToday(day)
                const isWeekend = i === 5 || i === 6

                days.push(
                    <button
                        key={day.toString()}
                        onClick={() => !isPast && !isWeekend && handleDateClick(cloneDay)}
                        disabled={isPast || isWeekend}
                        className={`
                            relative aspect-square flex items-center justify-center text-sm font-medium rounded-xl transition-all
                            ${!isCurrentMonth ? 'text-gray-300' : ''}
                            ${isPast || isWeekend ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer hover:bg-[#2e54a1]/10'}
                            ${isSelected ? 'bg-[#2e54a1] text-white hover:bg-[#2e54a1]' : ''}
                            ${isTodayDate && !isSelected ? 'ring-2 ring-[#2e54a1]/30' : ''}
                        `}
                    >
                        {format(day, 'd')}
                    </button>
                )
                day = addDays(day, 1)
            }
            rows.push(
                <div key={day.toString()} className="grid grid-cols-7 gap-1">
                    {days}
                </div>
            )
            days = []
        }

        return <div className="space-y-1">{rows}</div>
    }

    const renderTimeSlots = () => {
        return (
            <div className="min-h-[240px]">
                {loadingSlots ? (
                    <div className="flex flex-col items-center justify-center h-[240px]">
                        <div className="relative w-14 h-14 mb-4">
                            <div className="absolute inset-0 border-2 border-[#2e54a1]/20 rounded-full" />
                            <div className="absolute inset-0 border-2 border-transparent border-t-[#2e54a1] rounded-full animate-spin" />
                            <Image
                                src="/images/logo/logo-circle.webp"
                                alt="Loading"
                                width={40}
                                height={40}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                            />
                        </div>
                        <p className="text-sm text-gray-500">Caricamento orari disponibili...</p>
                    </div>
                ) : availableSlots.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[240px] text-gray-500">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <Clock className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="font-medium text-gray-700">Nessuno slot disponibile</p>
                        <p className="text-sm text-gray-400 mt-1">Prova a selezionare un&apos;altra data</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {availableSlots.map((time) => (
                            <button
                                key={time}
                                onClick={() => handleTimeClick(time)}
                                className={`
                                    py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200
                                    ${selectedTime === time
                                        ? 'bg-gradient-to-br from-[#2e54a1] to-[#3d6bc9] text-white shadow-lg shadow-[#2e54a1]/25'
                                        : 'bg-gray-50 text-gray-700 hover:bg-[#2e54a1]/10 hover:text-[#2e54a1] border border-gray-200 hover:border-[#2e54a1]/30'
                                    }
                                `}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    const renderForm = () => {
        return (
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="bg-[#2e54a1]/5 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#2e54a1]" />
                        <div>
                            <p className="font-medium text-gray-900">
                                {selectedDate && format(selectedDate, "EEEE d MMMM yyyy", { locale: it })}
                            </p>
                            <p className="text-sm text-[#2e54a1]">Ore {selectedTime}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4" />
                        Nome e Cognome *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2e54a1] focus:ring-2 focus:ring-[#2e54a1]/20 outline-none transition-all"
                        placeholder="Mario Rossi"
                    />
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4" />
                        Email *
                    </label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2e54a1] focus:ring-2 focus:ring-[#2e54a1]/20 outline-none transition-all"
                        placeholder="mario@email.com"
                    />
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4" />
                        Telefono
                    </label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2e54a1] focus:ring-2 focus:ring-[#2e54a1]/20 outline-none transition-all"
                        placeholder="+39 333 1234567"
                    />
                </div>

                <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="w-4 h-4" />
                        Note (opzionale)
                    </label>
                    <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2e54a1] focus:ring-2 focus:ring-[#2e54a1]/20 outline-none transition-all resize-none"
                        placeholder="Descrivi brevemente di cosa vorresti parlare..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-gradient-to-r from-[#2e54a1] to-[#3d6bc9] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#2e54a1]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                    {submitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Prenotazione in corso...
                        </>
                    ) : (
                        <>
                            <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Conferma Prenotazione
                        </>
                    )}
                </button>
            </form>
        )
    }

    const renderSuccess = () => {
        return (
            <div className="text-center py-6">
                <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2e54a1]/20 to-[#3d6bc9]/20 rounded-full animate-pulse" />
                    <div className="absolute inset-1 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <Image
                            src="/images/logo/logo-circle.webp"
                            alt="Vittori Consulting"
                            width={56}
                            height={56}
                            className="rounded-full"
                        />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-[#2e54a1] to-[#3d6bc9] rounded-full flex items-center justify-center shadow-lg">
                        <CalendarCheck className="w-4 h-4 text-white" />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                        Prenotazione Confermata
                    </h3>
                </div>

                {/* <p className="text-gray-600 mb-6">
                    A breve riceverai una email con i dettagli
                </p> */}

                <div className="bg-gradient-to-br from-[#2e54a1]/5 to-[#3d6bc9]/10 rounded-2xl p-5 mb-6 border border-[#2e54a1]/10">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Calendar className="w-5 h-5 text-[#2e54a1]" />
                        <p className="font-semibold text-gray-900 capitalize">
                            {selectedDate && format(selectedDate, "EEEE d MMMM yyyy", { locale: it })}
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2e54a1] text-white rounded-full text-sm font-medium">
                        <Clock className="w-4 h-4" />
                        Ore {selectedTime}
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-500 mb-3">Ci vediamo presto!</p>
                    <Image
                        src="/images/logo/firma.png"
                        alt="Firma Valerio Vittori"
                        width={140}
                        height={50}
                        className="mx-auto opacity-80"
                    />
                </div>

            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header with steps */}
            <div className="bg-gradient-to-r from-[#2e54a1] via-[#3458a8] to-[#3d6bc9] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {step !== 'date' && step !== 'success' ? (
                            <button
                                onClick={() => setStep(step === 'form' ? 'time' : 'date')}
                                className="w-11 h-11 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                        ) : (
                            <div className="w-11 h-11 rounded-full bg-white p-0.5 shadow-lg">
                                <Image
                                    src="/images/logo/logo-circle.webp"
                                    alt="Vittori Consulting"
                                    width={40}
                                    height={40}
                                    className="rounded-full w-full h-full object-cover"
                                />
                            </div>
                        )}
                        <div>
                            <h2 className="text-white font-bold text-lg">
                                {step === 'date' && 'Seleziona una data'}
                                {step === 'time' && 'Scegli un orario'}
                                {step === 'form' && 'I tuoi dati'}
                                {step === 'success' && 'Fatto!'}
                            </h2>
                            <p className="text-white/70 text-sm">
                                {step === 'date' && 'Call strategica gratuita di 30 minuti'}
                                {step === 'time' && selectedDate && format(selectedDate, "EEEE d MMMM", { locale: it })}
                                {step === 'form' && 'Completa la prenotazione'}
                                {step === 'success' && 'La tua call è prenotata'}
                            </p>
                        </div>
                    </div>

                    {/* Step indicator */}
                    <div className="hidden sm:flex items-center gap-1.5">
                        {['date', 'time', 'form'].map((s, i) => {
                            const isActive = step === s || (step === 'success' && s === 'form')
                            const isPast = ['date', 'time', 'form'].indexOf(step) > i || step === 'success'
                            return (
                                <div
                                    key={s}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${isActive
                                        ? 'w-6 bg-white'
                                        : isPast
                                            ? 'w-1.5 bg-white/60'
                                            : 'w-1.5 bg-white/30'
                                        }`}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
                {step === 'date' && (
                    <>
                        {renderHeader()}
                        {renderDays()}
                        {renderCells()}
                    </>
                )}
                {step === 'time' && renderTimeSlots()}
                {step === 'form' && renderForm()}
                {step === 'success' && renderSuccess()}
            </div>
        </div>
    )
}
