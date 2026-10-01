import { FiArrowUpRight } from 'react-icons/fi'
import profileData from '../data/profile.json'

export default function Hero() {
  const d = (n) => ({ animationDelay: `${n}s` })

  const specimen = [
    { label: 'based', value: profileData.location },
    { label: 'languages', value: 'Bahasa Indonesia (Native) · English (Advanced)' },
    { label: 'status', value: 'Open to opportunities' },
  ]

  const contacts = [
    { label: 'Email', href: `mailto:${profileData.email}` },
    { label: 'GitHub', href: profileData.github },
    { label: 'LinkedIn', href: profileData.linkedin },
  ]

  return (
    <section id="home" className="pt-28 sm:pt-32 pb-16">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px w-full bg-line load-rule" aria-hidden="true" />

        <div className="flex flex-wrap items-baseline justify-between gap-2 pt-5 rise" style={d(0.2)}>
          <span className="ledger-label">software · artificial intelligence</span>
          <span className="ledger-label">portfolio / 2026</span>
        </div>

        <h1 className="mt-14 font-display font-normal tracking-[-0.03em] text-ink leading-[0.95] text-[clamp(2.75rem,10vw,7rem)]">
          <span className="block rise" style={d(0.3)}>Tegar Haris DD</span>
        </h1>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-14">
          <div className="lg:col-span-7">
            <p className="rise font-display text-xl sm:text-2xl leading-snug text-ink max-w-[22ch]" style={d(0.56)}>
              {profileData.title}
            </p>
            <p className="rise mt-7 max-w-[58ch] text-base leading-relaxed text-muted" style={d(0.64)}>
              {profileData.bio}
            </p>

            <div className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3" style={d(0.74)}>
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 font-mono text-xs tracking-ledger text-muted hover:text-ink transition-colors"
                >
                  <span className="u-link">{c.label}</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>

            <dl className="rise mt-12 max-w-xl" style={d(0.84)}>
              {specimen.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-line py-3 last:border-b"
                >
                  <dt className="font-mono text-[0.7rem] tracking-ledger text-muted pt-1">{row.label}</dt>
                  <dd className="text-sm text-ink leading-relaxed">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <figure className="rise" style={d(0.7)}>
              <div className="border border-line bg-surface p-3">
                <div className="aspect-[4/5] overflow-hidden bg-line">
                  <img
                    src={profileData.profileImage}
                    alt={`Portrait of ${profileData.name}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[0.7rem] tracking-ledger text-muted">
                <span>fig. 01 — t.h.damarendra</span>
                <span className="text-accent">*</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
