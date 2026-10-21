'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ListChecks } from 'lucide-react'
import { cn } from '@/lib/utils'

// Le prossime sezioni dell'area riservata vanno aggiunte qui
const NAV_ITEMS = [
    { href: '/area-riservata/task', label: 'Task', icon: ListChecks },
]

export default function AreaNav() {
    const pathname = usePathname()

    return (
        <nav className="flex items-center gap-1">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                const isActive = pathname.startsWith(href)
                return (
                    <Link
                        key={href}
                        href={href}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn(
                            'inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium transition',
                            isActive ? 'bg-blue-50 text-[#2e54a1]' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        )}
                    >
                        <Icon className="size-4" />
                        {label}
                    </Link>
                )
            })}
        </nav>
    )
}
