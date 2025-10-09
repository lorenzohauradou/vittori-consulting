import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import Partners from '@/components/ui/Partners'
import Difference from '@/components/home/Difference'
import Calendar from '@/components/home/Calendar'
import Solution from '@/components/home/Solution'
import About from '@/components/home/About'
import Servizi from '@/components/home/Servizi'
import MetodoBanner from '@/components/ui/metodo-banner'
import Testimonials from '@/components/home/Testimonials'
import FinalCTA from '@/components/home/FinalCTA'
import Footer from '@/components/home/Footer'
import StickyContact from '@/components/ui/sticky-contact'
import { OptinModal } from '@/components/ui/optin-modal'
import { OptinProvider } from '@/contexts/OptinContext'

export default function Home() {
  return (
    <OptinProvider>
      <Header />
      <StickyContact />
      <OptinModal />
      <Hero />
      <Partners />
      <Difference />
      <MetodoBanner />
      <About />
      <Calendar />
      <Solution />
      <Partners />
      <Servizi />
      <MetodoBanner />
      <Testimonials />
      <MetodoBanner reverse />
      <FinalCTA />
      <Footer />
    </OptinProvider>
  )
}
