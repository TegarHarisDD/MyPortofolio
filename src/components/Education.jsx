import Section from './Section'
import profileData from '../data/profile.json'

export default function Education() {
  const { degree, university, location, year, gpa } = profileData.education

  return (
    <Section
      id="education"
      label="education"
      title="A computer science foundation."
      intro="Formal training in the fundamentals behind everything above."
    >
      <article className="grid md:grid-cols-[9rem_1fr] gap-x-10 gap-y-4 border-t border-line py-8">
        <div className="space-y-1">
          <span className="block font-mono text-[0.7rem] tracking-ledger text-muted tabular">
            {year}
          </span>
          <span className="block font-mono text-[0.7rem] tracking-ledger text-muted">
            {location}
          </span>
        </div>

        <div>
          <h3 className="font-display text-xl sm:text-2xl leading-tight text-ink">
            {degree}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">{university}</p>

          <div className="mt-5 flex flex-wrap items-baseline gap-x-8 gap-y-2 font-mono text-[0.7rem] tracking-ledger">
            <span className="flex items-baseline gap-2">
              <span className="text-muted">gpa</span>
              <span className="text-accent tabular">{gpa}</span>
            </span>
          </div>
        </div>
      </article>
    </Section>
  )
}
