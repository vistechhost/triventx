'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { useToast } from '@/components/ui/Toast'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { submitLead } from '@/lib/actions/leads'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  company: z.string().optional(),
  serviceInterest: z.string().min(1, 'Please select a service'),
  projectSize: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'solar-sales-proposals', label: 'Solar Sales Proposals' },
  { value: 'site-surveys-remote-assessments', label: 'Site Surveys & Remote Assessments' },
  { value: 'solar-permit-design', label: 'Solar Permit Design' },
  { value: 'engineering-stamps', label: 'PE Review & Stamping' },
  { value: 'solar-permitting-services', label: 'Solar Permitting Services' },
  { value: 'interconnection-services', label: 'Interconnection Services' },
  { value: 'as-built-drawings', label: 'As-Built Drawings' },
  { value: 'pto-support', label: 'PTO Support' },
  { value: 'multiple', label: 'Multiple Services' },
]

const projectSizeOptions = [
  { value: '', label: 'Select project size...' },
  { value: 'residential', label: 'Residential (< 25 kW)' },
  { value: 'light-commercial', label: 'Light Commercial (25 – 200 kW)' },
  { value: 'commercial', label: 'Commercial (200 kW – 1 MW)' },
  { value: 'utility', label: 'Utility Scale (> 1 MW)' },
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { showToast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      await submitLead(data)
      setSubmitted(true)
      reset()
      showToast("We'll respond within 30 minutes!", 'success', 'Message Sent!')
    } catch {
      showToast('Something went wrong. Please try again or call us directly.', 'error', 'Submission Failed')
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-12 gap-4">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-accent" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-text-primary">Message Received!</h3>
        <p className="text-text-secondary max-w-sm">
          Our team will review your project and respond within 30 minutes during business hours.
          For urgent requests, call us directly at{' '}
          <a href="tel:+18882476535" className="text-primary font-semibold">+1 (888) 247-6535</a>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-semibold text-primary hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Full Name *"
          placeholder="Jane Smith"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email Address *"
          type="email"
          placeholder="jane@company.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Phone Number *"
          type="tel"
          placeholder="+1 (555) 000-0000"
          error={errors.phone?.message}
          {...register('phone')}
        />
        <Input
          label="Company Name"
          placeholder="Your Solar Company"
          error={errors.company?.message}
          {...register('company')}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Select
          label="Service Interested In *"
          options={serviceOptions.filter((o) => o.value !== '')}
          placeholder="Select a service..."
          error={errors.serviceInterest?.message}
          {...register('serviceInterest')}
        />
        <Select
          label="Project Size"
          options={projectSizeOptions.filter((o) => o.value !== '')}
          placeholder="Select project size..."
          {...register('projectSize')}
        />
      </div>
      <Textarea
        label="Project Details *"
        placeholder="Tell us about your project — location, system size, timeline, and any specific requirements..."
        rows={5}
        error={errors.message?.message}
        {...register('message')}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-glow-primary"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-xs text-text-secondary text-center">
        By submitting this form you agree to our{' '}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
        We never share your information with third parties.
      </p>
    </form>
  )
}
