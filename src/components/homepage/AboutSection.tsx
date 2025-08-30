import { ArrowRight, Code, Star, Telescope } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AboutSection() {
  const navigate = useNavigate();
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-brand-500/10 to-accent-500/10 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
              From studying stars to building software
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-lg mb-6 leading-relaxed transition-colors duration-300">
              I apply the analytical thinking and problem-solving skills I
              developed in astronomy to create innovative digital solutions as a
              full stack developer.
            </p>
            <p className="text-slate-600 dark:text-gray-300 text-lg mb-8 leading-relaxed transition-colors duration-300">
              I'm currently part of the{" "}
              <span className="text-brand-600 dark:text-brand-400 font-semibold">
                Innovation Team at Lancaster University,
              </span>{" "}
              building all sorts of wonderful things across web, mobile, AR, and
              VR.
            </p>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/about");
              }}
              className="group border border-brand-600 dark:border-brand-400 text-brand-600 dark:text-brand-400 px-6 py-3 rounded-full font-semibold hover:bg-brand-600 dark:hover:bg-brand-400 hover:text-white dark:hover:text-slate-900 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-500/10 to-accent-500/10 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-2xl p-8 transition-colors duration-300">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Telescope className="w-12 h-12 text-brand-600 dark:text-brand-400 mx-auto mb-3" />
                  <h3 className="text-slate-800 dark:text-white font-semibold mb-2 transition-colors duration-300">
                    Astrophysics
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">
                    Data analysis & research
                  </p>
                </div>
                <div className="text-center">
                  <Code className="w-12 h-12 text-accent-600 dark:text-accent-400 mx-auto mb-3" />
                  <h3 className="text-slate-800 dark:text-white font-semibold mb-2 transition-colors duration-300">
                    Development
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">
                    Full-stack solutions
                  </p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-accent-600 dark:text-accent-400 mx-auto mb-3" />
                  <h3 className="text-slate-800 dark:text-white font-semibold mb-2 transition-colors duration-300">
                    Innovation
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">
                    AR/VR experiences
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white dark:text-slate-900 font-bold text-lg">
                      R
                    </span>
                  </div>
                  <h3 className="text-slate-800 dark:text-white font-semibold mb-2 transition-colors duration-300">
                    Research
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">
                    Problem solving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
