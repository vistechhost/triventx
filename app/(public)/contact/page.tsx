import type { Metadata } from 'next'
import { LeadForm } from '@/components/forms/LeadForm'
import { ResponseTimes } from '@/components/contact/ResponseTimes'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/data/site-config'
import { addressLines, formatPhone, telHref, whatsappHref } from '@/lib/utils/contact'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact TriventX Energy LLP for solar permit designs, engineering stamps, wind energy, and telecom documentation. Upload your project files and get a reply within 30 minutes during business hours.',
}

const iconBox = 'w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0'
const detailLabel = 'text-xs font-semibold text-text-secondary uppercase tracking-wide'

export default function ContactPage() {
  const { phone, email, whatsapp, address, hours } = SITE_CONFIG

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Let&apos;s Start Your Next Project
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
            Send your project and files. Here&apos;s when we&apos;ll reply.
          </p>
          <ResponseTimes />
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-background-subtle" aria-labelledby="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-2xl border border-border shadow-card p-6 md:p-8">
                <h2 id="contact-section" className="font-heading font-bold text-2xl text-text-primary mb-6">
                  Send Us Your Project
                </h2>
                <LeadForm />
              </div>
            </div>

            {/* Right: Contact info */}
            <div className="space-y-5">
              <div className="bg-surface rounded-2xl border border-border shadow-card p-6">
                <h3 className="font-heading font-bold text-lg text-text-primary mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {phone && (
                    <a href={telHref(phone)} className="flex items-start gap-4 group">
                      <div className={iconBox}>
                        <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className={detailLabel}>Phone</p>
                        <p className="font-semibold text-text-primary group-hover:text-primary transition-colors text-sm">
                          {formatPhone(phone)}
                        </p>
                      </div>
                    </a>
                  )}
                  {email && (
                    <a href={`mailto:${email}`} className="flex items-start gap-4 group">
                      <div className={iconBox}>
                        <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className={detailLabel}>Email</p>
                        <p className="font-semibold text-text-primary group-hover:text-primary transition-colors text-sm break-all">
                          {email}
                        </p>
                      </div>
                    </a>
                  )}
                  {whatsapp && (
                    <a
                      href={whatsappHref(whatsapp, "Hi TriventX, I'd like to discuss a project.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className={iconBox}>
                        <MessageCircle className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className={detailLabel}>WhatsApp</p>
                        <p className="font-semibold text-text-primary group-hover:text-primary transition-colors text-sm">
                          Chat with our sales team
                        </p>
                      </div>
                    </a>
                  )}
                  {address && (
                    <div className="flex items-start gap-4">
                      <div className={iconBox}>
                        <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className={detailLabel}>Address</p>
                        <address className="font-semibold text-text-primary text-sm not-italic">
                          {addressLines(address).map((line) => (
                            <span key={line} className="block">{line}</span>
                          ))}
                        </address>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className={iconBox}>
                      <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className={detailLabel}>Hours</p>
                      <p className="font-semibold text-text-primary text-sm">
                        {hours.map((h) => (
                          <span key={h.days} className="block">{h.days}: {h.time}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rush orders */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <p className="font-heading font-bold text-lg mb-3">Need it fast?</p>
                <p className={`text-sm text-white/90 ${phone ? 'mb-4' : ''}`}>
                  We accept rush projects with 3-hour TAT for permit designs.
                  {phone ? ' For urgent orders, call us directly.' : ' Mention "rush" in your message so we can prioritize it.'}
                </p>
                {phone && (
                  <a
                    href={telHref(phone)}
                    className="inline-flex items-center gap-2 bg-white text-primary-dark font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-primary-light transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Call for Rush Order
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
