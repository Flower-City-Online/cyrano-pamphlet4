import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const steps = [
  {
    number: '01', icon: '\u25C8',
    title: 'Share What You Are Looking For',
    description: 'Tell us what kind of connection you want. Friendship, companionship, community, a regular social outlet. Your profile reflects what genuinely matters to you.',
  },
  {
    number: '02', icon: '\u25C9',
    title: 'Get Matched by a Human Guide',
    description: 'A trained Cyrano guide reviews your profile and finds someone whose needs and values complement yours. No algorithm decides alone. A person does.',
  },
  {
    number: '03', icon: '\u25C7',
    title: 'Meet in the Real World',
    description: 'Your guide coordinates a first meeting in a comfortable, accessible real-world setting. Coffee, a walk, a community event. Low pressure. High intention.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 side-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyrano-pink/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-cyrano-pink font-[family-name:var(--font-accent)] tracking-wider mb-4">The Path Forward</p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl sm:text-5xl md:text-6xl gradient-text mb-6">
              From Isolation<br />to Belonging
            </h2>
            <p className="text-cyrano-gray text-lg max-w-2xl mx-auto leading-relaxed">
              The first step is the hardest one. Cyrano Connect makes it easier by putting
              a thoughtful person in your corner before you take it.
            </p>
          </div>
        </ScrollReveal>
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyrano-pink/60 via-cyrano-pink/30 to-transparent origin-top hidden md:block"
            aria-hidden="true"
          />
          <div className="space-y-16">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.15}>
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-cyrano-pink/20 transition-all duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyrano-pink/5 blur-2xl rounded-full" aria-hidden="true" />
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-4xl text-cyrano-pink/30 leading-none select-none">{step.icon}</span>
                        <span className="text-6xl font-[family-name:var(--font-display)] font-black text-cyrano-pink/15 leading-none select-none">{step.number}</span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl text-white mb-3 gradient-text">{step.title}</h3>
                      <p className="text-cyrano-gray leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-cyrano-pink border-2 border-cyrano-dark shadow-[0_0_12px_rgba(254,60,114,0.6)] flex-shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
