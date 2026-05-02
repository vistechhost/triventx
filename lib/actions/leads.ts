'use server'

import { getAdminDb } from '@/lib/firebase/admin'
import { revalidatePath } from 'next/cache'
import type { Lead } from '@/lib/types'

interface CreateLeadData {
  name: string
  email: string
  phone: string
  company?: string
  serviceInterest: string
  projectSize?: string
  message: string
}

export async function submitLead(data: CreateLeadData): Promise<{ id: string }> {
  const db = getAdminDb()

  const leadData: Omit<Lead, 'id'> = {
    ...data,
    status: 'new',
    createdAt: new Date() as unknown as Lead['createdAt'],
  }

  const ref = await db.collection('leads').add(leadData)
  revalidatePath('/admin/leads')
  revalidatePath('/admin')

  return { id: ref.id }
}

export async function updateLeadStatus(id: string, status: Lead['status']): Promise<void> {
  const db = getAdminDb()
  await db.collection('leads').doc(id).update({ status })
  revalidatePath('/admin/leads')
}

export async function getLeadsAction(): Promise<Lead[]> {
  const db = getAdminDb()
  const snapshot = await db
    .collection('leads')
    .orderBy('createdAt', 'desc')
    .limit(100)
    .get()

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  } as Lead))
}

export async function getRecentLeadsAction(limitCount = 5): Promise<Lead[]> {
  const db = getAdminDb()
  const snapshot = await db
    .collection('leads')
    .orderBy('createdAt', 'desc')
    .limit(limitCount)
    .get()

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  } as Lead))
}
