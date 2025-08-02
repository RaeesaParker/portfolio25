import { Footer } from "../components/common/Footer";
import { Navigation } from "../components/common/Navigation";
import { Project } from "../components/projects/ProjectCard";
import { ProjectsMainSection } from "../components/projects/ProjectsMainSection";

const projects: Project[] = [
  {
    name: "NeighbourWho?",
    description:
      "A social media app that groups users with their neighbours for hyper-local posts and comments.",
    features: [
      "Automatic neighbourhood grouping",
      "Real-time post updates",
      "Privacy-first design",
    ],
    tags: ["React", "Full Stack", "Node.js", "MySQL", "Express"],
    image: "/api/placeholder/400/250",
    liveDemo: "https://neighbourwho.netlify.app/",
    github: "https://github.com/RaeesaParker/neighbourhood-front",
    caseStudy: null,
  },
  {
    name: "PinIt!",
    description:
      "A kanban-style work management tool for ideation, planning, and tracking progress visually.",
    features: [
      "Drag-and-drop task boards",
      "Progress tracking",
      "Rewarding UI/UX",
    ],
    tags: ["React", "Kanban", "Node.js", "Express", "MySQL"],
    image: "/api/placeholder/400/250",
    liveDemo: "https://pinitboard.netlify.app/",
    github: "https://github.com/RaeesaParker/toDoList",
    caseStudy: null,
  },
  {
    name: "Dice Game!",
    description:
      "A fun two-player dice game. Be the first to reach a score of fifty!",
    features: [
      "Simple, addictive gameplay",
      "Responsive design",
      "Instant play—no login required",
    ],
    tags: ["JavaScript", "Game", "Frontend"],
    image: "/api/placeholder/400/250",
    liveDemo: "https://raeesaparker.github.io/dice-game/",
    github: "https://github.com/RaeesaParker/dice-game",
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