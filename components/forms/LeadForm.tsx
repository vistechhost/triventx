'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight } from 'lucide-react'
import { Input, Select, Textarea } from '@/components/ui/Input'
import { useToast } from '@/components/ui/Toast'
import { FileUpload } from '@/components/forms/FileUpload'
import { SERVICE_OPTIONS } from '@/lib/data/services'
import { RESPONSE_TIMES, SITE_CONFIG } from '@/lib/data/site-config'
import { readAttribution, saveSubmittedRequest } from '@/lib/utils/lead-session'

const schema = z.object({
  name: z.string().trim().min(2, 'Enter your full name'),
  // Optional so homeowners can ask for a quote too.
  company: z.string().trim().max(200),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z
    .string()
    .trim()
    .refine((value) => value.replace(/\D/g, '').length >= 7, 'Enter a valid phone number'),
  serviceInterest: z.string().min(1, 'Select the service you need'),
  projectVolume: z.string().min(1, 'Select your project volume'),
  projectLocation: z.string().trim().min(2, 'Enter the city, state, or AHJ for this project'),
  message: z.string().trim().max(5000, 'Keep your message under 5,000 characters'),
  // Honeypot: hidden from people, so only bots fill it in.
  website: z.string().optional(),
})

type LeadFormData = z.infer<typeof schema>

const VOLUME_OPTIONS = [
  { value: 'single-project', label: 'Single project' },
  { value: '2-10-per-month', label: '2–10 projects per month' },
  { value: '11-50-per-month', label: '11–50 projects per month' },
  { value: '51-100-per-month', label: '51–100 projects per month' },
  { value: '100-plus-per-month', label: '100+ projects per month' },
]

export function LeadForm({ defaultService = '' }: { defaultService?: string }) {
  const router = useRouter()
  const uid = useId()
  const { showToast } = useToast()
  const [files, setFiles] = useState<File[]>([])
  const [progress, setProgress] = useState<Record<number, number>>({})

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(schema),
    defaultValues: { serviceInterest: defaultService, projectVolume: '', company: '', message: '', website: '' },
  })

  // Overall upload progress, weighted by file size.
  const totalBytes = files.reduce((sum, file) => sum + file.size, 0)
  const uploadPercent =
    totalBytes > 0
      ? Math.round(files.reduce((sum, file, i) => sum + file.size * (progress[i] ?? 0), 0) / totalBytes)
      : 0

  const onSubmit = async ({ website, ...data }: LeadFormData) => {
    // A filled honeypot means a bot: skip saving but behave as if it worked.
    if (website) {
      router.push('/thank-you')
      return
    }
    try {
      // Firebase is loaded on submit so it doesn't weigh down every page with this form.
      const { submitLead } = await import('@/lib/actions/leads')
      const { reference, failedFiles } = await submitLead(
        { ...data, source: window.location.pathname, attribution: readAttribution() },
        files,
        (index, percent) => setProgress((prev) => ({ ...prev, [index]: percent })),
      )
      saveSubmittedRequest({
        reference,
        firstName: data.name.split(' ')[0],
        email: data.email,
        service: SERVICE_OPTIONS.find((option) => option.value === data.serviceInterest)?.label ?? data.serviceInterest,
        location: data.projectLocation,
        filesSent: files.length - failedFiles.length,
        filesFailed: failedFiles,
      })
      router.push(failedFiles.length > 0 ? '/thank-you?files=failed' : '/thank-you')
    } catch (error) {
      console.error('Lead submission failed:', error)
      showToast(
        SITE_CONFIG.email
          ? `Something went wrong. Please try again or email ${SITE_CONFIG.email}.`
          : 'Something went wrong. Please try again.',
        'error',
        'Submission Failed',
      )
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative space-y-5">
      {/* Honeypot field, kept off-screen and out of the tab order. */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          id={`${uid}-name`}
          label="Full Name *"
          autoComplete="name"
          placeholder="Jane Smith"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          id={`${uid}-company`}
          label="Company"
          autoComplete="organization"
          placeholder="Optional for homeowners"
          error={errors.company?.message}
          {...register('company')}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          id={`${uid}-email`}
          label="Email *"
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          id={`${uid}-phone`}
          label="Phone Number *"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Select
          id={`${uid}-service`}
          label="Service Required *"
          options={SERVICE_OPTIONS}
          placeholder="Select a service..."
          error={errors.serviceInterest?.message}
          {...register('serviceInterest')}
        />
        <Select
          id={`${uid}-volume`}
          label="Project Volume *"
          options={VOLUME_OPTIONS}
          placeholder="Select your volume..."
          error={errors.projectVolume?.message}
          {...register('projectVolume')}
        />
      </div>
      <Input
        id={`${uid}-location`}
        label="Project Location *"
        placeholder="e.g. Austin, TX or Toronto, ON"
        helper="Tells us which permit, code, and utility requirements apply."
        error={errors.projectLocation?.message}
        {...register('projectLocation')}
      />
      <Textarea
        id={`${uid}-message`}
        label="Message"
        placeholder="Any additional requirements — system size, equipment, timeline..."
        rows={4}
        error={errors.message?.message}
        {...register('message')}
      />

      <FileUpload files={files} onChange={setFiles} progress={progress} disabled={isSubmitting} />

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
            {files.length > 0 ? `Uploading your files... ${uploadPercent}%` : 'Sending...'}
          </>
        ) : (
          <>
            Submit Project Request
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-xs text-text-secondary text-center">
        We reply {RESPONSE_TIMES[0].target.toLowerCase()} during business hours, and use your details
        and files only to respond to this request.{' '}
        <Link href="/terms" className="text-primary hover:underline">
          Service Terms
        </Link>
      </p>
    </form>
  )
}
