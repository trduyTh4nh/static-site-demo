import Link from 'next/link'
import { Button } from '../ui/button'


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Designing Tomorrow
          <span className="text-blue-600 block">Architecture</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          We create innovative and sustainable architectural solutions that stand the test of time.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">View Our Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}