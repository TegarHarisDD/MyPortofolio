import Section from './Section'
import profileData from '../data/profile.json'

export default function About() {
  return (
    <Section
      id="about"
      title="Full stack by training, applied AI by focus."
      intro={profileData.longBio}
    />
  )
}
