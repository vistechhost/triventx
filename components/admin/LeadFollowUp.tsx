'use client'

import { useState } from 'react'
import { CalendarClock, CheckCheck, Mail, MessageCircle, Phone, Save } from 'lucide-react'
import { markLeadContacted, updateLeadFollowUp } from '@/lib/actions/leads'
import { SITE_CONFIG } from '@/lib/data/site-config'
import { formatDate } from '@/lib/utils/format'
import { telHref, whatsappHref } from '@/lib/utils/contact'
import { useToast } from '@/components/ui/Toast'
import type { Lead } from '@/lib/types'

/** Local date as YYYY-MM-DD, `days` from today. */
export function isoDate(days = 0): string {
  const date = new Date()
  date.setDate(date.getDate() + days)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export function isFollowUpDue(lead: Lead): boolean {
  return Boolean(lead.nextFollowUp) && lead.nextFollowUp! <= isoDate() && lead.status !== 'closed'
}

type TemplateId = 'quote' | 'missing-info' | 'check-in' | 'review'

const TEMPLATES: { id: TemplateId; label: string }[] = [
  { id: 'quote', label: 'Send quote & timeline' },
  { id: 'missing-info', label: 'Ask for missing info / files' },
  { id: 'check-in', label: 'Check in (no reply yet)' },
  { id: 'review', label: 'Ask for a review' },
]

function buildEmail(template: TemplateId, lead: Lead, service: string): { subject: string; body: string } {
  const first = lead.name.split(' ')[0]
  const ref = lead.reference ? ` (${lead.reference})` : ''
  const where = lead.projectLocation ? ` in ${lead.projectLocation}` : ''
  const sign = `\n\nBest regards,\n${SITE_CONFIG.name}`

  switch (template) {
    case 'quote':
      return {
        subject: `Your ${service} quote${ref}`,
        body:
          `Hi ${first},\n\nThanks for sending your ${service} request${where}. Here is your quote and timeline:\n\n` +
          `- Price: \n- Delivery: \n- Included: \n\nReply to this email to confirm and we'll get started.` +
          sign,
      }
    case 'missing-info': {
      const failed = lead.failedAttachments?.length
        ? `\n\nThese files didn't upload, so please attach them to your reply: ${lead.failedAttachments.join(', ')}.`
        : ''
      return {
        subject: `A few details for your ${service} request${ref}`,
        body:
          `Hi ${first},\n\nThanks for your ${service} request${where}. To prepare your quote, could you send:\n\n` +
          `- Site address and utility\n- Roof or site photos\n- Equipment (modules, inverter, battery)\n- Any existing plans` +
          failed +
          sign,
      }
    }
    case 'check-in':
      return {
        subject: `Following up on your ${service} request${ref}`,
        body:
          `Hi ${first},\n\nJust checking in on your ${service} request from ${formatDate(lead.createdAt)}. ` +
          `Do you have any questions about the quote or timeline? Happy to set up a quick call.` +
          sign,
      }
    case 'review':
      return {
        subject: `Could you share a quick review?`,
        body:
          `Hi ${first},\n\nThanks for working with us on your ${service} project. ` +
          `Would you share two or three sentences about your experience? With your permission, we'd like to ` +
          `feature it on our website with your name, title, and company.` +
          sign,
      }
  }
}

interface LeadFollowUpProps {
  lead: Lead
  serviceName: string
  onUpdate: (changes: Partial<Lead>) => void
}

export function LeadFollowUp({ lead, serviceName, onUpdate }: LeadFollowUpProps) {
  const { showToast } = useToast()
  const [template, setTemplate] = useState<TemplateId>(lead.status === 'new' ? 'quote' : 'check-in')
  const [notes, setNotes] = useState(lead.notes ?? '')
  const [nextFollowUp, setNextFollowUp] = useState(lead.nextFollowUp ?? '')
  const [saving, setSaving] = useState(false)

  const email = buildEmail(template, lead, serviceName)
  const mailto = `mailto:${lead.email}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`
  const dirty = notes !== (lead.notes ?? '') || nextFollowUp !== (lead.nextFollowUp ?? '')

  const save = async () => {
    setSaving(true)
    try {
      await updateLeadFollowUp(lead.id, { notes, nextFollowUp })
      onUpdate({ notes, nextFollowUp })
      showToast('Follow-up saved.', 'success')
    } catch (error) {
      console.error('Could not save follow-up:', error)
      showToast('Could not save. Please try again.', 'error')
    } finally {
      setSaving(false)
    }
  }

  const markContacted = async () => {
    setSaving(true)
    // Defaults the next check-in to three days out when no date is set.
    const next = nextFollowUp && nextFollowUp > isoDate() ? nextFollowUp : isoDate(3)
    try {
      const lastContactedAt = await markLeadContacted(lead.id, next)
      setNextFollowUp(next)
      onUpdate({ status: 'contacted', lastContactedAt, nextFollowUp: next })
      showToast(`Marked contacted. Next follow-up ${formatDate(`${next}T00:00:00`)}.`, 'success')
    } catch (error) {
      console.error('Could not update lead:', error)
      showToast('Could not update. Please try again.', 'error')
    } finally {
      setSaving(false)
    }
  }

  const actionButton =
    'inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold text-text-primary hover:border-primary/40 hover:text-primary transition-colors'
  const primaryButton =
    'inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-dark px-3 py-2 text-sm font-semibold text-white transition-colors'
  // wa.me needs the country code, so only offer WhatsApp when the number includes one.
  const canWhatsApp = lead.phone.trim().startsWith('+') || lead.phone.replace(/\D/g, '').length >= 11

  return (
    <section className="rounded-2xl border border-border p-4 space-y-4" aria-label="Follow up">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Follow Up</p>
        {lead.lastContactedAt && (
          <p className="text-xs text-text-secondary">Last contacted {formatDate(lead.lastContactedAt)}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <select
          value={template}
          onChange={(e) => setTemplate(e.target.value as TemplateId)}
          className="flex-1 rounded-xl border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Email template"
        >
          {TEMPLATES.map((t) => (
            <option key={t.id} value={t.id}>{t.label}</option>
          ))}
        </select>
        <a href={mailto} className={primaryButton}>
          <Mail className="w-4 h-4" aria-hidden="true" />
          Write email
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        {lead.phone && (
          <a href={telHref(lead.phone)} className={actionButton}>
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call {lead.phone}
          </a>
        )}
        {lead.phone && canWhatsApp && (
          <a
            href={whatsappHref(lead.phone, `Hi ${lead.name.split(' ')[0]}, this is ${SITE_CONFIG.name} about your ${serviceName} request.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButton}
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            WhatsApp
          </a>
        )}
        <button type="button" onClick={markContacted} disabled={saving} className={`${actionButton} disabled:opacity-50`}>
          <CheckCheck className="w-4 h-4" aria-hidden="true" />
          Mark contacted
        </button>
      </div>

      <div className="grid sm:grid-cols-[1fr_auto] gap-3 items-end">
        <label className="block">
          <span className="block text-xs font-semibold text-text-secondary mb-1">Notes</span>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Call summary, quote sent, objections..."
            className="w-full rounded-xl border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
        <div className="space-y-2">
          <label className="block">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary mb-1">
              <CalendarClock className="w-3.5 h-3.5" aria-hidden="true" />
              Next follow-up
            </span>
            <input
              type="date"
              value={nextFollowUp}
              onChange={(e) => setNextFollowUp(e.target.value)}
              className="w-full rounded-xl border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          <button
            type="button"
            onClick={save}
            disabled={saving || !dirty}
            className={`${actionButton} w-full disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <Save className="w-4 h-4" aria-hidden="true" />
            Save
          </button>
        </div>
      </div>
    </section>
  )
}
