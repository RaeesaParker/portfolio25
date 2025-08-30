// React imports intentionally omitted; using JSX runtime

export type Project = {
  name: string;
  description: string;
  features: string[];
  tags: string[];
  image?: string;
  liveDemo?: string;
  github?: string;
  caseStudy?: string | null;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
      {project.image && (
        <div className="w-full h-48 md:h-56 bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-2xl font-bold text-slate-800 dark:text-white mb-2">
          {project.name}
        </h3>
        <p className="text-slate-600 dark:text-gray-300 mb-3">
          {project.description}
        </p>
        <ul className="list-disc list-inside text-slate-600 dark:text-gray-300 mb-4 pl-2">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-200/70 dark:bg-slate-700/70 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-3">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow"
            >
              GitHub
            </a>
          )}
          {project.caseStudy && (
            <a
              href={project.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow"
            >
              Case Study
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
