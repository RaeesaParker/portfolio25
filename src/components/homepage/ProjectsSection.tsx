import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import pathfinder from "../../assets/projects/pathfinder.png";

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-brand-500/10 to-accent-500/10 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
              Projects
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-lg mb-6 leading-relaxed transition-colors duration-300">
              Explore my latest work, side projects, and collaborations. Dive
              into the code, design, and ideas that drive my portfolio.
            </p>

            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/projects");
              }}
              className="group border border-brand-600 dark:border-brand-400 text-brand-600 dark:text-brand-400 px-6 py-3 rounded-full font-semibold hover:bg-brand-600 dark:hover:bg-brand-400 hover:text-white dark:hover:text-slate-900 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-brand-500/10 to-accent-500/10 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-2xl p-8 transition-colors duration-300">
              <img
                src={pathfinder}
                alt="PathFinder project screenshot"
                className="w-full h-48 md:h-56 object-cover rounded-lg mb-4"
              />

              <h3 className="text-slate-800 dark:text-white font-semibold text-2xl mb-2 transition-colors duration-300">
                PathFinder — AI career exploration
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-300">
                An AI-powered career exploration tool that analyses student
                academic experience, interests, and goals to generate
                personalised insights and career suggestions.
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  AI
                </span>
                <span className="bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  Gemini API
                </span>
                <span className="bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
