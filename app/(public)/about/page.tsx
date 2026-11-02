import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Award, Globe, Users, Target, Zap, Shield, Handshake } from 'lucide-react'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'TriventX provides Solar PV Installation Design and Engineering Drawing Services for solar installers, EPC companies, and contractors across the United States, Canada, and Europe.',
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

const team = [
  {
    name: 'Dr. Ananya Krishnamurthy',
    title: 'Chief Executive Officer',
    bio: 'Former VP of Engineering at a national solar EPC. 15 years in renewable energy infrastructure and project finance.',
    initials: 'AK',
    color: 'from-orange-400 to-amber-500',
  },
  {
    name: 'Marcus Chen, P.E.',
    title: 'Head of Engineering',
    bio: 'Licensed electrical PE in 32 states. Led engineering teams at SunPower and Nextracker before co-founding TriventX.',
    initials: 'MC',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Sophia Reyes',
    title: 'VP of Operations',
    bio: 'Former operations director at a 500-installer network. Built TriventX\'s quality management system from the ground up.',
    initials: 'SR',
    color: 'from-green-400 to-teal-500',
  },
  {
    name: 'James Okafor, P.E.',
    title: 'Lead Structural Engineer',
    bio: 'Structural PE specializing in ground-mount and carport racking systems. Published researcher in solar structural loading.',
    initials: 'JO',
    color: 'from-purple-400 to-violet-500',
  },
]

const certifications = [
  { name: 'NABCEP', full: 'North American Board of Certified Energy Practitioners', abbr: 'NA' },
  { name: 'IEEE', full: 'Institute of Electrical and Electronics Engineers', abbr: 'IE' },
  { name: 'SEIA', full: 'Solar Energy Industries Association', abbr: 'SE' },
  { name: 'ACCA', full: 'Air Conditioning Contractors of America', abbr: 'AC' },
]

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="section-padding bg-white relative">
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
                  background: 'linear-gradient(135deg, #FF8A00, #0066FF)',
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
      <section className="section-padding bg-white" aria-labelledby="values-heading">
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
            {values.map((v, i) => (
              <div key={v.title} className="card-base p-7 text-center group hover:shadow-[0_8px_48px_rgba(10,14,26,0.1)] hover:-translate-y-1 transition-all duration-300">
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

      {/* Team */}
      <section className="section-padding bg-background-subtle" aria-labelledby="team-heading">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
              style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
            >
              Leadership
            </span>
            <h2 id="team-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              The Team Behind TriventX
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card-base p-6 text-center group">
                {/* Avatar */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-105 transition-transform`}
                  aria-hidden="true"
                >
                  {member.initials}
                  {/* TODO: REPLACE with real team photos */}
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mb-3">{member.title}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{member.bio}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-text-secondary hover:text-primary transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  {/* TODO: REPLACE with real LinkedIn URLs */}
                  LinkedIn Profile →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white" aria-labelledby="certs-heading">
        <div className="container-xl max-w-3xl">
          <h2 id="certs-heading" className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">
            Certifications & Memberships
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all text-center"
              >
                <div
                  className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold"
                  aria-hidden="true"
                >
                  {cert.abbr}
                  {/* TODO: REPLACE with official logos */}
                </div>
                <div>
                  <p className="font-bold text-text-primary text-sm">{cert.name}</p>
                  <p className="text-[10px] text-text-secondary mt-0.5 leading-tight">{cert.full}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding bg-background-subtle">
        <div className="container-xl max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">Our Offices</h2>
          <p className="text-text-secondary mb-8">
            Headquartered in Austin, TX, supporting clients and industry partners across the United
            States, Canada, and Europe.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { city: 'Austin, TX', role: 'Headquarters & Operations', state: 'Texas' },
              { city: 'Phoenix, AZ', role: 'Southwest Engineering Hub', state: 'Arizona' },
            ].map((office) => (
              <div key={office.city} className="card-base p-5 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-bold text-text-primary">{office.city}</span>
                </div>
                <p className="text-sm text-text-secondary">{office.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
