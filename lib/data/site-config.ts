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
  /** International format, e.g. '+919286714828'. Displayed as +91 92867 14828. */
  phone: string | null
  email: string | null
  /** Digits with country code. Shows the WhatsApp button when set. */
  whatsapp: string | null
  address: PostalAddress | null
  hours: { days: string; time: string }[]
  /** schema.org openingHours, kept in step with `hours`. */
  openingHours: string[]
  /** Profile URLs. Leave null until the account is confirmed; null links are hidden. */
  social: {
    linkedin: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
  }
}

export const SITE_CONFIG: SiteConfig = {
  name: 'TriventX Energy LLP',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://triventxenergy.com',
  phone: '+919286714828',
  email: 'info@triventxenergy.com',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || null,
  address: {
    street: '3rd Floor, Dhaka Tower, GMS Road',
    city: 'Dehradun',
    region: 'Uttarakhand',
    postalCode: '248171',
    country: 'IN',
  },
  hours: [
    { days: 'Monday - Friday', time: '8am - 10pm CT' },
    { days: 'Saturday', time: '9am - 5pm CT' },
    { days: 'Sunday', time: 'Emergency support only' },
  ],
  openingHours: ['Mo-Fr 08:00-22:00', 'Sa 09:00-17:00'],
  social: {
    linkedin: 'https://www.linkedin.com/company/triventx-energy',
    // Not confirmed yet. The old handles were guesses (the LinkedIn one was wrong).
    facebook: null,
    instagram: null,
    twitter: null,
  },
}

/** Social profiles that are set, in display order. */
export const SOCIAL_PROFILES = (
  [
    { key: 'linkedin', label: 'LinkedIn', href: SITE_CONFIG.social.linkedin },
    { key: 'facebook', label: 'Facebook', href: SITE_CONFIG.social.facebook },
    { key: 'instagram', label: 'Instagram', href: SITE_CONFIG.social.instagram },
    { key: 'twitter', label: 'Twitter', href: SITE_CONFIG.social.twitter },
  ] as const
).flatMap((profile) => (profile.href ? [{ ...profile, href: profile.href }] : []))

/** What a visitor can expect after contacting us. Shown on the contact and thank-you pages. */
export const RESPONSE_TIMES = [
  {
    label: 'During business hours',
    target: 'Within 30 minutes',
    detail: 'An engineer replies with next steps.',
  },
  {
    label: 'Outside business hours',
    target: 'Next business morning',
    detail: 'Overnight and Sunday requests answered when we open.',
  },
  {
    label: 'Your quote and timeline',
    target: 'In the first reply',
    detail: 'A clear quote and delivery date.',
  },
]

/** Named leaders, shown on the About page once confirmed. */
export const LEADERSHIP: LeadershipMember[] = []

/** Add an entry only if the membership or certificate can be confirmed by the linked page. */
export const CERTIFICATIONS: Certification[] = []

/** Physical offices, shown on the About page once confirmed. */
export const OFFICES: Office[] = []

/**
 * Case studies need supporting evidence. Reviews need the reviewer's
 * permission; a `source` link (LinkedIn recommendation, Google review) is
 * optional but adds credibility. Each section stays hidden while its list is
 * empty. Example review:
 *
 *   { id: 'acme-1', name: 'Jane Smith', title: 'Operations Manager',
 *     company: 'Acme Solar', location: 'Austin, TX', rating: 5,
 *     content: 'Permit sets came back in hours and passed first time.',
 *     givenOn: 'November 2026' }
 */
export const CASE_STUDIES: VerifiedCaseStudy[] = []
export const TESTIMONIALS: VerifiedTestimonial[] = []

/**
 * Learning videos shown on the home page and the blog. Hidden while empty.
 * `youtubeId` is the part after `v=` in a YouTube link, e.g. 'dQw4w9WgXcQ'.
 */
export const LEARNING_VIDEOS: { title: string; youtubeId: string; description?: string }[] = []
