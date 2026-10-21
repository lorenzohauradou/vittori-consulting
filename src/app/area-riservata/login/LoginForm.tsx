'use client'

import { useActionState } from 'react'
import { ArrowLeft, Loader2, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { loginAction, type LoginState } from './actions'

const initialState: LoginState = { step: 'email' }

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(loginAction, initialState)

    if (state.step === 'code') {
        return (
            <form action={formAction} className="space-y-4">
                <input type="hidden" name="email" value={state.email} />

                <div className="rounded-lg bg-blue-50 px-4 py-3 text-sm text-slate-700">
                    <Mail className="mb-1 size-4 text-[#2e54a1]" />
                    Se <span className="font-medium">{state.email}</span> fa parte del team, ti abbiamo appena inviato un codice di accesso.
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="code" className="text-sm font-medium text-slate-700">
                        Codice
                    </label>
                    <Input
                        id="code"
                        name="code"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        pattern="[0-9 ]*"
                        maxLength={12}
                        placeholder="123456"
                        required
                        autoFocus
                        className="h-11 text-center text-lg tracking-[0.4em]"
                        aria-invalid={!!state.error}
                    />
                </div>

                {state.error && <p role="alert" className="text-sm text-red-600">{state.error}</p>}

                <button
                    type="submit"
                    name="intent"
                    value="verify"
                    disabled={isPending}
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#2e54a1] text-sm font-semibold text-white transition hover:bg-[#25468a] disabled:opacity-60"
                >
                    {isPending && <Loader2 className="size-4 animate-spin" />}
                    Accedi
                </button>

                <div className="flex items-center justify-between text-sm">
                    <button
                        type="submit"
                        name="intent"
                        value="change-email"
                        formNoValidate
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800"
                    >
                        <ArrowLeft className="size-3.5" />
                        Cambia email
                    </button>
                    <button
                        type="submit"
                        name="intent"
                        value="send"
                        formNoValidate
                        disabled={isPending}
                        className="text-[#2e54a1] hover:underline"
                    >
                        Invia un nuovo codice
                    </button>
                </div>
                <p className="text-xs text-slate-400">Non arriva? Controlla lo spam e attendi un minuto prima di richiederne un altro.</p>
            </form>
        )
    }

    return (
        <form action={formAction} className="space-y-4">
            <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email
                </label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nome@esempio.it"
                    defaultValue={state.email}
                    required
                    autoFocus
                    className="h-11"
                    aria-invalid={!!state.error}
                />
            </div>

            {state.error && <p role="alert" className="text-sm text-red-600">{state.error}</p>}

            <button
                type="submit"
                name="intent"
                value="send"
                disabled={isPending}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#2e54a1] text-sm font-semibold text-white transition hover:bg-[#25468a] disabled:opacity-60"
            >
                {isPending && <Loader2 className="size-4 animate-spin" />}
                Ricevi il codice di accesso
            </button>
        </form>
    )
}
