'use client'

import { motion } from 'framer-motion'
import { Wrench, Building2, HardHat, House } from 'lucide-react'

const audiences = [
  { name: 'Solar Installers', icon: Wrench },
  { name: 'EPC Companies', icon: Building2 },
  { name: 'Contractors', icon: HardHat },
  { name: 'Homeowners', icon: House },
]

export function TrustBar() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-background-subtle" aria-label="Who we serve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-text-secondary uppercase tracking-widest mb-8"
        >
          Supporting Solar Professionals Across the United States, Canada &amp; Europe
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 group"
            >
              <div
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                aria-hidden="true"
              >
                <audience.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors whitespace-nowrap">
                {audience.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
