import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'

const offerings = [
  { icon: '\u2665', title: 'Peer Companionship', description: 'One-on-one connections built around shared interests, circumstances, or simply the desire for a reliable friend.' },
  { icon: '\u25C8', title: 'Social Support Networks', description: 'Small groups of 4-8 people who meet regularly in person. Built around common ground. Maintained with intention.' },
  { icon: '\u25CB', title: 'Community Events', description: 'Recurring local gatherings for people who want to expand their social world in a low-pressure environment.' },
  { icon: '\u25C9', title: 'Mentored Connections', description: 'For people new to an area, going through a major life transition, or rebuilding their social life. Guided first steps.' },
]

export default function Community() {
  return (
    <section id="community" className="relative py-32 px-[58px] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyrano-pink/4 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyrano-pink/6 blur-[120px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-cyrano-pink font-[family-name:var(--font-accent)] tracking-wider mb-4">What We Offer</p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Many Ways to<br /><span className="gradient-text">Belong Again</span>
            </h2>
            <p className="text-cyrano-gray text-lg max-w-2xl mx-auto leading-relaxed">
              Loneliness is not one problem. It is many. Cyrano Connect addresses it across
              different types of connection and different stages of social need.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {offerings.map((item, i) => (
            <ScrollReveal key={item.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass rounded-2xl p-8 h-full relative overflow-hidden group cursor-default"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl text-cyrano-pink select-none flex-shrink-0">{item.icon}</span>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-white">{item.title}</h3>
                </div>
                <p className="text-cyrano-gray leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
