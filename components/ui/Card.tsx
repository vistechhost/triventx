import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'none'
}

export function Card({ children, hover = false, padding = 'md', className, ...props }: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-border',
        'shadow-[0_4px_24px_rgba(10,14,26,0.06)]',
        hover && 'hover:shadow-[0_8px_48px_rgba(10,14,26,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer',
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className, ...props }: CardHeaderProps) {
  return (
    <h3 className={cn('text-xl font-bold text-text-primary font-heading', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardContent({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn('text-text-secondary', className)} {...props}>
      {children}
    </div>
  )
}
