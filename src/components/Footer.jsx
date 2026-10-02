import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profileData from '../data/profile.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 px-6">
      <div className="mx-auto max-w-[960px] border-t border-hairline py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="caption">
            © {currentYear} {profileData.name}
          </p>

          <div className="flex items-center gap-1">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <FiGithub className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="icon-btn"
              aria-label="Email"
            >
              <FiMail className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="#home" className="chip ml-2" aria-label="Back to top">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
