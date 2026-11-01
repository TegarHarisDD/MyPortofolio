import { useState, useEffect, useRef } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import profileData from '../data/profile.json'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuButton = useRef(null)

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')]
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      const current = atBottom ? sections.at(-1) : sections.filter((section) => section.getBoundingClientRect().top <= 160).at(-1)
      setActiveSection(current?.id || 'home')
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)')
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false) }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  const navLinks = [
    { label: 'Professional Summary', href: '#about' },
    { label: 'Core Skills', href: '#skills' },
    { label: 'Work Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false)
          menuButton.current?.focus()
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen
          ? 'veil backdrop-blur-md border-b border-hairline'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-[15px] font-strong tracking-body text-ink"
          >
            {profileData.shortName}
          </a>

          <div className="hidden items-center xl:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="chip" aria-current={link.href === `#${activeSection}` ? 'location' : undefined}>
                {link.label}
              </a>
            ))}
          </div>

          <button
            ref={menuButton}
            onClick={() => setIsOpen(!isOpen)}
            className="icon-btn xl:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <FiX className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <FiMenu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="mx-auto max-h-[calc(100dvh-4rem)] max-w-[1180px] overflow-y-auto px-6 xl:hidden">
          <div className="menu mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setIsOpen(false)
                  const section = document.querySelector(link.href)
                  section?.setAttribute('tabindex', '-1')
                  section?.focus({ preventScroll: true })
                }}
                className="menu__item"
                aria-current={link.href === `#${activeSection}` ? 'location' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
