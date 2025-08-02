import { Star } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/20 dark:bg-black/20 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-brand-400" />
            <span className="text-slate-800 dark:text-white font-semibold text-lg transition-colors duration-300">
              Raeesa
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#work"
              className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
