import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ArrowRight, Clock } from 'lucide-react'
import { SERVICES_DATA } from '@/lib/data/services'
import { ServiceInteractive } from '@/components/services/ServiceInteractive'
import { ServiceLifecycle } from '@/components/services/ServiceLifecycle'
import { CTASection } from '@/components/home/CTASection'

interface Props {
  params: Promise<{ slug: string }>
}

// Features written as "Title – detail" render with a bold title
function Feature({ text }: { text: string }) {
  const [title, detail] = text.split(' – ')
  if (!detail) return <>{text}</>
  return (
    <>
      <strong className="font-semibold text-text-primary">{title}</strong> – {detail}
    </>
  )
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES_DATA.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${slug}` },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES_DATA.find((s) => s.slug === slug)
  if (!service) notFound()

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.shortDescription,
            provider: {
              '@type': 'Organization',
              name: 'TriventX Energy LLP',
              url: 'https://triventxenergy.com',
            },
            serviceType: 'Solar Engineering Services',
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 bg-white overflow-hidden relative" aria-labelledby="service-hero-heading">
        <div className="bg-hero-mesh absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-text-secondary">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-text-primary font-medium" aria-current="page">{service.title}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Content */}
            <div>
              {service.tat && (
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm text-accent border border-accent/20"
                    style={{ backgroundColor: 'rgba(0, 200, 150, 0.1)' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {service.tat} Turnaround
                  </span>
                </div>
              )}

              <h1 id="service-hero-heading" className="font-heading text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {service.longDescription.split('\n\n')[0]}
              </p>

              <ul className="space-y-3 mb-10" aria-label="Service features">
                {service.features.slice(0, 6).map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-text-secondary text-sm"><Feature text={feature} /></span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: 'var(--shadow-glow-primary)' }}
                >
                  Order This Service
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-background-subtle text-text-primary font-semibold px-6 py-4 rounded-xl border border-border transition-all duration-200"
                >
                  ← All Services
                </Link>
              </div>
            </div>

            {/* Right: Interactive Client Component */}
            <div>
              <ServiceInteractive slug={slug} fallback={<ServiceLifecycle currentSlug={slug} />} />
            </div>
          </div>
        </div>
      </section>

      {/* Full description */}
      <section className="section-padding bg-background-subtle" aria-labelledby="service-desc-heading">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 id="service-desc-heading" className="font-heading text-3xl font-bold text-text-primary mb-8">
                About This Service
              </h2>
              {service.longDescription.split('\n\n').map((para, i) => (
                <p key={i} className="text-text-secondary leading-relaxed text-lg mb-5">
                  {para}
                </p>
              ))}
            </div>
            {service.heroImageUrl && (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden lg:sticky lg:top-28" style={{ boxShadow: 'var(--shadow-card)' }}>
                <Image
                  src={service.heroImageUrl}
                  alt={`${service.title} — residential solar project`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full features */}
      <section className="section-padding bg-white" aria-labelledby="features-heading">
        <div className="container-xl">
          <h2 id="features-heading" className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">
            Everything Included
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 bg-background-subtle rounded-xl border border-border hover:border-accent/30 hover:bg-accent/5 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-text-secondary"><Feature text={feature} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan deliverables */}
      {service.planIncludes && (
        <section className="section-padding bg-background-subtle" aria-labelledby="plan-heading">
          <div className="container-xl">
            <h2 id="plan-heading" className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">
              What&apos;s Included in the Plan
            </h2>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {service.planIncludes.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border"
                >
                  <span className="w-9 h-9 rounded-xl bg-primary text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-text-primary font-medium leading-snug pt-1.5">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Project gallery */}
      {service.gallery && (
        <section className="section-padding bg-background-subtle" aria-labelledby="gallery-heading">
          <div className="container-xl">
            <div className="text-center mb-10">
              <h2 id="gallery-heading" className="font-heading text-3xl font-bold text-text-primary mb-4">
                As-Built Solar Projects — Residential
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                Completed residential rooftop installations — the field conditions our as-built
                drawings capture for closeout, inspection, and future maintenance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.gallery.map((photo) => (
                <figure key={photo.src} className="card-base overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-medium text-text-primary">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section
        className={`section-padding ${service.planIncludes || service.gallery ? 'bg-white' : 'bg-background-subtle'}`}
        aria-labelledby="related-heading"
      >
        <div className="container-xl">
          <h2 id="related-heading" className="font-heading text-2xl font-bold text-text-primary mb-8">
            Other Services You May Need
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group bg-white rounded-2xl border border-border p-5 hover:border-primary/30 transition-all"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                {svc.tat && <p className="text-xs font-semibold text-accent mb-2">{svc.tat} TAT</p>}
                <h3 className="font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2">{svc.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
