import type { Metadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getCurrentMember } from '@/lib/team'
import { AREA_PATH } from '@/lib/auth-cookie'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
    title: 'Accedi',
}

export default async function LoginPage() {
    if (await getCurrentMember()) redirect(`${AREA_PATH}/task`)

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
            <div className="w-full max-w-sm">
                <div className="mb-8 flex flex-col items-center text-center">
                    <Image
                        src="https://vittoriconsulting.b-cdn.net/logos/logo-circle.webp"
                        alt="VittoriConsulting"
                        width={64}
                        height={64}
                        className="mb-4 rounded-full"
                        priority
                    />
                    <h1 className="text-2xl font-bold text-slate-900">Area riservata</h1>
                    <p className="mt-1 text-sm text-slate-500">Accesso riservato al team VittoriConsulting</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
