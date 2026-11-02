'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  BarChart3,
  Satellite,
  Award,
  ClipboardCheck,
  PlugZap,
  PenTool,
  BadgeCheck,
  ArrowRight,
  Clock,
} from 'lucide-react'
import { SERVICES_DATA } from '@/lib/data/services'

const iconMap: Record<string, typeof FileText> = {
  FileText,
  BarChart3,
  Satellite,
  Award,
  ClipboardCheck,
  PlugZap,
  PenTool,
  BadgeCheck,
}

const styleMap: Record<string, { bg: string; iconColor: string; highlight?: string }> = {
  'solar-sales-proposals': { bg: 'bg-blue-50', iconColor: 'text-blue-500', highlight: 'Fastest TAT' },
  'site-surveys-remote-assessments': { bg: 'bg-yellow-50', iconColor: 'text-yellow-600' },
  'solar-permit-design': { bg: 'bg-orange-50', iconColor: 'text-orange-500', highlight: 'Most Popular' },
  'engineering-stamps': { bg: 'bg-purple-50', iconColor: 'text-purple-500' },
  'solar-permitting-services': { bg: 'bg-sky-50', iconColor: 'text-sky-600' },
  'interconnection-services': { bg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  'as-built-drawings': { bg: 'bg-teal-50', iconColor: 'text-teal-500' },
  'pto-support': { bg: 'bg-rose-50', iconColor: 'text-rose-500' },
}

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
            Our Core Solar Engineering Services
          </h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-lg">
            From the initial customer proposal through system design, permitting, interconnection,
            installation documentation, and final utility approval — reliable support across the
            entire solar project lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((svc, i) => {
            const Icon = iconMap[svc.iconName] ?? FileText
            const style = styleMap[svc.slug] ?? { bg: 'bg-orange-50', iconColor: 'text-orange-500' }
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
                    <div className={`w-12 h-12 ${style.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${style.iconColor}`} />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      {style.highlight && (
                        <span
                          className="text-xs font-bold text-primary px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
                        >
                          {style.highlight}
                        </span>
                      )}
                      {svc.tat && (
                        <span className="flex items-center gap-1 text-xs font-semibold text-accent">
                          <Clock className="w-3.5 h-3.5" />
                          {svc.tat}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{svc.shortDescription}</p>

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
