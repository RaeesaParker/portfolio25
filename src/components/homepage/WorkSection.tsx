import { ArrowRight, Code } from "lucide-react";

export function WorkSection() {
  const projects = [
    {
      title: "Interactive Data Visualizations",
      description:
        "Complex astronomical data transformed into intuitive visual experiences",
      tech: ["React", "D3.js", "Python"],
      color: "from-accent-500 to-accent-600",
    },
    {
      title: "Scalable Backend Systems",
      description:
        "High-performance APIs and microservices for research applications",
      tech: ["Node.js", "PostgreSQL", "Docker"],
      color: "from-brand-500 to-brand-600",
    },
    {
      title: "AR/VR Experiences",
      description: "Immersive educational content for astronomy and physics",
      tech: ["Unity", "WebXR", "Three.js"],
      color: "from-brand-600 to-accent-500",
    },
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
            Building Solutions Across Platforms
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-3xl mx-auto transition-colors duration-300">
            I have experience delivering robust web and mobile applications,
            collaborating with cross-functional teams, and driving innovation
            from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-2xl p-6 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg mb-4 flex items-center justify-center`}
              >
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-slate-800 dark:text-white font-semibold text-xl mb-3 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="group border border-slate-400/50 dark:border-white/30 text-slate-700 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>View Full Portfolio</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
