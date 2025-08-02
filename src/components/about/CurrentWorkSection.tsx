import { Laptop, Users, Lightbulb, Rocket } from "lucide-react";

export function CurrentWorkSection() {
  const highlights = [
    {
      icon: Laptop,
      title: "Digital Products",
      description: "From internal tools to user-facing apps",
      color: "text-brand-600 dark:text-brand-400",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with designers, researchers, and stakeholders",
      color: "text-accent-600 dark:text-accent-400",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Bringing ideas to life and solving real challenges",
      color: "text-brand-600 dark:text-brand-400",
    },
    {
      icon: Rocket,
      title: "End-to-End",
      description: "Taking projects from concept to delivery",
      color: "text-accent-600 dark:text-accent-400",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            What I Do Now
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-8">
              At Lancaster University, I work on a variety of digital
              products—from internal tools to user-facing apps. I get to
              collaborate closely with designers, researchers, and stakeholders
              to bring ideas to life, solve real problems, and push projects
              from concept to delivery.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
