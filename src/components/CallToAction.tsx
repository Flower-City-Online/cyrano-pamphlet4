import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section id="cta" className="relative py-32 side-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyrano-pink/6 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyrano-pink/10 blur-[150px] rounded-full animate-pulse-glow" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-cyrano-pink font-[family-name:var(--font-accent)] tracking-wider mb-4">You Deserve to Belong</p>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight mb-6 cta-title-scale">
            <span className="gradient-text">Connection is</span><br />
            <span className="text-white">not a luxury.</span><br />
            <span className="gradient-text-pink">It is a right.</span>
          </h2>
          <p className="text-cyrano-gray text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Cyrano Connect is building infrastructure for human belonging. Download the app
            and take the first step toward a life that feels genuinely less alone.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full text-white font-[family-name:var(--font-accent)] text-lg glow-button textured-btn relative overflow-hidden group"
              style={{ padding: '1.25rem 4rem' }}>
              <span className="relative z-10">Download from Play Store</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.a>
          </motion.div>
          <p className="mt-6 text-cyrano-muted text-sm">Available on Google Play. iOS coming soon.</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
