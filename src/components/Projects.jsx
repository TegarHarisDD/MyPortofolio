import { useRef, useEffect, useCallback } from 'react'
import Section from './Section'
import profileData from '../data/profile.json'
import { FiExternalLink, FiGithub, FiYoutube } from 'react-icons/fi'

function ProjectCard({ project }) {
  return (
    <article className="group mr-6 flex w-[80vw] max-w-[340px] shrink-0 flex-col overflow-hidden rounded-panel border border-hairline bg-surface transition-colors duration-200 hover:border-white/20">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden border-b border-hairline"
        aria-label={`${project.title} — ${project.linkLabel}`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          draggable="false"
          className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </a>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-medium text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            {project.source ? (
              <FiYoutube className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <FiExternalLink className="h-4 w-4" strokeWidth={1.5} />
            )}
            {project.linkLabel}
          </a>
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <FiGithub className="h-4 w-4" strokeWidth={1.5} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const projects = profileData.projects
  const slides = [...projects, ...projects]

  const trackRef = useRef(null)
  const pausedRef = useRef(false)
  const draggingRef = useRef(false)
  const dragRef = useRef({ startX: 0, startScroll: 0, moved: false })
  const carryRef = useRef(0)

  const getSetWidth = useCallback(() => {
    const inner = trackRef.current?.firstElementChild
    if (!inner || inner.children.length <= projects.length) return 0
    return (
      inner.children[projects.length].offsetLeft - inner.children[0].offsetLeft
    )
  }, [projects.length])

  const normalize = useCallback(() => {
    const track = trackRef.current
    const setWidth = getSetWidth()
    if (!track || !setWidth) return
    while (track.scrollLeft >= setWidth) track.scrollLeft -= setWidth
    while (track.scrollLeft < 0) track.scrollLeft += setWidth
  }, [getSetWidth])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf
    const step = () => {
      const track = trackRef.current
      if (track && !pausedRef.current && !draggingRef.current) {
        carryRef.current += 0.5
        const whole = Math.floor(carryRef.current)
        if (whole > 0) {
          carryRef.current -= whole
          track.scrollLeft += whole
          const setWidth = getSetWidth()
          if (setWidth && track.scrollLeft >= setWidth) {
            track.scrollLeft -= setWidth
          }
        }
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [getSetWidth])

  const handlePointerDown = (event) => {
    if (event.pointerType !== 'mouse') return
    const track = trackRef.current
    if (!track) return
    draggingRef.current = true
    dragRef.current = {
      startX: event.clientX,
      startScroll: track.scrollLeft,
      moved: false,
    }
    track.setPointerCapture?.(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (!draggingRef.current) return
    const track = trackRef.current
    if (!track) return
    const dx = event.clientX - dragRef.current.startX
    if (Math.abs(dx) > 3) dragRef.current.moved = true
    track.scrollLeft = dragRef.current.startScroll - dx
    normalize()
  }

  const handlePointerUp = (event) => {
    if (!draggingRef.current) return
    draggingRef.current = false
    const track = trackRef.current
    if (track?.hasPointerCapture?.(event.pointerId)) {
      track.releasePointerCapture(event.pointerId)
    }
    normalize()
  }

  const handleClickCapture = (event) => {
    if (dragRef.current.moved) {
      event.preventDefault()
      event.stopPropagation()
      dragRef.current.moved = false
    }
  }

  return (
    <Section
      id="projects"
      title="Things I've built."
      intro="Selected projects across applied AI and full stack web, each shipped to a live demo or repository."
    >

      <div
        ref={trackRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onFocusCapture={() => (pausedRef.current = true)}
        onBlurCapture={() => (pausedRef.current = false)}
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() => (pausedRef.current = false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={handleClickCapture}
        onScroll={normalize}
        className="marquee no-scrollbar -mx-6 mt-6 cursor-grab touch-pan-x select-none overflow-x-auto pb-2 active:cursor-grabbing"
      >
        <div className="marquee-track">
          {slides.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}
