import { About } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { Button } from '../ui/button'

interface AboutPreviewProps {
  about: About | null
}

export default function AboutPreview({ about }: AboutPreviewProps) {
  // Nếu không có dữ liệu about, ẩn component
  if (!about) {
    return null
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{about.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {about.content.substring(0, 200)}...
            </p>
            <Button asChild>
              <Link href="/about">Read More</Link>
            </Button>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            {about.image ? (
              <Image
                src={urlFor(about.image) || '/images/placeholder.jpg'}
                alt={about.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <span className="text-4xl">🏛️</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}