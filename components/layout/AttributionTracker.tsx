'use client'

import { useEffect } from 'react'
import { rememberAttribution } from '@/lib/utils/lead-session'

/** Records the visitor's landing page, referrer, and UTM tags so new leads show their source. */
export function AttributionTracker() {
  useEffect(() => {
    rememberAttribution()
  }, [])
  return null
}
