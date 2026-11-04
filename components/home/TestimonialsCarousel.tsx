'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data/site-config'

// Hidden until there is a testimonial with a source a visitor can check (see lib/data/site-config.ts).
export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  if (TESTIMONIALS.length === 0) return null

  const prev = () => setCurrent((v) => (v === 0 ? TESTIMONIALS.length - 1 : v - 1))
  const next = () => setCurrent((v) => (v === TESTIMONIALS.length - 1 ? 0 : v + 1))

  const t = TESTIMONIALS[current]

  return (
    <section className="section-padding bg-background" aria-labelledby="testimonials-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Client Stories
          </span>
          <h2 id="testimonials-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Trusted by Solar Professionals
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Don&apos;t take our word for it — here&apos;s what our clients say about working with TriventX.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="card-base p-8 md:p-10"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-6" aria-hidden="true" />

                <blockquote className="text-text-primary text-lg leading-relaxed mb-8 font-medium">
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                <p className="font-bold text-text-primary">{t.name}</p>
                <p className="text-sm text-text-secondary">
                  {t.title}, {t.company} — {t.location}
                </p>
                <p className="text-sm text-text-secondary mt-2 flex flex-wrap items-center gap-x-3">
                  <span>{t.givenOn}</span>
                  <a
                    href={t.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                  >
                    {t.source.label}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </p>
              </motion.div>
            </AnimatePresence>

            {TESTIMONIALS.length > 1 && (
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {TESTIMONIALS.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-text-secondary/30'}`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-xl border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center text-text-secondary hover:text-primary transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-xl bg-primary hover:bg-primary-dark text-white flex items-center justify-center transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
