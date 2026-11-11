import type { LeadAttribution } from '../types'

// Browser storage can be blocked (private mode, strict settings), so every
// access is wrapped and a failure just means the data isn't available.

const ATTRIBUTION_KEY = 'tx-attribution'
const LAST_REQUEST_KEY = 'tx-last-request'

/** Saves where the visitor came from, once per browser session. */
export function rememberAttribution(): void {
  try {
    if (sessionStorage.getItem(ATTRIBUTION_KEY)) return
    const params = new URLSearchParams(window.location.search)
    let referrer: string | undefined
    if (document.referrer) {
      const url = new URL(document.referrer)
      // Internal navigation isn't a source.
      if (url.host !== window.location.host) referrer = url.origin + url.pathname
    }
    const attribution: LeadAttribution = {
      landingPage: window.location.pathname,
      referrer,
      utmSource: params.get('utm_source') ?? undefined,
      utmMedium: params.get('utm_medium') ?? undefined,
      utmCampaign: params.get('utm_campaign') ?? undefined,
    }
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution))
  } catch {
    // Storage unavailable.
  }
}

export function readAttribution(): LeadAttribution {
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY)
    if (!raw) return {}
    // Firestore rejects undefined values, so drop empty fields.
    return Object.fromEntries(
      Object.entries(JSON.parse(raw) as LeadAttribution).filter(([, value]) => typeof value === 'string' && value),
    )
  } catch {
    return {}
  }
}

/** What the thank-you page shows back to the visitor. */
export type SubmittedRequest = {
  reference: string
  firstName: string
  email: string
  service: string
  location: string
  filesSent: number
  filesFailed: string[]
}

export function saveSubmittedRequest(request: SubmittedRequest): void {
  try {
    sessionStorage.setItem(LAST_REQUEST_KEY, JSON.stringify(request))
  } catch {
    // Storage unavailable; the thank-you page still works without the summary.
  }
}

/** Raw JSON string, so React can compare snapshots by value. */
export function readSubmittedRequestRaw(): string | null {
  try {
    return sessionStorage.getItem(LAST_REQUEST_KEY)
  } catch {
    return null
  }
}

export function parseSubmittedRequest(raw: string | null): SubmittedRequest | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as SubmittedRequest
  } catch {
    return null
  }
}

/** Short code a visitor can quote, derived from the Firestore document ID. */
export function leadReference(leadId: string): string {
  return `TX-${leadId.slice(0, 6).toUpperCase()}`
}
