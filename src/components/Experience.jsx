import Section from './Section'
import profileData from '../data/profile.json'

export default function Experience() {
  return (
    <Section
      id="experience"
      label="experience"
      title="Where the work has been."
      intro="A year across data annotation, automation, and full stack web — each role adding a layer to the same stack."
    >
      <div>
        {profileData.experience.map((job, index) => (
          <article
            key={`${job.role}-${index}`}
            className="grid md:grid-cols-[9rem_1fr] gap-x-10 gap-y-4 border-t border-line py-8 last:border-b"
          >
            <div className="space-y-1">
              <span className="block font-mono text-sm text-accent tabular">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="block font-mono text-[0.7rem] tracking-ledger text-muted tabular">
                {job.period}
              </span>
              <span className="block font-mono text-[0.7rem] tracking-ledger text-muted">
                {job.location}
              </span>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl leading-tight text-ink">
                {job.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
              <ul className="mt-4 space-y-2 max-w-[64ch]">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 w-3 h-px bg-line shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
          <span className="ledger-label">organizations</span>
          <span className="ledger-label tabular">
            {String(profileData.organizations.length).padStart(2, '0')}
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-12">
          {profileData.organizations.map((org) => (
            <div
              key={org.name}
              className="border-b border-line py-5"
            >
              <h4 className="font-display text-lg text-ink">{org.name}</h4>
              <p className="mt-1 font-mono text-[0.7rem] tracking-ledger text-muted">
                {org.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
