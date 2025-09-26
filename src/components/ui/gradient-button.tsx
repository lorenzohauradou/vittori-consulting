import React from 'react'
import { cn } from '@/lib/utils'

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export function GradientButton({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}: GradientButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
        primary: 'btn-gradient-primary text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent'
    }

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    }

    return (
        <button
            className={cn(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

