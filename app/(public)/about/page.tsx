import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
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
    description: 'Every drawing built to your AHJ’s rules.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'Every step measured against our turnaround targets.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Shield,
    title: 'Compliance',
    description: 'Checked against NEC, NESC, ASCE, and local codes.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'Your embedded engineering department.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

const teams = [
  {
    icon: PenTool,
    title: 'Design Engineers',
    description: 'Layouts, site plans, SLDs, 3LDs, and as-builts.',
  },
  {
    icon: Stamp,
    title: 'Engineering Reviewers',
    description: 'Structural and electrical checks, plus PE stamp coordination.',
  },
  {
    icon: ClipboardCheck,
    title: 'Permitting & Utility Coordinators',
    description: 'Permits, SolarAPP+, interconnection, and PTO.',
  },
  {
    icon: Headset,
    title: 'Project & Account Managers',
    description: 'One point of contact for every project.',
  },
]

const highlights = [
  'Clients across the United States, Canada, and Europe',
  'Built to AHJ, NEC, building, fire, and utility rules',
  'Deep residential solar PV expertise',
  'Proposals, permit sets, PE support, and as-builts',
  'Competitive pricing and fast turnaround',
  'Faster approvals and fewer revisions',
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
              Accurate, code-compliant solar PV design and engineering for installers, EPCs, and
              contractors.
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
              <p className="text-text-secondary leading-relaxed text-lg mb-6">
                Engineers who know solar permitting, delivering precise documentation you can build on.
              </p>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-primary font-medium">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
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
                TriventX — Engineering smarter. Delivering faster.
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
              Solar design, review, permitting, and project management — under one roof.
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
            The editions your jurisdiction adopted, plus local amendments.
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
            United States, Canada, and Europe.
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
