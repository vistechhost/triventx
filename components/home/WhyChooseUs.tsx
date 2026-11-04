'use client'

import { motion } from 'framer-motion'
import { Zap, ShieldCheck, TrendingUp, Users, Building2, Target } from 'lucide-react'

const pillars = [
  {
    icon: Zap,
    title: 'Fast Turnaround Times',
    description: 'Accelerate project workflows and keep installations on schedule.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: ShieldCheck,
    title: 'AHJ & NEC-Compliant Designs',
    description:
      'Documentation aligned with applicable codes, standards, and jurisdictional requirements.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Back-Office Support',
    description:
      'Expand your project capacity without the overhead of building a larger internal engineering team.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Users,
    title: 'Dedicated Engineering Teams',
    description:
      'Work with experienced professionals aligned with your processes, standards, and project requirements.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Building2,
    title: 'Residential & Commercial Expertise',
    description:
      'Support for projects across a broad range of solar applications and system configurations.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: Target,
    title: 'Consistent Quality & Technical Accuracy',
    description:
      'Dependable deliverables through structured workflows, quality-control procedures, and expert review.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background" aria-labelledby="why-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Why TriventX
          </span>
          <h2 id="why-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Why Choose TriventX?
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            We combine technical expertise, regulatory knowledge, streamlined workflows, and a
            commitment to quality — helping you accelerate approvals, minimize design revisions,
            and install with confidence.
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
