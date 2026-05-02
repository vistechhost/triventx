import { type ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full mb-4',
        'px-4 py-1.5',
        className
      )}
      style={{ backgroundColor: 'rgba(255, 138, 0, 0.1)' }}
    >
      {children}
    </span>
  )
}
