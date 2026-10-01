import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import profileData from '../data/profile.json'

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { index: '01', label: 'About', href: '#about' },
    { index: '02', label: 'Skills', href: '#skills' },
    { index: '03', label: 'Experience', href: '#experience' },
    { index: '04', label: 'Education', href: '#education' },
    { index: '05', label: 'Certificates', href: '#certificates' },
    { index: '06', label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'paper-veil backdrop-blur-md border-b border-line'
          : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="group flex items-baseline gap-2">
            <span className="font-display text-lg font-medium tracking-tight text-ink">
              Tegar Haris
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-baseline gap-1.5 font-mono text-[0.7rem] tracking-ledger text-muted hover:text-ink transition-colors"
              >
                <span className="text-accent tabular">{link.index}</span>
                <span className="u-link">{link.label}</span>
              </a>
            ))}
            <span className="w-px h-4 bg-line" aria-hidden="true" />
            <button
              onClick={toggleTheme}
              className="p-1.5 -mr-1.5 text-muted hover:text-ink transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-1.5 text-muted hover:text-ink transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-ink"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden paper-veil-strong backdrop-blur-md border-b border-line">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-baseline gap-3 py-2 font-mono text-xs tracking-ledger text-muted hover:text-ink transition-colors"
              >
                <span className="text-accent tabular">{link.index}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
