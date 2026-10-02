import profileData from '../data/profile.json'

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100dvh] overflow-hidden">
      <div className="hero-photo" aria-hidden="true">
        <img src={profileData.profileImage} alt="" />
      </div>

      <div className="grid-bg" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1180px] items-center px-6 py-28">
        <div className="w-full max-w-[560px] md:ml-auto md:pl-12">
          <h1 className="whitespace-nowrap text-[clamp(2rem,8vw,4.75rem)] font-medium leading-[1.05] tracking-display text-ink">
            {profileData.name}
          </h1>

          <p className="mt-4 text-2xl leading-8 tracking-title text-muted">
            {profileData.title}
          </p>

          <p className="mt-7 max-w-[58ch] text-lg leading-7 text-muted">
            {profileData.bio}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profileData.email}`} className="btn btn--primary">
              Email me
            </a>
            <a href="#experience" className="btn btn--secondary">
              See my work
            </a>
          </div>

          <p className="caption mt-7">{profileData.location}</p>
        </div>
      </div>
    </section>
  )
}
