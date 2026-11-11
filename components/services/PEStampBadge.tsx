'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const complianceLogos = [
  { name: 'NEC 2023', sub: 'National Electrical Code', color: '#028182' },
  { name: 'NESC', sub: 'Safety Code for Electric Supply', color: '#1D3F8F' },
  { name: 'NFPA 70E', sub: 'Arc Flash Safety Standard', color: '#0F9D74' },
  { name: 'IEEE 1547', sub: 'Distributed Energy Resources', color: '#8B5CF6' },
  { name: 'ANSI C2', sub: 'Safety Code Standard', color: '#EC4899' },
  { name: 'NEMA 3R', sub: 'Weatherproof Enclosures', color: '#F59E0B' },
]

export function PEStampBadge() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Embossed PE Stamp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
        className="relative"
        aria-label="Professional Engineer Stamp — Verified"
      >
        <div
          className="w-48 h-48 rounded-full flex flex-col items-center justify-center relative"
          style={{
            background: 'linear-gradient(135deg, #d4af37, #f5e47c, #b8912f)',
            boxShadow: '0 0 0 4px #b8912f, 0 0 0 8px #d4af37, 0 8px 32px rgba(180,145,47,0.4), inset 0 2px 4px rgba(255,255,255,0.5)',
          }}
        >
          {/* Outer ring */}
          <div
            className="absolute inset-2 rounded-full border-2 border-dashed"
            style={{ borderColor: 'rgba(120,90,20,0.5)' }}
            aria-hidden="true"
          />
          {/* Inner ring */}
          <div
            className="absolute inset-5 rounded-full border"
            style={{ borderColor: 'rgba(120,90,20,0.4)' }}
            aria-hidden="true"
          />

          {/* Center content */}
          <ShieldCheck className="w-8 h-8 mb-1" style={{ color: '#5A3810' }} aria-hidden="true" />
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-center" style={{ color: '#3D2508' }}>
            P.E. STAMP
          </p>
          <p className="text-[9px] font-bold tracking-widest" style={{ color: '#5A3810' }}>
            VERIFIED
          </p>
          <p className="text-[8px] mt-1 font-semibold" style={{ color: '#7A5520' }}>
            ALL 50 STATES
          </p>

          {/* Rotating text ring (simulated with arc segments) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 192 192"
            aria-hidden="true"
          >
            <defs>
              <path id="topArc" d="M 25,96 A 71,71 0 0,1 167,96" />
              <path id="bottomArc" d="M 167,96 A 71,71 0 0,1 25,96" />
            </defs>
            <text fontSize="8" fontWeight="700" letterSpacing="3" fill="rgba(90,56,16,0.8)" fontFamily="serif">
              <textPath href="#topArc">LICENSED PROFESSIONAL ENGINEER</textPath>
            </text>
            <text fontSize="7" fontWeight="600" letterSpacing="4" fill="rgba(90,56,16,0.6)" fontFamily="serif">
              <textPath href="#bottomArc" startOffset="10%">TRIVENTX ENERGY LLP</textPath>
            </text>
          </svg>
        </div>

        {/* Glow */}
        <div
          className="absolute inset-0 rounded-full -z-10 blur-xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Compliance logos */}
      <div className="w-full">
        <p className="text-center text-sm font-bold text-text-secondary uppercase tracking-widest mb-5">
          Code Compliance Standards
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {complianceLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all text-center"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-[10px]"
                style={{ backgroundColor: logo.color }}
                aria-hidden="true"
              >
                {logo.name.slice(0, 4)}
              </div>
              <p className="font-bold text-xs text-text-primary">{logo.name}</p>
              <p className="text-[9px] text-text-secondary leading-tight">{logo.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
