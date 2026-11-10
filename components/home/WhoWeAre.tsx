'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const standards = [
  'AHJ requirements',
  'Building & fire codes',
  'National Electrical Code (NEC)',
  'Utility interconnection standards',
]

export function WhoWeAre() {
  return (
    <section className="section-padding bg-background-subtle" aria-labelledby="who-heading">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/residential-solar-home.jpg"
              alt="Two-story residential home with a rooftop solar PV system"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
              style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
            >
              Who We Are
            </span>
            <h2 id="who-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Solar PV Design & Engineering You Can Build On
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-5">
              Accurate, code-compliant solar PV design for installers, EPCs, and contractors across
              the United States.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Faster approvals. Fewer revisions. Every design built to:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {standards.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-text-primary">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              More About TriventX
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
