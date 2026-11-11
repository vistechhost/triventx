'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Building2, Zap, Check } from 'lucide-react'

const industries = [
  {
    id: 'residential',
    label: 'Residential',
    icon: Home,
    headline: 'Rooftop Solar for Homeowners',
    description:
      'Single-family, multi-family, and townhomes — designed for quick permit cycles.',
    features: [
      'Standard & complex roof geometries',
      'HOA and CC&R compliance documentation',
      'Battery storage (BESS) integration',
      'EV charger add-on wiring diagrams',
      'Utility interconnection applications',
      'Systems from 2 kW to 100 kW',
    ],
    stat: { value: '8,500+', label: 'Residential Projects' },
    color: 'border-primary bg-primary/5',
    activeColor: 'bg-primary',
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: Building2,
    headline: 'Commercial & Industrial Solar',
    description:
      'C&I projects from 100 kW to 2 MW — complex electrical, structural, and permit needs.',
    features: [
      'Carport canopy structural design',
      'Rooftop ballasted & penetrating mounts',
      'Complex electrical distribution studies',
      'Net metering & demand charge analysis',
      'Multi-tenant interconnection design',
      'NFPA 855 BESS compliance',
    ],
    stat: { value: '1,200+', label: 'Commercial Projects' },
    color: 'border-secondary bg-secondary/5',
    activeColor: 'bg-secondary',
  },
  {
    id: 'utility',
    label: 'Utility-Scale',
    icon: Zap,
    headline: 'Large-Scale Ground Mount Arrays',
    description:
      'Agrivoltaic to multi-site portfolios — documentation for utilities, FERC, and state PUCs.',
    features: [
      'Tracker & fixed-tilt ground mount design',
      'Transmission interconnection studies',
      'Substation one-line diagrams',
      'NERC/IEEE compliance documentation',
      'Environmental impact addendums',
      'Projects 1 MW to 100+ MW',
    ],
    stat: { value: '300+', label: 'Utility Projects' },
    color: 'border-accent bg-accent/5',
    activeColor: 'bg-accent',
  },
]

export function IndustriesServed() {
  const [active, setActive] = useState('residential')
  const current = industries.find((i) => i.id === active)!

  return (
    <section className="section-padding bg-background-subtle" aria-labelledby="industries-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4 bg-primary/10"
          >
            Industries We Serve
          </span>
          <h2 id="industries-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Expertise Across Every Sector
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-surface rounded-2xl p-1.5 border border-border shadow-sm" role="tablist">
            {industries.map((ind) => (
              <button
                key={ind.id}
                role="tab"
                aria-selected={active === ind.id}
                onClick={() => setActive(ind.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  active === ind.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-background-subtle'
                }`}
              >
                <ind.icon className="w-4 h-4" />
                {ind.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            role="tabpanel"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <current.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{current.stat.value}</p>
                    <p className="text-xs text-text-secondary">{current.stat.label}</p>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-2xl text-text-primary mb-4">{current.headline}</h3>
                <p className="text-text-secondary leading-relaxed text-base">{current.description}</p>
              </div>
              <div className="card-base p-6">
                <p className="text-sm font-bold text-text-primary mb-4 uppercase tracking-wide">
                  What's Included
                </p>
                <ul className="space-y-3">
                  {current.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
