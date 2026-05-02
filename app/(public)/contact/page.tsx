import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact TriventX Energy LLP for solar permit designs, engineering stamps, and project documentation. Get a free quote within 30 minutes.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Let's Start Your Next Project
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tell us about your project and we'll respond within 30 minutes during business hours
            with a transparent quote and timeline.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-background-subtle" aria-labelledby="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-border shadow-card p-6 md:p-8">
                <h2 id="contact-section" className="font-heading font-bold text-2xl text-text-primary mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Right: Contact info */}
            <div className="space-y-5">
              {/* Contact details */}
              <div className="bg-white rounded-2xl border border-border shadow-card p-6">
                <h3 className="font-heading font-bold text-lg text-text-primary mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+18882476535" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Phone</p>
                      <p className="font-semibold text-text-primary group-hover:text-primary transition-colors">+1 (888) 247-6535</p>
                    </div>
                  </a>
                  <a href="mailto:hello@triventxenergy.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Email</p>
                      <p className="font-semibold text-text-primary group-hover:text-primary transition-colors text-sm">
                        hello@triventxenergy.com
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Address</p>
                      <p className="font-semibold text-text-primary text-sm">
                        1234 Innovation Drive, Suite 400<br />Austin, TX 78701
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Hours</p>
                      <p className="font-semibold text-text-primary text-sm">
                        Monday – Friday: 8am – 10pm CT<br />
                        Saturday: 9am – 5pm CT<br />
                        Sunday: Emergency support only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
                <div className="w-full h-48 bg-background-subtle flex items-center justify-center" aria-label="Map showing office location in Austin, TX">
                  <iframe
                    title="TriventX Energy LLP office location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.886742960565!2d-97.74306658488!3d30.267152981783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1620000000000"
                    width="100%"
                    height="192"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Quick services */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <p className="font-heading font-bold text-lg mb-3">Need it fast?</p>
                <p className="text-sm text-white/80 mb-4">
                  For urgent orders, call us directly. We accept rush projects with 3-hour TAT
                  for permit designs.
                </p>
                <a
                  href="tel:+18882476535"
                  className="inline-flex items-center gap-2 bg-white text-primary font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-primary-light transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call for Rush Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
