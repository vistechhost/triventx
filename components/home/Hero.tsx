"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Background photos that cross-fade and slowly zoom, like a looping GIF.
const slides = [
  {
    src: "/images/hero-us-home-solar.jpg",
    alt: "Single-story home with a multi-plane rooftop solar array",
    position: "object-bottom",
  },
  {
    src: "/images/solar-installation-crew.jpg",
    alt: "Installation crew mounting solar panels on a residential roof",
    position: "object-center",
  },
  {
    src: "/images/pe-review-rooftop-plans.jpg",
    alt: "Engineer reviewing solar plan drawings on a commercial rooftop",
    position: "object-center",
  },
];
const SLIDE_MS = 6000;
const FADE_MS = 1500;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section
      className="relative isolate overflow-hidden bg-navy-950 pt-28 md:pt-36 pb-16 md:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Animated background photos */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {slides.map((slide, i) => {
          const isActive = i === active;
          return (
            <Image
              key={slide.src}
              src={slide.src}
              alt={i === 0 ? slide.alt : ""}
              aria-hidden={i === 0 ? undefined : true}
              fill
              preload={i === 0}
              sizes="100vw"
              className={`object-cover ${slide.position}`}
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive && !reduceMotion ? "scale(1.08)" : "scale(1)",
                // Zoom in while showing; reset the zoom only after the photo has faded out.
                transition: isActive
                  ? `opacity ${FADE_MS}ms ease, transform ${SLIDE_MS + FADE_MS}ms linear`
                  : `opacity ${FADE_MS}ms ease, transform 0s linear ${FADE_MS}ms`,
              }}
            />
          );
        })}
      </div>
      {/* Keeps the copy readable over the sky while leaving the house visible below */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-950/35"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
        </div>

        {/* Leaves the lower part of each photo visible below the copy */}
        <div className="h-32 md:h-56 lg:h-72" aria-hidden="true" />
      </div>
    </section>
  );
}
