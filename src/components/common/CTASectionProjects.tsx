import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CTASectionProjects() {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-6  backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-brand-500/10 to-accent-500/10 dark:from-brand-400/20 dark:to-accent-400/20 rounded-3xl p-12 border border-brand-200/50 dark:border-brand-700/50 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Want to Know More?
          </h2>
          <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Read more about my experience, check out what I can do, or get in
            touch to start a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                navigate("/experience");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3 font-heading"
            >
              <span>View My Experience</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group border-2 border-brand-600 dark:border-brand-400 text-brand-600 dark:text-brand-400 px-8 py-4 rounded-full font-semibold hover:bg-brand-600 dark:hover:bg-brand-400 hover:text-white dark:hover:text-slate-900 transition-all duration-300 flex items-center gap-3 font-heading"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-300/50 dark:border-slate-600/50">
            <p className="font-body text-sm text-slate-500 dark:text-gray-400">
              Always open to discussing new opportunities, collaborations, or
              just having a great conversation about technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
