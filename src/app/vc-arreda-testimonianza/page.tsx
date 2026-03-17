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
            <header className="px-8 py-6 sm:px-12 sm:py-8">
                <Image
                    src="https://vittoriconsulting.b-cdn.net/partners/vc-arreda-logo.jpg"
                    alt="VC Arreda"
                    width={280}
                    height={95}
                    className="h-20 sm:h-24 w-auto object-contain"
                    unoptimized
                />
            </header>


            <div className="flex-1 flex items-center justify-center px-4 pb-16 sm:px-8">
                <div className="w-full max-w-4xl">
                    <h1 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-2">
                        Nicoletta – Scavolini Store Fiumicino
                    </h1>
                    <p className="text-white/90 text-lg sm:text-xl text-center mb-10">
                        +13.500€ di fatturato in 7 giorni
                    </p>

                    <div
                        className="relative w-full rounded-2xl overflow-hidden"
                        style={{
                            aspectRatio: "16/9",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
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
