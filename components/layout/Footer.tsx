'use client'

import Link from 'next/link'
import { Zap, Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react'

const footerServices = [
  { label: 'Solar Permit Design', href: '/services/solar-permit-design' },
  { label: 'Solar Sales Proposals', href: '/services/solar-sales-proposals' },
  { label: 'Preliminary Designs', href: '/services/solar-preliminary-designs' },
  { label: 'Engineering Stamps', href: '/services/engineering-stamps' },
  { label: 'As-Built Drawings', href: '/services/as-built-drawings' },
  { label: 'CAD Conversion', href: '/services/cad-conversion' },
]

const footerResources = [
  { label: 'NEC Code Reference', href: '#' },
  { label: 'Permit Checklist', href: '#' },
  { label: 'TAT Calculator', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Case Studies', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-[#0A0E1A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-6 group" aria-label="TriventX Energy Home">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white leading-none block">TriventX</span>
                <span className="text-[10px] font-semibold text-primary tracking-wider uppercase leading-none">Energy LLP</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Powering the clean energy transition through precision solar engineering. AHJ-compliant designs delivered with industry-leading turnaround times.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: 'https://linkedin.com/company/triventxenergy', label: 'LinkedIn' },
                { icon: Facebook, href: 'https://facebook.com/triventxenergy', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com/triventxenergy', label: 'Instagram' },
                { icon: Twitter, href: 'https://twitter.com/triventxenergy', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5">Services</h3>
            <ul className="space-y-3">
              {footerServices.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5">Resources</h3>
            <ul className="space-y-3">
              {footerResources.map((res) => (
                <li key={res.href}>
                  <Link
                    href={res.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {res.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5">Contact</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+18882476535" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  +1 (888) 247-6535
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:hello@triventxenergy.com" className="text-sm text-slate-400 hover:text-primary transition-colors">
                  hello@triventxenergy.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  1234 Innovation Drive, Suite 400<br />Austin, TX 78701
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold mb-3">Newsletter</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
                aria-label="Newsletter signup"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg text-sm font-semibold transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} TriventX Energy LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
