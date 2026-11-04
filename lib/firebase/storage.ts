import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage'
import { storage } from './client'
import type { LeadAttachment } from '../types'

export async function uploadImage(
  file: File,
  path: string
): Promise<{ url: string; path: string }> {
  const storageRef = ref(storage, path)
  const snapshot = await uploadBytes(storageRef, file)
  const url = await getDownloadURL(snapshot.ref)
  return { url, path: snapshot.ref.fullPath }
}

export async function deleteImage(path: string): Promise<void> {
  const storageRef = ref(storage, path)
  await deleteObject(storageRef)
}

export function generateImagePath(filename: string, folder = 'images'): string {
  const timestamp = Date.now()
  const sanitized = filename.replace(/[^a-zA-Z0-9.-]/g, '_')
  return `${folder}/${timestamp}_${sanitized}`
}

export function uploadLeadFile(
  leadId: string,
  file: File,
  index: number,
  onProgress?: (percent: number) => void
): Promise<LeadAttachment> {
  // The SDK retries for 10 minutes by default, which would leave the visitor waiting on a bad connection.
  storage.maxUploadRetryTime = 60_000

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
  const path = `lead-uploads/${leadId}/${index + 1}-${safeName}`
  // Browsers usually report no MIME type for DWG and other CAD files.
  const contentType = file.type || 'application/octet-stream'
  const task = uploadBytesResumable(ref(storage, path), file, {
    contentType,
    contentDisposition: `attachment; filename="${safeName}"`,
  })

  return new Promise((resolve, reject) => {
    task.on(
      'state_changed',
      (snapshot) => onProgress?.((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
      reject,
      () => resolve({ name: file.name, path, size: file.size, contentType })
    )
  })
}

export function getLeadFileUrl(path: string): Promise<string> {
  return getDownloadURL(ref(storage, path))
}
