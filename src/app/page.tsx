import { client } from "@/lib/sanity";
import { aboutQuery, projectsQuery } from "@/lib/queries";
import { About, Project } from "@/types";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

// Thêm revalidate cho trang chủ
export const revalidate = 60;

export default async function Home() {
  // Sử dụng Promise.all để fetch cả about và projects song song
  const [about, projects] = await Promise.all([
    client.fetch<About>(aboutQuery, {}, { next: { revalidate: 60 } }),
    client.fetch<Project[]>(projectsQuery, {}, { next: { revalidate: 60 } })
  ]);

  return (
    <main>
      <Hero />
      <AboutPreview about={about} />
      <ProjectsGrid projects={projects || []} limit={3} />
    </main>
  );
}