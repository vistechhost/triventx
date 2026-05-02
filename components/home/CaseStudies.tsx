'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Zap, ArrowRight, CheckCircle } from 'lucide-react'

const cases = [
  {
    id: '1',
    title: 'High-Volume Residential Portfolio',
    client: 'Pacific Coast Solar',
    location: 'San Diego County, CA',
    systemSize: '150+ permits/month',
    type: 'Residential',
    description:
      'A San Diego residential installer processing 150+ permits monthly needed to reduce their permit design backlog. TriventX implemented a same-day processing workflow, cutting their average permit submission time from 5 days to 6 hours.',
    outcomes: [
      'Time to submission reduced by 91%',
      '99% first-submission approval rate',
      '3 additional crews hired due to faster pipeline',
    ],
    gradient: 'from-orange-500 to-amber-400',
    tag: 'Permit Design',
  },
  {
    id: '2',
    title: 'Multi-State Commercial Portfolio',
    client: 'Meridian Energy Partners',
    location: 'TX, CO, AZ, NV',
    systemSize: '45 MW annual capacity',
    type: 'Commercial',
    description:
      'A commercial EPC contractor needed PE-stamped engineering packages for 47 carport and rooftop installations across four states simultaneously. TriventX coordinated multi-state PE coverage and delivered all packages within 5 business days.',
    outcomes: [
      '47 projects stamped across 4 states',
      'All delivered within 5 business days',
      'Zero re-stamp requests from any AHJ',
    ],
    gradient: 'from-blue-500 to-indigo-400',
    tag: 'Engineering Stamps',
  },
  {
    id: '3',
    title: 'Utility Ground Mount Array',
    client: 'Clearwater Renewables',
    location: 'Central Valley, CA',
    systemSize: '28 MW ground mount',
    type: 'Utility-Scale',
    description:
      'A 28 MW fixed-tilt ground mount project requiring full engineering documentation for utility interconnection, CEC certification, and county building permits. TriventX produced 340+ pages of stamped engineering drawings across 14 permit packages.',
    outcomes: [
      '340 pages of stamped engineering docs',
      'Utility interconnection approved in 3 months',
      '$2.1M in permit-related delays prevented',
    ],
    gradient: 'from-green-500 to-teal-400',
    tag: 'Full Engineering',
  },
]

export function CaseStudies() {
  return (
    <section className="section-padding bg-white" aria-labelledby="cases-heading">
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
            A sample of what TriventX has delivered for solar installers across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base overflow-hidden flex flex-col hover:shadow-[0_8px_48px_rgba(10,14,26,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Color band */}
              <div className={`h-1.5 bg-gradient-to-r ${c.gradient}`} aria-hidden="true" />

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

                <h3 className="font-heading font-bold text-xl text-text-primary mb-3">{c.title}</h3>

                <div className="flex flex-col gap-1.5 mb-4">
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {c.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    {c.systemSize}
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">{c.description}</p>

                <div className="border-t border-border pt-4 space-y-2">
                  {c.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-text-primary">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
