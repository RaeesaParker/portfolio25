import { ArrowRight, Telescope } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 backdrop-blur-sm border border-brand-500/30 rounded-full px-4 py-2 mb-6">
            <Telescope className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span className="text-brand-700 dark:text-brand-300 text-sm">
              Astrophysicist → Developer
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight transition-colors duration-300">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
            Raeesa
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
          I bring together data-driven insights, creative problem-solving, and a
          versatile development toolkit to build impactful, cross-platform
          digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-brand-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-brand-500/25 transition-all duration-300 flex items-center space-x-2">
            <span>Explore My Universe</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button         
              onClick={() => {
                navigate("/projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} className="border border-slate-400/50 dark:border-white/30 text-slate-700 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all duration-300">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}
