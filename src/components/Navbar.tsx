import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#the-problem', label: 'The Problem' },
  { href: '#our-approach', label: 'Our Approach' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#community', label: 'Community' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent'}`}
        data-testid="navbar">
        <div className="max-w-7xl mx-auto side-padding py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2" data-testid="nav-logo">
            <span className="font-[family-name:var(--font-display)] font-extrabold text-xl gradient-text tracking-tight">Cyrano Connect</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-cyrano-gray hover:text-white transition-colors duration-300 relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyrano-pink transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-white text-sm font-semibold glow-button textured-btn relative overflow-hidden"
              style={{ padding: '0.75rem 2rem' }} data-testid="nav-cta">
              Download on Play Store
            </a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white block" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block" />
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-strong mobile-menu-pt md:hidden">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a key={link.href} href={link.href}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-[family-name:var(--font-display)] font-semibold text-white" style={i === 0 ? { marginTop: '10px' } : undefined}>
                  {link.label}
                </motion.a>
              ))}
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full text-white text-lg font-semibold glow-button textured-btn relative overflow-hidden"
                style={{ padding: '1.25rem 3rem' }}>
                Download on Play Store
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
