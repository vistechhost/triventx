'use client'

import { useState, useEffect, useTransition } from 'react'
import { Save } from 'lucide-react'
import { getSiteSettingsAction, updateSiteSettingsAction } from '@/lib/actions/site-settings'
import { Input, Textarea } from '@/components/ui/Input'
import { useToast } from '@/components/ui/Toast'
import type { SiteSettings } from '@/lib/types'
import { SITE_SETTINGS_DEFAULT } from '@/lib/data/services'

export default function AdminSiteSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>(SITE_SETTINGS_DEFAULT as SiteSettings)
  const [loading, setLoading] = useState(true)
  const [isPending, startTransition] = useTransition()
  const { showToast } = useToast()

  useEffect(() => {
    getSiteSettingsAction()
      .then(setSettings)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const update = (key: keyof SiteSettings, value: unknown) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const updateSocial = (key: keyof SiteSettings['social'], value: string) => {
    setSettings((prev) => ({ ...prev, social: { ...prev.social, [key]: value } }))
  }

  const updateStats = (key: keyof SiteSettings['stats'], value: string | number) => {
    setSettings((prev) => ({ ...prev, stats: { ...prev.stats, [key]: value } }))
  }

  const handleSave = () => {
    startTransition(async () => {
      try {
        await updateSiteSettingsAction(settings)
        showToast('Site settings updated. Changes are live.', 'success', 'Saved!')
      } catch {
        showToast('Failed to save settings.', 'error')
      }
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-text-primary">Site Settings</h1>
          <p className="text-sm text-text-secondary mt-1">Changes are reflected live after saving.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={isPending}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-semibold px-5 py-2.5 rounded-xl transition-all"
        >
          {isPending ? (
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : <Save className="w-4 h-4" />}
          {isPending ? 'Saving...' : 'Save All'}
        </button>
      </div>

      {/* Hero Content */}
      <section className="bg-white rounded-2xl border border-border p-6 space-y-4">
        <h2 className="font-heading font-semibold text-lg text-text-primary">Hero Section</h2>
        <Input
          label="Hero Headline"
          value={settings.heroHeadline}
          onChange={(e) => update('heroHeadline', e.target.value)}
        />
        <Textarea
          label="Hero Subheadline"
          value={settings.heroSubheadline}
          onChange={(e) => update('heroSubheadline', e.target.value)}
          rows={2}
        />
        <Textarea
          label="Footer Tagline"
          value={settings.footerTagline}
          onChange={(e) => update('footerTagline', e.target.value)}
          rows={2}
        />
      </section>

      {/* Contact Info */}
      <section className="bg-white rounded-2xl border border-border p-6 space-y-4">
        <h2 className="font-heading font-semibold text-lg text-text-primary">Contact Information</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="Phone" value={settings.phone} onChange={(e) => update('phone', e.target.value)} />
          <Input label="Email" value={settings.email} onChange={(e) => update('email', e.target.value)} />
        </div>
        <Textarea label="Address" value={settings.address} onChange={(e) => update('address', e.target.value)} rows={2} />
      </section>

      {/* Social Links */}
      <section className="bg-white rounded-2xl border border-border p-6 space-y-4">
        <h2 className="font-heading font-semibold text-lg text-text-primary">Social Media</h2>
        <Input label="LinkedIn URL" value={settings.social.linkedin} onChange={(e) => updateSocial('linkedin', e.target.value)} />
        <Input label="Facebook URL" value={settings.social.facebook} onChange={(e) => updateSocial('facebook', e.target.value)} />
        <Input label="Instagram URL" value={settings.social.instagram} onChange={(e) => updateSocial('instagram', e.target.value)} />
        <Input label="Twitter URL" value={settings.social.twitter} onChange={(e) => updateSocial('twitter', e.target.value)} />
      </section>

      {/* Stats */}
      <section className="bg-white rounded-2xl border border-border p-6 space-y-4">
        <h2 className="font-heading font-semibold text-lg text-text-primary">Homepage Stats</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            label="Total Projects"
            type="number"
            value={settings.stats.projects}
            onChange={(e) => updateStats('projects', parseInt(e.target.value) || 0)}
          />
          <Input
            label="Active Installers"
            type="number"
            value={settings.stats.installers}
            onChange={(e) => updateStats('installers', parseInt(e.target.value) || 0)}
          />
          <Input
            label="States Covered"
            type="number"
            value={settings.stats.states}
            onChange={(e) => updateStats('states', parseInt(e.target.value) || 0)}
          />
          <Input
            label="Average TAT"
            value={settings.stats.avgTAT}
            onChange={(e) => updateStats('avgTAT', e.target.value)}
          />
        </div>
      </section>
    </div>
  )
}
