import { FiArrowUpRight } from 'react-icons/fi'
import Section from './Section'
import profileData from '../data/profile.json'

export default function Certificates() {
  const certificates = profileData.certifications

  return (
    <Section
      id="certificates"
      label="certificates"
      title="Credentials, verified."
      intro="Certifications and language scores, with validity where applicable."
    >
      <div>
        {certificates.map((cert) => {
          const inner = (
            <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:gap-8 sm:items-start">
              <div>
                <h3 className="font-display text-lg sm:text-xl text-ink transition-colors group-hover:text-accent">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-accent">{cert.issuer}</p>
              </div>
              <div className="sm:text-right">
                <p className="font-mono text-[0.7rem] tracking-ledger text-muted">
                  {cert.detail}
                </p>
                {cert.url && (
                  <span className="mt-2 inline-flex items-center gap-1 font-mono text-[0.7rem] tracking-ledger text-muted transition-colors group-hover:text-ink">
                    certificate
                    <FiArrowUpRight className="w-3.5 h-3.5 text-accent" />
                  </span>
                )}
              </div>
            </div>
          )

          const className =
            'group block border-t border-line py-6 last:border-b transition-colors'

          return cert.url ? (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {inner}
            </a>
          ) : (
            <div key={cert.title} className={className}>
              {inner}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
