import { FiArrowUpRight } from 'react-icons/fi'
import Section from './Section'
import profileData from '../data/profile.json'

export default function Contact() {
  const channels = [
    { label: 'phone', value: profileData.phone, href: `tel:${profileData.phone.replace(/\s/g, '')}` },
    { label: 'location', value: profileData.location, href: null },
    { label: 'github', value: 'github.com/TegarHarisDD', href: profileData.github },
    { label: 'linkedin', value: 'linkedin.com/in/tegarharisdd', href: profileData.linkedin },
  ]

  return (
    <Section
      id="contact"
      label="contact"
      title="Open to the next build."
      intro="Looking for a junior engineer who can move between the front end and applied AI? Start with an email."
    >
      <a
        href={`mailto:${profileData.email}`}
        className="group inline-flex flex-wrap items-baseline gap-x-4 gap-y-2"
      >
        <span className="ledger-label">email</span>
        <span className="font-display text-2xl sm:text-4xl lg:text-5xl tracking-tight text-ink u-link group-hover:text-accent transition-colors break-all">
          {profileData.email}
        </span>
      </a>

      <dl className="mt-14 max-w-3xl">
        {channels.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[6rem_1fr] gap-4 border-t border-line py-4 last:border-b items-baseline"
          >
            <dt className="ledger-label">{row.label}</dt>
            <dd>
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith('mailto') || row.href.startsWith('tel') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent transition-colors"
                >
                  <span className="u-link">{row.value}</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <span className="text-sm text-ink">{row.value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
