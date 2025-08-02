import { Telescope, BookOpen, Coffee, Mountain } from "lucide-react";

export function OutsideCodeSection() {
  const interests = [
    {
      icon: Telescope,
      title: "Stargazing",
      description:
        "Still love looking up—whether it's through a telescope or on a night hike",
    },
    {
      icon: BookOpen,
      title: "Sci-Fi Novels",
      description:
        "Exploring distant worlds and future possibilities through great storytelling",
    },
    {
      icon: Coffee,
      title: "Design & Tools",
      description: "Learning new design tools and the occasional flat white",
    },
    {
      icon: Mountain,
      title: "Night Hikes",
      description: "Finding peace and perspective under the stars",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Outside of Code
          </h2>
          <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Outside of dev work, I still love looking up—whether it's a
            telescope, a sci-fi novel, or a night hike. I'm also into design,
            learning new tools, and the occasional flat white.
          </p>
        </div>

        <div className="bg-gradient-to-br from-brand-500/10 to-accent-500/10 dark:from-brand-400/10 dark:to-accent-400/10 rounded-3xl p-8 border border-brand-200/50 dark:border-brand-700/50">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest) => {
              const IconComponent = interest.icon;
              return (
                <div key={interest.title} className="text-center">
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    {interest.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 dark:text-gray-300">
                    {interest.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
