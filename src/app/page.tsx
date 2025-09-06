import { client } from '@/lib/sanity'
import { aboutQuery, projectsQuery } from '@/lib/queries'
import { About, Project } from '@/types'
import Hero from '@/components/sections/Hero'
import AboutPreview from '@/components/sections/AboutPreview'
import ProjectsGrid from '@/components/sections/ProjectsGrid'

export default async function Home() {
  const [about, projects] = await Promise.all([
    client.fetch<About>(aboutQuery),
    client.fetch<Project[]>(projectsQuery)
  ])

  return (
    <main>
      <Hero />
      <AboutPreview about={about} />
      <ProjectsGrid projects={projects || []} limit={3} />
    </main>
  )
}