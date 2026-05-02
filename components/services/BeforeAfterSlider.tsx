'use client'

import { useState, useRef, useCallback } from 'react'
import { GripVertical } from 'lucide-react'

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX)
    },
    [updatePosition]
  )

  return (
    <div className="max-w-lg mx-auto">
      <div
        ref={containerRef}
        className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-col-resize select-none border border-border shadow-xl"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        role="img"
        aria-label="Before and after comparison: installation photo vs CAD drawing"
      >
        {/* Before: Real installation (simulated) */}
        <div className="absolute inset-0 bg-slate-800" aria-hidden="true">
          {/* Simulated installation photo */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900">
            <svg className="w-full h-full" viewBox="0 0 400 225" aria-hidden="true">
              {/* Sky */}
              <rect x="0" y="0" width="400" height="120" fill="#87CEEB" opacity="0.6" />
              {/* Roof */}
              <polygon points="50,120 200,60 350,120" fill="#7B6B5A" />
              <rect x="50" y="120" width="300" height="105" fill="#8A7A6A" />
              {/* Installed panels */}
              {[0, 1, 2, 3].map((col) =>
                [0, 1].map((row) => (
                  <rect
                    key={`${col}-${row}`}
                    x={80 + col * 60}
                    y={70 + row * 22 + col * 5}
                    width="50"
                    height="18"
                    rx="2"
                    fill="#1A2744"
                    stroke="#2A3A6A"
                    strokeWidth="1"
                    transform={`rotate(-15, ${105 + col * 60}, ${79 + row * 22 + col * 5})`}
                  />
                ))
              )}
              {/* Conduit */}
              <line x1="200" y1="112" x2="200" y2="170" stroke="#8B8B8B" strokeWidth="4" />
              {/* Mounting brackets (simulated) */}
              {[90, 150, 220, 290].map((x) => (
                <rect key={x} x={x} y="108" width="8" height="8" fill="#C0C0C0" />
              ))}
            </svg>
          </div>
          <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-sm">
            📷 Site Installation Photo
          </div>
        </div>

        {/* After: CAD Drawing */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-white">
            <svg className="w-full h-full" viewBox="0 0 400 225" fill="none" aria-hidden="true">
              {/* Grid */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8E8F0" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="225" fill="url(#grid)" />

              {/* Title block */}
              <rect x="0" y="190" width="400" height="35" fill="#F8FAFC" stroke="#E2E8F0" />
              <text x="10" y="205" fontSize="7" fill="#475569" fontFamily="monospace">PROJECT: SMITH RESIDENCE — 9.6 kW SOLAR PV SYSTEM</text>
              <text x="10" y="218" fontSize="6" fill="#94A3B8" fontFamily="monospace">AS-BUILT DRAWING — SHEET 1 OF 3 — TriventX Energy LLP</text>
              <rect x="320" y="190" width="80" height="35" stroke="#E2E8F0" />
              <text x="325" y="205" fontSize="7" fill="#475569" fontFamily="monospace">DATE: 01/2024</text>
              <text x="325" y="218" fontSize="6" fill="#94A3B8" fontFamily="monospace">REV: 2</text>

              {/* Roof outline */}
              <polygon points="60,130 200,55 340,130" stroke="#0066FF" strokeWidth="1.5" fill="rgba(0,102,255,0.04)" />
              <rect x="60" y="130" width="280" height="60" stroke="#0066FF" strokeWidth="1.5" fill="none" />

              {/* Panels CAD */}
              {[0, 1, 2, 3].map((col) =>
                [0, 1].map((row) => (
                  <rect
                    key={`cad-${col}-${row}`}
                    x={80 + col * 55}
                    y={78 + row * 22 + col * 4}
                    width="46"
                    height="18"
                    fill="rgba(26,39,68,0.08)"
                    stroke="#1A2744"
                    strokeWidth="1"
                    transform={`rotate(-15, ${103 + col * 55}, ${87 + row * 22 + col * 4})`}
                  />
                ))
              )}

              {/* Dimension lines */}
              <line x1="60" y1="145" x2="340" y2="145" stroke="#FF8A00" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.8" />
              <text x="185" y="142" fontSize="7" fill="#FF8A00" fontFamily="monospace">280'-0"</text>

              {/* North arrow */}
              <polygon points="370,30 374,45 370,42 366,45" fill="#0A0E1A" />
              <text x="367" y="55" fontSize="7" fill="#0A0E1A" fontFamily="monospace" fontWeight="bold">N</text>
            </svg>
          </div>
          <div className="absolute bottom-3 left-3 bg-[#0066FF]/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
            📐 As-Built CAD Drawing
          </div>
        </div>

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 flex items-center z-10"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => (isDragging.current = true)}
          aria-hidden="true"
        >
          <div className="w-0.5 h-full bg-white" />
          <div className="absolute w-10 h-10 bg-white rounded-full shadow-xl border-2 border-border flex items-center justify-center cursor-col-resize">
            <GripVertical className="w-5 h-5 text-text-secondary" />
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-text-secondary mt-3">
        <strong className="text-text-primary">Drag</strong> to compare site photo vs. as-built CAD drawing
      </p>
    </div>
  )
}
