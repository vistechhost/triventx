'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, MapPin, Clock } from 'lucide-react'

interface StatItem {
  icon: typeof TrendingUp
  value: number
  suffix: string
  label: string
  description: string
  color: string
  bg: string
}

const stats: StatItem[] = [
  {
    icon: TrendingUp,
    value: 10000,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Plan sets, proposals & stamps delivered',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: MapPin,
    value: 50,
    suffix: '',
    label: 'US States',
    description: 'AHJ coverage & PE stamps',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Clock,
    value: 6,
    suffix: 'hr',
    label: 'Average TAT',
    description: 'Permit design turnaround',
    color: 'text-primary-dark',
    bg: 'bg-primary/10',
  },
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
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-background" aria-labelledby="stats-heading" ref={ref}>
      <div className="container-xl">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4"
            style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
          >
            By the Numbers
          </span>
          <h2 id="stats-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The Scale of Our Impact
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Less paperwork for installers. More time on the roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base p-8 text-center sm:last:col-span-2 lg:last:col-span-1 group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <p className={`font-heading font-bold text-4xl md:text-5xl ${stat.color} mb-2`}>
                <AnimatedCount target={stat.value} suffix={stat.suffix} active={isInView} />
              </p>
              <p className="font-semibold text-text-primary text-lg mb-2">{stat.label}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
