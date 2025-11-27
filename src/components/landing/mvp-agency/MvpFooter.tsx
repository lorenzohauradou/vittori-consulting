'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PortalLink } from './PortalLink'

export default function MvpFooter() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="border-t border-white/5 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
                    <div className="col-span-2 sm:col-span-2 md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/images/logo/reverse.png"
                                alt="VittoriConsulting"
                                width={500}
                                height={500}
                                className="w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-sm text-zinc-500 max-w-xs mb-4 sm:mb-6">
                            Trasformiamo idee in prodotti digitali. Lancia la tua startup in settimane, non mesi
                        </p>
                        <PortalLink
                            href="/"
                            className="inline-flex items-center gap-2 text-xs text-zinc-600 hover:text-white transition-colors"
                        >
                            ← Torna al sito principale
                        </PortalLink>
                    </div>

                    <div>
                        <h4 className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-zinc-500 mb-3 sm:mb-4">
                            Navigazione
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                { name: 'Features', href: '#features' },
                                { name: 'N8N', href: '#n8n' },
                                { name: 'Workflow', href: '#process' },
                                { name: 'FAQ', href: '#faq' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-zinc-500 mb-3 sm:mb-4">
                            Contatti
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <a
                                    href="mailto:info@vittoriconsulting.it"
                                    className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors break-all"
                                >
                                    info@vittoriconsulting.it
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+393513708950"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    +39 351 370 8950
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
                    <p className="text-[10px] sm:text-xs text-zinc-600 text-center sm:text-left">
                        © {new Date().getFullYear()} Vittori Consulting. Tutti i diritti riservati.
                    </p>
                    <p className="text-[10px] sm:text-xs text-zinc-700">
                        P.IVA 02463360566
                    </p>
                </div>
            </div>
        </footer>
    )
}
