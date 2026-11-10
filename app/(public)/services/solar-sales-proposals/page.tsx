import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Palette, Satellite, Send, Upload, PenTool } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { ServiceInteractive } from '@/components/services/ServiceInteractive'
import { SERVICES_DATA } from '@/lib/data/services'
import { SITE_CONFIG } from '@/lib/data/site-config'

const SLUG = 'solar-sales-proposals'
const service = SERVICES_DATA.find((s) => s.slug === SLUG)!

export const metadata: Metadata = {
  title: 'Solar Sales Proposals That Help You Close',
  description:
    'Premium, white-label solar sales proposals built on LiDAR data, production modeling, and savings analysis, and delivered within 2 hours so your sales team keeps its momentum.',
  alternates: { canonical: `/services/${SLUG}` },
}

const highlights = [
  { icon: Clock, title: `${service.tat} delivery`, description: 'From confirmed project details to a finished proposal.' },
  { icon: Palette, title: 'Your brand', description: 'Your logo and colors, so every proposal reads as yours.' },
  { icon: Satellite, title: 'Real site data', description: 'LiDAR, satellite imagery, and production modeling.' },
]

const sampleCallouts = [
  { title: 'Financial Summary', description: 'Cost, savings, and payback on one page.' },
  { title: 'ROI Chart', description: 'How the investment grows over time.' },
  { title: 'Roof Layout', description: 'The array on the customer’s own home.' },
  { title: 'Energy Offset & Savings Report', description: 'Usage covered and long-term savings.' },
]

const steps = [
  { icon: Upload, title: 'Send the project', description: 'Address, utility bill, and preferred equipment.' },
  { icon: PenTool, title: 'We model and design', description: 'Layout, production model, and savings.' },
  { icon: Send, title: 'Your rep presents', description: `A branded proposal is delivered within ${service.tat.toLowerCase()}, ready for the customer.` },
]

const faqs = [
  { question: 'Can proposals carry our branding?', answer: 'Yes. Proposals are delivered with your company logo and colors.' },
  { question: 'What do you need to get started?', answer: 'Site address, a utility bill or usage data, and your preferred equipment and financing.' },
  { question: 'Which incentives are included?', answer: 'Federal, state, and utility programs the customer is eligible for.' },
  { question: 'Can you compare financing options?', answer: 'Yes — cash, loan, and other options side by side.' },
]

export default function SolarSalesProposalsPage() {
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
            provider: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
            serviceType: 'Solar Engineering Services',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A0E1A] pt-28 md:pt-36 pb-20" aria-labelledby="proposal-heading">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 20% 30%, rgba(255,138,0,0.18) 0%, transparent 55%), radial-gradient(ellipse at 90% 80%, rgba(0,102,255,0.18) 0%, transparent 50%)' }}
          aria-hidden="true"
        />
        <div className="container-xl relative z-10 px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">{service.title}</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-light rounded-full px-4 py-1.5 mb-6 bg-primary/15 border border-primary/30">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {service.tat} Turnaround
              </span>
              <h1 id="proposal-heading" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Solar Sales Proposals That{' '}
                <span className="text-primary-light">Help You Close</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Clear, data-driven proposals that homeowners understand — and reps close.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  Request a Proposal
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="#sample"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-200"
                >
                  See a Sample
                </Link>
              </div>
            </div>
            <div className="relative aspect-[3/2] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/solar-proposal-tablet.jpg"
                alt="Solar consultant presenting a branded proposal to a homeowner on a tablet"
                fill
                preload
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-b border-border" aria-label="Service highlights">
        <div className="container-xl grid sm:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-bold text-lg text-text-primary mb-1">{item.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* US-style sample */}
      <section id="sample" className="section-padding bg-background-subtle scroll-mt-20" aria-labelledby="sample-heading">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
              style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
            >
              Visual Sample
            </span>
            <h2 id="sample-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              A US-Style Proposal Your Customers Understand
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Everything a homeowner needs to say yes. Figures are for illustration only.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14">
            <a
              href="/images/solar-proposal-sample.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[847/478] rounded-2xl overflow-hidden shadow-xl"
              aria-label="View the sample solar proposal full size"
            >
              <Image
                src="/images/solar-proposal-sample.jpg"
                alt="Sample solar proposal showing a financial summary, ROI chart, roof layout, energy offset, and savings report"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </a>
            <ul className="space-y-5">
              {sampleCallouts.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-heading font-bold text-lg text-text-primary">{item.title}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ServiceInteractive slug={SLUG} />
        </div>
      </section>

      {/* Everything included */}
      <section className="section-padding bg-background" aria-labelledby="included-heading">
        <div className="container-xl">
          <h2 id="included-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
            Inside Every Proposal
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 bg-background-subtle rounded-xl border border-border">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-background-subtle" aria-labelledby="steps-heading">
        <div className="container-xl">
          <h2 id="steps-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
            How It Works
          </h2>
          <ol className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="card-base p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-wide">Step {i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background" aria-labelledby="proposal-faq-heading">
        <div className="container-xl">
          <h2 id="proposal-faq-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
            Proposal Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <article key={faq.question} className="card-base p-6">
                <h3 className="font-semibold text-text-primary text-base mb-3">{faq.question}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="section-padding bg-[#0A0E1A] scroll-mt-20" aria-labelledby="proposal-quote-heading">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 id="proposal-quote-heading" className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your First Proposal Started
            </h2>
            <p className="text-slate-400 text-lg">
              Tell us about your project and attach anything you already have.
            </p>
          </div>
          <div className="bg-surface rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl">
            <LeadForm defaultService={SLUG} />
          </div>
        </div>
      </section>
    </>
  )
}
