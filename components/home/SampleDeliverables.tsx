import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const samples = [
  {
    src: '/images/solar-proposal-sample.jpg',
    alt: 'Sample US-style solar sales proposal with financial summary and savings report',
    title: 'Sales Proposal',
    description: 'Financial summary, ROI, energy offset, and long-term savings.',
    href: '/services/solar-sales-proposals',
    fit: 'object-cover',
  },
  {
    src: '/images/permit-site-plan.png',
    alt: 'Sample PV site plan drawing showing roof sections, fire pathways, and setbacks',
    title: 'Site Plan',
    description: 'Module layout, fire pathways, setbacks, and equipment locations.',
    href: '/services/solar-permit-design',
    fit: 'object-contain',
  },
  {
    src: '/images/permit-three-line-diagram.png',
    alt: 'Sample three-line electrical diagram with conductor schedule',
    title: 'Three-Line Diagram',
    description: 'Electrical design with conductor, conduit, and equipment schedules.',
    href: '/services/solar-permit-design',
    fit: 'object-contain',
  },
  {
    src: '/images/permit-attachment-string-layout.png',
    alt: 'Sample attachment and string layout drawing with point-load table',
    title: 'Attachment & String Layout',
    description: 'Attachment points, circuit layout, and structural point loads.',
    href: '/services/solar-permit-design',
    fit: 'object-contain',
  },
]

export function SampleDeliverables() {
  return (
    <section className="section-padding bg-background" aria-labelledby="samples-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Sample Deliverables
          </span>
          <h2 id="samples-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            See What You Get
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Representative samples of the proposals and permit drawings we deliver. Project
            identifiers have been removed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {samples.map((sample) => (
            <Link key={sample.title} href={sample.href} className="group card-base overflow-hidden flex flex-col">
              {/* Drawings keep a white sheet in both themes */}
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={sample.src}
                  alt={sample.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className={sample.fit}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {sample.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1">{sample.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View service
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
