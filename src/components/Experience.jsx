import Section from './Section'
import profileData from '../data/profile.json'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Where the work has been."
      intro="A year across data annotation, automation, and full stack web, each role adding a layer to the same stack."
    >
      <div>
        {profileData.experience.map((job, index) => (
          <article
            key={`${job.role}-${index}`}
            className="border-t border-hairline py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="title text-ink">{job.role}</h3>
              <span className="caption tabular-nums">{job.period}</span>
            </div>

            <p className="mt-1 text-sm font-medium text-muted">{job.company}</p>
            <p className="caption mt-0.5">{job.location}</p>

            <ul className="mt-4 max-w-[65ch] list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="text-sm font-medium text-ink">Organizations</h3>
        <div className="mt-3">
          {profileData.organizations.map((org) => (
            <div
              key={org.name}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-hairline py-4 last:border-b"
            >
              <h4 className="text-base text-ink">{org.name}</h4>
              <p className="caption">{org.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
