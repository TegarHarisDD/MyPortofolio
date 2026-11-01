import profileData from '../data/profile.json'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="hero-photo" aria-hidden="true">
        <img src={profileData.profileImage} alt="" />
      </div>

      <div className="grid-bg" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[85svh] w-full max-w-[1180px] items-center px-6 py-32 md:min-h-[90svh]">
        <div className="w-full md:ml-auto md:w-1/2 md:pl-10">
          <h1 className="text-balance text-[clamp(2rem,8vw,4rem)] font-medium leading-[1.05] tracking-display text-ink">
            {profileData.shortName}
          </h1>

          <p className="mt-4 text-2xl leading-8 tracking-title text-muted">
            {profileData.title}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href={`mailto:${profileData.email}`} className="btn btn--secondary">
              Email me
            </a>
          </div>

          <p className="caption mt-7">{profileData.location}</p>
        </div>
      </div>
    </section>
  )
}
