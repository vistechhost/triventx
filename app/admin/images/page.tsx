'use client'

import { useState, useEffect, useCallback } from 'react'
import { Upload, Trash2, Copy, Check, Image as ImageIcon } from 'lucide-react'
import { getImageAssetsAction, deleteImageAssetAction } from '@/lib/actions/images'
import { useToast } from '@/components/ui/Toast'
import { formatFileSize, formatDateTime } from '@/lib/utils/format'
import type { ImageAsset } from '@/lib/types'

export default function AdminImagesPage() {
  const [images, setImages] = useState<ImageAsset[]>([])
  const [loading, setLoading] = useState(true)
  const [dragging, setDragging] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const { showToast } = useToast()

  useEffect(() => {
    getImageAssetsAction()
      .then(setImages)
      .catch(() => setImages([]))
      .finally(() => setLoading(false))
  }, [])

  const handleCopyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
    showToast('URL copied to clipboard!', 'success')
  }

  const handleDelete = async (image: ImageAsset) => {
    if (!confirm(`Delete "${image.filename}"? This cannot be undone.`)) return
    try {
      await deleteImageAssetAction(image.id)
      setImages((prev) => prev.filter((i) => i.id !== image.id))
      showToast('Image deleted.', 'success')
    } catch {
      showToast('Failed to delete image.', 'error')
    }
  }

  const handleFiles = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return
      setUploading(true)
      try {
        const { uploadImage, generateImagePath } = await import('@/lib/firebase/storage')
        const { saveImageAssetAction } = await import('@/lib/actions/images')
        const results: ImageAsset[] = []
        for (const file of Array.from(files)) {
          const path = generateImagePath(file.name)
          const { url } = await uploadImage(file, path)
          const id = await saveImageAssetAction({
            url,
            path,
            filename: file.name,
            size: file.size,
            usedIn: [],
            uploadedAt: new Date() as unknown as ImageAsset['uploadedAt'],
          })
          results.push({ id, url, path, filename: file.name, size: file.size, usedIn: [], uploadedAt: new Date() as unknown as ImageAsset['uploadedAt'] })
        }
        setImages((prev) => [...results, ...prev])
        showToast(`${files.length} file(s) uploaded.`, 'success', 'Upload Complete')
      } catch {
        showToast('Upload failed. Check Firebase Storage configuration.', 'error')
      } finally {
        setUploading(false)
      }
    },
    [showToast]
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading font-bold text-2xl text-text-primary">Image Manager</h1>
        <p className="text-sm text-text-secondary mt-1">{images.length} images in storage</p>
      </div>

      {/* Upload zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          handleFiles(e.dataTransfer.files)
        }}
        className={`rounded-2xl border-2 border-dashed p-10 text-center transition-all ${
          dragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-background-subtle'
        }`}
        role="region"
        aria-label="Upload images by dragging and dropping"
      >
        {uploading ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            <p className="text-sm font-medium text-text-secondary">Uploading...</p>
          </div>
        ) : (
          <>
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Upload className="w-7 h-7 text-primary" />
            </div>
            <p className="font-semibold text-text-primary mb-2">Drag & drop images here</p>
            <p className="text-sm text-text-secondary mb-5">or</p>
            <label className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-xl cursor-pointer transition-colors">
              <Upload className="w-4 h-4" />
              Browse Files
              <input
                type="file"
                multiple
                accept="image/*"
                className="sr-only"
                onChange={(e) => handleFiles(e.target.files)}
                aria-label="Upload images"
              />
            </label>
            <p className="text-xs text-text-secondary mt-3">Supports JPG, PNG, WebP, GIF up to 10MB each</p>
          </>
        )}
      </div>

      {/* Image grid */}
      {loading ? (
        <div className="text-center py-12 text-text-secondary">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-3" />
          Loading images...
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-12 text-text-secondary bg-white rounded-2xl border border-border">
          <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No images uploaded yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((img) => (
            <div key={img.id} className="bg-white rounded-2xl border border-border overflow-hidden group hover:shadow-card transition-all">
              <div className="aspect-square bg-background-subtle relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt={img.filename}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => handleCopyUrl(img.id, img.url)}
                    className="p-2 bg-white rounded-lg text-text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Copy URL"
                  >
                    {copiedId === img.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => handleDelete(img)}
                    className="p-2 bg-white rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                    aria-label="Delete image"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-text-primary truncate" title={img.filename}>{img.filename}</p>
                <p className="text-[10px] text-text-secondary mt-0.5">{formatFileSize(img.size)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
