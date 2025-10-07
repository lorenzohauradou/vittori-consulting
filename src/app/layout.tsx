import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { defaultMetadata, createOrganizationSchema, createWebsiteSchema } from "@/lib/metadata"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = createOrganizationSchema()
  const websiteSchema = createWebsiteSchema()

  return (
    <html lang="it" className={`${inter.variable} antialiased`}>
      <head>
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
      </head>
      <body className="min-h-screen bg-background font-sans overflow-x-hidden">
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
