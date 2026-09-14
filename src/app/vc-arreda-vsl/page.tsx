import type { Metadata } from "next"
import Image from "next/image"

const baseUrl = 'https://vittoriconsulting.it'

export const metadata: Metadata = {
    title: "VC Arreda | Sei il titolare di un negozio di arredamento?",
    description:
        "Scopri come +100 showroom in tutta Italia stanno aumentando il loro fatturato grazie al metodo VC Arreda.",
    alternates: {
        canonical: `${baseUrl}/vc-arreda-vsl`,
    },
    openGraph: {
        title: 'VC Arreda | Sei il titolare di un negozio di arredamento?',
        description: 'Scopri come +100 showroom in tutta Italia stanno aumentando il loro fatturato grazie al metodo VC Arreda.',
        url: `${baseUrl}/vc-arreda-vsl`,
        type: 'website',
        siteName: 'VittoriConsulting',
        locale: 'it_IT',
        images: [
            {
                url: 'https://vittoriconsulting.b-cdn.net/logos/vc-arreda.jpg',
                width: 1200,
                height: 630,
                alt: 'VC Arreda',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VC Arreda | Sei il titolare di un negozio di arredamento?',
        description: '+100 showroom in tutta Italia stanno aumentando il fatturato con il metodo VC Arreda.',
        images: ['https://vittoriconsulting.b-cdn.net/logos/vc-arreda.jpg'],
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

// Stessa palette "showroom" della pagina delle testimonianze: bordeaux, avorio, ottone.
const BRASS_EDGE =
    "linear-gradient(150deg, #E6CC9B 0%, #C4A06A 30%, #9C7840 55%, #E6CC9B 78%, #C4A06A 100%)"

export default function VcArredaVsl() {
    return (
        <main
            className="relative min-h-screen flex flex-col overflow-hidden"
            style={{ backgroundColor: "#6B1C23" }}
        >
            <header className="relative z-10 flex flex-col items-center px-6 pt-8 sm:pt-10">
                <Image
                    src="/images/logo/vc-arreda-logo-nobg.png"
                    alt="VC Arreda"
                    width={1340}
                    height={385}
                    className="h-auto w-[260px] sm:w-[340px] lg:w-[400px]"
                    priority
                />
                <div
                    className="mt-5 h-px w-20 sm:w-28"
                    style={{ background: "linear-gradient(90deg, transparent, #C4A06A, transparent)" }}
                />
            </header>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-12 pt-8 sm:px-8 sm:pb-16">
                <div className="w-full max-w-5xl">
                    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
                        <h1 className="mb-5 text-[1.75rem] font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                            Sei il titolare di un{" "}
                            <span className="block sm:inline" style={{ color: "#E6CC9B" }}>
                                negozio di arredamento?
                            </span>
                        </h1>

                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
                            Scopri come{" "}
                            <span className="font-bold text-white">+100 showroom</span>{" "}
                            in tutta Italia stanno aumentando il loro fatturato grazie al{" "}
                            <span className="font-semibold text-white">metodo VC Arreda</span>
                        </p>
                    </div>

                    <div
                        className="relative rounded-sm p-[2px]"
                        style={{ background: BRASS_EDGE, boxShadow: "0 32px 80px rgba(45,10,14,0.45)" }}
                    >
                        <div className="rounded-[2px] p-2 sm:p-2.5" style={{ backgroundColor: "#F7F1E7" }}>
                            <div
                                className="relative w-full overflow-hidden rounded-[2px]"
                                style={{ aspectRatio: "16/9", backgroundColor: "#3C0E13" }}
                            >
                                <iframe
                                    src="https://iframe.mediadelivery.net/embed/510109/50aba36c-f135-49ea-b66e-ac343b6396f4?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full border-0"
                                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
