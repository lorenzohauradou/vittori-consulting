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
        url: '/images/logo/logo-extend.webp',
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
    images: ['/images/logo/logo-extend.webp'],
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
    apple: '/images/logo/logo-circle.webp',
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
    logo: `${baseUrl}/images/logo/logo.webp`,
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

export function createLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'VittoriConsulting',
    image: `${baseUrl}/images/logo/logo.webp`,
    url: baseUrl,
    telephone: '+393401287852',
    email: 'info@vittoriconsulting.it',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roma',
      addressRegion: 'Lazio',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.9028',
      longitude: '12.4964',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    description: 'Agenzia di marketing a 360° per imprenditori romani. Specializzati in marketing strategico, branding e performance.',
  }
}

export function createVideoSchema(videoUrl?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Marketing a 360° per Imprenditori - VittoriConsulting',
    description: 'Scopri come oltre 180 imprenditori hanno trasformato il loro business con il Metodo Vittori 360.',
    thumbnailUrl: `${baseUrl}/images/logo/logo-extend.webp`,
    uploadDate: new Date().toISOString(),
    contentUrl: videoUrl || `${baseUrl}/video-letter`,
    embedUrl: videoUrl || `${baseUrl}/video-letter`,
  }
}

export function createAggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Metodo Vittori 360',
    description: 'Servizio di marketing a 360° per imprenditori e PMI',
    brand: {
      '@type': 'Brand',
      name: 'VittoriConsulting',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '189',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
