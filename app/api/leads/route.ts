import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getAdminDb } from '@/lib/firebase/admin'

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  company: z.string().optional(),
  serviceInterest: z.string().min(1),
  projectSize: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = leadSchema.parse(body)

    const db = getAdminDb()
    const ref = await db.collection('leads').add({
      ...data,
      status: 'new',
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true, id: ref.id }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: error.errors }, { status: 400 })
    }
    console.error('Lead submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
