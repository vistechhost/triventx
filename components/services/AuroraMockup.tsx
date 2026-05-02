'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Scan, Activity } from 'lucide-react'

export function AuroraMockup() {
  const [scanning, setScanning] = useState(true)
  const [production, setProduction] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setScanning(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!scanning) {
      const interval = setInterval(() => {
        setProduction((v) => {
          if (v >= 14280) { clearInterval(interval); return 14280 }
          return v + 238
        })
      }, 60)
      return () => clearInterval(interval)
    }
  }, [scanning])

  return (
    <div className="bg-[#0D1B2A] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl max-w-2xl mx-auto">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#0A1520] border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 bg-slate-800 rounded-lg px-3 py-1 text-xs text-slate-400 font-mono">
          aurora.solar/design/project-7842
        </div>
      </div>

      <div className="grid grid-cols-3 gap-0">
        {/* Satellite view */}
        <div className="col-span-2 relative overflow-hidden" style={{ height: '280px' }}>
          {/* Roof heatmap */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 40% 40%, rgba(255,200,0,0.7) 0%, rgba(255,100,0,0.5) 30%, rgba(0,100,255,0.3) 70%, rgba(0,0,100,0.4) 100%)',
            }}
            aria-hidden="true"
          />
          {/* Roof outline */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 200" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="20,100 120,20 220,100 220,180 20,180" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
            <polygon points="20,100 120,20 220,100" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            {/* Panel grid */}
            {[0, 1, 2, 3].map((col) =>
              [0, 1].map((row) => (
                <rect
                  key={`${col}-${row}`}
                  x={50 + col * 38}
                  y={50 + row * 22}
                  width="32"
                  height="18"
                  rx="2"
                  fill="rgba(30,50,100,0.7)"
                  stroke="rgba(100,150,255,0.6)"
                  strokeWidth="1"
                />
              ))
            )}
          </svg>

          {/* Scanning overlay */}
          {scanning && (
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            />
          )}

          <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 rounded-lg px-3 py-1.5 backdrop-blur-sm">
            <Scan className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400">
              {scanning ? 'SCANNING...' : 'ANALYSIS COMPLETE'}
            </span>
          </div>

          {/* Legend */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {['#0000FF', '#00AAFF', '#FFFF00', '#FF7700', '#FF0000'].map((c, i) => (
                <div key={i} className="w-5 h-2 rounded-sm" style={{ backgroundColor: c }} />
              ))}
              <span className="text-[10px] text-white ml-1">Low → High irradiance</span>
            </div>
          </div>
        </div>

        {/* Readout panel */}
        <div className="bg-[#0A1520] border-l border-slate-700 p-4 flex flex-col gap-4">
          <div>
            <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-wide">Annual Production</p>
            <p className="font-mono font-bold text-2xl text-amber-400">
              {production.toLocaleString()}
            </p>
            <p className="text-[10px] text-slate-500">kWh / year</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-wide">Shading Loss</p>
            <p className="font-mono font-bold text-lg text-green-400">3.2%</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-wide">TSRF</p>
            <p className="font-mono font-bold text-lg text-cyan-400">97.8%</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-wide">Roof Tilt</p>
            <p className="font-mono font-bold text-lg text-white">22°</p>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-accent" />
              <span className="text-[10px] text-accent font-semibold">Simulation Ready</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5">LiDAR + TMY3 data</p>
          </div>
        </div>
      </div>

      {/* Bottom tools bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0A1520] border-t border-slate-700">
        {['Site Survey', 'Shading Analysis', 'String Design', 'Production', 'Report'].map((tool, i) => (
          <button
            key={tool}
            className={`px-3 py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              i === 1
                ? 'bg-secondary/20 text-secondary border border-secondary/30'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  )
}
