import { Clock } from 'lucide-react'
import { RESPONSE_TIMES, SITE_CONFIG } from '@/lib/data/site-config'

export function ResponseTimes() {
  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-4">
        {RESPONSE_TIMES.map((item) => (
          <div key={item.label} className="card-base p-5 text-left">
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1">{item.label}</p>
            <p className="font-heading font-bold text-lg text-primary mb-2">{item.target}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-text-secondary">
        <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
        <span className="font-semibold text-text-primary">Business hours:</span>
        {SITE_CONFIG.hours.map((h) => `${h.days}: ${h.time}`).join(' · ')}
      </p>
    </div>
  )
}
