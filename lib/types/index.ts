import type { Timestamp } from 'firebase/firestore'

export type Service = {
  id: string
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  tat: string
  features: string[]
  heroImageUrl: string
  iconName: string
  order: number
  updatedAt: Timestamp
}

export type Lead = {
  id: string
  name: string
  email: string
  phone: string
  company?: string
  serviceInterest: string
  projectSize?: string
  message: string
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

export type TestimonialType = {
  id: string
  name: string
  title: string
  company: string
  content: string
  rating: number
  avatarUrl?: string
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

export type CaseStudy = {
  id: string
  title: string
  client: string
  location: string
  systemSize: string
  description: string
  imageUrl?: string
  tags: string[]
}
