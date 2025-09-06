import { client } from '@/lib/sanity'
import { projectsQuery } from '@/lib/queries'
import { Project } from '@/types'
import ProjectsGrid from '@/components/sections/ProjectsGrid'

export default async function ProjectsPage() {
  const projects = await client.fetch<Project[]>(projectsQuery)

  return (
    <main className="pt-20">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Projects</h1>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of innovative architectural designs and solutions.
          </p>
        </div>
      </section>
      
      <ProjectsGrid projects={projects || []} />
    </main>
  )
}