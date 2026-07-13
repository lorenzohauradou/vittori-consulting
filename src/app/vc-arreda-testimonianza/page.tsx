import type { Metadata } from "next"
import Image from "next/image"

const baseUrl = 'https://vittoriconsulting.it'

export const metadata: Metadata = {
    title: "Testimonianza VC Arreda | VittoriConsulting",
    description:
        "Scopri come VC Arreda ha ottenuto risultati straordinari con VittoriConsulting. 510.766€ di fatturato in 6 mesi.",
    alternates: {
        canonical: `${baseUrl}/vc-arreda-testimonianza`,
    },
    openGraph: {
        title: 'Testimonianza VC Arreda | VittoriConsulting',
        description: 'Scopri come VC Arreda ha ottenuto risultati straordinari con VittoriConsulting. 510.766€ di fatturato in 6 mesi.',
        url: `${baseUrl}/vc-arreda-testimonianza`,
        type: 'website',
        siteName: 'VittoriConsulting',
        locale: 'it_IT',
        images: [
            {
                url: 'https://vittoriconsulting.b-cdn.net/logos/logo-extend.webp',
                width: 1200,
                height: 630,
                alt: 'VC Arreda Testimonianza - VittoriConsulting',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Testimonianza VC Arreda | VittoriConsulting',
        description: '+510.766€ di fatturato in 6 mesi. con VittoriConsulting.',
        images: ['https://vittoriconsulting.b-cdn.net/logos/logo-extend.webp'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function VcArredaTestimonianza() {
    return (
        <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#6B1C23" }}>
            <header className="relative z-10 flex justify-center px-6 pt-10 pb-8 sm:pt-12">
                <Image
                    src="https://vittoriconsulting.b-cdn.net/logos/vc-arreda.jpg"
                    alt="VC Arreda"
                    width={300}
                    height={200}
                    className="w-72 h-72 object-contain object-center"
                    priority
                    unoptimized
                />
            </header>

            <div className="flex-1 flex items-center justify-center px-4 pb-16 sm:px-8">
                <div className="w-full max-w-4xl">

                    {/* Client + result header */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                        {/* Scavolini logo + name */}
                        <div className="flex items-center gap-3">
                            <Image
                                src="https://vittoriconsulting.b-cdn.net/partners/scavolini-store-fiumicino.webp"
                                alt="Scavolini Store Fiumicino"
                                width={48}
                                height={48}
                                className="h-10 w-auto object-contain rounded-md"
                                unoptimized
                            />
                            <div>
                                <p className="text-white font-semibold text-base leading-tight">
                                    Nicoletta<br />
                                    <span className="font-normal text-white/80 text-sm">Scavolini Store Fiumicino</span>
                                </p>
                            </div>
                        </div>

                        {/* Result pill */}
                        <div
                            className="px-6 py-3 rounded-2xl text-center"
                            style={{
                                background: "rgba(255,255,255,0.12)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                            }}
                        >
                            <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Risultato</p>
                            <p className="text-white text-xl sm:text-2xl font-bold">
                                510.766€ di fatturato in 6 mesi
                            </p>
                        </div>
                    </div>

                    {/* Video */}
                    <div
                        className="relative w-full rounded-2xl overflow-hidden"
                        style={{
                            aspectRatio: "16/9",
                            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
                        }}
                    >
                        <iframe
                            src="https://iframe.mediadelivery.net/embed/510109/16665a5f-c27b-4dc8-a206-bf3cf4686c8f?loop=false&muted=false&preload=false&responsive=true"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full border-0"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-4 pb-16 sm:px-8">
                <div className="w-full max-w-4xl">

                    {/* Client + result header */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                        {/* Scavolini logo + name */}
                        <div className="flex items-center gap-3 bg-white rounded-md p-2">
                            <Image
                                src="https://vittoriconsulting.b-cdn.net/partners/aran_logo.png"
                                alt="Aran Cucine"
                                width={48}
                                height={48}
                                className="h-10 w-auto object-contain rounded-md"
                                unoptimized
                            />
                            <div>
                                <p className="text-black font-semibold text-base leading-tight">
                                    Flavio<br />
                                    <span className="font-normal text-black/80 text-sm">Aran Cucine</span>
                                </p>
                            </div>
                        </div>

                        {/* Result pill */}
                        <div
                            className="px-6 py-3 rounded-2xl text-center"
                            style={{
                                background: "rgba(255,255,255,0.12)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                            }}
                        >
                            <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Risultato</p>
                            <p className="text-white text-xl sm:text-2xl font-bold">
                                35.800€ di fatturato in 26 giorni
                            </p>
                        </div>
                    </div>

                    {/* Video */}
                    <div
                        className="relative w-full rounded-2xl overflow-hidden"
                        style={{
                            aspectRatio: "16/9",
                            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
                        }}
                    >
                        <iframe
                            src="https://iframe.mediadelivery.net/embed/510109/02656b32-9bcf-4ce0-8969-b0f5071b1c14?loop=false&muted=false&preload=true&responsive=true"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full border-0"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}