import { FiAward, FiExternalLink } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Certificates() {
  const headerRef = useScrollAnimation()
  const cardRef = useScrollAnimation()
  const certificates = [
    {
      title: 'View All Certifications',
      issuer: 'LinkedIn',
      description: 'Browse my complete list of certifications and credentials on LinkedIn.'
    }
  ]

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            Certifications
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            Verified credentials and certifications from recognized platforms.
          </p>
        </div>

        <div ref={cardRef} className="max-w-2xl mx-auto fade-in">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href="https://www.linkedin.com/in/tegarharisdd/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
                  <FiAward className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-light-text dark:text-dark-text group-hover:text-blue-500 transition-colors">
                      {cert.title}
                    </h3>
                    <FiExternalLink className="w-4 h-4 text-light-muted dark:text-dark-muted group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-sm text-blue-500 font-medium mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-light-muted dark:text-dark-muted mt-2">
                    {cert.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
