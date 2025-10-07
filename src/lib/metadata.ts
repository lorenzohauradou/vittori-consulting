import { Metadata } from 'next'

export const baseUrl = 'https://vittoriconsulting.it'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'VittoriConsulting - Marketing a 360° per Imprenditori Romani',
    template: '%s | VittoriConsulting'
  },
  description:
    'Trasforma il tuo business con il Metodo Vittori 360. Marketing strategico, branding e performance per PMI romane. Consulenza gratuita disponibile.',
  keywords: [
    'marketing Roma',
    'consulenza marketing',
    'agenzia marketing Roma',
    'social media marketing',
    'advertising Roma',
    'crescita business',
    'metodo vittori',
    'marketing 360',
    'branding Roma',
    'performance marketing',
  ],
  authors: [{ name: 'VittoriConsulting', url: baseUrl }],
  creator: 'VittoriConsulting',
  publisher: 'VittoriConsulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: baseUrl,
    title: 'VittoriConsulting - Marketing a 360° per Imprenditori Romani',
    description:
      'Trasforma il tuo business con il Metodo Vittori 360. Marketing strategico, branding e performance per PMI romane.',
    siteName: 'VittoriConsulting',
    images: [
      {
        url: '/images/logo/logo-extend.png',
        width: 1200,
        height: 630,
        alt: 'VittoriConsulting Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VittoriConsulting - Marketing a 360° per Imprenditori Romani',
    description:
      'Trasforma il tuo business con il Metodo Vittori 360. Marketing strategico, branding e performance per PMI romane.',
    images: ['/images/logo/logo-extend.png'],
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
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo/logo-circle.png',
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VittoriConsulting',
    url: baseUrl,
    logo: `${baseUrl}/images/logo/logo.png`,
    description: 'Agenzia di marketing a 360° per imprenditori romani. Specializzati in marketing strategico, branding e performance.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roma',
      addressCountry: 'IT',
    },
    sameAs: [
      // 'https://www.facebook.com/vittoriconsulting',
      'https://www.instagram.com/vittoriconsulting',
      // 'https://www.linkedin.com/company/vittoriconsulting',
    ],
  }
}

export function createWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VittoriConsulting',
    url: baseUrl,
    description: 'Marketing a 360° per Imprenditori Romani',
    inLanguage: 'it-IT',
  }
}

export function createServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Marketing Consulting',
    provider: {
      '@type': 'Organization',
      name: 'VittoriConsulting',
      url: baseUrl,
    },
    areaServed: {
      '@type': 'City',
      name: 'Roma',
    },
    description: 'Servizi di marketing a 360° per PMI: strategia, branding, social media, advertising e performance marketing.',
  }
}
