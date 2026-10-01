import Section from './Section'
import profileData from '../data/profile.json'

export default function Skills() {
  const categories = [
    { key: 'programmingLanguages', label: 'Programming Languages' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'databases', label: 'Databases' },
    { key: 'tools', label: 'Tools & Practices' },
    { key: 'languages', label: 'Languages' },
  ]

  return (
    <Section
      id="skills"
      label="skills"
      title="The toolkit, grouped as it's actually used."
      intro="Six areas that carry a project from interface to data layer and out the door."
    >
      <div>
        {categories.map((cat) => {
          const items = profileData.skills[cat.key]
          return (
            <div
              key={cat.key}
              className="grid md:grid-cols-[12rem_1fr] gap-x-10 gap-y-3 border-t border-line py-6 last:border-b"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-lg text-ink">{cat.label}</h3>
                <span className="font-mono text-[0.65rem] text-muted tabular">
                  {String(items.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                {items.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-3">
                    <span className="text-sm text-ink">{item}</span>
                    {i < items.length - 1 && (
                      <span className="text-line select-none" aria-hidden="true">·</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
