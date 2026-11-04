'use client'

import { motion } from 'framer-motion'
import { MapPin, Zap, CheckCircle, Landmark, CalendarDays, ExternalLink } from 'lucide-react'
import { CASE_STUDIES } from '@/lib/data/site-config'

const gradients = ['from-orange-500 to-amber-400', 'from-blue-500 to-indigo-400', 'from-green-500 to-teal-400']

// Hidden until there is a case study with evidence a visitor can check (see lib/data/site-config.ts).
export function CaseStudies() {
  if (CASE_STUDIES.length === 0) return null

  return (
    <section className="section-padding bg-background" aria-labelledby="cases-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Case Studies
          </span>
          <h2 id="cases-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Real Projects, Real Results
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Published with our clients&apos; permission, with a public record you can check for each project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base overflow-hidden flex flex-col hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-1.5 bg-gradient-to-r ${gradients[i % gradients.length]}`} aria-hidden="true" />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold text-primary px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
                  >
                    {c.tag}
                  </span>
                  <span className="text-xs font-semibold text-text-secondary bg-background-subtle px-3 py-1 rounded-full">
                    {c.type}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-text-primary mb-1">{c.title}</h3>
                <p className="text-sm font-semibold text-text-secondary mb-3">{c.client}</p>

                <ul className="flex flex-col gap-1.5 mb-4 text-xs text-text-secondary">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    {c.location}
                  </li>
                  <li className="flex items-center gap-2">
                    <Landmark className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    {c.ahj}
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    {c.systemSize}
                  </li>
                  <li className="flex items-center gap-2">
                    <CalendarDays className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    Completed {c.completedOn}
                  </li>
                </ul>

                <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">{c.description}</p>

                <div className="border-t border-border pt-4 space-y-2">
                  {c.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-xs font-medium text-text-primary">{outcome}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={c.evidence.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:underline"
                >
                  {c.evidence.label}
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
