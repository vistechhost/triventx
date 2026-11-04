import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ClipboardCheck, Mail, MessageSquare, Search } from 'lucide-react'
import { ResponseTimes } from '@/components/contact/ResponseTimes'
import { FileUploadNotice } from './FileUploadNotice'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'We have received your project request and will respond shortly.',
  robots: { index: false, follow: false },
}

const nextSteps = [
  {
    icon: Search,
    title: 'We review your request',
    description: 'An engineer checks your service, project location, and any files you attached.',
  },
  {
    icon: MessageSquare,
    title: 'We reply with next steps',
    description: 'You hear from us by email or phone, with any questions we need answered.',
  },
  {
    icon: ClipboardCheck,
    title: 'You get a quote and timeline',
    description: 'Once the project details are confirmed, we send a clear quote and delivery date.',
  },
]

export default function ThankYouPage() {
  return (
    <div className="pt-24 md:pt-28 bg-background-subtle">
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" aria-hidden="true" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Thank You — We Have Your Request
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Your project details are with our engineering team. Here is what happens next.
            </p>
          </div>

          <Suspense fallback={null}>
            <FileUploadNotice />
          </Suspense>

          <ol className="grid md:grid-cols-3 gap-4 mb-12">
            {nextSteps.map((step, i) => (
              <li key={step.title} className="card-base p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-wide">Step {i + 1}</span>
                </div>
                <h2 className="font-heading font-bold text-lg text-text-primary mb-2">{step.title}</h2>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>

          <h2 className="font-heading font-bold text-2xl text-text-primary mb-5 text-center">
            When You Will Hear From Us
          </h2>
          <ResponseTimes />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 w-full sm:w-auto"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-surface text-text-primary font-semibold px-8 py-4 rounded-xl border border-border hover:border-primary/40 transition-all w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              Submit Another Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
