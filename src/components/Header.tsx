import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          🏛 ArchiTech
        </Link>
        <Navigation />
      </div>
    </header>
  )
}