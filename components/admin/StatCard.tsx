import { type ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon: ReactNode
  trend?: { value: number; label: string }
  color?: 'primary' | 'secondary' | 'accent' | 'purple'
  className?: string
}

const colorMap = {
  primary: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
  secondary: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20' },
  accent: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
}

export function StatCard({ title, value, icon, trend, color = 'primary', className }: StatCardProps) {
  const colors = colorMap[color]

  return (
    <div className={cn('bg-white rounded-2xl border border-border p-6 shadow-card', className)}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">{title}</p>
        </div>
        <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', colors.bg, `border ${colors.border}`)}>
          <span className={colors.text}>{icon}</span>
        </div>
      </div>
      <p className="font-heading font-bold text-3xl text-text-primary">{value}</p>
      {trend && (
        <div className="flex items-center gap-1.5 mt-2">
          {trend.value >= 0 ? (
            <TrendingUp className="w-4 h-4 text-accent" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span className={cn('text-xs font-semibold', trend.value >= 0 ? 'text-accent' : 'text-red-500')}>
            {trend.value >= 0 ? '+' : ''}{trend.value}%
          </span>
          <span className="text-xs text-text-secondary">{trend.label}</span>
        </div>
      )}
    </div>
  )
}
