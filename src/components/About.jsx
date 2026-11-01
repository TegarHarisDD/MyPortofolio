import Section from './Section'
import profileData from '../data/profile.json'

export default function About() {
  return (
    <Section
      id="about"
      title="Practical software, AI, and automation."
      intro={profileData.longBio}
    />
  )
}
