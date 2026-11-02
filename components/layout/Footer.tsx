"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const footerServices = [
  { label: "Solar Sales Proposals", href: "/services/solar-sales-proposals" },
  { label: "Site Surveys & Assessments", href: "/services/site-surveys-remote-assessments" },
  { label: "Solar Permit Design", href: "/services/solar-permit-design" },
  { label: "PE Review & Stamping", href: "/services/engineering-stamps" },
  { label: "Solar Permitting Services", href: "/services/solar-permitting-services" },
  { label: "Interconnection Services", href: "/services/interconnection-services" },
  { label: "As-Built Drawings", href: "/services/as-built-drawings" },
  { label: "PTO Support", href: "/services/pto-support" },
];

const footerResources = [
  { label: "NEC Code Reference", href: "#" },
  { label: "Permit Checklist", href: "#" },
  { label: "TAT Calculator", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Case Studies", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0E1A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="mb-6 block">
              <Logo variant="white" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Engineering smarter. Delivering faster. Helping solar businesses
              scale with accurate, AHJ- and NEC-compliant solar design and
              engineering.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/company/triventxenergy",
                  label: "LinkedIn",
                },
                {
                  icon: Facebook,
                  href: "https://facebook.com/triventxenergy",
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/triventxenergy",
                  label: "Instagram",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com/triventxenergy",
                  label: "Twitter",
                },
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
                <li key={svc.label}>
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
                <li key={res.label}>
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
                <a
                  href="tel:+18882476535"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  +1 (888) 247-6535
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="mailto:hello@triventxenergy.com"
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  hello@triventxenergy.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  1234 Innovation Drive, Suite 400
                  <br />
                  Austin, TX 78701
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
            © {new Date().getFullYear()} TriventX Energy LLP. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
