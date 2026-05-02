'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react'

const HeroScene = dynamic(
  () => import('@/components/3d/HeroScene').then((m) => m.HeroScene),
  { ssr: false }
)

const trustPoints = [
  'AHJ-Compliant on First Submission',
  'Licensed P.E. Stamps All 50 States',
  '24/7 Priority Support',
]

export function Hero() {
  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden bg-white" aria-labelledby="hero-heading">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" aria-hidden="true" />

      {/* Text Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-6"
              style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Trusted by 500+ Solar Installers Nationwide
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-6"
          >
            Engineering the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FF8A00, #0066FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Solar Revolution
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Precision solar permit designs, engineering stamps, and project documentation —
            delivered in hours, not days. Backed by licensed P.E.s covering all 50 US states.
          </motion.p>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10"
          >
            {trustPoints.map((point) => (
              <span key={point} className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                {point}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-glow-primary hover:-translate-y-0.5 text-base"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white hover:bg-background-subtle text-text-primary font-semibold px-8 py-4 rounded-xl border border-border transition-all duration-200 hover:shadow-card hover:-translate-y-0.5 text-base"
            >
              <PlayCircle className="w-5 h-5 text-primary" />
              View Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 3D Scene */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full"
      >
        <HeroScene />
      </motion.div>
    </section>
  )
}
