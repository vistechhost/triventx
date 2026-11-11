'use client'

import { useMemo, useSyncExternalStore } from 'react'
import { Hash, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/data/site-config'
import { parseSubmittedRequest, readSubmittedRequestRaw } from '@/lib/utils/lead-session'

const subscribe = () => () => {}

// Shows the visitor what they sent, so they can check it and quote the reference later.
// Renders nothing if the page was opened directly or browser storage is blocked.
export function RequestSummary() {
  const raw = useSyncExternalStore(subscribe, readSubmittedRequestRaw, () => null)
  const request = useMemo(() => parseSubmittedRequest(raw), [raw])
  if (!request) return null

  const rows = [
    { label: 'Service', value: request.service },
    { label: 'Location', value: request.location },
    {
      label: 'Files',
      value:
        request.filesSent + request.filesFailed.length === 0
          ? 'None attached'
          : `${request.filesSent} received${request.filesFailed.length > 0 ? `, ${request.filesFailed.length} failed (${request.filesFailed.join(', ')})` : ''}`,
    },
  ]

  return (
    <div className="card-base p-6 md:p-8 mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <p className="font-heading font-bold text-xl text-text-primary">
          Thanks, {request.firstName}. Here&apos;s your request.
        </p>
        <p className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2 font-mono text-sm font-bold text-primary self-start">
          <Hash className="w-4 h-4" aria-hidden="true" />
          {request.reference}
        </p>
      </div>
      <dl className="grid sm:grid-cols-3 gap-4 mb-6">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-xs font-semibold text-text-secondary uppercase tracking-wide">{row.label}</dt>
            <dd className="text-sm font-medium text-text-primary mt-0.5 break-words">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="flex items-start gap-3 rounded-xl bg-background-subtle p-4 text-sm text-text-secondary leading-relaxed">
        <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
        <span>
          We&apos;ll reply to <strong className="text-text-primary">{request.email}</strong>.
          {SITE_CONFIG.email && (
            <>
              {' '}Add <strong className="text-text-primary">{SITE_CONFIG.email}</strong>
              {' '}to your contacts so our reply doesn&apos;t land in spam.
            </>
          )}{' '}
          Quote <strong className="text-text-primary">{request.reference}</strong> if you contact us about this project.
        </span>
      </p>
    </div>
  )
}
