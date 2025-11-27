'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'
import { PortalTransition } from '@/components/ui/portal-transition'

interface PortalLinkProps {
    href: string
    children: React.ReactNode
    className?: string
    label?: string
}

export function PortalLink({ href, children, className, label = 'Home' }: PortalLinkProps) {
    const [isActive, setIsActive] = useState(false)
    const [mounted, setMounted] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsActive(true)
    }

    const handleComplete = () => {
        router.push(href)
    }

    return (
        <>
            {mounted && createPortal(
                <PortalTransition isActive={isActive} onComplete={handleComplete} label={label} />,
                document.body
            )}
            <button onClick={handleClick} className={className}>
                {children}
            </button>
        </>
    )
}
