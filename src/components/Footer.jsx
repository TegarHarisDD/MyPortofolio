import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import profileData from '../data/profile.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-mono text-[0.7rem] tracking-ledger text-muted">
            <span className="text-ink">{profileData.name}</span>
            <span className="mx-2">/</span>
            <span className="tabular">{currentYear}</span>
            <span className="mx-2">/</span>
            <span>junior software &amp; ai engineer</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="text-muted hover:text-ink transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
            <a
              href="#home"
              className="ml-2 inline-flex items-center gap-1.5 font-mono text-[0.7rem] tracking-ledger text-muted hover:text-ink transition-colors"
              aria-label="Back to top"
            >
              top
              <FiArrowUp className="w-3.5 h-3.5 text-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
