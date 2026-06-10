import { motion } from 'framer-motion'
import FloatingLetters from './FloatingLetters'

const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i, left: `${(i / 12) * 100 + Math.random() * 8}%`,
  size: 6 + Math.random() * 10, delay: Math.random() * 8, duration: 8 + Math.random() * 6,
}))

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-cyrano-pink/20 animate-blob-1 blur-[120px]" aria-hidden="true" />
        <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] bg-purple-700/15 animate-blob-2 blur-[100px]" aria-hidden="true" />
        <div className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] bg-cyrano-pink/10 animate-blob-3 blur-[140px]" aria-hidden="true" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {petals.map((p) => (
          <div key={p.id} className="absolute opacity-30" style={{
            left: p.left, top: '-5%', width: p.size, height: p.size,
            background: 'radial-gradient(circle, #fe3c72 0%, #ff9bb8 50%, transparent 100%)',
            borderRadius: '50% 0 50% 50%', animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
          }} />
        ))}
      </div>
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="text-cyrano-pink font-[family-name:var(--font-accent)] text-lg mb-6 tracking-wider glow-pink">
            Cyrino Connect — Real Human Connection
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="font-[family-name:var(--font-display)] font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8"
            data-testid="hero-heading">
            <FloatingLetters text="A World" className="gradient-text" />
            <br />
            <FloatingLetters text="Less" className="gradient-text-pink" />
            <br />
            <FloatingLetters text="Lonely." className="text-white" />
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
            className="text-cyrano-gray text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Loneliness is a growing crisis. Cyrino Connect exists to reduce it through
            intentional real-world connection, human-guided matching, and community designed
            around genuine belonging.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-white font-[family-name:var(--font-accent)] text-base glow-button textured-btn relative overflow-hidden group"
              style={{ padding: '1.25rem 3.5rem' }} data-testid="hero-cta">
              <span className="relative z-10">Download from Play Store</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </a>
            <a href="#the-problem"
              className="inline-flex items-center justify-center rounded-full border border-white/10 text-white text-base font-medium hover:border-cyrano-pink/50 textured-btn-outline relative overflow-hidden transition-all duration-300"
              style={{ padding: '1.25rem 3.5rem' }}>
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-scroll-hint">
          <span className="text-cyrano-muted text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-cyrano-pink to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
