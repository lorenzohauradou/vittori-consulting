import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VittoriConsulting - Marketing a 360° per Imprenditori',
    short_name: 'VittoriConsulting',
    description: 'Marketing strategico, branding e performance per PMI a Roma e Lazio',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/logo/logo-circle.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
