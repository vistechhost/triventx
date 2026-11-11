import type { Metadata } from 'next'
import { FAQSection } from '@/components/home/FAQSection'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers on turnaround times, NEC editions, revisions, PE stamps, interconnection, pricing, and working with TriventX in the US, Canada, and Europe.',
  alternates: { canonical: '/faq' },
}

export default function FAQPage() {
  return (
    <div className="pt-16 md:pt-20">
      <FAQSection asPageHeading />
      <CTASection />
    </div>
  )
}
