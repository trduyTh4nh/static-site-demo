import { Project } from '@/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectsGridProps {
  projects: Project[]
  title?: string
  limit?: number
}

export default function ProjectsGrid({ projects, title = "Featured Projects", limit }: ProjectsGridProps) {
  // Nếu không có projects, hiển thị thông báo
  if (!projects || projects.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
          <p className="text-gray-600">No projects available at the moment.</p>
        </div>
      </section>
    )
  }

  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card key={project._id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <Link href={`/projects/${project.slug?.current || '#'}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || '/images/placeholder-project.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.categories?.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        {limit && projects.length > limit && (
          <div className="text-center mt-12">
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Projects →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}