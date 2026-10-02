import Section from './Section'
import profileData from '../data/profile.json'

export default function Education() {
  const { degree, university, location, year, gpa } = profileData.education

  return (
    <Section
      id="education"
      title="A computer science foundation."
      intro="Formal training in the fundamentals behind everything above."
    >
      <article className="border-t border-hairline pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="title text-ink">{degree}</h3>
          <span className="caption tabular-nums">{year}</span>
        </div>

        <p className="mt-1 text-sm font-medium text-muted">{university}</p>
        <p className="caption mt-0.5">{location}</p>

        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-2">
          <div className="flex items-baseline gap-2">
            <dt className="caption">GPA</dt>
            <dd className="text-sm tabular-nums text-ink">{gpa}</dd>
          </div>
        </dl>
      </article>
    </Section>
  )
}
