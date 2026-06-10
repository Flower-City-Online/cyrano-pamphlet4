import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'

const stats = [
  { value: '1 in 2', label: 'adults report measurable levels of loneliness', source: 'U.S. Surgeon General Advisory' },
  { value: '15 min', label: 'less daily face-to-face interaction since the early 2000s', source: 'American Time Use Survey' },
  { value: '29%', label: 'of adults say they have no close friends they can confide in', source: 'Survey of American Adults' },
]

export default function TheProblem() {
  return (
    <section id="the-problem" className="relative py-32 side-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyrano-pink/5 blur-[120px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-cyrano-pink font-[family-name:var(--font-accent)] tracking-wider mb-4">The Reality</p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Loneliness Is Not<br /><span className="gradient-text">a Personal Failing</span>
            </h2>
            <p className="text-cyrano-gray text-lg max-w-3xl mx-auto leading-relaxed">
              Loneliness has reached epidemic proportions globally. Modern life — remote work,
              urban isolation, digital over-connection, and the decline of communal institutions —
              has quietly eroded the social fabric that humans depend on for wellbeing, health, and meaning.
              The problem is structural. The solution requires intention.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} direction="up" delay={i * 0.15}>
              <div className="glass rounded-2xl p-8 text-center relative overflow-hidden">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                >
                  <div className="font-[family-name:var(--font-display)] font-extrabold text-5xl gradient-text-pink mb-3">{stat.value}</div>
                  <p className="text-cyrano-gray text-sm leading-relaxed mb-3">{stat.label}</p>
                  <p className="text-cyrano-muted text-xs italic">{stat.source}</p>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="glass-strong rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <p className="text-cyrano-gray text-lg leading-relaxed">
              Digital platforms have given us more connections than ever — and left many people
              feeling more isolated than before. The answer is not more technology. It is better
              technology built specifically to facilitate real presence, not substitute for it.
              That is what Cyrano Connect is for.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
