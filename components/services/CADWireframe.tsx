'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const formats = ['DWG', 'DXF', 'PDF', 'RVT']

export function CADWireframe() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const pathLength = 800

  return (
    <div ref={ref} className="flex flex-col items-center gap-8">
      {/* SVG Wireframe */}
      <div className="relative w-full max-w-lg mx-auto bg-[#0A0E1A] rounded-2xl p-6 border border-slate-700 overflow-hidden">
        {/* Background grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 400 260"
          aria-hidden="true"
        >
          <defs>
            <pattern id="cad-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4466CC" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="260" fill="url(#cad-grid)" />
        </svg>

        <svg
          viewBox="0 0 400 260"
          className="w-full relative z-10"
          aria-label="CAD wireframe drawing animation"
        >
          {/* 2D Blueprint (draws in) */}
          <g stroke="#64A0FF" strokeWidth="1.5" fill="none">
            {/* Outer boundary */}
            <motion.rect
              x="30" y="40" width="160" height="180"
              strokeDasharray={pathLength}
              strokeDashoffset={isInView ? 0 : pathLength}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{ strokeDashoffset: isInView ? 0 : pathLength }}
            />
            {/* Internal walls */}
            <motion.line x1="130" y1="40" x2="130" y2="220"
              strokeDasharray="300"
              style={{ strokeDashoffset: isInView ? 0 : 300 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
            />
            <motion.line x1="30" y1="140" x2="190" y2="140"
              strokeDasharray="200"
              style={{ strokeDashoffset: isInView ? 0 : 200 }}
              transition={{ duration: 1.0, delay: 0.6, ease: 'easeInOut' }}
            />
            {/* Door opening */}
            <motion.path
              d="M 90,140 Q 90,160 110,160"
              strokeDasharray="60"
              style={{ strokeDashoffset: isInView ? 0 : 60 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            />
            {/* Window markers */}
            <motion.rect x="45" y="60" width="30" height="20"
              strokeDasharray="100"
              style={{ strokeDashoffset: isInView ? 0 : 100 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            {/* Labels */}
            <motion.text
              x="45" y="260" fontSize="8" fill="#4A6A88"
              fontFamily="monospace"
              style={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              PLAN VIEW — 1:100
            </motion.text>
          </g>

          {/* 3D Isometric (fades in from right) */}
          <motion.g
            stroke="#FF8A00"
            strokeWidth="1.5"
            fill="none"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {/* 3D box front */}
            <polygon points="230,180 310,180 310,100 230,100" stroke="#FF8A00" fill="rgba(255,138,0,0.05)" />
            {/* 3D box top */}
            <polygon points="230,100 280,60 360,60 310,100" stroke="#FF8A00" fill="rgba(255,138,0,0.08)" />
            {/* 3D box right side */}
            <polygon points="310,100 360,60 360,140 310,180" stroke="#E67300" fill="rgba(230,115,0,0.08)" />
            {/* Isometric lines */}
            <line x1="230" y1="140" x2="280" y2="100" stroke="#E67300" strokeDasharray="5 3" />
            <line x1="280" y1="100" x2="360" y2="100" stroke="#E67300" />
            {/* Panels on top face */}
            {[0, 1, 2].map((col) => (
              <g key={col} transform={`translate(${col * 22}, 0)`}>
                <polygon
                  points="240,90 258,78 274,78 256,90"
                  fill="rgba(26,39,68,0.5)"
                  stroke="#4466CC"
                  strokeWidth="0.8"
                  transform={`translate(0, ${-col * 4})`}
                />
              </g>
            ))}
            <motion.text
              x="255" y="200" fontSize="8" fill="#CC6600"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 2.0 }}
            >
              3D ISOMETRIC VIEW
            </motion.text>
          </motion.g>

          {/* Arrow between 2D and 3D */}
          <motion.path
            d="M 200,130 L 220,130"
            stroke="#00C896" strokeWidth="2" fill="none"
            markerEnd="url(#arrowhead)"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.3 }}
          />
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#00C896" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Format badges */}
      <div className="flex flex-wrap justify-center gap-3">
        {formats.map((fmt, i) => (
          <motion.div
            key={fmt}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.5 + i * 0.1 }}
            className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-border shadow-sm hover:shadow-card hover:border-primary/30 transition-all"
          >
            <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
            <span className="font-bold text-sm text-text-primary">. {fmt}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
