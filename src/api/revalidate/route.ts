// src/app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const { secret, paths } = await request.json()

    // Verify secret
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate các paths được chỉ định
    if (paths && Array.isArray(paths)) {
      paths.forEach(path => revalidatePath(path))
    } else {
      // Revalidate mặc định
      revalidatePath('/')
      revalidatePath('/projects')
      revalidatePath('/about')
    }

    return NextResponse.json({ 
      success: true, 
      revalidated: true,
      timestamp: new Date().toISOString()
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error : any) {
    return NextResponse.json(
      { error: 'Revalidation failed', details: error.message },
      { status: 500 }
    )
  }
}