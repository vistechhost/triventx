"use client";

import Link from "next/link";
import {
  Clock,
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
import { SERVICES_DATA, serviceLabel } from "@/lib/data/services";
import { SITE_CONFIG, SOCIAL_PROFILES } from "@/lib/data/site-config";
import { addressLines, formatPhone, telHref } from "@/lib/utils/contact";

const footerCompany = [
  { label: "About TriventX", href: "/about" },
  { label: "US Customers", href: "/us" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Service Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

const socialIcons = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t-4 border-primary">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="mb-6 block">
              <Logo variant="white" className="h-12 md:h-14" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Engineering smarter. Delivering faster. AHJ- and NEC-compliant
              solar design and engineering.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {SOCIAL_PROFILES.map(({ key, href, label }) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5">Services</h3>
            <ul className="space-y-3">
              {SERVICES_DATA.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-sm text-slate-400 hover:text-primary-light transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {serviceLabel(svc)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5">Company</h3>
            <ul className="space-y-3">
              {footerCompany.map((res) => (
                <li key={res.label}>
                  <Link
                    href={res.href}
                    className="text-sm text-slate-400 hover:text-primary-light transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {res.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + LinkedIn */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5">Contact</h3>
            <ul className="space-y-4 mb-6">
              {SITE_CONFIG.phone && (
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                  <a
                    href={telHref(SITE_CONFIG.phone)}
                    className="text-sm text-slate-400 hover:text-primary-light transition-colors"
                  >
                    {formatPhone(SITE_CONFIG.phone)}
                  </a>
                </li>
              )}
              {SITE_CONFIG.email && (
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-slate-400 hover:text-primary-light transition-colors break-all"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
              )}
              {SITE_CONFIG.address && (
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                  <address className="text-sm text-slate-400 not-italic">
                    {addressLines(SITE_CONFIG.address).map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </li>
              )}
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                <div className="text-sm text-slate-400">
                  {SITE_CONFIG.hours.slice(0, 2).map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </div>
              </li>
            </ul>

            {/* LinkedIn */}
            {SITE_CONFIG.social.linkedin && (
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#0A66C2] p-3 transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-[#0A66C2] flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="text-sm">
                  <span className="block font-semibold group-hover:text-primary-light transition-colors">
                    Follow us on LinkedIn
                  </span>
                  <span className="block text-xs text-slate-400">Project news &amp; design tips</span>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} TriventX Energy LLP. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Service Terms", href: "/terms" },
              { label: "Cookie Policy", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
