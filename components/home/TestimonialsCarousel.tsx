'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: '1',
    name: 'Marcus Webb',
    title: 'Director of Operations',
    company: 'SolarWave Installations, CA',
    content:
      "TriventX has completely transformed our permit pipeline. We used to lose 3-4 days waiting for permit packages. Now we submit same-day, and our AHJ has complimented us on the quality of the drawings. The 6-hour TAT isn't marketing fluff — they've consistently delivered in under 5 hours for us.",
    rating: 5,
    initials: 'MW',
    color: 'from-orange-400 to-amber-500',
  },
  {
    id: '2',
    name: 'Priya Nair',
    title: 'VP of Engineering',
    company: 'Apex Solar Systems, TX',
    content:
      "We handle 150+ residential installs per month and TriventX is the backbone of our entire pre-construction workflow. Their engineers understand AHJ nuances at a state-by-state level that our in-house team simply couldn't match. We've seen our permit approval rate jump to 99% since switching.",
    rating: 5,
    initials: 'PN',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: '3',
    name: 'James Kowalski',
    title: 'Owner',
    company: 'Green Horizon Solar, FL',
    content:
      "As a small installer competing against larger EPC firms, having TriventX in my corner is a genuine competitive advantage. The proposal quality makes us look like a 50-person company. I've closed deals I would have lost on presentation quality alone. Outstanding value.",
    rating: 5,
    initials: 'JK',
    color: 'from-green-400 to-teal-500',
  },
  {
    id: '4',
    name: 'Sarah Okafor',
    title: 'Project Manager',
    company: 'Luminos Energy Group, NY',
    content:
      "The PE stamp service is remarkably fast for the level of detail they provide. Our utility-scale ground mounts in New York have some of the toughest structural requirements in the country, and TriventX has navigated every one without a single re-stamp request. I trust their work implicitly.",
    rating: 5,
    initials: 'SO',
    color: 'from-purple-400 to-violet-500',
  },
  {
    id: '5',
    name: 'Derek Huang',
    title: 'CEO',
    company: 'Pacific Sun Solutions, WA',
    content:
      "Switched from our previous engineering firm 18 months ago and the difference is night and day. TriventX's communication is exceptional — we always know the status of our projects and they proactively flag any issues before they become problems. That proactive approach has saved us from multiple re-design scenarios.",
    rating: 5,
    initials: 'DH',
    color: 'from-rose-400 to-pink-500',
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((v) => (v === 0 ? testimonials.length - 1 : v - 1))
  const next = () => setCurrent((v) => (v === testimonials.length - 1 ? 0 : v + 1))

  const t = testimonials[current]

  return (
    <section className="section-padding bg-white" aria-labelledby="testimonials-heading">
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
            Don't take our word for it — here's what our clients say about working with TriventX.
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
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-10 h-10 text-primary/20 shrink-0 mt-1" aria-hidden="true" />
                  <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-text-primary text-lg leading-relaxed mb-8 font-medium">
                  "{t.content}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                    aria-hidden="true"
                  >
                    {t.initials}
                    {/* TODO: REPLACE with real avatar images */}
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">{t.name}</p>
                    <p className="text-sm text-text-secondary">{t.title} — {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
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
          </div>
        </div>
      </div>
    </section>
  )
}
