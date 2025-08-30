import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Star, Menu, X } from "lucide-react";

import { ThemeToggle } from "../ThemeToggle";

export function Navigation(): JSX.Element {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const prevActive = document.activeElement as HTMLElement | null;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a, button, input, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.[0]?.focus();

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => {
        document.removeEventListener("keydown", onKey);
        prevActive?.focus();
        setMounted(false);
      };
    }
    // no-op when closed
    return;
  }, [open]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/20 dark:bg-black/20 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Brand - hide on small screens when panel is open to avoid duplicate header */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`items-center space-x-2 ${
              open ? "hidden md:flex" : "flex"
            }`}
          >
            <Star className="w-6 h-6 text-brand-400" />
            <span className="text-slate-800 dark:text-white font-semibold text-lg transition-colors duration-300">
              Raeesa
            </span>
          </Link>

          {/* Mobile hamburger - hidden on md and up */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="p-2 rounded-md bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-colors duration-200"
            >
              {open ? (
                <X className="w-5 h-5 text-slate-800 dark:text-white" />
              ) : (
                <Menu className="w-5 h-5 text-slate-800 dark:text-white" />
              )}
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`transition-colors ${
                isActive("/about")
                  ? "text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              to="/experience"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`transition-colors ${
                isActive("/experience")
                  ? "text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              Experience
            </Link>
            <Link
              to="/projects"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`transition-colors ${
                isActive("/projects")
                  ? "text-brand-600 dark:text-brand-400 font-semibold"
                  : "text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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

      {/* Mobile panel - centered rounded card */}
      {open && (
        <div className="md:hidden fixed inset-0 flex items-start justify-center pt-6 z-50">
          <div
            ref={panelRef}
            className={`w-full max-w-md mx-4 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl shadow-xl border border-black/10 dark:border-white/10 overflow-hidden transform transition-all duration-300 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 dark:border-white/5">
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-brand-400" />
                <span className="text-slate-800 dark:text-white font-semibold">
                  Raeesa
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-800 dark:text-white" />
                </button>
              </div>
            </div>

            <div className="px-6 py-6">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/about"
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-lg py-3 px-3 rounded-md transition-colors ${
                    isActive("/about")
                      ? "text-brand-600 dark:text-brand-400 font-semibold bg-brand-50 dark:bg-white/5"
                      : "text-slate-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/experience"
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-lg py-3 px-3 rounded-md transition-colors ${
                    isActive("/experience")
                      ? "text-brand-600 dark:text-brand-400 font-semibold bg-brand-50 dark:bg-white/5"
                      : "text-slate-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  Experience
                </Link>
                <Link
                  to="/projects"
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-lg py-3 px-3 rounded-md transition-colors ${
                    isActive("/projects")
                      ? "text-brand-600 dark:text-brand-400 font-semibold bg-brand-50 dark:bg-white/5"
                      : "text-slate-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-lg py-3 px-3 rounded-md transition-colors ${
                    isActive("/contact")
                      ? "text-brand-600 dark:text-brand-400 font-semibold bg-brand-50 dark:bg-white/5"
                      : "text-slate-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
