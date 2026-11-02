import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { WhoWeAre } from '@/components/home/WhoWeAre'
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
    'TriventX delivers accurate, code-compliant solar PV design and engineering — sales proposals, site assessments, AHJ-ready permit plan sets, PE review & stamping, interconnection, PTO support, and as-built drawings.',
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
            description: 'Solar PV design and engineering services including sales proposals, permit plan sets, PE review & stamping, interconnection, PTO support, and as-built drawings.',
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
      <WhoWeAre />
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
