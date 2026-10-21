import type React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { requireMember } from '@/lib/team'
import { AREA_PATH } from '@/lib/auth-cookie'
import AreaNav from '@/components/area-riservata/AreaNav'
import { signOut } from '../actions'

export const dynamic = 'force-dynamic'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const { member } = await requireMember()

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:gap-8">
                    <Link href={`${AREA_PATH}/task`} className="flex shrink-0 items-center gap-2.5">
                        <Image
                            src="https://vittoriconsulting.b-cdn.net/logos/logo-circle.webp"
                            alt="VittoriConsulting"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                        <span className="hidden text-sm font-semibold sm:block">Area riservata</span>
                    </Link>

                    <AreaNav />

                    <div className="ml-auto flex items-center gap-3">
                        <div className="hidden text-right leading-tight sm:block">
                            <p className="text-sm font-medium">{member.full_name}</p>
                            <p className="text-xs text-slate-500">{member.role === 'admin' ? 'Admin' : 'Team'}</p>
                        </div>
                        <form action={signOut}>
                            <button
                                type="submit"
                                className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                            >
                                <LogOut className="size-4" />
                                <span className="hidden sm:inline">Esci</span>
                            </button>
                        </form>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
        </div>
    )
}
