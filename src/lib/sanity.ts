/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-09-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// Helper function để tạo URL hình ảnh
export const urlFor = (source : any) => {
  if (!source?.asset?._ref) return null
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const ref = source.asset._ref
  const [_file, id, extension] = ref.split('-')
  
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}.${extension}`
}