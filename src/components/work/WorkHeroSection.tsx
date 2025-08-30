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
            From astrophysics to full-stack development—applying analytical
            thinking to build scalable, human-centered solutions.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent mb-8"></div>
          <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            A snapshot of my professional journey—where I’ve worked, what I’ve
            built, and the tools I use to bring ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
}
