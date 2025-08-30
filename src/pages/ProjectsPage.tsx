import { Footer } from "../components/common/Footer";
import { Navigation } from "../components/common/Navigation";
import { Project } from "../components/projects/ProjectCard";
import { ProjectsMainSection } from "../components/projects/ProjectsMainSection";
import pathfinder from "../assets/projects/pathfinder.png";

const projects: Project[] = [
  {
    name: "PathFinder",
    description:
      "An AI-powered career exploration tool that analyses student academic experience, interests, and goals to generate personalised insights and career suggestions.",
    features: [
      "Uses Google Gemini 2.0 Flash API for contextual analysis",
      "Performs intelligent skills mapping across technical, transferable, and interest-based competencies",
      "Delivers nuanced, encouraging recommendations through prompt engineering",
    ],
    tags: ["React", "TypeScript", "AI", "Gemini API", "Front-End"],
    image: pathfinder,
    liveDemo: "https://lighthearted-snickerdoodle-b713b5.netlify.app/",
    github: "https://github.com/RaeesaParker/pathFinder",
    caseStudy: null,
  },
];

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-brand-50 to-slate-50 dark:from-slate-900 dark:via-brand-900 dark:to-slate-900 transition-colors duration-500">
      <Navigation />
      <div className="pt-20">
        <ProjectsMainSection projects={projects} />
      </div>
      <Footer />
    </div>
  );
}
