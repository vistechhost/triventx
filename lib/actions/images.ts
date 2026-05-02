'use server'

import { getAdminDb } from '@/lib/firebase/admin'
import { revalidatePath } from 'next/cache'
import type { ImageAsset } from '@/lib/types'

export async function getImageAssetsAction(): Promise<ImageAsset[]> {
  const db = getAdminDb()
  const snapshot = await db.collection('images').orderBy('uploadedAt', 'desc').get()
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as ImageAsset))
}

export async function saveImageAssetAction(data: Omit<ImageAsset, 'id'>): Promise<string> {
  const db = getAdminDb()
  const ref = await db.collection('images').add(data)
  revalidatePath('/admin/images')
  return ref.id
}

export async function deleteImageAssetAction(id: string): Promise<void> {
  const db = getAdminDb()
  await db.collection('images').doc(id).delete()
  revalidatePath('/admin/images')
}
