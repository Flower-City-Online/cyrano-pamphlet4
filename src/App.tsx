import { useEffect, useState, useMemo } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBand from './components/MarqueeBand'
import TheProblem from './components/TheProblem'
import OurApproach from './components/OurApproach'
import HowItWorks from './components/HowItWorks'
import Community from './components/Community'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function Twinkles() {
  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i, top: `${8 + Math.random() * 84}%`, left: `${5 + Math.random() * 90}%`,
      delay: Math.random() * 6, duration: 2.5 + Math.random() * 3,
      size: ['twinkle-sm', 'twinkle', 'twinkle-lg'][Math.floor(Math.random() * 3)],
    })),
  [])
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden="true">
      {particles.map((p) => (
        <div key={p.id} className={`twinkle ${p.size}`}
          style={{ top: p.top, left: p.left, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }} />
      ))}
    </div>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  return (
    <div className="relative bg-cyrano-dark min-h-screen overflow-x-hidden">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="noise-overlay" aria-hidden="true" />
      <Twinkles />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand />
        <TheProblem />
        <OurApproach />
        <HowItWorks />
        <Community />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
