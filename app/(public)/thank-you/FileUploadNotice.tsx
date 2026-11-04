'use client'

import { useSearchParams } from 'next/navigation'
import { AlertCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/data/site-config'

// The request is saved even if an attachment fails, so the visitor only needs to resend the files.
export function FileUploadNotice() {
  const searchParams = useSearchParams()
  if (searchParams.get('files') !== 'failed') return null

  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 mb-10"
    >
      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
      <p className="text-sm text-text-primary leading-relaxed">
        <strong>We received your request, but some files did not upload.</strong>{' '}
        {SITE_CONFIG.email ? (
          <>
            Please email them to{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold text-primary hover:underline">
              {SITE_CONFIG.email}
            </a>
            .
          </>
        ) : (
          'Reply to our first message with the files attached.'
        )}
      </p>
    </div>
  )
}
