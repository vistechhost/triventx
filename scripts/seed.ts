/**
 * Seed script — populates Firestore with initial data.
 * Run: npx ts-node --project tsconfig.scripts.json scripts/seed.ts
 */

import * as admin from 'firebase-admin'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { SERVICES_DATA, SITE_SETTINGS_DEFAULT } from '../lib/data/services'

dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY
  ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n')
  : undefined

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey,
    }),
  })
}

const db = admin.firestore()

async function seedServices() {
  console.log('Seeding services...')
  const batch = db.batch()
  for (const service of SERVICES_DATA) {
    const ref = db.collection('services').doc(service.id)
    batch.set(ref, { ...service, updatedAt: admin.firestore.FieldValue.serverTimestamp() })
  }
  await batch.commit()
  console.log(`✓ ${SERVICES_DATA.length} services seeded`)
}

async function seedSiteSettings() {
  console.log('Seeding site settings...')
  await db.collection('siteSettings').doc('main').set(SITE_SETTINGS_DEFAULT)
  console.log('✓ Site settings seeded')
}

async function seedSampleLeads() {
  console.log('Seeding sample leads...')
  const leads = [
    {
      name: 'Jake Morrison',
      email: 'jake@sunriseinstall.com',
      phone: '+1 (512) 555-0101',
      company: 'Sunrise Solar Installations',
      serviceInterest: 'solar-permit-design',
      projectSize: 'residential',
      message: 'Hi, we process about 30 residential permits per month and are looking for a reliable partner. Our current provider has inconsistent TATs. Looking to start ASAP.',
      status: 'new',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    {
      name: 'Leila Amin',
      email: 'leila.amin@vertexenergy.com',
      phone: '+1 (602) 555-0202',
      company: 'Vertex Energy Partners',
      serviceInterest: 'engineering-stamps',
      projectSize: 'commercial',
      message: 'We have a 450 kW commercial carport project in Phoenix. Need PE stamps for both electrical and structural. Can you handle Arizona?',
      status: 'contacted',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    },
    {
      name: 'Robert Tran',
      email: 'rtran@cleanpowergroup.com',
      phone: '+1 (415) 555-0303',
      company: 'Clean Power Group',
      serviceInterest: 'solar-sales-proposals',
      projectSize: 'light-commercial',
      message: "We're a sales-focused company doing 50+ proposals a month. Need high-quality, branded proposals that close. Interested in your proposal service. What's your pricing?",
      status: 'qualified',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    },
  ]

  const batch = db.batch()
  for (const lead of leads) {
    const ref = db.collection('leads').doc()
    batch.set(ref, lead)
  }
  await batch.commit()
  console.log(`✓ ${leads.length} sample leads seeded`)
}

async function main() {
  console.log('\n🌱 Starting TriventX Firestore seed...\n')
  await seedServices()
  await seedSiteSettings()
  await seedSampleLeads()
  console.log('\n✅ Seed complete!\n')
  process.exit(0)
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
