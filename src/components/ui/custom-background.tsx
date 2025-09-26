import React from 'react'

interface CustomBackgroundProps {
    children: React.ReactNode
    variant?: 'hero' | 'section' | 'gradient'
    className?: string
}

export function CustomBackground({
    children,
    variant = 'hero',
    className = ''
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
                    {/* Elemento blu irregolare che taglia lo schermo */}
                    <div className="absolute inset-y-0 left-0 w-3/5 bg-[#2e54a1] transform -skew-x-12 origin-top-left"></div>

                    {/* Elementi decorativi sottili */}
                    <div className="absolute top-20 right-20 w-16 h-16 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-20 right-32 w-12 h-12 bg-blue-200 rounded-full opacity-30 animate-pulse delay-1000"></div>

                    {/* Gradient orb sottile a destra */}
                    <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-2xl"></div>

                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                    {/* Floating elements */}
                    <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce delay-500"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-indigo-400 rounded-full opacity-40 animate-bounce delay-1500"></div>
                </>
            )
        }

        if (variant === 'gradient') {
            return (
                <>
                    {/* Overlay pattern */}
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </>
            )
        }

        return null
    }

    return (
        <div className={`${getBackgroundClasses()} ${className}`}>
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
