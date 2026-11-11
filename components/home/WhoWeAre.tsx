'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const strengths = [
  'Intelligent design',
  'Technical precision',
  'Permitting expertise',
  'Seamless project coordination',
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4 bg-primary/10"
            >
              Who We Are
            </span>
            <h2 id="who-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
              Beyond Solar Design.{' '}
              <span className="text-primary">We Engineer Energy Solutions That Scale.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-5">
              From the first proposal to final Permission to Operate (PTO), we bring every critical
              stage of your solar project under one connected engineering ecosystem — for installers,
              EPCs, and contractors across the US, Canada, and Europe.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              We combine these to turn complex workflows into predictable project outcomes:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {strengths.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-text-primary">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-heading text-lg font-bold text-text-primary border-l-4 border-primary pl-4 mb-8">
              We don&apos;t just support your projects. We engineer the foundation for your growth.
            </p>
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
