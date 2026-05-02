'use server'

import { getAdminDb } from '@/lib/firebase/admin'
import { revalidatePath } from 'next/cache'
import type { Service } from '@/lib/types'

export async function getServicesAction(): Promise<Service[]> {
  const db = getAdminDb()
  const snapshot = await db.collection('services').orderBy('order', 'asc').get()
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Service))
}

export async function getServiceBySlugAction(slug: string): Promise<Service | null> {
  const db = getAdminDb()
  const snapshot = await db.collection('services').where('slug', '==', slug).limit(1).get()
  if (snapshot.empty) return null
  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() } as Service
}

export async function updateServiceAction(id: string, data: Partial<Service>): Promise<void> {
  const db = getAdminDb()
  await db.collection('services').doc(id).update({
    ...data,
    updatedAt: new Date(),
  })
  revalidatePath('/services')
  revalidatePath(`/services/${data.slug}`)
  revalidatePath('/admin/services')
}

export async function seedServicesAction(services: Omit<Service, 'updatedAt'>[]): Promise<void> {
  const db = getAdminDb()
  const batch = db.batch()
  for (const service of services) {
    const ref = db.collection('services').doc(service.id)
    batch.set(ref, { ...service, updatedAt: new Date() })
  }
  await batch.commit()
}
