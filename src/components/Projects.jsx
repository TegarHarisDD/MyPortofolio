import { useState } from 'react'
import Section from './Section'
import profileData from '../data/profile.json'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function Projects() {
  const [paused, setPaused] = useState(false)

  return (
    <Section id="projects" title="Projects" intro="Selected projects across applied AI and full-stack web development.">
      <button type="button" className="btn btn--secondary mb-6 motion-reduce:hidden" aria-pressed={paused} onClick={() => setPaused(!paused)}>
        {paused ? 'Resume scrolling' : 'Pause scrolling'}
      </button>
      <div className="projects-loop" role="region" aria-label="Project cards" tabIndex={0}>
        <div className="projects-track" style={{ animationPlayState: paused ? 'paused' : undefined }}>
          {[false, true].map((duplicate) => (
            <div key={String(duplicate)} className="projects-group" aria-hidden={duplicate || undefined}>
        {profileData.projects.map((project) => (
          <article key={project.title} className="project-card flex min-w-0 flex-col overflow-hidden rounded-panel border border-hairline bg-surface">
            <a href={project.url} tabIndex={duplicate ? -1 : undefined} target="_blank" rel="noopener noreferrer" className="block border-b border-hairline" aria-label={`${project.title} — ${project.linkLabel}`}>
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="aspect-video w-full object-cover" />
            </a>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-medium text-ink">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <a href={project.url} tabIndex={duplicate ? -1 : undefined} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                  <FiExternalLink aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                  {project.linkLabel}
                </a>
                {project.source && (
                  <a href={project.source} tabIndex={duplicate ? -1 : undefined} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                    <FiGithub aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
