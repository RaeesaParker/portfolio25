import React from "react";

export function WorkHeroSection() {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            My Experience
          </h1>
          <p className="font-heading text-xl md:text-2xl text-brand-600 dark:text-brand-400 font-semibold mb-8">
            From astrophysics research to full-stack development—exploring
            innovation across platforms.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent mb-8"></div>
          <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Discover the technologies I work with, the experiences that
            shaped my journey, and the projects that showcase my passion for
            building thoughtful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}