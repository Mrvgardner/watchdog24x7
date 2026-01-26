'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity/sanity.config'
import { redirect } from 'next/navigation'

export default function StudioPage() {
  // Check if Sanity is properly configured
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  
  if (!projectId || projectId === 'your-actual-project-id' || projectId === 'your-project-id-here') {
    redirect('/studio/setup')
  }

  return <NextStudio config={config} />
}
