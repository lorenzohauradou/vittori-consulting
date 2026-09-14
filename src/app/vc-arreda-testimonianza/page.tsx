import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import TestimonialsShowcase, { type Testimonial } from "@/components/landing/vc-arreda/TestimonialsShowcase"

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"] })

const baseUrl = "https://vittoriconsulting.it"
const BUNNY_LIBRARY_ID = "510109"
const VC_ARREDA_LOGO = "/images/logo/vc-arreda-logo-nobg.png"

const testimonials: Testimonial[] = [
    {
        id: "16665a5f-c27b-4dc8-a206-bf3cf4686c8f",
        name: "Nicoletta",
        company: "Scavolini Store Fiumicino",
        result: "510.766€ di fatturato in 6 mesi",
        logo: {
            src: "https://vittoriconsulting.b-cdn.net/partners/scavolini-store-fiumicino.webp",
            alt: "Scavolini Store Fiumicino",
        },
        aspect: "16/9",
    },
    {
        id: "02656b32-9bcf-4ce0-8969-b0f5071b1c14",
        name: "Flavio",
        company: "Aran Cucine",
        result: "35.800€ di fatturato in 26 giorni",
        logo: {
            src: "https://vittoriconsulting.b-cdn.net/partners/aran_logo.png",
            alt: "Aran Cucine",
            onWhite: true,
        },
        aspect: "16/9",
        preload: true,
    },
    {
        id: "06ad4b6e-53c9-4e37-b2c9-217dff0a3e60",
        name: "Mobil Turi - Perignano",
        company: "Gruppo Petrassi",
        logo: {
            src: "https://vittoriconsulting.b-cdn.net/partners/mobilturi-perignano.png",
            alt: "Gruppo Petrassi",
            onWhite: true,
        },
        aspect: "16/9",
    },
    {
        id: "c2206d3e-6975-4c45-a13b-caeee6c6faec",
        name: "Eros Megalli",
        company: "Centro Scavolini Randazzo Sicilia",
        aspect: "9/16",
    },
]

export const metadata: Metadata = {
    title: "Testimonianza VC Arreda | VittoriConsulting",
    description:
        "Scopri come VC Arreda ha ottenuto risultati straordinari con VittoriConsulting. 510.766€ di fatturato in 6 mesi.",
    alternates: {
        canonical: `${baseUrl}/vc-arreda-testimonianza`,
    },
    openGraph: {
        title: "Testimonianza VC Arreda | VittoriConsulting",
        description:
            "Scopri come VC Arreda ha ottenuto risultati straordinari con VittoriConsulting. 510.766€ di fatturato in 6 mesi.",
        url: `${baseUrl}/vc-arreda-testimonianza`,
        type: "website",
        siteName: "VittoriConsulting",
        locale: "it_IT",
        images: [
            {
                url: "https://vittoriconsulting.b-cdn.net/logos/vc-arreda.jpg",
                width: 1200,
                height: 630,
                alt: "VC Arreda Testimonianza - VittoriConsulting",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Testimonianza VC Arreda | VittoriConsulting",
        description: "+510.766€ di fatturato in 6 mesi. con VittoriConsulting.",
        images: ["https://vittoriconsulting.b-cdn.net/logos/vc-arreda.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function VcArredaTestimonianza() {
    return (
        <TestimonialsShowcase
            testimonials={testimonials}
            libraryId={BUNNY_LIBRARY_ID}
            logoSrc={VC_ARREDA_LOGO}
            displayClass={display.className}
        />
    )
}
