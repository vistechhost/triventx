'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Sun, DollarSign, TrendingUp, Zap } from 'lucide-react'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const production = [320, 420, 680, 810, 950, 1080, 1140, 1050, 880, 640, 380, 290]
const maxProd = Math.max(...production)

function useCountUp(target: number, active: boolean, decimals = 0) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, target)
      setValue(parseFloat(current.toFixed(decimals)))
      if (current >= target) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, target, decimals])
  return value
}

export function ProposalPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const systemKW = useCountUp(9.6, isInView, 1)
  const annualKWh = useCountUp(14280, isInView)
  const savings25yr = useCountUp(68450, isInView)
  const roi = useCountUp(312, isInView, 0)

  return (
    <div ref={ref} className="bg-white rounded-2xl border border-border shadow-xl overflow-hidden max-w-2xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A0E1A] to-[#1A2335] p-6 flex items-center justify-between">
        <div>
          <p className="text-white font-heading font-bold text-lg">Solar Investment Analysis</p>
          <p className="text-slate-400 text-sm">123 Maple Street, Austin TX 78701</p>
        </div>
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
          <Sun className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border border-b border-border">
        {[
          { icon: Zap, value: `${systemKW} kW`, label: 'System Size', color: 'text-primary' },
          { icon: Sun, value: `${annualKWh.toLocaleString()} kWh`, label: 'Annual Yield', color: 'text-amber-500' },
          { icon: DollarSign, value: `$${savings25yr.toLocaleString()}`, label: '25-Year Savings', color: 'text-accent' },
          { icon: TrendingUp, value: `${roi}%`, label: 'ROI', color: 'text-secondary' },
        ].map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="flex flex-col items-center py-4 px-3 text-center">
            <Icon className={`w-5 h-5 ${color} mb-1.5`} />
            <p className={`font-heading font-bold text-xl ${color}`}>{value}</p>
            <p className="text-xs text-text-secondary">{label}</p>
          </div>
        ))}
      </div>

      {/* Production chart */}
      <div className="p-6">
        <p className="text-sm font-bold text-text-primary mb-4">Monthly Production (kWh)</p>
        <div className="flex items-end gap-1.5 h-32">
          {production.map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-primary to-amber-400 transition-all duration-700"
                style={{
                  height: isInView ? `${(val / maxProd) * 100}%` : '0%',
                  transitionDelay: `${i * 60}ms`,
                }}
                aria-label={`${months[i]}: ${val} kWh`}
              />
              <span className="text-[9px] text-text-secondary font-medium">{months[i].slice(0, 1)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border px-6 py-4 bg-background-subtle flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-accent">Federal ITC (30%) Applied</span>
        </div>
        <span className="text-xs text-text-secondary">Prepared by TriventX Energy LLP</span>
      </div>
    </div>
  )
}
