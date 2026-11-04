'use client'

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
  leftIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helper, leftIcon, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold text-text-primary mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full rounded-xl border bg-surface px-4 py-3 text-sm text-text-primary',
              'placeholder:text-text-secondary/60 transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:border-primary',
              'disabled:bg-background-subtle disabled:cursor-not-allowed',
              error ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-border hover:border-text-secondary/40',
              leftIcon && 'pl-10',
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
        {helper && !error && <p className="mt-1.5 text-xs text-text-secondary">{helper}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helper?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helper, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold text-text-primary mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-xl border bg-surface px-4 py-3 text-sm text-text-primary',
            'placeholder:text-text-secondary/60 transition-all duration-200 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:border-primary',
            'disabled:bg-background-subtle disabled:cursor-not-allowed',
            error ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-border hover:border-text-secondary/40',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
        {helper && !error && <p className="mt-1.5 text-xs text-text-secondary">{helper}</p>}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helper?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helper, options, placeholder, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold text-text-primary mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={cn(
              'w-full rounded-xl border bg-surface px-4 py-3 text-sm text-text-primary',
              'transition-all duration-200 appearance-none cursor-pointer',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:border-primary',
              error ? 'border-red-400' : 'border-border hover:border-text-secondary/40',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" aria-hidden="true" />
        </div>
        {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
        {helper && !error && <p className="mt-1.5 text-xs text-text-secondary">{helper}</p>}
      </div>
    )
  }
)
Select.displayName = 'Select'
