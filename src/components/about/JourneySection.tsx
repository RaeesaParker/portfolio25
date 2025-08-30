import { Telescope, Code, ArrowRight } from "lucide-react";

export function JourneySection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-brand-500/10 to-accent-500/10 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            From Astronomy to Development
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              My career began in astrophysics, where I explored the complexities
              of the universe—working with vast datasets, running simulations,
              and uncovering insights through scientific rigor. It taught me how
              to think analytically, solve problems systematically, and stay
              endlessly curious.
            </p>
            <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              Over time, that same curiosity pulled me toward software
              development. I discovered a passion for building real-world tools
              that solve meaningful problems, blending my analytical mindset
              with creativity, collaboration, and code. Today, I apply that
              experience to crafting thoughtful, impactful digital solutions
              across web and mobile.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-brand-500/10 to-accent-500/10 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                    <Telescope className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    Astrophysics
                  </h3>
                  <p className="font-body text-sm text-slate-500 dark:text-gray-400">
                    Scientific thinking, data analysis, complex systems
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
                    Creative problem-solving, collaboration, real-world impact
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
