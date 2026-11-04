import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ClipboardCheck,
  ExternalLink,
  Globe,
  Handshake,
  Headset,
  PenTool,
  Shield,
  Stamp,
  Target,
  Zap,
} from 'lucide-react'
import { CTASection } from '@/components/home/CTASection'
import { CERTIFICATIONS, LEADERSHIP, OFFICES } from '@/lib/data/site-config'
import { addressLines } from '@/lib/utils/contact'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'TriventX provides Solar PV Installation Design and Engineering Drawing Services, plus wind energy and telecom engineering, for installers, EPC companies, and contractors across the United States, Canada, and Europe.',
}

const values = [
  {
    icon: Target,
    title: 'Precision',
    description:
      'Every drawing is engineered to AHJ-specific requirements. We maintain a living database of local code adoptions and submission standards across all 50 states.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Zap,
    title: 'Speed',
    description:
      'Our process is optimized to reduce idle time. From project receipt to delivery, every step is measured and benchmarked against our industry-leading turnaround targets.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Shield,
    title: 'Compliance',
    description:
      'Code compliance is not a feature — it\'s the floor. Every deliverable is reviewed against current NEC, NESC, ASCE, and jurisdiction-specific requirements.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      'We function as an embedded engineering department for our clients. Your account manager understands your business, your markets, and your AHJ relationships.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

const teams = [
  {
    icon: PenTool,
    title: 'Design Engineers',
    description:
      'Prepare sales layouts, site plans, single-line and three-line diagrams, and as-built drawings to each AHJ and utility standard.',
  },
  {
    icon: Stamp,
    title: 'Engineering Reviewers',
    description:
      'Check structural and electrical calculations and coordinate with licensed professional engineers when a stamped submission is required.',
  },
  {
    icon: ClipboardCheck,
    title: 'Permitting & Utility Coordinators',
    description:
      'Manage permit applications, SolarAPP+ submissions, AHJ comments, interconnection applications, and PTO follow-through.',
  },
  {
    icon: Headset,
    title: 'Project & Account Managers',
    description:
      'Give you one point of contact who knows your markets, tracks every project, and keeps turnaround on schedule.',
  },
]

// Codes the work is designed to. These are standards we follow, not memberships or certifications held.
const standards = [
  { name: 'NEC (NFPA 70)', full: 'National Electrical Code' },
  { name: 'IBC / IRC', full: 'International Building and Residential Codes' },
  { name: 'IFC', full: 'International Fire Code, including rooftop PV pathways' },
  { name: 'ASCE 7', full: 'Minimum Design Loads for Buildings and Other Structures' },
  { name: 'IEEE 1547', full: 'Interconnection of Distributed Energy Resources' },
  { name: 'UL 1741', full: 'Inverters and Interconnection Equipment' },
]

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 bg-hero-mesh pointer-events-none" aria-hidden="true" />
        <div className="container-xl relative z-10">
          <div className="max-w-4xl">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
              style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
            >
              About TriventX
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Built by Engineers,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #FF8A00, var(--color-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                for Solar Installers
              </span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              TriventX is a leading provider of Solar PV Installation Design and Engineering Drawing
              Services, specializing in supporting solar installers, EPC companies, and contractors
              across the United States with accurate, efficient, and code-compliant design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background-subtle" aria-labelledby="story-heading">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 id="story-heading" className="font-heading text-3xl font-bold text-text-primary mb-8">
                Who We Are
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
                <p>
                  With extensive experience in the engineering and design industry, TriventX has
                  established a strong track record of delivering high-quality, technically precise,
                  and reliable engineering documentation to clients and industry partners across the
                  United States, Canada, and Europe. Our services are designed to optimize project
                  efficiency while maintaining competitive pricing and rapid turnaround times.
                </p>
                <p>
                  Our solar designs are developed in strict accordance with Authority Having
                  Jurisdiction (AHJ) requirements, applicable building and fire codes, the National
                  Electrical Code (NEC), and utility interconnection standards. Our experienced team
                  possesses in-depth expertise in residential solar PV system design, with a
                  comprehensive understanding of permitting requirements, utility guidelines, and
                  jurisdiction-specific compliance standards.
                </p>
                <p>
                  TriventX offers a comprehensive portfolio of solar design and engineering services,
                  including sales proposal designs, permit-ready plan sets, utility interconnection
                  documentation, professional engineering support, construction documentation, and
                  as-built drawings.
                </p>
                <p>
                  By combining technical expertise, regulatory knowledge, streamlined workflows, and a
                  commitment to quality, TriventX enables solar professionals to accelerate project
                  approvals, minimize design revisions, and execute installations with greater
                  confidence and precision.
                </p>
              </div>
            </div>
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/residential-solar-home.jpg"
                  alt="Two-story residential home with a rooftop solar PV system"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/solar-installation-crew.jpg"
                  alt="Installation crew mounting solar panels on a residential roof"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="font-heading text-lg font-bold text-text-primary">
                TriventX — Engineering smarter. Delivering faster. Helping solar businesses scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background" aria-labelledby="values-heading">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
              style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
            >
              What We Stand For
            </span>
            <h2 id="values-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-base p-7 text-center group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 ${v.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <v.icon className={`w-7 h-7 ${v.color}`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-3">{v.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team description */}
      <section className="section-padding bg-background-subtle" aria-labelledby="team-heading">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
              style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
            >
              Our Team
            </span>
            <h2 id="team-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              The Team Behind TriventX
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto text-lg">
              TriventX operates as an extension of your business. Our experienced team combines deep
              expertise in solar PV design with a working knowledge of permitting requirements,
              utility guidelines, and jurisdiction-specific compliance standards.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team) => (
              <div key={team.title} className="card-base p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <team.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{team.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{team.description}</p>
              </div>
            ))}
          </div>

          {LEADERSHIP.length > 0 && (
            <div className="mt-16">
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-8 text-center">Leadership</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {LEADERSHIP.map((member) => (
                  <div key={member.name} className="card-base p-6 text-center">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                      {member.photoUrl ? (
                        <Image src={member.photoUrl} alt={member.name} fill sizes="80px" className="object-cover" />
                      ) : (
                        <span aria-hidden="true">
                          {member.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
                        </span>
                      )}
                    </div>
                    <h4 className="font-heading font-bold text-lg text-text-primary mb-1">{member.name}</h4>
                    <p className="text-sm font-semibold text-primary mb-3">{member.title}</p>
                    <p className="text-xs text-text-secondary leading-relaxed">{member.bio}</p>
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-text-secondary hover:text-primary transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        LinkedIn Profile
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Standards */}
      <section className="section-padding bg-background" aria-labelledby="standards-heading">
        <div className="mx-auto max-w-5xl">
          <h2 id="standards-heading" className="font-heading text-3xl font-bold text-text-primary mb-4 text-center">
            Codes &amp; Standards We Design To
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-10">
            We apply the editions adopted by each jurisdiction, along with local amendments and
            utility requirements.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {standards.map((standard) => (
              <div key={standard.name} className="p-5 rounded-2xl border border-border">
                <p className="font-bold text-text-primary text-sm">{standard.name}</p>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">{standard.full}</p>
              </div>
            ))}
          </div>

          {CERTIFICATIONS.length > 0 && (
            <div className="mt-14">
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-8 text-center">
                Certifications &amp; Memberships
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {CERTIFICATIONS.map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all text-center"
                  >
                    <p className="font-bold text-text-primary text-sm">{cert.name}</p>
                    <p className="text-xs text-text-secondary mt-1 leading-tight">{cert.fullName}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Where we work */}
      <section className="section-padding bg-background-subtle" aria-labelledby="locations-heading">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="locations-heading" className="font-heading text-3xl font-bold text-text-primary mb-4">
            {OFFICES.length > 0 ? 'Our Offices' : 'Where We Work'}
          </h2>
          <p className="text-text-secondary mb-6">
            Supporting clients and industry partners across the United States, Canada, and Europe.
          </p>
          <Link
            href="/us"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
          >
            Services for US customers
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          {OFFICES.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {OFFICES.map((office) => (
                <div key={office.city} className="card-base p-5 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <span className="font-bold text-text-primary">{office.city}</span>
                  </div>
                  <p className="text-sm text-text-secondary">{office.role}</p>
                  {office.address && (
                    <address className="text-sm text-text-secondary not-italic mt-2">
                      {addressLines(office.address).map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </address>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
