// src/app/page.tsx
import { client } from "@/lib/sanity";
import { aboutQuery, projectsQuery } from "@/lib/queries";
import { About, Project } from "@/types";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

// QUAN TRỌNG: Đặt revalidate = 0 để luôn fetch mới
export const revalidate = 0;

export default async function Home() {
  // TRÊN VERCEL: Thêm cache: 'no-store' để bypass cache
  const [about, projects] = await Promise.all([
    client.fetch<About>(aboutQuery, {}, { cache: "no-store" }),
    client.fetch<Project[]>(projectsQuery, {}, { cache: "no-store" }),
  ]);

  const timestamp = new Date().toLocaleTimeString();

  return (
    <main>
      <Hero />
      <div className="fixed top-20 right-4 bg-blue-500 text-white p-2 rounded text-sm">
        Generated at: {timestamp}
      </div>
      <AboutPreview about={about} />
      <ProjectsGrid projects={projects || []} limit={3} />
    </main>
  );
}
