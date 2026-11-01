import Section from './Section'
import profileData from '../data/profile.json'

export default function Skills() {
  const categories = [
    { key: 'programmingLanguages', label: 'Programming languages' },
    { key: 'markupStyles', label: 'Markup and stylesheets' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'aiAutomation', label: 'AI and automation' },
    { key: 'databases', label: 'Databases' },
    { key: 'tools', label: 'Tools and practices' },
    { key: 'languages', label: 'Languages' },
  ]

  return (
    <Section
      id="skills"
      title="Core Skills"
      intro="Everything that carries a project from interface to data layer and out the door."
    >
      <div className="grid gap-x-10 md:grid-cols-2">
        {categories.map((cat) => {
          const items = profileData.skills[cat.key]
          return (
            <div
              key={cat.key}
              className="border-t border-hairline py-6"
            >
              <h3 className="text-sm font-medium text-ink">{cat.label}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="tag">
                    {item}
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
