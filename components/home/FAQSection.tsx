import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FAQS, type FAQEntry } from '@/lib/data/faqs'

interface FAQSectionProps {
  items?: FAQEntry[]
  heading?: string
}

// Answers are always shown rather than collapsed, so every question is answered
// for visitors, screen readers, and search engines without needing a click.
export function FAQSection({ items = FAQS, heading = 'Frequently Asked Questions' }: FAQSectionProps) {
  return (
    <section className="section-padding bg-background-subtle" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Common Questions
          </span>
          <h2 id="faq-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {heading}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Quick answers. Can&apos;t find yours?{' '}
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              Contact us.
            </Link>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {items.map((faq) => (
            <article key={faq.id} className="card-base p-6">
              <h3 className="font-semibold text-text-primary text-base mb-3">{faq.question}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
              {faq.link && (
                <Link
                  href={faq.link.href}
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-primary hover:underline"
                >
                  {faq.link.label}
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
