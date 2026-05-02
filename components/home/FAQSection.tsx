'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What is your typical turnaround time for permit designs?',
    answer:
      'Our standard turnaround for solar permit design packages is 6 hours from confirmed receipt of all required project information. Rush orders can be completed in as little as 3 hours. Sales proposals and preliminary designs are typically delivered within 2 hours. Engineering stamps require 18–24 hours to allow proper engineering review.',
  },
  {
    question: 'Which NEC edition do your designs comply with?',
    answer:
      'We design to the most current adopted edition of the NEC in each jurisdiction. As of 2024, most states have adopted NEC 2020 or 2023. We maintain a continuously updated database of jurisdiction-specific code adoptions and automatically apply the correct edition for your project location. We\'ll explicitly note the applicable code cycle on every set of drawings.',
  },
  {
    question: 'How many revisions are included with each service?',
    answer:
      'All of our services include unlimited revisions until your AHJ approves the permit. Whether the revision is needed due to an AHJ correction request, a design change, or an equipment substitution — we handle it at no additional charge. We want your permit approved, not just your first drawing delivered.',
  },
  {
    question: 'Can you handle utility-scale and commercial projects?',
    answer:
      'Yes. While we specialize in residential and light commercial solar (up to ~2 MW), our engineering team handles ground-mount utility-scale projects, BESS (battery storage) systems, carport canopies, and multi-building commercial installations. For projects over 500 kW, please contact us directly for a custom scope and timeline.',
  },
  {
    question: 'What file formats do you deliver?',
    answer:
      'Standard deliverables are provided in PDF format, print-ready at 24"×36" or 11"×17" as required by the AHJ. We also provide native CAD files (AutoCAD DWG/DXF) upon request at no extra charge. Preliminary designs can be delivered in Aurora Solar, Helioscope, or Scanifly native formats in addition to PDF exports.',
  },
  {
    question: 'Do you provide PE stamps for all 50 states?',
    answer:
      'Yes. We maintain a network of licensed Professional Engineers covering all 50 states. For electrical stamps, we use PE-licensed electrical engineers in the required state. For structural stamps, we use state-licensed structural or civil PEs. All stamp engineers carry current E&O insurance. Proof of licensure can be provided upon request.',
  },
  {
    question: 'How do I submit a new project?',
    answer:
      'You can submit projects via our secure client portal (preferred) or by email. For permit designs, we need: site address, utility company, roof photos or satellite image, equipment selections (inverter, modules, racking), and any existing site plans. Our project intake form walks you through exactly what\'s needed, reducing back-and-forth by 80%.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'We offer per-project pricing with volume discounts for installers completing 10+ projects monthly. Pricing varies by service type, system complexity, and jurisdiction. We provide transparent, upfront quotes with no hidden fees. Contact us for a custom pricing proposal, or request our rate card for standard residential projects.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-background-subtle" aria-labelledby="faq-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Common Questions
          </span>
          <h2 id="faq-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Everything you need to know about working with TriventX. Can't find your answer?{' '}
            <a href="/contact" className="text-primary font-semibold hover:underline">
              Contact us directly.
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3" role="list">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-base overflow-hidden"
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-background-subtle transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-text-primary text-base pr-2">{faq.question}</span>
                <span className="shrink-0 w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
