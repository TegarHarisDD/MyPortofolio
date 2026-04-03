import { FiCode, FiCpu, FiTerminal } from 'react-icons/fi'
import profileData from '../data/profile.json'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const headerRef = useScrollAnimation()
  const cardsRef = useScrollAnimation()
  const bottomRef = useScrollAnimation()
  const focusAreas = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Front-End Development',
      description: 'Building responsive and interactive web applications with React, JavaScript, and modern CSS frameworks like Tailwind.'
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: 'Machine Learning Engineering',
      description: 'Developing ML models with Python, TensorFlow, and Scikit-learn. From data preprocessing to model deployment with Streamlit.'
    },
    {
      icon: <FiTerminal className="w-6 h-6" />,
      title: 'Tools & Workflow',
      description: 'Using Git, GitHub, VS Code, and Figma for version control, collaboration, and design-to-code workflows.'
    }
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            About Me
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            {profileData.longBio}
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 fade-in">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="p-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg w-fit mb-4">
                {area.icon}
              </div>
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-light-muted dark:text-dark-muted">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div ref={bottomRef} className="mt-16 grid md:grid-cols-2 gap-8 fade-in">
          <div className="p-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl">
            <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
              Education
            </h3>
            <p className="text-sm text-light-muted dark:text-dark-muted">
              {profileData.education.degree}
            </p>
            <p className="text-sm text-blue-500 font-medium">
              {profileData.education.university}
            </p>
            <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
              {profileData.education.year}
            </p>
          </div>

          <div className="p-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl">
            <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {profileData.languages.map(lang => (
                <span
                  key={lang}
                  className="px-3 py-1.5 text-sm bg-light-border/50 dark:bg-dark-border/50 text-light-text dark:text-dark-text rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
