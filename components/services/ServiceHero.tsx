'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock, CheckCircle } from 'lucide-react'
import type { Service } from '@/lib/types'

interface ServiceHeroProps {
  service: Omit<Service, 'updatedAt'>
  interactive: React.ReactNode
}

export function ServiceHero({ service, interactive }: ServiceHeroProps) {
  return (
    <section className="pt-24 pb-16 md:pt-32 bg-background overflow-hidden relative" aria-labelledby="service-hero-heading">
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-text-secondary">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-primary font-medium" aria-current="page">{service.title}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* TAT Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm text-accent border border-accent/20"
                style={{ backgroundColor: 'rgba(0, 200, 150, 0.1)' }}
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {service.tat} Turnaround
              </span>
            </div>

            <h1
              id="service-hero-heading"
              className="font-heading text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6"
            >
              {service.title}
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {service.longDescription.split('\n\n')[0]}
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-10" aria-label="Service features">
              {service.features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-text-secondary text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-glow-primary hover:-translate-y-0.5"
              >
                Order This Service
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-background-subtle text-text-primary font-semibold px-6 py-4 rounded-xl border border-border transition-all duration-200 hover:shadow-card"
              >
                <ArrowLeft className="w-4 h-4" />
                All Services
              </Link>
            </div>
          </motion.div>

          {/* Right: Interactive component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {interactive}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
