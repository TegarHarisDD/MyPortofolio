import Section from './Section'
import profileData from '../data/profile.json'

export default function Certificates() {
  const certificates = profileData.certifications

  return (
    <Section
      id="certificates"
      title="Credentials, verified."
      intro="Certifications and language scores, with validity where applicable."
    >
      <div>
        {certificates.map((cert) => {
          const inner = (
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
              <div>
                <h3 className="text-base font-medium text-ink">
                  {cert.url ? <span className="link">{cert.title}</span> : cert.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              </div>
              <p className="caption">{cert.detail}</p>
            </div>
          )

          const className =
            'group block border-t border-hairline py-6 last:border-b'

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
