import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle } from 'lucide-react'
import { SERVICES_DATA, serviceLabel } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Service Terms',
  description:
    'TriventX service terms, including exactly what our unlimited revision policy covers, what is quoted separately, and how turnaround times are measured.',
  alternates: { canonical: '/terms' },
}

const covered = [
  'Corrections requested by the AHJ or utility reviewer on a permit package we prepared',
  'Errors or omissions in our drawings or calculations, on any service, at any time',
  'Like-for-like equipment swaps made before the permit is approved, such as a different module or inverter model in the same system',
  'Minor layout changes made before the permit is approved, on the same roof and with the same system type',
]

const notCovered = [
  'A redesign that changes the system type or scope, such as adding battery storage or moving from roof mount to ground mount',
  'A different site address or a new project',
  'Changes requested after the permit is approved, which are handled as as-built drawings or a new permit revision',
  'New PE review or re-stamping needed because of a change you requested',
  'Third-party fees, such as AHJ or utility application fees',
]

const heading = 'font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4 scroll-mt-28'
const paragraph = 'text-text-secondary leading-relaxed mb-4'

export default function TermsPage() {
  const timedServices = SERVICES_DATA.filter((s) => s.tat)

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Service Terms
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            How We Work With You
          </h1>
          <p className="text-sm text-text-secondary mb-12">Last updated: November 4, 2026</p>

          <h2 id="revisions" className={heading}>Unlimited Revision Policy</h2>
          <p className={paragraph}>
            Solar permit design packages include unlimited revisions at no extra charge until the
            permit is approved. There is no cap on the number of revision rounds. Here is exactly
            what that means.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 my-8">
            <div className="card-base p-6">
              <h3 className="font-heading font-bold text-lg text-text-primary mb-4">Included at no charge</h3>
              <ul className="space-y-3">
                {covered.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-base p-6">
              <h3 className="font-heading font-bold text-lg text-text-primary mb-4">Quoted separately</h3>
              <ul className="space-y-3">
                {notCovered.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="font-heading font-bold text-lg text-text-primary mb-2">When the policy ends</h3>
          <p className={paragraph}>
            Revision coverage for a project ends when the AHJ approves the permit or when the
            project is cancelled.
          </p>
          <h3 className="font-heading font-bold text-lg text-text-primary mb-2">How to request a revision</h3>
          <p className={paragraph}>
            Send us the AHJ or utility comments, or describe the change you need. Revisions are
            returned within the standard turnaround of the original service, counted from when we
            have everything needed to make the change.
          </p>
          <h3 className="font-heading font-bold text-lg text-text-primary mb-2">Other services</h3>
          <p className={`${paragraph} mb-12`}>
            On services other than permit design, such as sales proposals, surveys, interconnection
            applications, and as-built drawings, we correct our own errors at no charge. Changes
            caused by new information or a change in scope are quoted before we start.
          </p>

          <h2 id="turnaround" className={heading}>Turnaround Times</h2>
          <p className={paragraph}>
            The turnaround clock starts once we have confirmed receipt of all the project
            information we need. Standard turnaround times are:
          </p>
          <ul className="card-base divide-y divide-border mb-4">
            {timedServices.map((service) => (
              <li key={service.slug} className="flex items-center justify-between gap-4 px-5 py-3 text-sm">
                <span className="text-text-primary font-medium">{serviceLabel(service)}</span>
                <span className="text-text-secondary font-semibold shrink-0">{service.tat}</span>
              </li>
            ))}
          </ul>
          <p className={`${paragraph} mb-12`}>
            Other services are scheduled individually, and your quote will state the delivery date.
          </p>

          <h2 id="information" className={heading}>Project Information</h2>
          <p className={`${paragraph} mb-12`}>
            Our work relies on the site, equipment, and utility information you provide. Tell us
            promptly if anything changes. Final approval decisions rest with the AHJ and the
            utility, and we cannot guarantee their outcome or timing.
          </p>

          <h2 id="questions" className={heading}>Questions</h2>
          <p className={paragraph}>
            If you are unsure whether a change is covered, ask us before work starts and we will
            confirm in writing.{' '}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              Contact our team
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
