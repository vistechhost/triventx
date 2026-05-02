import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { StatsCounter } from '@/components/home/StatsCounter'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { ProcessTimeline } from '@/components/home/ProcessTimeline'
import { TechStack } from '@/components/home/TechStack'
import { IndustriesServed } from '@/components/home/IndustriesServed'
import { CaseStudies } from '@/components/home/CaseStudies'
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel'
import { FAQSection } from '@/components/home/FAQSection'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Solar Engineering Services | TriventX Energy LLP',
  description:
    'TriventX Energy LLP delivers AHJ-compliant solar permit designs, engineering stamps, sales proposals, and as-built drawings. 6-hour TAT. All 50 US states.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD LocalBusiness schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'TriventX Energy LLP',
            description: 'Solar engineering services including permit design, PE stamps, proposals, and as-built drawings.',
            url: 'https://triventxenergy.com',
            telephone: '+1-888-247-6535',
            email: 'hello@triventxenergy.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1234 Innovation Drive, Suite 400',
              addressLocality: 'Austin',
              addressRegion: 'TX',
              postalCode: '78701',
              addressCountry: 'US',
            },
            sameAs: [
              'https://linkedin.com/company/triventxenergy',
              'https://twitter.com/triventxenergy',
            ],
            openingHours: 'Mo-Fr 08:00-22:00',
            priceRange: '$$',
          }),
        }}
      />
      <Hero />
      <TrustBar />
      <StatsCounter />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessTimeline />
      <TechStack />
      <IndustriesServed />
      <CaseStudies />
      <TestimonialsCarousel />
      <FAQSection />
      <CTASection />
    </>
  )
}
