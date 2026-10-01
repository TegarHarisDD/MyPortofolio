import Section from './Section'
import profileData from '../data/profile.json'

export default function About() {
  const focusAreas = [
    {
      tag: 'web',
      title: 'Full Stack Web Development',
      description:
        'Building full stack web applications with JavaScript, React, Node.js, and Tailwind CSS — from accessible UI components through to REST APIs.',
    },
    {
      tag: 'ai',
      title: 'Applied AI & Data',
      description:
        'Applying artificial intelligence with Python, pandas, and scikit-learn to turn data-driven problems into working, real-world products.',
    },
    {
      tag: 'method',
      title: 'Method & Collaboration',
      description:
        'A fast learner who thrives on pair programming, code review, and Agile teamwork, with a growing focus on bringing AI into shipped products.',
    },
  ]

  return (
    <Section
      id="about"
      label="about"
      title="Full stack by training, applied AI by focus."
      intro={profileData.longBio}
    >
      <div className="space-y-0">
        {focusAreas.map((area) => (
          <div
            key={area.tag}
            className="grid md:grid-cols-[6.5rem_1fr] gap-x-10 gap-y-2 border-t border-line py-7 last:border-b"
          >
            <span className="ledger-label pt-1.5">{area.tag}</span>
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-ink">{area.title}</h3>
              <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-muted">
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-12">
        <div>
          <span className="ledger-label">education</span>
          <div className="mt-5 border-t border-line pt-5">
            <h3 className="font-display text-2xl text-ink leading-tight">
              {profileData.education.degree}
            </h3>
            <p className="mt-3 text-sm text-ink">{profileData.education.university}</p>
            <dl className="mt-5 space-y-2 font-mono text-[0.7rem] tracking-ledger text-muted">
              <div className="flex justify-between gap-4">
                <dt>location</dt>
                <dd className="text-ink">{profileData.education.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>period</dt>
                <dd className="text-ink tabular">{profileData.education.year}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>gpa</dt>
                <dd className="text-accent tabular">{profileData.education.gpa}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div>
          <span className="ledger-label">languages</span>
          <div className="mt-5 border-t border-line pt-5">
            <ul className="space-y-4">
              {profileData.skills.languages.map((lang) => (
                <li key={lang} className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                  <span className="text-base text-ink">{lang.replace(/\s*\(.*\)$/, '')}</span>
                  <span className="ledger-label">{lang.match(/\((.*)\)/)?.[1] || ''}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
