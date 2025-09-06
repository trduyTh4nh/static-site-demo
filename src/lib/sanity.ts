import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-09-01',
  useCdn: process.env.NODE_ENV === 'production' ? false : true, 
  token: process.env.SANITY_API_TOKEN, 
  perspective: 'published',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => {
  if (!source?.asset?._ref) return null
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const ref = source.asset._ref
  const [_file, id, extension] = ref.split('-')
  
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}.${extension}`
}