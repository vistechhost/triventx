"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { OTHER_SERVICES, SOLAR_SERVICES, serviceLabel } from "@/lib/data/services";
import { SITE_CONFIG } from "@/lib/data/site-config";
import { cn } from "@/lib/utils/cn";
import { formatPhone, telHref } from "@/lib/utils/contact";

const serviceGroups = [
  { heading: "Solar Engineering", items: SOLAR_SERVICES },
  { heading: "Beyond Solar", items: OTHER_SERVICES },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "US Customers", href: "/us" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-surface/95 backdrop-blur-md border-b border-border",
        (scrolled || mobileOpen) && "shadow-sm",
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                      "hover:text-primary hover:bg-primary/5",
                      pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-text-secondary",
                    )}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-surface rounded-2xl shadow-xl border border-border p-2"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        role="menu"
                      >
                        {serviceGroups.map((group) => (
                          <div key={group.heading}>
                            <p className="px-4 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                              {group.heading}
                            </p>
                            {group.items.map((svc) => (
                              <Link
                                key={svc.slug}
                                href={`/services/${svc.slug}`}
                                role="menuitem"
                                className="block px-4 py-2 rounded-xl text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary/5 transition-colors"
                              >
                                {serviceLabel(svc)}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <div className="border-t border-border mt-2 pt-2">
                          <Link
                            href="/services"
                            className="block px-4 py-2.5 rounded-xl text-sm font-bold text-primary hover:bg-primary/5 transition-colors"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                    "hover:text-primary hover:bg-primary/5",
                    pathname === link.href
                      ? "text-primary"
                      : "text-text-secondary",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            {SITE_CONFIG.phone && (
              <a
                href={telHref(SITE_CONFIG.phone)}
                className="hidden xl:flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
                {formatPhone(SITE_CONFIG.phone)}
              </a>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 bg-primary hover:bg-primary-dark text-white px-4 py-2 text-sm rounded-lg hover:shadow-glow-primary hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-background-subtle transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface border-t border-border overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-primary/5 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <div>
                <p className="px-4 py-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
                  Services
                </p>
                {[...SOLAR_SERVICES, ...OTHER_SERVICES].map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="block pl-8 pr-4 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    {serviceLabel(svc)}
                  </Link>
                ))}
              </div>
              <Link
                href="/us"
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-primary/5 hover:text-primary transition-colors"
              >
                US Customers
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-primary/5 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-text-primary hover:bg-primary/5 hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-border">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Get Free Quote
                </Link>
                {SITE_CONFIG.phone && (
                  <a
                    href={telHref(SITE_CONFIG.phone)}
                    className="flex items-center justify-center gap-2 w-full mt-3 text-sm font-semibold text-text-secondary hover:text-primary transition-colors py-2"
                  >
                    <Phone className="w-4 h-4" />
                    {formatPhone(SITE_CONFIG.phone)}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
