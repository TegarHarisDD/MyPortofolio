export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="px-6">
      <div className="mx-auto max-w-[1180px] border-t border-hairline py-16 md:py-24">
        {title && <h2 className="title max-w-2xl text-ink">{title}</h2>}
        {intro && (
          <p className="mt-4 max-w-[65ch] text-base leading-6 text-muted">
            {intro}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  )
}
