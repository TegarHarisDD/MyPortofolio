import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import profileData from '../data/profile.json'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()
  const contactItems = [
    { icon: <FiMail className="w-5 h-5" />, label: 'Email', value: profileData.email, href: `mailto:${profileData.email}` },
    { icon: <FiPhone className="w-5 h-5" />, label: 'Phone', value: profileData.phone, href: `tel:${profileData.phone}` },
    { icon: <FiMapPin className="w-5 h-5" />, label: 'Location', value: profileData.location, href: null },
    { icon: <FiGithub className="w-5 h-5" />, label: 'GitHub', value: 'View Profile', href: profileData.github },
    { icon: <FiLinkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'View Profile', href: profileData.linkedin },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            Get in Touch
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            Interested in collaborating or have a question? Feel free to reach out.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto fade-in">
          {contactItems.map((item, index) => (
            <div
              key={item.label}
              className="p-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-light-muted dark:text-dark-muted mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-light-text dark:text-dark-text hover:text-blue-500 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-light-text dark:text-dark-text">{item.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="mt-16 text-center fade-in">
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            <FiMail className="w-5 h-5" />
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  )
}
