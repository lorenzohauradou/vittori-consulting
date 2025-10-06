import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone } = body

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.upsert({
      where: { email },
      update: {
        firstName,
        lastName,
        phone,
        updatedAt: new Date(),
      },
      create: {
        firstName,
        lastName,
        email,
        phone,
      },
    })

    return NextResponse.json(
      { success: true, lead },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
