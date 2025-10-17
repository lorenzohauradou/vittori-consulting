'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

type RedirectTarget = 'video-letter' | 'calendly'

interface OptinContextType {
    isOpen: boolean
    isAuthenticated: boolean
    redirectTarget: RedirectTarget
    openModal: (target?: RedirectTarget) => void
    closeModal: () => void
    checkAuth: () => Promise<boolean>
}

const OptinContext = createContext<OptinContextType | undefined>(undefined)

export function OptinProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [redirectTarget, setRedirectTarget] = useState<RedirectTarget>('video-letter')

    // Controlla se l'utente è autenticato
    const checkAuth = async (): Promise<boolean> => {
        // Controlla prima sessionStorage (più veloce)
        const hasOptedIn = sessionStorage.getItem('userOptedIn') === 'true'

        if (hasOptedIn) {
            setIsAuthenticated(true)
            return true
        }

        if (supabase) {
            try {
                const { data: { user } } = await supabase.auth.getUser()
                const isAuth = !!user
                setIsAuthenticated(isAuth)
                if (isAuth) {
                    sessionStorage.setItem('userOptedIn', 'true')
                }
                return isAuth
            } catch (error) {
                console.error('Error checking auth:', error)
                return false
            }
        }

        return false
    }

    useEffect(() => {
        checkAuth()
    }, [])

    const openModal = (target: RedirectTarget = 'video-letter') => {
        setRedirectTarget(target)
        setIsOpen(true)
    }

    const closeModal = () => setIsOpen(false)

    return (
        <OptinContext.Provider value={{
            isOpen,
            isAuthenticated,
            redirectTarget,
            openModal,
            closeModal,
            checkAuth
        }}>
            {children}
        </OptinContext.Provider>
    )
}

export function useOptin() {
    const context = useContext(OptinContext)
    if (!context) {
        throw new Error('useOptin deve essere usato all\'interno di OptinProvider')
    }
    return context
}
