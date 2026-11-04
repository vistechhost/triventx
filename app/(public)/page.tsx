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
import { SampleDeliverables } from '@/components/home/SampleDeliverables'
import { CaseStudies } from '@/components/home/CaseStudies'
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel'
import { FAQSection } from '@/components/home/FAQSection'
import { CTASection } from '@/components/home/CTASection'
import { SITE_CONFIG } from '@/lib/data/site-config'

export const metadata: Metadata = {
  title: { absolute: 'Solar Engineering Services | TriventX Energy LLP' },
  description:
    'TriventX delivers accurate, code-compliant solar PV design and engineering — sales proposals, site assessments, AHJ-ready permit plan sets, PE review & stamping, interconnection, PTO support, and as-built drawings — plus wind energy and telecom engineering.',
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
            name: SITE_CONFIG.name,
            description: 'Solar PV design and engineering services including sales proposals, permit plan sets, PE review & stamping, interconnection, PTO support, and as-built drawings, plus wind energy and telecom engineering.',
            url: SITE_CONFIG.url,
            ...(SITE_CONFIG.phone && { telephone: SITE_CONFIG.phone }),
            ...(SITE_CONFIG.email && { email: SITE_CONFIG.email }),
            ...(SITE_CONFIG.address && {
              address: {
                '@type': 'PostalAddress',
                streetAddress: SITE_CONFIG.address.street,
                addressLocality: SITE_CONFIG.address.city,
                addressRegion: SITE_CONFIG.address.region,
                postalCode: SITE_CONFIG.address.postalCode,
                addressCountry: SITE_CONFIG.address.country,
              },
            }),
            sameAs: [SITE_CONFIG.social.linkedin, SITE_CONFIG.social.twitter],
            openingHours: SITE_CONFIG.openingHours,
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
      <SampleDeliverables />
      <CaseStudies />
      <TestimonialsCarousel />
      <FAQSection />
      <CTASection />
    </>
  )
}
