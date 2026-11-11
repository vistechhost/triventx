'use client'

import { useId, useRef, useState } from 'react'
import { CheckCircle, FileText, UploadCloud, X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

// Keep the extension list and size limit in step with storage.rules.
const ALLOWED_EXTENSIONS = [
  'pdf', 'dwg', 'dxf', 'jpg', 'jpeg', 'png', 'heic', 'heif', 'webp', 'tif', 'tiff',
  'kmz', 'kml', 'zip', 'csv', 'xls', 'xlsx', 'doc', 'docx',
]
const MAX_FILE_MB = 25
const MAX_FILES = 10

// Files that let us quote and start without a back-and-forth.
const HELPFUL_FILES = ['Roof or site photos', 'Recent utility bill', 'Equipment datasheets', 'Existing plans or surveys']

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

interface FileUploadProps {
  files: File[]
  onChange: (files: File[]) => void
  /** Upload progress per file, keyed by its position in `files`, 0–100. */
  progress: Record<number, number>
  disabled?: boolean
}

export function FileUpload({ files, onChange, progress, disabled }: FileUploadProps) {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const addFiles = (incoming: File[]) => {
    const next = [...files]
    const problems: string[] = []

    for (const file of incoming) {
      const extension = file.name.split('.').pop()?.toLowerCase() ?? ''
      if (!ALLOWED_EXTENSIONS.includes(extension)) {
        problems.push(`${file.name}: this file type isn't supported.`)
      } else if (file.size > MAX_FILE_MB * 1024 * 1024) {
        problems.push(`${file.name}: larger than ${MAX_FILE_MB} MB.`)
      } else if (next.some((f) => f.name === file.name && f.size === file.size)) {
        continue
      } else if (next.length >= MAX_FILES) {
        problems.push(`${file.name}: you can attach up to ${MAX_FILES} files.`)
      } else {
        next.push(file)
      }
    }

    setErrors(problems)
    onChange(next)
  }

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-semibold text-text-primary mb-1">
        Project Files <span className="font-normal text-text-secondary">(optional, speeds up your quote)</span>
      </label>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
        {HELPFUL_FILES.map((item) => (
          <li key={item} className="flex items-center gap-1.5 text-xs text-text-secondary">
            <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <div
        onDragOver={(e) => {
          e.preventDefault()
          if (!disabled) setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          if (!disabled) addFiles(Array.from(e.dataTransfer.files))
        }}
        className={cn(
          'relative rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors focus-within:border-primary',
          dragging ? 'border-primary bg-primary/5' : 'border-border hover:border-text-secondary/40',
          disabled && 'opacity-60',
        )}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          multiple
          disabled={disabled}
          accept={ALLOWED_EXTENSIONS.map((ext) => `.${ext}`).join(',')}
          onChange={(e) => {
            addFiles(Array.from(e.target.files ?? []))
            // Clearing the input lets the same file be chosen again after removing it.
            e.target.value = ''
          }}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
        />
        <UploadCloud className="w-7 h-7 text-primary mx-auto mb-2" aria-hidden="true" />
        <p className="text-sm font-semibold text-text-primary">Drag files here or click to browse</p>
        <p className="mt-1 text-xs text-text-secondary">
          PDF, DWG, KMZ, ZIP, Excel, and photos (incl. HEIC). Up to {MAX_FILES} files, {MAX_FILE_MB} MB each.
        </p>
      </div>

      {errors.length > 0 && (
        <ul className="mt-2 space-y-1" role="alert">
          {errors.map((error) => (
            <li key={error} className="text-xs text-red-500">{error}</li>
          ))}
        </ul>
      )}

      {files.length > 0 && (
        <p className="mt-3 text-xs text-text-secondary" aria-live="polite">
          {files.length} of {MAX_FILES} files attached · {formatSize(files.reduce((sum, f) => sum + f.size, 0))}
        </p>
      )}

      {files.length > 0 && (
        <ul className="mt-2 space-y-2">
          {files.map((file, index) => {
            const percent = progress[index]
            return (
              <li
                key={`${file.name}-${file.size}`}
                className="relative overflow-hidden flex items-center gap-3 rounded-lg border border-border bg-background-subtle px-3 py-2"
              >
                {percent !== undefined && (
                  <span
                    className="absolute inset-y-0 left-0 bg-primary/10 transition-[width]"
                    style={{ width: `${percent}%` }}
                    aria-hidden="true"
                  />
                )}
                <FileText className="relative w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <span className="relative flex-1 min-w-0 truncate text-sm text-text-primary">{file.name}</span>
                <span className="relative text-xs text-text-secondary shrink-0">
                  {percent === undefined ? formatSize(file.size) : percent >= 100 ? 'Uploaded' : `${Math.round(percent)}%`}
                </span>
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => onChange(files.filter((f) => f !== file))}
                  className="relative p-1 rounded text-text-secondary hover:text-red-500 disabled:opacity-40 transition-colors"
                  aria-label={`Remove ${file.name}`}
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
