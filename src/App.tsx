import React from 'react';
import { Star, Code, Telescope, ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50 dark:from-slate-900 dark:via-emerald-900 dark:to-slate-900 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/20 dark:bg-black/20 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-emerald-400" />
              <span className="text-slate-800 dark:text-white font-semibold text-lg transition-colors duration-300">Raeesa</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors">About</a>
              <a href="#work" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors">Work</a>
              <a href="#contact" className="text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white transition-colors">Contact</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated background stars */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Telescope className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-300 text-sm">Astrophysicist → Developer</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight transition-colors duration-300">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Raeesa
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
            I bring together data-driven insights, creative problem-solving, and
            a versatile development toolkit to build impactful, cross-platform
            digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center space-x-2">
              <span>Explore My Universe</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-slate-400/50 dark:border-white/30 text-slate-700 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all duration-300">
              View My Work
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/20 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
                From studying stars to building software
              </h2>
              <p className="text-slate-600 dark:text-gray-300 text-lg mb-6 leading-relaxed transition-colors duration-300">
                I apply the analytical thinking and problem-solving skills I developed
                in astronomy to create innovative digital solutions as a full stack
                developer.
              </p>
              <p className="text-slate-600 dark:text-gray-300 text-lg mb-8 leading-relaxed transition-colors duration-300">
                I'm currently part of the{' '}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Innovation Team at Lancaster University,
                </span>{' '}
                building all sorts of wonderful things across web, mobile, AR, and VR.
              </p>
              <button className="group border border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-900 transition-all duration-300 flex items-center space-x-2">
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-2xl p-8 transition-colors duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Telescope className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-slate-800 dark:text-white font-semibold mb-2 transition-colors duration-300">Astrophysics</h3>
                    <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">Data analysis & research</p>
                  </div>
                  <div className="text-center">
                    <Code className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
                    <h3 className="text-slate-800 dark:text-white font-semibold mb-2 transition-colors duration-300">Development</h3>
                    <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">Full-stack solutions</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
                    <h3 className="text-slate-800 dark:text-white font-semibold mb-2 transition-colors duration-300">Innovation</h3>
                    <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">AR/VR experiences</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white dark:text-slate-900 font-bold text-lg">R</span>
                    </div>
                    <h3 className="text-slate-800 dark:text-white font-semibold mb-2 transition-colors duration-300">Research</h3>
                    <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">Problem solving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
              Building Solutions Across Platforms
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-lg max-w-3xl mx-auto transition-colors duration-300">
              I have experience delivering robust web and mobile applications,
              collaborating with cross-functional teams, and driving innovation from
              concept to deployment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Data Visualizations",
                description: "Complex astronomical data transformed into intuitive visual experiences",
                tech: ["React", "D3.js", "Python"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Scalable Backend Systems", 
                description: "High-performance APIs and microservices for research applications",
                tech: ["Node.js", "PostgreSQL", "Docker"],
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "AR/VR Experiences",
                description: "Immersive educational content for astronomy and physics",
                tech: ["Unity", "WebXR", "Three.js"],
                color: "from-green-500 to-teal-500"
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 rounded-2xl p-6 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-slate-800 dark:text-white font-semibold text-xl mb-3 transition-colors duration-300">{project.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 mb-4 transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="group border border-slate-400/50 dark:border-white/30 text-slate-700 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/20 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
            Let's Build Something Amazing
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg mb-12 transition-colors duration-300">
            Ready to collaborate on your next project? I'd love to hear from you.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="group bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-slate-200/50 dark:border-white/20 p-4 rounded-full hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300">
              <Github className="w-6 h-6 text-slate-700 dark:text-white group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="group bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-slate-200/50 dark:border-white/20 p-4 rounded-full hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300">
              <Linkedin className="w-6 h-6 text-slate-700 dark:text-white group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="group bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-slate-200/50 dark:border-white/20 p-4 rounded-full hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300">
              <Mail className="w-6 h-6 text-slate-700 dark:text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200/50 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500 dark:text-gray-400 transition-colors duration-300">
            © 2025 Raeesa. Crafted with passion for innovation and discovery.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;