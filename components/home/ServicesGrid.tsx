'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FileText,
  BarChart3,
  Satellite,
  Award,
  PlugZap,
  PenTool,
  BadgeCheck,
  ArrowRight,
  Clock,
  Wind,
  RadioTower,
} from 'lucide-react'
import { OTHER_SERVICES, SOLAR_SERVICES } from '@/lib/data/services'

const iconMap: Record<string, typeof FileText> = {
  FileText,
  BarChart3,
  Satellite,
  Award,
  PlugZap,
  PenTool,
  BadgeCheck,
  Wind,
  RadioTower,
}

const otherServiceImages: Record<string, string> = {
  'wind-energy-services': '/images/wind-onshore-farm.jpg',
  'telecom-engineering-services': '/images/telecom-fiber-optic.jpg',
}

const styleMap: Record<string, { bg: string; iconColor: string; highlight?: string }> = {
  'solar-sales-proposals': { bg: 'bg-blue-50', iconColor: 'text-blue-500', highlight: 'Fastest TAT' },
  'site-surveys-remote-assessments': { bg: 'bg-yellow-50', iconColor: 'text-yellow-600' },
  'solar-permit-design': { bg: 'bg-orange-50', iconColor: 'text-orange-500', highlight: 'Most Popular' },
  'engineering-stamps': { bg: 'bg-purple-50', iconColor: 'text-purple-500' },
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
            Proposal to PTO — one partner for the full project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLAR_SERVICES.map((svc, i) => {
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
          <Link
            href="/contact"
            className="group flex flex-col justify-center rounded-2xl bg-primary p-8 text-white transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1"
          >
            <h3 className="font-heading font-bold text-xl mb-3">Not sure what you need?</h3>
            <p className="text-sm text-white/90 leading-relaxed mb-5">
              Share your project. We&apos;ll recommend the right services.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-bold">
              Talk to an engineer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Other engineering services */}
        <div className="mt-16">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-primary text-center mb-3">
            Beyond Solar: Wind Energy &amp; Telecom
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto text-center mb-8">
            Same workflows and quality control, for wind and telecom.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {OTHER_SERVICES.map((svc) => {
              const Icon = iconMap[svc.iconName] ?? FileText
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group relative isolate block overflow-hidden rounded-2xl min-h-72 p-8 flex flex-col justify-end"
                  aria-label={`Learn more about ${svc.title}`}
                >
                  <Image
                    src={otherServiceImages[svc.slug] ?? svc.heroImageUrl}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0A0E1A]/95 via-[#0A0E1A]/60 to-[#0A0E1A]/20" aria-hidden="true" />
                  <Icon className="w-8 h-8 text-primary-light mb-3" aria-hidden="true" />
                  <h4 className="font-heading font-bold text-2xl text-white mb-2">{svc.title}</h4>
                  <p className="text-sm text-white/85 leading-relaxed mb-4">{svc.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-light">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary text-text-primary hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-card"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
