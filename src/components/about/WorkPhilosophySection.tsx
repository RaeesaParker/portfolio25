import { Target, Heart, Code2, Users } from "lucide-react";

export function WorkPhilosophySection() {
  const values = [
    {
      icon: Target,
      title: "Methodical & Data-Informed",
      description:
        "I bring a systematic approach to every project, making decisions based on evidence and clear objectives.",
      color: "from-brand-500 to-brand-600",
    },
    {
      icon: Heart,
      title: "User-Centered Design",
      description:
        "I care just as much about the user experience as the technical implementation—creating inclusive, effortless interactions.",
      color: "from-accent-500 to-accent-600",
    },
    {
      icon: Code2,
      title: "Clean & Maintainable",
      description:
        "I believe in writing code that's not just functional, but readable, scalable, and sustainable for the long term.",
      color: "from-brand-500 to-accent-500",
    },
    {
      icon: Users,
      title: "Simplifying Complexity",
      description:
        "I enjoy taking complex problems and breaking them down into elegant, understandable solutions.",
      color: "from-accent-500 to-brand-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white/20 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            How I Work
          </h2>
          <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I bring a methodical, data-informed mindset to every project, but I
            care just as much about the user experience as I do about the
            technical details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`bg-gradient-to-br ${value.color} rounded-full p-3 flex-shrink-0`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-800 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="font-body text-slate-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
