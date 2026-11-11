import type { PostalAddress } from '../types'

/**
 * Formats North American numbers as +1 (512) 555-0123 and Indian mobiles as
 * +91 92867 14828; other numbers are shown as entered.
 */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 11 && digits.startsWith('1')) {
    return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`
  }
  if (digits.length === 12 && digits.startsWith('91')) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`
  }
  return phone
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, '')}`
}

export function whatsappHref(number: string, message: string): string {
  return `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}

export function addressLines(address: PostalAddress): [string, string] {
  return [address.street, `${address.city}, ${address.region} ${address.postalCode}`]
}
