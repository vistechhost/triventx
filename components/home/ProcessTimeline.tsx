'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Upload, Search, PenTool, CheckCircle, Send } from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: Upload,
    title: 'Submit Project',
    description:
      'Share your site survey, satellite imagery, equipment specs, and utility info through our project form or by email.',
    time: 'Instant',
    color: 'bg-primary',
  },
  {
    step: 2,
    icon: Search,
    title: 'Review & Confirm',
    description:
      'Our engineers review your submission, confirm all required details, and assign the project to a specialist.',
    time: '< 30 min',
    color: 'bg-secondary',
  },
  {
    step: 3,
    icon: PenTool,
    title: 'Design & Engineer',
    description:
      'Licensed engineers produce your drawings to AHJ-specific standards with full code compliance and QA review.',
    time: 'Core TAT',
    color: 'bg-accent',
  },
  {
    step: 4,
    icon: CheckCircle,
    title: 'Quality Assurance',
    description:
      'Three-stage QA check by a senior engineer confirms accuracy, completeness, and code compliance before delivery.',
    time: 'Included',
    color: 'bg-purple-500',
  },
  {
    step: 5,
    icon: Send,
    title: 'Deliver & Support',
    description:
      'Permit-ready package delivered by email, with AHJ-requested revisions included until the permit is approved.',
    link: { href: '/terms#revisions', label: 'Revision policy' },
    time: 'On Time',
    color: 'bg-rose-500',
  },
]

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-background-subtle" aria-labelledby="process-heading" ref={ref}>
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Our Process
          </span>
          <h2 id="process-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            From Submit to Stamped in 5 Steps
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A transparent, repeatable process engineered for speed and accuracy — so you always
            know where your project stands.
          </p>
        </div>

        {/* One list for every screen size: cards stacked on mobile, a horizontal timeline on desktop */}
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-border" aria-hidden="true">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <ol className="grid gap-4 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="flex gap-5 bg-surface rounded-2xl p-5 border border-border shadow-card lg:flex-col lg:items-center lg:gap-0 lg:bg-transparent lg:p-0 lg:border-0 lg:shadow-none lg:rounded-none lg:text-center"
              >
                <div
                  className={`w-12 h-12 lg:w-20 lg:h-20 ${step.color} rounded-xl lg:rounded-full flex items-center justify-center shrink-0 lg:shadow-lg lg:mb-6 relative z-10`}
                >
                  <step.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="lg:flex lg:flex-col lg:items-center">
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-wide mb-1 block">
                    Step {step.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-text-primary mb-2">{step.title}</h3>
                  <p className="text-sm lg:text-xs text-text-secondary leading-relaxed mb-3">
                    {step.description}
                    {step.link && (
                      <>
                        {' '}
                        <Link href={step.link.href} className="font-semibold text-primary hover:underline">
                          {step.link.label}
                        </Link>
                      </>
                    )}
                  </p>
                  <span
                    className="inline-block text-xs font-bold text-primary px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
                  >
                    {step.time}
                  </span>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
