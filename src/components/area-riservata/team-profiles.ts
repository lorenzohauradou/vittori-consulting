import type { CSSProperties } from 'react'

// Foto e ruoli dalla sezione "Chi siamo" della home (src/components/home/About.tsx).
// Chiave: nome completo o nome di battesimo, minuscolo e senza accenti.
// Le due Camilla vanno indicate per nome e cognome (es. 'camilla rossi'),
// altrimenti mostrano le iniziali.

export interface TeamProfile {
    photo: string
    title: string
    style?: CSSProperties
}

const CDN = 'https://vittoriconsulting.b-cdn.net/team'

const PROFILES: Record<string, TeamProfile> = {
    valerio: { photo: `${CDN}/valerio.png`, title: 'Founder' },
    lorenzo: { photo: `${CDN}/lorenzo1.png`, title: 'Sviluppatore Web', style: { objectPosition: 'center 70%', transform: 'scale(1.25)' } },
    nicole: { photo: `${CDN}/nicole.jpg`, title: 'Social Media Manager' },
    gioele: { photo: `${CDN}/no-bg-gioele.jpg`, title: 'Media Buyer', style: { objectPosition: 'center 70%', transform: 'scale(1.25)' } },
    tommaso: { photo: `${CDN}/no-bg-tommi.jpeg`, title: 'Sales', style: { objectPosition: 'center 70%', transform: 'scale(1.25)' } },
    edoardo: { photo: `${CDN}/no-bg-edo.jpeg`, title: 'Video Maker', style: { objectPosition: 'center 35%', transform: 'scale(1.25)' } },
    veronica: { photo: `${CDN}/no-bg-veronica.jpeg`, title: 'Social Creator', style: { objectPosition: 'center 2%', transform: 'translateY(-40%) scale(1.8)' } },
    patrizia: { photo: `${CDN}/patrizia1.jpg`, title: 'Setter', style: { objectPosition: 'center 15%' } },
    sonia: { photo: `${CDN}/sonia.jpg`, title: 'Setter' },
    francesco: { photo: `${CDN}/francesco.jpg`, title: 'Project Manager', style: { objectPosition: 'center 70%', transform: 'scale(1.1)' } },
    cristina: { photo: `${CDN}/cristina.jpg`, title: 'Setter', style: { objectPosition: 'center 70%', transform: 'scale(1.1)' } },
}

function normalize(value: string) {
    return value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim()
}

export function teamProfile(fullName: string): TeamProfile | null {
    const name = normalize(fullName)
    return PROFILES[name] ?? PROFILES[name.split(' ')[0]] ?? null
}
