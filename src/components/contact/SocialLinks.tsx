import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/RaeesaParker", // Replace with your GitHub username
      icon: Github,
      description: "Check out my projects and contributions",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/raeesa-parker", // Replace with your LinkedIn profile
      icon: Linkedin,
      description: "Connect with me professionally",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com", // Replace with your email
      icon: Mail,
      description: "Send me an email directly",
      color: "hover:text-brand-600 dark:hover:text-brand-400",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto h-full">
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 h-full flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-600 dark:text-gray-300">
            Find me on these platforms or reach out directly. I'm always open to
            discussing new opportunities, collaborations, or just having a great
            conversation about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 flex-1 content-center">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-600/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-full bg-slate-100 dark:bg-slate-600 group-hover:bg-slate-200 dark:group-hover:bg-slate-500 transition-colors ${link.color} flex-shrink-0`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1 flex items-center gap-2">
                      {link.name}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 text-sm">
                      {link.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
