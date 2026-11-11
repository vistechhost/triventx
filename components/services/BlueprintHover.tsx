'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

export function BlueprintHover() {
  const [hovered, setHovered] = useState(false)
  const [progress, setProgress] = useState(0.5)

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div
        className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer border border-border shadow-xl group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          setProgress((e.clientX - rect.left) / rect.width)
        }}
        aria-label="Hover to see blueprint transform to finished design"
        role="img"
      >
        {/* Blueprint layer (left side / under) */}
        <div className="absolute inset-0 bg-blue-900 flex items-center justify-center select-none" aria-hidden="true">
          {/* Blueprint grid */}
          <div className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'linear-gradient(rgba(100,160,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,160,255,0.3) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Blueprint house drawing */}
          <svg viewBox="0 0 320 220" className="w-[85%] opacity-90" fill="none" stroke="#64A0FF" strokeWidth="1.5">
            {/* House outline */}
            <polyline points="60,160 60,100 160,50 260,100 260,160" />
            {/* Door */}
            <rect x="135" y="120" width="50" height="40" />
            {/* Windows */}
            <rect x="80" y="110" width="35" height="30" />
            <rect x="205" y="110" width="35" height="30" />
            {/* Roof detail */}
            <line x1="60" y1="160" x2="260" y2="160" />
            {/* Solar panels on roof */}
            <rect x="95" y="72" width="50" height="18" />
            <rect x="150" y="65" width="50" height="18" />
            <line x1="120" y1="72" x2="120" y2="90" />
            <line x1="175" y1="65" x2="175" y2="83" />
            {/* Dimension lines */}
            <line x1="60" y1="175" x2="260" y2="175" strokeDasharray="4 3" opacity="0.6" />
            <line x1="55" y1="100" x2="55" y2="160" strokeDasharray="4 3" opacity="0.6" />
            {/* Text labels (simulated) */}
            <rect x="105" y="182" width="70" height="6" fill="#64A0FF" opacity="0.4" />
            <rect x="28" y="120" width="20" height="4" fill="#64A0FF" opacity="0.4" />
          </svg>
          <div className="absolute bottom-4 left-4 text-xs font-mono text-blue-300 opacity-80">
            PERMIT DESIGN — DRAFT
          </div>
        </div>

        {/* Finished design layer (clips from left) */}
        <div
          className="absolute inset-0 bg-white flex items-center justify-center select-none overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - (hovered ? progress * 100 : 50)}% 0 0)` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-slate-50" />
          {/* Finished house illustration */}
          <svg viewBox="0 0 320 220" className="relative w-[85%]" fill="none">
            {/* Ground */}
            <rect x="40" y="160" width="240" height="5" rx="2" fill="#E8F4E8" />
            {/* House walls */}
            <rect x="65" y="100" width="190" height="60" rx="4" fill="#F5F0E8" stroke="#E2E8F0" />
            {/* Roof */}
            <polygon points="55,102 160,52 265,102" fill="#B87333" stroke="#9B6027" strokeWidth="1.5" />
            {/* Door */}
            <rect x="138" y="122" width="44" height="38" rx="3" fill="#8B6B4A" />
            <circle cx="178" cy="141" r="2.5" fill="#C8A86A" />
            {/* Windows */}
            <rect x="83" y="115" width="38" height="28" rx="3" fill="#BAD8F7" stroke="#E2E8F0" />
            <rect x="199" y="115" width="38" height="28" rx="3" fill="#BAD8F7" stroke="#E2E8F0" />
            {/* Solar panels */}
            <rect x="100" y="75" width="24" height="16" rx="2" fill="#1A2744" />
            <rect x="127" y="68" width="24" height="16" rx="2" fill="#1A2744" />
            <rect x="154" y="62" width="24" height="16" rx="2" fill="#1A2744" />
            <rect x="181" y="68" width="24" height="16" rx="2" fill="#1A2744" />
            {/* Panel cell lines */}
            <line x1="112" y1="75" x2="112" y2="91" stroke="#2A3A5A" strokeWidth="0.8" />
            <line x1="139" y1="68" x2="139" y2="84" stroke="#2A3A5A" strokeWidth="0.8" />
            {/* Labels */}
            <rect x="88" y="190" width="60" height="6" rx="2" fill="#028182" opacity="0.5" />
            <rect x="155" y="190" width="40" height="6" rx="2" fill="#1D3F8F" opacity="0.4" />
            {/* Shading arrows */}
            <path d="M270,75 L290,75 M283,68 L290,75 L283,82" stroke="#028182" strokeWidth="1.5" fill="none" opacity="0.8" />
          </svg>
          <div className="absolute bottom-4 left-4 text-xs font-semibold text-primary">
            PERMIT-READY DESIGN
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-full">
              ✓ AHJ Compliant
            </span>
          </div>
        </div>

        {/* Drag handle */}
        <div
          className="absolute top-0 bottom-0 flex items-center z-10"
          style={{ left: `${hovered ? progress * 100 : 50}%`, transform: 'translateX(-50%)' }}
          aria-hidden="true"
        >
          <div className="w-0.5 h-full bg-white/60" />
          <div className="absolute w-8 h-8 bg-white rounded-full shadow-lg border border-border flex items-center justify-center">
            <Eye className="w-4 h-4 text-text-primary" />
          </div>
        </div>

        {/* Hover instruction */}
        {!hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <span className="bg-black/60 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
              ← Hover to reveal finished design →
            </span>
          </motion.div>
        )}
      </div>

      <p className="text-center text-sm text-text-secondary mt-3">
        <strong className="text-text-primary">Left:</strong> AHJ-compliant permit package &nbsp;|&nbsp;
        <strong className="text-text-primary">Right:</strong> Blueprint sketch
      </p>
    </div>
  )
}
