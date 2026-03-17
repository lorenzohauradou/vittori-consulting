import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Testimonianza VC Arreda | VittoriConsulting",
    description:
        "Scopri come VC Arreda ha ottenuto risultati straordinari con VittoriConsulting. +13.500€ di fatturato in 7 giorni.",
}

export default function VcArredaTestimonianza() {
    return (
        <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#b7131b" }}>
            {/* Header */}
            <header className="px-8 pt-8 pb-6 sm:px-12 sm:pt-10 flex justify-center">
                <Image
                    src="https://vittoriconsulting.b-cdn.net/partners/vc-arreda-logo.jpg"
                    alt="VC Arreda"
                    width={360}
                    height={120}
                    className="h-28 sm:h-32 w-auto object-contain"
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
                                +13.500€ di fatturato in 7 giorni
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
                            src="https://iframe.mediadelivery.net/embed/510109/48aef447-75a3-4a7e-b28d-367506aaf14e?loop=false&muted=false&preload=false&responsive=true"
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
