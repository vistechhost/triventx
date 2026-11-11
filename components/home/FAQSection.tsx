import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FAQS, type FAQEntry } from '@/lib/data/faqs'

interface FAQSectionProps {
  items?: FAQEntry[]
  heading?: string
  /** Links to the full FAQ page, for pages that show only some of the questions. */
  showAllLink?: boolean
  /** Renders the heading as the page's h1, for the FAQ page itself. */
  asPageHeading?: boolean
}

// Answers are always shown rather than collapsed, so every question is answered
// for visitors, screen readers, and search engines without needing a click.
export function FAQSection({
  items = FAQS,
  heading = 'Frequently Asked Questions',
  showAllLink = false,
  asPageHeading = false,
}: FAQSectionProps) {
  const Heading = asPageHeading ? 'h1' : 'h2'
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4 bg-primary/10"
          >
            Common Questions
          </span>
          <Heading
            id="faq-heading"
            className={`font-heading font-bold text-text-primary mb-4 ${asPageHeading ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}
          >
            {heading}
          </Heading>
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

        {showAllLink && items.length < FAQS.length && (
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary/40 text-text-primary font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              View all {FAQS.length} FAQs
              <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
