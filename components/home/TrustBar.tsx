'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'SunPower Corp', abbr: 'SP' },
  { name: 'Sunrun Energy', abbr: 'SR' },
  { name: 'Vivint Solar', abbr: 'VS' },
  { name: 'Tesla Energy', abbr: 'TE' },
  { name: 'NRG Solar', abbr: 'NR' },
  { name: 'Sunnova Energy', abbr: 'SN' },
]

export function TrustBar() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-background-subtle" aria-label="Trusted by">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-text-secondary uppercase tracking-widest mb-8"
        >
          Trusted by 500+ Solar Installers Across the United States
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 group"
              aria-label={client.name}
            >
              {/* Logo placeholder — gradient tile */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs text-white shrink-0 group-hover:scale-105 transition-transform"
                style={{
                  background: `hsl(${i * 40 + 15}, 70%, 45%)`,
                }}
                aria-hidden="true"
              >
                {client.abbr}
              </div>
              <span className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors whitespace-nowrap">
                {client.name}
              </span>
              {/* TODO: REPLACE with actual client logos */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
