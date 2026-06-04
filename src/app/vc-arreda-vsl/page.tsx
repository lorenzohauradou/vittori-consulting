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
                url: 'https://vittoriconsulting.b-cdn.net/partners/vc-arreda-logo.jpg',
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
        images: ['https://vittoriconsulting.b-cdn.net/partners/vc-arreda-logo.jpg'],
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

export default function VcArredaVsl() {
    return (
        <main
            className="relative min-h-screen flex flex-col overflow-hidden"
            style={{ backgroundColor: "#6B1C23" }}
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.07] blur-3xl" />
                <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-black/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-black/10 blur-3xl" />
            </div>

            <header className="relative z-10 flex justify-center px-6 pt-10 pb-8 sm:pt-12">
                <Image
                    src="https://vittoriconsulting.b-cdn.net/partners/vc-arreda-logo.jpg"
                    alt="VC Arreda"
                    width={420}
                    height={140}
                    className="h-24 sm:h-32 md:h-36 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                    priority
                    unoptimized
                />
            </header>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-16 sm:px-8 sm:pb-20">
                <div className="w-full max-w-5xl">
                    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
                        <h1 className="mb-5 text-[1.75rem] font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                            Sei il titolare di un{" "}
                            <span
                                className="block sm:inline"
                                style={{
                                    background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.82) 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
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
                        className="relative rounded-[28px] p-[3px]"
                        style={{
                            background: "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 100%)",
                            boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
                        }}
                    >
                        <div
                            className="relative w-full overflow-hidden rounded-[25px]"
                            style={{ aspectRatio: "16/9" }}
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
        </main>
    )
}
