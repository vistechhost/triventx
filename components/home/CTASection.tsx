'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { SITE_CONFIG } from '@/lib/data/site-config'
import { formatPhone, telHref } from '@/lib/utils/contact'

export function CTASection() {
  return (
    <section id="quote" className="section-padding relative overflow-hidden bg-navy-950 scroll-mt-20" aria-labelledby="cta-heading">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(2,129,130,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(29,63,143,0.12) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(2,129,130,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light rounded-full px-4 py-1.5 mb-6"
              style={{ backgroundColor: 'rgba(2, 129, 130, 0.15)' }}
            >
              Start Today
            </span>
            <h2 id="cta-heading" className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your Trusted{' '}
              <span className="text-primary-light">Solar Engineering Partner</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              One project or your full design team — we work as an extension of your business.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'No contract required — pay per project',
                'First project delivered with a 100% satisfaction guarantee',
                'Dedicated account manager from day one',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-slate-300 text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {SITE_CONFIG.phone && (
                <a
                  href={telHref(SITE_CONFIG.phone)}
                  className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-5 py-3 rounded-xl transition-all text-sm"
                >
                  <Phone className="w-4 h-4 text-primary-light" />
                  {formatPhone(SITE_CONFIG.phone)}
                </a>
              )}
              {SITE_CONFIG.email && (
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-5 py-3 rounded-xl transition-all text-sm"
                >
                  <Mail className="w-4 h-4 text-primary-light" />
                  {SITE_CONFIG.email}
                </a>
              )}
            </div>
          </motion.div>

          {/* Right: Project request form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <h3 className="font-heading font-bold text-xl text-text-primary mb-6">Get a Free Quote</h3>
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
