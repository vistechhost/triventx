import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ClipboardCheck, Clock, FileCheck2, Landmark, PlugZap, Stamp } from 'lucide-react'
import { CTASection } from '@/components/home/CTASection'
import { FAQSection } from '@/components/home/FAQSection'
import { ProcessTimeline } from '@/components/home/ProcessTimeline'
import { SampleDeliverables } from '@/components/home/SampleDeliverables'
import { faqsById } from '@/lib/data/faqs'
import { SOLAR_SERVICES, serviceLabel } from '@/lib/data/services'
import { SITE_CONFIG } from '@/lib/data/site-config'

export const metadata: Metadata = {
  title: 'Solar Design & Engineering for US Installers',
  description:
    'Solar design and engineering for US installers, EPCs, and contractors: AHJ-ready permit plan sets, NEC 2020/2023 compliance, SolarAPP+ submissions, PE stamping, utility interconnection, and PTO support.',
  alternates: { canonical: '/us' },
}

const usFocus = [
  {
    icon: Landmark,
    title: 'Built for Your AHJ',
    description: 'Local building and fire codes, including fire-pathway setbacks.',
  },
  {
    icon: FileCheck2,
    title: 'NEC 2020/2023 Compliant',
    description: 'Your adopted NEC edition, noted on every set.',
  },
  {
    icon: ClipboardCheck,
    title: 'SolarAPP+ Submissions',
    description: 'Prepared and managed where your AHJ supports it.',
  },
  {
    icon: Stamp,
    title: 'PE Review & Stamping',
    description: 'Licensed structural and electrical PEs, stamped where required.',
  },
  {
    icon: PlugZap,
    title: 'Utility Interconnection & PTO',
    description: 'Applications and utility documents, through to PTO.',
  },
  {
    icon: Clock,
    title: 'US Business Hours',
    description: `${SITE_CONFIG.hours[0].days}, ${SITE_CONFIG.hours[0].time}. ${SITE_CONFIG.hours[1].days}, ${SITE_CONFIG.hours[1].time}.`,
  },
]

export default function UnitedStatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Solar Design & Engineering Services',
            description: metadata.description,
            serviceType: 'Solar Engineering Services',
            areaServed: { '@type': 'Country', name: 'United States' },
            provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0A0E1A] pt-28 md:pt-40 pb-20 md:pb-28" aria-labelledby="us-heading">
        <Image
          src="/images/pe-review-rooftop-plans.jpg"
          alt="Engineer reviewing solar permit drawings beside a rooftop array in a US city"
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A0E1A]/95 via-[#0A0E1A]/80 to-[#0A0E1A]/40" aria-hidden="true" />
        <div className="container-xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-white rounded-full px-4 py-1.5 mb-6 bg-white/10 border border-white/20">
              For US Solar Installers, EPCs &amp; Contractors
            </span>
            <h1 id="us-heading" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Solar Design &amp; Engineering Built for{' '}
              <span className="text-primary-light">US Permitting</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              AHJ-ready plan sets, PE stamps, and interconnection — proposal to PTO with fewer
              delays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Get a US Project Quote
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="#us-services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-all duration-200"
              >
                See US Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why it works for the US */}
      <section className="section-padding bg-background" aria-labelledby="us-focus-heading">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 id="us-focus-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Engineered Around US Requirements
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Every AHJ and utility has its own rules. We build to them.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {usFocus.map((item) => (
              <div key={item.title} className="card-base p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="us-services" className="section-padding bg-background-subtle scroll-mt-20" aria-labelledby="us-services-heading">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 id="us-services-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Services for US Solar Projects
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              One service or the full project — proposal to PTO.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {SOLAR_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start gap-4 card-base p-5 hover:border-primary/40 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span className="flex-1 min-w-0">
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                    <span className="font-heading font-bold text-text-primary group-hover:text-primary transition-colors">
                      {serviceLabel(service)}
                    </span>
                    {service.tat && <span className="text-xs font-semibold text-accent">{service.tat} TAT</span>}
                  </span>
                  <span className="block text-sm text-text-secondary leading-relaxed">{service.shortDescription}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SampleDeliverables />
      <ProcessTimeline />
      <FAQSection
        heading="Questions From US Installers"
        items={faqsById(['nec', 'pe-stamps', 'interconnection', 'turnaround', 'revisions', 'response-time'])}
      />
      <CTASection />
    </>
  )
}
