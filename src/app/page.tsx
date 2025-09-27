
import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import Partners from '@/components/home/Partners'
import Difference from '@/components/home/Difference'
import Problem from '@/components/home/Problem'
import Solution from '@/components/home/Solution'
import About from '@/components/home/About'
import StickyFounder from '@/components/ui/sticky-founder'

export default function Home() {
  return (
    <>
      <Header />
      <StickyFounder />
      <Hero />
      <Partners />
      <Difference />
      <About />
      <Problem />
      <Solution />
    </>
  )
}
