'use server'

import { getAdminDb } from '@/lib/firebase/admin'
import { revalidatePath } from 'next/cache'
import type { SiteSettings } from '@/lib/types'
import { SITE_SETTINGS_DEFAULT } from '@/lib/data/services'

export async function getSiteSettingsAction(): Promise<SiteSettings> {
  const db = getAdminDb()
  const doc = await db.collection('siteSettings').doc('main').get()
  if (!doc.exists) return SITE_SETTINGS_DEFAULT as SiteSettings
  return doc.data() as SiteSettings
}

export async function updateSiteSettingsAction(data: Partial<SiteSettings>): Promise<void> {
  const db = getAdminDb()
  await db.collection('siteSettings').doc('main').set(data, { merge: true })
  revalidatePath('/')
  revalidatePath('/admin/site-settings')
}
