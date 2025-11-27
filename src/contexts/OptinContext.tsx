'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

type RedirectTarget = 'video-letter' | 'calendly' | 'mvp-agency'

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

    const checkAuth = async (): Promise<boolean> => {
        const hasOptedIn = localStorage.getItem('userOptedIn') === 'true'

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
                    localStorage.setItem('userOptedIn', 'true')
                }
                return isAuth
            } catch (error) {
                console.error('Error checking auth:', error)
                setIsAuthenticated(false)
                return false
            }
        }

        setIsAuthenticated(false)
        return false
    }

    useEffect(() => {
        checkAuth()

        if (supabase) {
            const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
                const isAuth = !!session?.user
                setIsAuthenticated(isAuth)

                if (isAuth) {
                    localStorage.setItem('userOptedIn', 'true')
                } else if (event === 'SIGNED_OUT') {
                    localStorage.removeItem('userOptedIn')
                }
            })

            return () => {
                subscription.unsubscribe()
            }
        }
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
