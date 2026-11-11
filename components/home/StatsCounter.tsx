'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Figures supplied by the client in the Nov 2026 website feedback. Change them here only.
const stats = [
  { value: 50000, suffix: '+', label: 'Projects Completed' },
  { value: 900, suffix: ' MW', label: 'Total System Size Designed' },
  { value: 80, suffix: '+', label: 'Active Clients' },
  { value: 100, suffix: '+', label: 'In-House Engineers' },
  { value: 97, suffix: '%', label: 'AHJ & Utility Approval Rate' },
  { value: 3, suffix: ' Regions', label: 'US, Canada & Europe' },
  { value: 6, suffix: ' hr', label: 'Average TAT' },
]

function AnimatedCount({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, target)
      setCount(Math.floor(current))
      if (current >= target) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <>
      {/* Screen readers get the final figure rather than the count-up. */}
      <span aria-hidden="true">
        {count.toLocaleString('en-US')}
        {suffix}
      </span>
      <span className="sr-only">
        {target.toLocaleString('en-US')}
        {suffix}
      </span>
    </>
  )
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-navy-900 border-t border-white/10" aria-labelledby="stats-heading" ref={ref}>
      <h2 id="stats-heading" className="sr-only">
        TriventX by the numbers
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Rows are centred, so the shorter last row sits in the middle at every width. */}
        <dl className="flex flex-wrap justify-center -m-2">
          {stats.map((stat) => (
            <div key={stat.label} className="basis-1/2 md:basis-1/4 p-2">
              <div className="h-full flex flex-col-reverse justify-end rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center">
                <dt className="text-xs sm:text-sm font-medium text-slate-300 leading-snug">{stat.label}</dt>
                <dd className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-primary-light mb-1.5 whitespace-nowrap">
                  <AnimatedCount target={stat.value} suffix={stat.suffix} active={isInView} />
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
