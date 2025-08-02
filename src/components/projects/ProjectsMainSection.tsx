import React from "react";
import { ProjectCard, Project } from "./ProjectCard";
import { ProjectsHeroSection } from "./ProjectsHeroSection";

export function ProjectsMainSection({ projects }: { projects: Project[] }) {
  return (
    <section className="max-w-7xl mx-auto">
      <ProjectsHeroSection />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}