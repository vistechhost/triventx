import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { SOLAR_SERVICES } from '@/lib/data/services'
import { cn } from '@/lib/utils/cn'

// Shows where a service sits in the proposal → PTO project lifecycle
export function ServiceLifecycle({ currentSlug }: { currentSlug: string }) {
  const steps = [...SOLAR_SERVICES].sort((a, b) => a.order - b.order)

  return (
    <div className="card-base p-6 md:p-8">
      <p className="text-sm font-bold text-text-primary uppercase tracking-wide mb-1">
        Where This Fits in Your Project
      </p>
      <p className="text-sm text-text-secondary mb-6">
        End-to-end support from the initial customer proposal to final utility approval.
      </p>
      <ol className="space-y-2">
        {steps.map((step, i) => {
          const isCurrent = step.slug === currentSlug
          return (
            <li key={step.slug}>
              <Link
                href={`/services/${step.slug}`}
                aria-current={isCurrent ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-4 px-4 py-3 rounded-xl border transition-colors',
                  isCurrent
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/30 hover:bg-background-subtle',
                )}
              >
                <span
                  className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0',
                    isCurrent ? 'bg-primary text-white' : 'bg-background-subtle text-text-secondary',
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'text-sm font-semibold flex-1',
                    isCurrent ? 'text-primary' : 'text-text-primary',
                  )}
                >
                  {step.title}
                </span>
                {isCurrent && <CheckCircle className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />}
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
