"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck, Clock } from "lucide-react";

const trustPoints = [
  { icon: ShieldCheck, text: "AHJ & NEC-Compliant Designs" },
  { icon: Clock, text: "Fast Turnaround Times" },
  { icon: CheckCircle, text: "Built to Minimize Revisions" },
];

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#0A0E1A] pt-28 md:pt-36 pb-16 md:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Background photo */}
      <Image
        src="/images/hero-us-home-solar.jpg"
        alt="Single-story home with a multi-plane rooftop solar array"
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-bottom"
      />
      {/* Keeps the copy readable over the sky while leaving the house visible below */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A0E1A]/85 via-[#0A0E1A]/70 to-[#0A0E1A]/35"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold text-white rounded-full px-5 py-2 mb-8 bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Solar PV Design & Engineering Drawing Services
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8"
          >
            Engineering Smarter.{" "}
            <span className="text-primary-light">Delivering Faster.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-medium"
          >
            Proposals, permit plan sets, PE stamps, interconnection, and PTO —
            for solar installers, EPCs, and contractors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 text-lg w-full sm:w-auto"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-2xl border border-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 text-lg w-full sm:w-auto"
            >
              View Our Services
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8"
          >
            {trustPoints.map((point) => (
              <li
                key={point.text}
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#0A0E1A]/60 border border-white/15 backdrop-blur-md"
              >
                <span className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <point.icon className="w-5 h-5 text-primary-light" />
                </span>
                <span className="text-sm font-bold text-white text-left">
                  {point.text}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/us"
              className="inline-flex items-center gap-2 rounded-full bg-[#0A0E1A]/70 border border-white/20 backdrop-blur-md px-5 py-2.5 text-sm font-bold text-white hover:text-primary-light transition-colors"
            >
              Based in the United States? See our US services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Leaves the house in the photo visible below the copy */}
        <div className="h-32 md:h-56 lg:h-72" aria-hidden="true" />
      </div>
    </section>
  );
}
