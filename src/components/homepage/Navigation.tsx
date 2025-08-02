import { Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/20 dark:bg-black/20 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-brand-400" />
            <span className="text-slate-800 dark:text-white font-semibold text-lg transition-colors duration-300">
              Raeesa
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              to="/work"
              className={`transition-colors ${
                isActive("/work")
                  ? "text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              Work
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
