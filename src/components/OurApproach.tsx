import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'

const pillars = [
  {
    icon: '\u25C8',
    title: 'Real-World First',
    description: 'Every interaction in Cyrano Connect is oriented toward a real in-person meeting. Digital communication is a means to an end, not the destination.',
  },
  {
    icon: '\u25C9',
    title: 'Intentional Matching',
    description: 'We do not rely on proximity or swiping. We match based on genuine compatibility, shared values, and mutual interest in building a real social connection.',
  },
  {
    icon: '\u25C7',
    title: 'Human-Guided AI',
    description: 'Our AI surfaces connections and patterns, but trained human guides make the final introductions. Thoughtful humans build relationships. AI assists them.',
  },
  {
    icon: '\u25CB',
    title: 'Community as Infrastructure',
    description: 'Beyond one-on-one connection, Cyrano Connect builds local social communities where belonging is possible for everyone, not just the socially confident.',
  },
]

export default function OurApproach() {
  return (
    <section id="our-approach" className="relative py-32 px-[58px] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyrano-pink/4 to-transparent" />
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-cyrano-pink/8 blur-[150px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-cyrano-pink font-[family-name:var(--font-accent)] tracking-wider mb-4">Our Principles</p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl sm:text-5xl md:text-6xl gradient-text mb-6">
              How We Think<br />About Connection
            </h2>
            <p className="text-cyrano-gray text-lg max-w-2xl mx-auto leading-relaxed">
              Connection is not a product. It is a human capacity that needs the right conditions
              to grow. Cyrano Connect creates those conditions.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-strong rounded-2xl p-8 h-full relative overflow-hidden group cursor-default"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl text-cyrano-pink select-none flex-shrink-0">{pillar.icon}</span>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-white">{pillar.title}</h3>
                </div>
                <p className="text-cyrano-gray leading-relaxed">{pillar.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
