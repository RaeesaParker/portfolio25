import { Calendar, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { useState } from "react";

export function ExperienceSection() {
  const [expandedRole, setExpandedRole] = useState<number | null>(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Lancaster University",
      department: "Innovation Team",
      location: "Lancaster, UK",
      period: "Aug 2023 – Present",
      type: "Full-time",
      description:
        "Delivering innovative digital solutions across web, mobile, and VR platforms as part of a collaborative and agile team.",
      achievements: [
        "Built responsive, accessible web and mobile apps using React, React Native, and TypeScript.",
        "Developed scalable backend services with C#/.NET and JavaScript using AWS (Lambda, AppSync, DynamoDB, S3, Polly, Whisper, API Gateway).",
        "Used GraphQL for data management and Terraform for infrastructure as code.",
        "Led UI/UX improvements and user-centric redesigns informed by design thinking workshops.",
        "Contributed to and led AI-powered experimental projects using OpenAI and AWS Bedrock, including VR and voice-based experiences.",
        "Mentored junior developers and supported team growth through code reviews and pair programming.",
        "Worked across the project lifecycle—from infrastructure decisions to accessibility strategy—collaborating in Figma and DevOps pipelines.",
      ],
      tags: [
        "React",
        "React Native",
        "TypeScript",
        "C#",
        ".NET",
        "GraphQL",
        "JavaScript",
        "AWS",
        "Lambda",
        "AppSync",
        "S3",
        "DynamoDB",
        "Terraform",
        "Polly",
        "Whisper",
        "Azure DevOps",
        "CI/CD",
        "Accessibility",
        "Figma",
        "OpenAI",
        "Bedrock",
        "VR",
        "Mentoring",
        "Agile",
      ],
      color: "from-brand-500 to-brand-600",
    },
    {
      title: "Junior Front-end Developer",
      company: "Lancaster University",
      department: "Innovation Team",
      location: "Lancaster, UK",
      period: "Feb 2023 – Aug 2023",
      type: "Full-time",
      description:
        "Worked on multiple front-end features for internal tools and apps using modern JavaScript frameworks.",
      achievements: [
        "Built and maintained front-end components with React, TypeScript, and JavaScript.",
        "Contributed to backend services in C#/.NET deployed via AWS Lambda, API Gateway, and DynamoDB.",
        "Participated in agile development ceremonies, accessibility reviews, and debugging workflows.",
      ],
      tags: [
        "JavaScript",
        "React",
        "TypeScript",
        "C#",
        ".NET",
        "AWS",
        "Lambda",
        "API Gateway",
        "DynamoDB",
        "Accessibility",
        "Agile",
      ],
      color: "from-brand-400 to-accent-400",
    },
    {
      title: "Research Assistant in Astronomy",
      company: "University of Central Lancashire",
      department: "Astrophysics",
      location: "Preston, UK",
      period: "May 2021 – Aug 2021",
      type: "Research",
      description:
        "Contributed to international collaboration on early star formation and molecular cloud collapse.",
      achievements: [
        "Performed quantitative data analysis using observational and theoretical datasets.",
        "Collaborated with global researchers on early-stage stellar systems.",
        "Led research direction planning and facilitated academic group meetings.",
      ],
      tags: [
        "Astrophysics",
        "Python",
        "Data Analysis",
        "Research",
        "Scientific Collaboration",
        "Problem Solving",
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
    <section className="py-20 px-6  backdrop-blur-sm transition-colors duration-300">
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
