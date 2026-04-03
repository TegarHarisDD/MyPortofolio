import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiExternalLink, FiDownload } from 'react-icons/fi'
import profileData from '../data/profile.json'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <p className="text-sm font-medium text-blue-500 mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text mb-4">
              {profileData.name}
            </h1>
            <p className="text-xl text-light-muted dark:text-dark-muted mb-2">
              {profileData.title}
            </p>
            <p className="text-light-muted dark:text-dark-muted mb-6 max-w-lg">
              {profileData.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                <FiMail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border rounded-lg text-sm font-medium transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-6 text-light-muted dark:text-dark-muted">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-text dark:hover:text-dark-text transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-text dark:hover:text-dark-text transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="hover:text-light-text dark:hover:text-dark-text transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <span className="flex items-center gap-1 text-sm">
                <FiMapPin className="w-4 h-4" />
                {profileData.location}
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-light-card dark:bg-dark-card flex items-center justify-center overflow-hidden">
                  <img
                    src={profileData.profileImage}
                    alt={profileData.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span class="text-6xl font-bold text-light-muted dark:text-dark-muted">${profileData.name.split(' ').map(n => n[0]).join('')}</span>`
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-lg">
                Age: {profileData.age}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-sm font-medium text-light-muted dark:text-dark-muted mb-4 uppercase tracking-wider">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {profileData.skills.map(skill => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm bg-light-border/50 dark:bg-dark-border/50 text-light-text dark:text-dark-text rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
