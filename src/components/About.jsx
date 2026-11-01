import Section from './Section'
import profileData from '../data/profile.json'

export default function About() {
  return (
    <Section
      id="about"
      title="Professional Summary"
      intro={profileData.longBio}
    />
  )
}
