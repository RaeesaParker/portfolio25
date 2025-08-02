import { CTASectionProjects } from "../common/CTASectionProjects";
import { Project, ProjectCard } from "./ProjectCard";
import { ProjectsHeroSection } from "./ProjectsHeroSection";

export function ProjectsMainSection({ projects }: { projects: Project[] }) {
  return (
    <div className="relative">
        {/* Background stars - subtle animation */}
        <div className="stars opacity-30"></div>
        <div className="stars2 opacity-20"></div>
        <div className="stars3 opacity-10"></div>
  
        <div className="relative z-10">
        <ProjectsHeroSection />
        <section className="py-12 px-4 bg-gradient-to-br from-brand-500/10 to-accent-500/10 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto  ">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
          </div>
        </section>
        <CTASectionProjects />
      </div>
    </div>
  );
}