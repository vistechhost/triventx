'use client'

import { motion } from 'framer-motion'
import { Zap, ShieldCheck, TrendingUp, Users, Building2, Target } from 'lucide-react'

const pillars = [
  {
    icon: Zap,
    title: 'Fast Turnaround Times',
    description: 'Keep installs on schedule.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: ShieldCheck,
    title: 'AHJ & NEC-Compliant Designs',
    description: 'Built to local codes and utility rules.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Back-Office Support',
    description: 'Grow capacity without growing headcount.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Users,
    title: 'Dedicated Engineering Teams',
    description: 'Engineers who learn your standards.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Building2,
    title: 'Residential & Commercial Expertise',
    description: 'Rooftop, ground mount, carport, and storage.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Target,
    title: 'Consistent Quality & Technical Accuracy',
    description: 'Structured QC and expert review on every set.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background-subtle" aria-labelledby="why-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4 bg-primary/10"
          >
            Why TriventX
          </span>
          <h2 id="why-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Why Choose TriventX?
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Faster approvals. Fewer revisions. Confident installs.
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
              className="flex gap-5 p-6 rounded-2xl hover:bg-surface hover:shadow-card transition-all group"
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
