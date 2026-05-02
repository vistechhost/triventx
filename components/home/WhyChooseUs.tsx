'use client'

import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Target, BookOpen, Headphones, Cpu } from 'lucide-react'

const pillars = [
  {
    icon: Zap,
    title: 'Unmatched Speed',
    description:
      'Industry-leading turnaround times — permit designs in 6 hours, proposals in 2 hours. Your projects never stall waiting for documentation.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: ShieldCheck,
    title: 'Code Compliance',
    description:
      'Every deliverable is cross-referenced against current NEC, NESC, ASCE 7, IBC, and local AHJ requirements. Zero re-submission penalty.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Target,
    title: 'Engineering Accuracy',
    description:
      'Triple-stage QA process by licensed engineers. 99.2% first-submission approval rate across 10,000+ completed projects.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: BookOpen,
    title: 'Deep Experience',
    description:
      'Over a decade specializing exclusively in solar engineering documentation. We\'ve seen every AHJ nuance, code update, and edge case.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Dedicated account managers and round-the-clock support ensure your urgent projects are handled with the attention they deserve.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description:
      'AuroraSolar, Helioscope, Scanifly, AutoCAD, PVsyst — we leverage the best tools in the industry to maximize design precision and speed.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Why TriventX
          </span>
          <h2 id="why-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The Standard Other Firms Measure Against
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            We built TriventX specifically for solar installers who need engineering services that
            keep pace with their growth — not slow it down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl hover:bg-background-subtle transition-colors group"
            >
              <div className={`w-12 h-12 ${pillar.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{pillar.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
