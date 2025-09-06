'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex space-x-8">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                'text-gray-600 hover:text-gray-900 transition-colors',
                pathname === href && 'text-gray-900 font-medium'
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}