'use client'

import { useState, useEffect, useTransition } from 'react'
import { Plus, Minus, Save, ChevronDown, ChevronUp, FileText } from 'lucide-react'
import { getServicesAction, updateServiceAction } from '@/lib/actions/services'
import { Input, Textarea } from '@/components/ui/Input'
import { useToast } from '@/components/ui/Toast'
import type { Service } from '@/lib/types'
import { SERVICES_DATA } from '@/lib/data/services'

function ServiceEditor({ service }: { service: Omit<Service, 'updatedAt'> }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    title: service.title,
    shortDescription: service.shortDescription,
    longDescription: service.longDescription,
    tat: service.tat,
    features: [...service.features],
  })
  const [isPending, startTransition] = useTransition()
  const { showToast } = useToast()

  const handleSave = () => {
    startTransition(async () => {
      try {
        await updateServiceAction(service.id, form)
        showToast(`${service.title} updated successfully.`, 'success', 'Saved!')
      } catch {
        showToast('Failed to save. Please try again.', 'error', 'Error')
      }
    })
  }

  const addFeature = () => setForm((f) => ({ ...f, features: [...f.features, ''] }))
  const removeFeature = (i: number) => setForm((f) => ({ ...f, features: f.features.filter((_, idx) => idx !== i) }))
  const updateFeature = (i: number, value: string) =>
    setForm((f) => ({ ...f, features: f.features.map((feat, idx) => (idx === i ? value : feat)) }))

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-background-subtle transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div className="text-left">
            <p className="font-semibold text-text-primary">{service.title}</p>
            <p className="text-xs text-text-secondary">/{service.slug} · {service.tat} TAT</p>
          </div>
        </div>
        {open ? <ChevronUp className="w-5 h-5 text-text-secondary" /> : <ChevronDown className="w-5 h-5 text-text-secondary" />}
      </button>

      {open && (
        <div className="border-t border-border p-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              label="Title"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            />
            <Input
              label="Slug (readonly)"
              value={service.slug}
              readOnly
              disabled
            />
          </div>
          <Input
            label="TAT"
            value={form.tat}
            onChange={(e) => setForm((f) => ({ ...f, tat: e.target.value }))}
          />
          <Textarea
            label="Short Description"
            value={form.shortDescription}
            onChange={(e) => setForm((f) => ({ ...f, shortDescription: e.target.value }))}
            rows={2}
          />
          <Textarea
            label="Long Description"
            value={form.longDescription}
            onChange={(e) => setForm((f) => ({ ...f, longDescription: e.target.value }))}
            rows={6}
          />

          {/* Features */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-text-primary">Features</label>
              <button
                onClick={addFeature}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Feature
              </button>
            </div>
            <div className="space-y-2">
              {form.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    value={feature}
                    onChange={(e) => updateFeature(i, e.target.value)}
                    className="flex-1 rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                    aria-label={`Feature ${i + 1}`}
                  />
                  <button
                    onClick={() => removeFeature(i)}
                    className="p-2 text-text-secondary hover:text-red-500 transition-colors"
                    aria-label={`Remove feature ${i + 1}`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleSave}
              disabled={isPending}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-semibold px-6 py-2.5 rounded-xl transition-all"
            >
              {isPending ? (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <Save className="w-4 h-4" />
              )}
              {isPending ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Omit<Service, 'updatedAt'>[]>(SERVICES_DATA)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getServicesAction()
      .then((data) => {
        if (data.length > 0) setServices(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading font-bold text-2xl text-text-primary">Services</h1>
        <p className="text-sm text-text-secondary mt-1">Edit service content. Changes are applied instantly with cache revalidation.</p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-text-secondary">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-3" />
          Loading services...
        </div>
      ) : (
        <div className="space-y-3">
          {services.map((service) => (
            <ServiceEditor key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}
