import { Cloud, Code, Database, FileCode, GitBranch, Globe, Layers, Palette, Settings, Terminal } from "lucide-react";

export function TechStackSection() {
  const techStacks = [
    {
      category: "Languages",
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
      technologies: [
        { name: "React", icon: Code },
        { name: "Node.js", icon: Terminal },
        { name: "Express", icon: Settings },
        { name: "Next.js", icon: Code },
        { name: "Bootstrap", icon: Palette },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Unity", icon: Layers },
        { name: ".NET", icon: Code },
      ],
    },
    {
      category: "Tools & Platforms",
      technologies: [
        { name: "Git", icon: GitBranch },
        { name: "AWS", icon: Cloud },
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "Figma", icon: Palette },
        { name: "WordPress", icon: Globe },
        { name: "Terraform", icon: Settings },
        { name: "Azure", icon: Cloud },
        { name: "Azure DevOps", icon: Settings },
      ],
    },
  ];

  return (
    <section className="py-12 px-4 bg-white/20 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-5xl w-3/4 mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A quick look at the tools and technologies I use most often.
          </p>
        </div>
        <div className="divide-y divide-slate-300/50 dark:divide-slate-700/50">
          {techStacks.map((stack) => (
            <div key={stack.category} className="flex flex-col sm:flex-row items-start sm:items-center py-6 gap-4">
              <div className="w-40 min-w-[8rem] font-heading text-lg text-slate-800 dark:text-white mb-2 sm:mb-0">
                {stack.category}
              </div>
              <div className="flex flex-wrap gap-4 flex-1">
                {stack.technologies.map((tech) => {
                  const TechIcon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center group"
                      title={tech.name}
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200/50 dark:border-slate-700/50 w-16 h-16 flex items-center justify-center mb-1 group-hover:bg-brand-50 dark:group-hover:bg-brand-900 transition-colors">
                        <TechIcon className="w-7 h-7 text-slate-700 dark:text-gray-200" />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-gray-300 text-center w-20">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
