'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface OptinContextType {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

const OptinContext = createContext<OptinContextType | undefined>(undefined)

export function OptinProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
        <OptinContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </OptinContext.Provider>
    )
}

export function useOptin() {
    const context = useContext(OptinContext)
    if (context === undefined) {
        throw new Error('useOptin must be used within an OptinProvider')
    }
    return context
}
