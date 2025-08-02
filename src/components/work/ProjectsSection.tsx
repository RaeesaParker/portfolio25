import { ExternalLink, Github, Globe } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "NeighbourWho?",
      description:
        "A social media application that automatically groups users with their neighbours so that posts and comments are relevant all of the time.",
      image: "/api/placeholder/400/250",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "MySQL",
        "Node.js",
        "Express",
        "Swagger",
      ],
      demoUrl: "https://neighbourwho.netlify.app/",
      codeUrl: "https://github.com/RaeesaParker/neighbourhood-front",
      featured: true,
      color: "from-brand-500 to-brand-600",
    },
    {
      title: "PinIt!",
      description:
        "A kanban-style work management tool that can be used to ideate plans and track progress in a visual, productive, and rewarding way.",
      image: "/api/placeholder/400/250",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "MySQL",
        "Node.js",
        "Express",
      ],
      demoUrl: "https://pinitboard.netlify.app/",
      codeUrl: "https://github.com/RaeesaParker/toDoList",
      featured: true,
      color: "from-accent-500 to-accent-600",
    },
    {
      title: "Dice Game!",
      description:
        "A fun two player dice game with the aim of being the first person to reach a score of fifty.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://raeesaparker.github.io/dice-game/",
      codeUrl: "https://github.com/RaeesaParker/dice-game",
      featured: false,
      color: "from-brand-600 to-accent-500",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A selection of projects that showcase my development journey—from
            simple games to full-stack applications.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`}
                  ></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-4 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div>
                  {project.featured && (
                    <span className="inline-block bg-gradient-to-r from-brand-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Featured Project
                    </span>
                  )}
                  <h3 className="font-heading text-3xl font-bold text-slate-800 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-heading text-sm font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-200/70 dark:bg-slate-700/70 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-gradient-to-r ${project.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}
                  >
                    <Globe className="w-5 h-5" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
