import type {
  Certification,
  LeadershipMember,
  Office,
  PostalAddress,
  VerifiedCaseStudy,
  VerifiedTestimonial,
} from '../types'

/**
 * Single source of truth for company details and any claim a visitor might
 * want to check. The navbar, footer, contact page, forms, and structured data
 * all read from here, so each value only ever needs changing once.
 *
 * Anything left as null or an empty list is hidden on the site. Only add values
 * that have been confirmed — do not fill these with placeholders.
 */

type SiteConfig = {
  name: string
  url: string
  /** International format, e.g. '+15125550123'. Displayed as +1 (512) 555-0123. */
  phone: string | null
  email: string | null
  /** Digits with country code. Shows the WhatsApp button when set. */
  whatsapp: string | null
  address: PostalAddress | null
  hours: { days: string; time: string }[]
  /** schema.org openingHours, kept in step with `hours`. */
  openingHours: string[]
  social: {
    linkedin: string
    facebook: string
    instagram: string
    twitter: string
  }
}

export const SITE_CONFIG: SiteConfig = {
  name: 'TriventX Energy LLP',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://triventxenergy.com',
  phone: null,
  email: 'hello@triventxenergy.com',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || null,
  address: null,
  hours: [
    { days: 'Monday – Friday', time: '8am – 10pm CT' },
    { days: 'Saturday', time: '9am – 5pm CT' },
    { days: 'Sunday', time: 'Emergency support only' },
  ],
  openingHours: ['Mo-Fr 08:00-22:00', 'Sa 09:00-17:00'],
  social: {
    linkedin: 'https://linkedin.com/company/triventxenergy',
    facebook: 'https://facebook.com/triventxenergy',
    instagram: 'https://instagram.com/triventxenergy',
    twitter: 'https://twitter.com/triventxenergy',
  },
}

/** What a visitor can expect after contacting us. Shown on the contact and thank-you pages. */
export const RESPONSE_TIMES = [
  {
    label: 'During business hours',
    target: 'Within 30 minutes',
    detail: 'An engineer reviews your request and replies with next steps.',
  },
  {
    label: 'Outside business hours',
    target: 'Next business morning',
    detail: 'Requests sent overnight or on Sunday are answered when we next open.',
  },
  {
    label: 'Your quote and timeline',
    target: 'In the first reply',
    detail: 'Once we have your project details, you get a transparent quote and delivery date.',
  },
]

/** Named leaders, shown on the About page once confirmed. */
export const LEADERSHIP: LeadershipMember[] = []

/** Add an entry only if the membership or certificate can be confirmed by the linked page. */
export const CERTIFICATIONS: Certification[] = []

/** Physical offices, shown on the About page once confirmed. */
export const OFFICES: Office[] = []

/**
 * Case studies and testimonials appear only with supporting evidence and the
 * client's permission. Each section stays hidden while its list is empty.
 */
export const CASE_STUDIES: VerifiedCaseStudy[] = []
export const TESTIMONIALS: VerifiedTestimonial[] = []
