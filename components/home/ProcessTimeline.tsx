'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Upload, Search, PenTool, CheckCircle, Send } from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: Upload,
    title: 'Submit Project',
    description:
      'Share your site survey, satellite imagery, equipment specs, and utility info through our secure portal or email.',
    time: 'Instant',
    color: 'bg-primary',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    step: 2,
    icon: Search,
    title: 'Review & Confirm',
    description:
      'Our engineers review your submission, confirm all required details, and assign the project to a specialist.',
    time: '< 30 min',
    color: 'bg-secondary',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    step: 3,
    icon: PenTool,
    title: 'Design & Engineer',
    description:
      'Licensed engineers produce your drawings to AHJ-specific standards with full code compliance and QA review.',
    time: 'Core TAT',
    color: 'bg-accent',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
  {
    step: 4,
    icon: CheckCircle,
    title: 'Quality Assurance',
    description:
      'Three-stage QA check by a senior engineer confirms accuracy, completeness, and code compliance before delivery.',
    time: 'Included',
    color: 'bg-purple-500',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    step: 5,
    icon: Send,
    title: 'Deliver & Support',
    description:
      'Permit-ready package delivered via email and portal. Unlimited revisions until your AHJ approves.',
    time: 'On Time',
    color: 'bg-rose-500',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
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

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-border" aria-hidden="true">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-lg mb-6 relative z-10`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-wide mb-1">
                  Step {step.step}
                </span>
                <h3 className="font-heading font-bold text-base text-text-primary mb-2">{step.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">{step.description}</p>
                <span
                  className="text-xs font-bold text-primary px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
                >
                  {step.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-5 bg-white rounded-2xl p-5 border border-border shadow-card"
            >
              <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shrink-0`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-heading font-bold text-base text-text-primary">{step.title}</h3>
                  <span
                    className="text-xs font-bold text-primary px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
                  >
                    {step.time}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
