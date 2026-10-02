import Section from './Section'
import profileData from '../data/profile.json'

export default function Contact() {
  const channels = [
    { label: 'Phone', value: profileData.phone, href: `tel:${profileData.phone.replace(/\s/g, '')}` },
    { label: 'Location', value: profileData.location, href: null },
    { label: 'GitHub', value: 'github.com/TegarHarisDD', href: profileData.github },
    { label: 'LinkedIn', value: 'linkedin.com/in/tegarharisdd', href: profileData.linkedin },
  ]

  return (
    <Section
      id="contact"
      title="Open to the next build."
      intro="Looking for a junior engineer who can move between the front end and applied AI? Start with an email."
    >
      <a href={`mailto:${profileData.email}`} className="btn btn--primary">
        Email me
      </a>

      <dl className="mt-10">
        {channels.map((row) => (
          <div
            key={row.label}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-hairline py-4 last:border-b"
          >
            <dt className="caption">{row.label}</dt>
            <dd className="text-sm text-ink">
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith('tel') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="link"
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
