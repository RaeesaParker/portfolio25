import { Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ContactSection() {
  const navigate = useNavigate();

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-brand-500/20 to-accent-500/20 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
          Let's Build Something Amazing
        </h2>
        <p className="text-slate-600 dark:text-gray-300 text-lg mb-12 transition-colors duration-300">
          Ready to collaborate on your next project? I'd love to hear from you.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            target="_blank"
            href="https://github.com/RaeesaParker"
            className="group bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-slate-200/50 dark:border-white/20 p-4 rounded-full hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300"
          >
            <Github className="w-6 h-6 text-slate-700 dark:text-white group-hover:scale-110 transition-transform" />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/raeesa-parker"
            className="group bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-slate-200/50 dark:border-white/20 p-4 rounded-full hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6 text-slate-700 dark:text-white group-hover:scale-110 transition-transform" />
          </a>
          <a
            target="_blank"
            href="mailto:your.email@example.com"
            className="group bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-slate-200/50 dark:border-white/20 p-4 rounded-full hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-slate-700 dark:text-white group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/contact");
          }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}
