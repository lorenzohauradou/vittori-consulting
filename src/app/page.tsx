
import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import Partners from '@/components/ui/Partners'
import Difference from '@/components/home/Difference'
import Problem from '@/components/home/Problem'
import Solution from '@/components/home/Solution'
import About from '@/components/home/About'
import Servizi from '@/components/home/Servizi'
import MetodoBanner from '@/components/ui/metodo-banner'
import Testimonials from '@/components/home/Testimonials'
import Footer from '@/components/home/Footer'
import StickyFounder from '@/components/ui/sticky-founder'
import StickyContact from '@/components/ui/sticky-contact'

export default function Home() {
  return (
    <>
      <Header />
      <StickyFounder />
      <StickyContact />
      <Hero />
      <Partners />
      <Difference />
      <MetodoBanner />
      <About />
      <Problem />
      <Solution />
      <Partners showTitle={false} />
      <Servizi />
      <MetodoBanner />
      <Testimonials />
      <Footer />
    </>
  )
}
