import {
  Code,
  Palette,
  Database,
  Globe,
  Cloud,
  Terminal,
  FileCode,
  Layers,
  Settings,
  GitBranch,
} from "lucide-react";

export function TechStackSection() {
  const techStacks = [
    {
      category: "Languages",
      icon: Code,
      color: "from-brand-500 to-brand-600",
      technologies: [
        { name: "JavaScript", icon: FileCode },
        { name: "TypeScript", icon: FileCode },
        { name: "Python", icon: Terminal },
        { name: "HTML5", icon: Globe },
        { name: "CSS3", icon: Palette },
        { name: "C#", icon: FileCode },
      ],
    },
    {
      category: "Frameworks & Libraries",
      icon: Layers,
      color: "from-accent-500 to-accent-600",
      technologies: [
        { name: "React", icon: Code },
        { name: "Node.js", icon: Terminal },
        { name: "Express", icon: Settings },
        { name: "Next.js", icon: Code },
        { name: "Bootstrap", icon: Palette },
        { name: "Tailwind CSS", icon: Palette },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: Settings,
      color: "from-brand-600 to-accent-500",
      technologies: [
        { name: "Git", icon: GitBranch },
        { name: "AWS", icon: Cloud },
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "Figma", icon: Palette },
        { name: "WordPress", icon: Globe },
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-white/20 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Tech Stack
          </h2>
          <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life—from concept to
            deployment.
          </p>
        </div>

        <div className="space-y-12">
          {techStacks.map((stack) => {
            const CategoryIcon = stack.icon;
            return (
              <div key={stack.category} className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div
                      className={`bg-gradient-to-r ${stack.color} rounded-full p-3`}
                    >
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-slate-800 dark:text-white">
                      {stack.category}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {stack.technologies.map((tech) => {
                    const TechIcon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                      >
                        <div className="bg-slate-100 dark:bg-slate-700 rounded-full p-2 mb-2 mx-auto w-8 h-8 flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
                          <TechIcon className="w-4 h-4 text-slate-600 dark:text-gray-300" />
                        </div>
                        <h4 className="font-heading text-xs font-semibold text-slate-800 dark:text-white">
                          {tech.name}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
