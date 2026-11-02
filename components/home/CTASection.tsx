'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react'

export function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="section-padding relative overflow-hidden bg-[#0A0E1A]" aria-labelledby="cta-heading">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(255,138,0,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(0,102,255,0.12) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,138,0,0.3), transparent)' }}
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-6"
              style={{ backgroundColor: 'rgba(255, 138, 0, 0.15)' }}
            >
              Start Today
            </span>
            <h2 id="cta-heading" className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your Trusted{' '}
              <span style={{ color: '#FF8A00' }}>Solar Engineering Partner</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Whether you require support for a single solar project, an ongoing portfolio, or a
              fully outsourced engineering and design operation, TriventX operates as an extension
              of your business.
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
              <a
                href="tel:+18882476535"
                className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-5 py-3 rounded-xl transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                +1 (888) 247-6535
              </a>
              <a
                href="mailto:hello@triventxenergy.com"
                className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-5 py-3 rounded-xl transition-all text-sm"
              >
                <Mail className="w-4 h-4 text-primary" />
                hello@triventxenergy.com
              </a>
            </div>
          </motion.div>

          {/* Right: Quick contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-2">Get a Free Quote</h3>
              <p className="text-slate-400 text-sm mb-6">We'll respond within 30 minutes during business hours.</p>

              {submitted ? (
                <div className="flex flex-col items-center text-center py-8 gap-4">
                  <CheckCircle className="w-14 h-14 text-accent" />
                  <p className="text-white font-semibold text-lg">Thanks! We'll be in touch shortly.</p>
                  <p className="text-slate-400 text-sm">Our team will reach out to {email} within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleQuickContact} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary text-sm"
                    aria-label="Full name"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary text-sm"
                    aria-label="Work email"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary text-sm"
                    aria-label="Phone number"
                  />
                  <select
                    className="w-full bg-[#1A2035] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm"
                    aria-label="Service interested in"
                    defaultValue=""
                  >
                    <option value="" disabled>Service Interested In</option>
                    <option>Solar Sales Proposals</option>
                    <option>Site Surveys &amp; Remote Assessments</option>
                    <option>Solar Permit Design</option>
                    <option>PE Review &amp; Stamping</option>
                    <option>Solar Permitting Services</option>
                    <option>Interconnection Services</option>
                    <option>As-Built Drawings</option>
                    <option>PTO Support</option>
                    <option>Multiple Services</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all hover:shadow-glow-primary flex items-center justify-center gap-2"
                  >
                    Request Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    No spam. No commitment. Just a friendly engineer's call.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
