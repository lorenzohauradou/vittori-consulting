import React from 'react'

interface CustomBackgroundProps {
    children: React.ReactNode
    variant?: 'hero' | 'section' | 'gradient'
    className?: string
    id?: string
}

export function CustomBackground({
    children,
    variant = 'hero',
    className = '',
    id
}: CustomBackgroundProps) {
    const getBackgroundClasses = () => {
        switch (variant) {
            case 'hero':
                return 'relative bg-white overflow-hidden'
            case 'section':
                return 'relative bg-white overflow-hidden'
            case 'gradient':
                return 'relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 overflow-hidden'
            default:
                return 'relative bg-white overflow-hidden'
        }
    }

    const getDecorations = () => {
        if (variant === 'hero') {
            return (
                <>
                    <div className="absolute inset-y-0 left-0 w-4/2 md:w-3/5 bg-gradient-to-br from-[#2e54a1] via-[#3d63b8] to-[#4f75c7] transform -skew-x-12 origin-top-left"></div>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10"></div>

                    <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-blue-100/30 to-blue-200/20 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-20 right-32 w-16 h-16 bg-gradient-to-br from-blue-200/25 to-indigo-200/15 rounded-full opacity-50 animate-pulse delay-1000"></div>

                    <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-100/15 via-blue-50/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-indigo-100/10 to-transparent rounded-full blur-2xl"></div>

                    <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>

                    <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-br from-blue-400/60 to-blue-500/40 rounded-full opacity-70 animate-bounce delay-500"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gradient-to-br from-indigo-400/50 to-purple-400/30 rounded-full opacity-60 animate-bounce delay-1500"></div>
                    <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-gradient-to-br from-blue-300/40 to-cyan-300/20 rounded-full opacity-50 animate-bounce delay-2000"></div>

                    <div className="absolute top-10 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping delay-3000"></div>
                    <div className="absolute bottom-10 right-1/5 w-1 h-1 bg-white/40 rounded-full animate-ping delay-4000"></div>
                </>
            )
        }

        if (variant === 'gradient') {
            return (
                <>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </>
            )
        }

        return null
    }

    return (
        <div id={id} className={`${getBackgroundClasses()} ${className}`}>
            {getDecorations()}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

// Grid pattern CSS (da aggiungere al globals.css)
export const gridPatternCSS = `
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
`
