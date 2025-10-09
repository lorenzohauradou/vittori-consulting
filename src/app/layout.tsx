import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { defaultMetadata, createOrganizationSchema, createWebsiteSchema, createLocalBusinessSchema, createAggregateRatingSchema } from "@/lib/metadata"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = createOrganizationSchema()
  const websiteSchema = createWebsiteSchema()
  const localBusinessSchema = createLocalBusinessSchema()
  const aggregateRatingSchema = createAggregateRatingSchema()

  return (
    <html lang="it-IT" className={`${inter.variable} antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="alternate" hrefLang="it" href="https://vittoriconsulting.it" />
        <link rel="alternate" hrefLang="x-default" href="https://vittoriconsulting.it" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans overflow-x-hidden">
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
