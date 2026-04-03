import { FiExternalLink, FiGithub } from 'react-icons/fi'
import projectsData from '../data/projects.json'

export default function Projects() {
  const categories = ['All', ...new Set(projectsData.map(p => p.category))]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            Featured Projects
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            A collection of my work in AI, machine learning, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-light-border dark:bg-dark-border relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-light-muted dark:text-dark-muted">
                  <span className="text-sm">Project Preview</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                    aria-label="Live demo"
                  >
                    <FiExternalLink className="w-5 h-5 text-black" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                    aria-label="GitHub repo"
                  >
                    <FiGithub className="w-5 h-5 text-black" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-light-muted dark:text-dark-muted mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-light-border/50 dark:bg-dark-border/50 text-light-muted dark:text-dark-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
