import type { Timestamp } from 'firebase/firestore'

export type ServiceCategory = 'solar' | 'other'

export type Service = {
  id: string
  slug: string
  title: string
  /** Compact label for menus and form options. Falls back to `title`. */
  shortTitle?: string
  category: ServiceCategory
  shortDescription: string
  longDescription: string
  tat: string
  features: string[]
  /** Image shown beside the "About This Service" copy. */
  heroImageUrl: string
  /** `contain` keeps drawings whole on a white sheet instead of cropping them. */
  heroImageFit?: 'cover' | 'contain'
  /** Image for the top of the page on services without an interactive visual. */
  heroVisualUrl?: string
  iconName: string
  order: number
  planIncludes?: string[]
  gallery?: { src: string; caption: string; fit?: 'cover' | 'contain' }[]
  galleryTitle?: string
  galleryDescription?: string
  updatedAt: Timestamp
}

export type LeadAttachment = {
  name: string
  path: string
  size: number
  contentType: string
}

export type Lead = {
  id: string
  name: string
  email: string
  phone: string
  company?: string
  serviceInterest: string
  projectVolume?: string
  projectLocation?: string
  /** Older leads only: replaced by projectVolume on the current form. */
  projectSize?: string
  message: string
  attachments?: LeadAttachment[]
  /** Names of files the visitor tried to attach but that failed to upload. */
  failedAttachments?: string[]
  /** Page the form was submitted from, e.g. /us. */
  source?: string
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  createdAt: Timestamp
}

export type SiteSettings = {
  heroHeadline: string
  heroSubheadline: string
  phone: string
  email: string
  address: string
  social: {
    linkedin: string
    facebook: string
    instagram: string
    twitter: string
  }
  footerTagline: string
  stats: {
    projects: number
    installers: number
    states: number
    avgTAT: string
  }
}

export type ImageAsset = {
  id: string
  url: string
  path: string
  filename: string
  size: number
  usedIn: string[]
  uploadedAt: Timestamp
}

export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export type FAQItem = {
  question: string
  answer: string
}

export type ProcessStep = {
  step: number
  title: string
  description: string
  icon: string
}

export type StatItem = {
  value: string
  label: string
  suffix?: string
}

/** A public link a visitor can follow to check a claim for themselves. */
export type EvidenceLink = {
  label: string
  url: string
}

export type VerifiedTestimonial = {
  id: string
  name: string
  title: string
  company: string
  location: string
  content: string
  /** When the client gave the quote, e.g. "March 2026". */
  givenOn: string
  /** Where the quote or the person can be checked: review page, LinkedIn, client site. */
  source: EvidenceLink
}

export type VerifiedCaseStudy = {
  id: string
  title: string
  /** Named only with the client's written permission. */
  client: string
  location: string
  /** Authority Having Jurisdiction or utility that approved the work. */
  ahj: string
  /** e.g. "March 2026" */
  completedOn: string
  systemSize: string
  type: string
  tag: string
  description: string
  outcomes: string[]
  /** Public permit record, client page, or published project page. */
  evidence: EvidenceLink
}

export type LeadershipMember = {
  name: string
  title: string
  bio: string
  linkedinUrl?: string
  /** Path under /public, e.g. /images/team/jane-doe.jpg */
  photoUrl?: string
}

export type Certification = {
  name: string
  fullName: string
  /** Membership directory or certificate page that confirms the claim. */
  verificationUrl: string
}

export type PostalAddress = {
  street: string
  city: string
  region: string
  postalCode: string
  country: string
}

export type Office = {
  city: string
  role: string
  address?: PostalAddress
}
