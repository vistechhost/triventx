'use client'

import { motion } from 'framer-motion'

const tools = [
  { name: 'AuroraSolar', abbr: 'AS', color: 'from-orange-400 to-yellow-500', description: 'Sales & Design' },
  { name: 'Helioscope', abbr: 'HS', color: 'from-blue-500 to-cyan-400', description: 'Production Modeling' },
  { name: 'Scanifly', abbr: 'SC', color: 'from-green-500 to-emerald-400', description: 'LiDAR Surveys' },
  { name: 'AutoCAD', abbr: 'AC', color: 'from-red-500 to-rose-400', description: 'Engineering CAD' },
  { name: 'PVsyst', abbr: 'PV', color: 'from-purple-500 to-violet-400', description: 'Energy Simulation' },
  { name: 'OpenSolar', abbr: 'OS', color: 'from-teal-500 to-cyan-500', description: 'Proposal Platform' },
]

export function TechStack() {
  return (
    <section className="section-padding bg-white" aria-labelledby="tech-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Our Toolkit
          </span>
          <h2 id="tech-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Industry-Leading Software Stack
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            We invest in the best engineering and design tools so every deliverable reflects
            state-of-the-art accuracy and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all group cursor-default"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform shadow-sm`}
                aria-hidden="true"
              >
                {tool.abbr}
                {/* TODO: REPLACE with official tool logos */}
              </div>
              <div className="text-center">
                <p className="font-semibold text-text-primary text-sm">{tool.name}</p>
                <p className="text-xs text-text-secondary mt-0.5">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
