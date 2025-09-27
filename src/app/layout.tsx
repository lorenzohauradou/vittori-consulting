import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "VittoriConsulting - Marketing a 360° per Imprenditori Romani",
  description:
    "Trasforma il tuo business con il Metodo Vittori 360. Marketing strategico, branding e performance per PMI romane. Consulenza gratuita disponibile.",
  keywords: [
    "marketing Roma",
    "consulenza marketing",
    "agenzia marketing Roma",
    "social media marketing",
    "advertising Roma",
    "crescita business",
  ],
  authors: [{ name: "VittoriConsulting" }],
  creator: "VittoriConsulting",
  publisher: "VittoriConsulting",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://vittoriconsulting.it",
    title: "VittoriConsulting - Marketing a 360° per Imprenditori Romani",
    description:
      "Trasforma il tuo business con il Metodo Vittori 360. Marketing strategico, branding e performance per PMI romane.",
    siteName: "VittoriConsulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "VittoriConsulting - Marketing a 360° per Imprenditori Romani",
    description:
      "Trasforma il tuo business con il Metodo Vittori 360. Marketing strategico, branding e performance per PMI romane.",
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
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans overflow-x-hidden">
        <main>{children}</main>
      </body>
    </html>
  )
}
