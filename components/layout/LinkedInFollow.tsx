import { Linkedin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/data/site-config'
import { cn } from '@/lib/utils/cn'

interface LinkedInFollowProps {
  /** `card` is a full call-to-action block; `button` is a single pill link. */
  variant?: 'card' | 'button'
  title?: string
  text?: string
  className?: string
}

export function LinkedInFollow({
  variant = 'button',
  title = 'Follow TriventX on LinkedIn',
  text = 'Project updates, code changes, and design tips.',
  className,
}: LinkedInFollowProps) {
  const href = SITE_CONFIG.social.linkedin
  if (!href) return null

  if (variant === 'button') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] hover:bg-[#004182] px-5 py-3 text-sm font-semibold text-white transition-colors',
          className,
        )}
      >
        <Linkedin className="w-4 h-4" aria-hidden="true" />
        Follow us on LinkedIn
      </a>
    )
  }

  return (
    <div className={cn('flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-border bg-surface p-6', className)}>
      <span className="w-12 h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center shrink-0">
        <Linkedin className="w-6 h-6 text-white" aria-hidden="true" />
      </span>
      <div className="flex-1">
        <p className="font-heading font-bold text-text-primary">{title}</p>
        <p className="text-sm text-text-secondary">{text}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] hover:bg-[#004182] px-5 py-2.5 text-sm font-semibold text-white transition-colors"
      >
        Follow
      </a>
    </div>
  )
}
