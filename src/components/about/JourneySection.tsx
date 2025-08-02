import { Telescope, Code, ArrowRight } from "lucide-react";

export function JourneySection() {
  return (
    <section className="py-20 px-6 bg-white/20 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            From Astronomy to Development
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              My journey started in the world of stars and galaxies, where I
              learned to think analytically, work with complex systems, and turn
              raw data into insight. While I loved the challenge of research, I
              was drawn to the creativity and immediacy of building real tools
              with code.
            </p>
            <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              What began as a curiosity became a passion—and eventually, a
              career. I transitioned into full stack development to combine
              scientific problem-solving with modern design and technology.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-brand-500/20 to-accent-500/20 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                    <Telescope className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    Astrophysics
                  </h3>
                  <p className="font-body text-sm text-slate-500 dark:text-gray-400">
                    Data analysis, research, complex systems
                  </p>
                </div>

                <ArrowRight className="w-8 h-8 text-brand-500 dark:text-brand-400 flex-shrink-0" />

                <div className="text-center">
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                    <Code className="w-8 h-8 text-accent-600 dark:text-accent-400" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    Development
                  </h3>
                  <p className="font-body text-sm text-slate-500 dark:text-gray-400">
                    Problem-solving, creativity, real impact
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
