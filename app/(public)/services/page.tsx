import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Check } from 'lucide-react'
import { SERVICES_DATA } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Solar Engineering Services',
  description:
    'End-to-end solar engineering services: sales proposals, site assessments, AHJ-ready permit plan sets, PE review & stamping, permitting, interconnection, as-built drawings, and PTO support.',
}

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-hero-mesh pointer-events-none" aria-hidden="true" />
        <div className="container-xl relative z-10 text-center">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Our Services
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Our Core Solar Engineering Services
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-4">
            At TriventX, we deliver comprehensive, end-to-end solar engineering, design, permitting,
            and back-office support solutions tailored to the needs of solar installers, EPC
            companies, contractors, and homeowners.
          </p>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From the initial customer proposal through system design, permitting, interconnection,
            installation documentation, and final utility approval, our experienced engineering
            team provides reliable support across the entire solar project lifecycle.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-background-subtle" aria-labelledby="services-list-heading">
        <div className="container-xl">
          <h2 id="services-list-heading" className="sr-only">All Services</h2>
          <div className="space-y-6">
            {SERVICES_DATA.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-white rounded-2xl border border-border p-6 md:p-8 hover:shadow-[0_8px_48px_rgba(10,14,26,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                aria-label={`View ${service.title} service`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-heading font-bold text-text-secondary text-2xl">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {service.tat && (
                        <span
                          className="flex items-center gap-1.5 text-xs font-bold text-accent px-3 py-1 rounded-full"
                          style={{ backgroundColor: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.2)' }}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          {service.tat} TAT
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-text-primary mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-5 max-w-2xl">
                      {service.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((f) => (
                        <span
                          key={f}
                          className="flex items-center gap-1.5 text-xs font-medium text-text-secondary bg-background-subtle border border-border px-3 py-1.5 rounded-full"
                        >
                          <Check className="w-3 h-3 text-accent" />
                          {f.split(' – ')[0]}
                        </span>
                      ))}
                      {service.features.length > 4 && (
                        <span className="text-xs font-medium text-primary bg-primary/5 border border-primary/20 px-3 py-1.5 rounded-full">
                          +{service.features.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="shrink-0 self-center">
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      View Service
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-xl max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Our team will review your project requirements and recommend the right combination of
            services to keep your installation timeline on track.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-glow-primary hover:-translate-y-0.5"
          >
            Talk to an Engineer
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
