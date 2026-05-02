"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle,
  ShieldCheck,
  Clock,
  Zap,
} from "lucide-react";

const trustPoints = [
  { icon: CheckCircle, text: "AHJ-Compliant on First Submission" },
  { icon: ShieldCheck, text: "Licensed P.E. Stamps All 50 States" },
  { icon: Clock, text: "24-Hour Delivery Guaranteed" },
];

export function Hero() {
  return (
    <section
      className="relative pt-20 md:pt-32 pb-24 md:pb-32 overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Decorative Grid Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[12%] w-32 h-32 border border-slate-200 rounded-3xl bg-white/50 backdrop-blur-sm shadow-sm flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Zap className="w-8 h-8 text-primary" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 left-[10%] w-24 h-24 border border-slate-200 rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm flex items-center justify-center"
        >
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-secondary" />
          </div>
        </motion.div>

        {/* Small floating "grid boxes" */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/3 left-[15%] w-4 h-4 bg-primary/20 rounded-sm"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-[20%] w-6 h-6 bg-secondary/20 rounded-md"
        />

        {/* 24-Hour TAT Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-1/2 right-[15%] hidden xl:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-white shadow-xl border border-slate-100 z-20"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center"
          >
            <span className="block text-3xl font-bold text-primary leading-none">
              24
            </span>
            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
              Hour TAT
            </span>
          </motion.div>
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary animate-spin-slow" />
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold text-primary rounded-full px-5 py-2 mb-8 bg-primary/5 border border-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted by 500+ Solar Installers Nationwide
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[1.05] tracking-tight mb-8"
          >
            Engineering the{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #FF8A00, #0066FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Solar Revolution
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-12 max-w-3xl mx-auto font-medium"
          >
            Precision solar permit designs, engineering stamps, and project
            documentation — delivered in hours, not days. Backed by licensed
            P.E.s covering all 50 US states.
          </motion.p>

          {/* Trust points grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto"
          >
            {trustPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-bold text-slate-700 text-left">
                  {point.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 bg-text-primary text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 text-lg overflow-hidden w-full sm:w-auto justify-center"
            >
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-text-primary font-bold px-10 py-5 rounded-2xl border-2 border-slate-200 transition-all duration-300 hover:border-primary/50 hover:bg-slate-50 hover:-translate-y-1 text-lg w-full sm:w-auto justify-center"
            >
              <PlayCircle className="w-6 h-6 text-primary" />
              View Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
