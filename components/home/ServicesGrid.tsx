'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  BarChart3,
  Sun,
  Award,
  PenTool,
  Layers,
  ArrowRight,
  Clock,
} from 'lucide-react'

const iconMap = {
  FileText,
  BarChart3,
  Sun,
  Award,
  PenTool,
  Layers,
}

const services = [
  {
    slug: 'solar-permit-design',
    icon: 'FileText' as keyof typeof iconMap,
    title: 'Solar Permit Design',
    description:
      'AHJ-compliant permit packages with site plans, SLDs, and NEC-stamped drawings. First-submission approval guaranteed.',
    tat: '6 Hours',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    highlight: 'Most Popular',
  },
  {
    slug: 'solar-sales-proposals',
    icon: 'BarChart3' as keyof typeof iconMap,
    title: 'Solar Sales Proposals',
    description:
      'Data-rich proposals with production estimates, 25-year ROI, and incentive breakdowns that close deals faster.',
    tat: '2 Hours',
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    highlight: 'Fastest TAT',
  },
  {
    slug: 'solar-preliminary-designs',
    icon: 'Sun' as keyof typeof iconMap,
    title: 'Preliminary Designs',
    description:
      'LiDAR-precision shading analysis and production estimates using Aurora, Helioscope & Scanifly.',
    tat: '2 Hours',
    color: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    highlight: null,
  },
  {
    slug: 'engineering-stamps',
    icon: 'Award' as keyof typeof iconMap,
    title: 'Engineering Stamps',
    description:
      'Licensed P.E. stamps for all 50 states. Structural, electrical, and power system studies with full code compliance.',
    tat: '18-24 Hours',
    color: 'from-purple-500 to-violet-500',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-500',
    highlight: null,
  },
  {
    slug: 'as-built-drawings',
    icon: 'PenTool' as keyof typeof iconMap,
    title: 'As-Built Drawings',
    description:
      'Post-installation documentation capturing field deviations for AHJ closeout and utility interconnection.',
    tat: '6 Hours',
    color: 'from-teal-500 to-emerald-500',
    bg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    highlight: null,
  },
  {
    slug: 'cad-conversion',
    icon: 'Layers' as keyof typeof iconMap,
    title: 'CAD Conversion',
    description:
      'Convert sketches, PDFs, or legacy drawings to professional DWG, DXF, or RVT format with full layer organization.',
    tat: '6 Hours',
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    iconColor: 'text-rose-500',
    highlight: null,
  },
]

export function ServicesGrid() {
  return (
    <section className="section-padding bg-background-subtle bg-section-mesh" aria-labelledby="services-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            What We Do
          </span>
          <h2 id="services-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Complete Solar Engineering Services
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            From the initial sales proposal through permit approval to final closeout — we handle
            every document in your solar project pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon]
            return (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${svc.slug}`}
                  className="group block service-card h-full"
                  aria-label={`Learn more about ${svc.title}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 ${svc.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${svc.iconColor}`} />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      {svc.highlight && (
                        <span
                          className="text-xs font-bold text-primary px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
                        >
                          {svc.highlight}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs font-semibold text-accent">
                        <Clock className="w-3.5 h-3.5" />
                        {svc.tat}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{svc.description}</p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white border border-border hover:border-primary text-text-primary hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-card"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
