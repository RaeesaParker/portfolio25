import { useState } from "react";
import { MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";

export function ExperienceSection() {
  const [expandedRole, setExpandedRole] = useState<number | null>(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Lancaster University",
      department: "Innovation Team",
      location: "Lancaster, UK",
      period: "2023 - Present",
      type: "Full-time",
      description:
        "Developing accessible applications for various purposes on the Innovation Team.",
      achievements: [
        "Built responsive web applications using React, TypeScript, and modern CSS frameworks",
        "Developed RESTful APIs and microservices with Node.js and Express",
        "Collaborated with cross-functional teams to deliver user-centered solutions",
        "Implemented accessibility standards and inclusive design practices",
        "Led frontend architecture decisions for multiple university projects",
      ],
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Accessibility",
        "Team Leadership",
        "API Development",
      ],
      color: "from-brand-500 to-brand-600",
    },
    {
      title: "Trainee Software Developer",
      company: "CodeNation",
      department: "Bootcamp",
      location: "Manchester, UK",
      period: "2022 - 2023",
      type: "Intensive Training",
      description:
        "Completed comprehensive full-stack development bootcamp with focus on modern web technologies.",
      achievements: [
        "Mastered full-stack JavaScript development including React and Node.js",
        "Built multiple portfolio projects using industry-standard tools and practices",
        "Learned agile development methodologies and collaborative coding practices",
        "Completed intensive training in database design and management",
        "Developed strong problem-solving and debugging skills",
      ],
      tags: [
        "JavaScript",
        "React",
        "Full-Stack",
        "Agile",
        "Problem Solving",
        "Database Design",
      ],
      color: "from-accent-500 to-accent-600",
    },
    {
      title: "Research Assistant",
      company: "University of Central Lancashire",
      department: "Astrophysics",
      location: "Preston, UK",
      period: "2020 - 2022",
      type: "Research",
      description:
        "Conducted astrophysics research involving data analysis and computational modeling.",
      achievements: [
        "Performed complex data analysis using Python and statistical modeling",
        "Developed computational models for astronomical phenomena",
        "Collaborated with international research teams on published studies",
        "Presented research findings at academic conferences",
        "Mentored undergraduate students in research methodologies",
      ],
      tags: [
        "Python",
        "Data Analysis",
        "Research",
        "Statistical Modeling",
        "Mentoring",
        "Academic Writing",
      ],
      color: "from-brand-600 to-accent-500",
    },
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(experiences.flatMap((exp) => exp.tags)));

  // Filter experiences based on selected tag
  const filteredExperiences = selectedTag
    ? experiences.filter((exp) => exp.tags.includes(selectedTag))
    : experiences;

  const toggleRole = (index: number) => {
    setExpandedRole(expandedRole === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white/20 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Experience
          </h2>
          <p className="font-body text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            My journey from astrophysics research to full-stack development,
            building skills across science and technology.
          </p>

          {/* Tag Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTag === null
                  ? "bg-brand-500 text-white shadow-lg"
                  : "bg-slate-200/70 dark:bg-slate-700/70 text-slate-700 dark:text-gray-300 hover:bg-slate-300/70 dark:hover:bg-slate-600/70"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? "bg-brand-500 text-white shadow-lg"
                    : "bg-slate-200/70 dark:bg-slate-700/70 text-slate-700 dark:text-gray-300 hover:bg-slate-300/70 dark:hover:bg-slate-600/70"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredExperiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden transition-all duration-300"
            >
              {/* Header - Always Visible */}
              <div
                className="p-8 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors duration-200"
                onClick={() => toggleRole(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${experience.color}`}
                      ></div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                        {experience.title}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4 text-slate-600 dark:text-gray-300">
                        <span className="font-heading font-semibold text-lg">
                          {experience.company}
                        </span>
                        {experience.department && (
                          <span className="text-sm bg-slate-200/70 dark:bg-slate-700/70 px-2 py-1 rounded">
                            {experience.department}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <span className="bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-2 py-1 rounded text-xs">
                          {experience.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedRole === index ? (
                      <ChevronUp className="w-6 h-6 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedRole === index && (
                <div className="px-8 pb-8 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="pt-6 space-y-6">
                    <p className="font-body text-slate-600 dark:text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>

                    <div>
                      <h4 className="font-heading text-lg font-semibold text-slate-800 dark:text-white mb-4">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map(
                          (achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start space-x-3 font-body text-slate-600 dark:text-gray-300"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`}
                              ></div>
                              <span>{achievement}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg font-semibold text-slate-800 dark:text-white mb-4">
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                              selectedTag === tag
                                ? "bg-brand-500 text-white"
                                : "bg-slate-200/70 dark:bg-slate-700/70 text-slate-700 dark:text-gray-300 hover:bg-slate-300/70 dark:hover:bg-slate-600/70"
                            }`}
                            onClick={() => setSelectedTag(tag)}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body text-slate-500 dark:text-gray-400">
              No experience found with the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
