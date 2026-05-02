import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  orderBy,
  limit,
  where,
  type DocumentData,
  type QueryConstraint,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './client'
import type { Service, Lead, SiteSettings, ImageAsset } from '../types'

// Services
export async function getServices(): Promise<Service[]> {
  const q = query(collection(db, 'services'), orderBy('order', 'asc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Service))
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const q = query(collection(db, 'services'), where('slug', '==', slug), limit(1))
  const snapshot = await getDocs(q)
  if (snapshot.empty) return null
  const d = snapshot.docs[0]
  return { id: d.id, ...d.data() } as Service
}

export async function updateService(id: string, data: Partial<Service>): Promise<void> {
  await updateDoc(doc(db, 'services', id), { ...data, updatedAt: serverTimestamp() })
}

// Site Settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  const d = await getDoc(doc(db, 'siteSettings', 'main'))
  if (!d.exists()) return null
  return d.data() as SiteSettings
}

export async function updateSiteSettings(data: Partial<SiteSettings>): Promise<void> {
  await setDoc(doc(db, 'siteSettings', 'main'), data, { merge: true })
}

// Leads
export async function createLead(data: Omit<Lead, 'id' | 'createdAt' | 'status'>): Promise<string> {
  const ref = await addDoc(collection(db, 'leads'), {
    ...data,
    status: 'new',
    createdAt: serverTimestamp(),
  })
  return ref.id
}

export async function getLeads(constraints: QueryConstraint[] = []): Promise<Lead[]> {
  const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'), ...constraints)
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Lead))
}

export async function updateLeadStatus(id: string, status: Lead['status']): Promise<void> {
  await updateDoc(doc(db, 'leads', id), { status })
}

// Images
export async function saveImageAsset(data: Omit<ImageAsset, 'id'>): Promise<string> {
  const ref = await addDoc(collection(db, 'images'), data)
  return ref.id
}

export async function getImageAssets(): Promise<ImageAsset[]> {
  const q = query(collection(db, 'images'), orderBy('uploadedAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as ImageAsset))
}

export async function deleteImageAsset(id: string): Promise<void> {
  await deleteDoc(doc(db, 'images', id))
}

export async function getDocumentData<T extends DocumentData>(
  collectionName: string,
  docId: string
): Promise<T | null> {
  const d = await getDoc(doc(db, collectionName, docId))
  if (!d.exists()) return null
  return { id: d.id, ...d.data() } as unknown as T
}
