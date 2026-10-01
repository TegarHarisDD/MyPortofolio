import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Section({ id, label, title, intro, children }) {
  const ref = useScrollAnimation()

  return (
    <section id={id} ref={ref} className="relative reveal">
      <span className="section-rule" aria-hidden="true" />
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[6.5rem_1fr] gap-x-10 gap-y-6">
          <div className="self-start md:sticky md:top-24">
            <span className="ledger-label">{label}</span>
          </div>

          <div>
            {title && (
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.05] font-normal tracking-tight text-ink max-w-2xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted">
                {intro}
              </p>
            )}
            {children && <div className={title || intro ? 'mt-12' : ''}>{children}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
