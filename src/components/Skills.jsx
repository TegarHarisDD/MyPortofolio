import { useState } from 'react'
import profileData from '../data/profile.json'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Skills() {
  const headerRef = useScrollAnimation()
  const gridRef = useScrollAnimation()
  const skillCategories = [
    { key: 'frontend', label: 'Front-End', color: 'blue' },
    { key: 'backend', label: 'Back-End', color: 'green' },
    { key: 'mlEngineer', label: 'ML Engineer', color: 'purple' },
    { key: 'tools', label: 'Tools & Others', color: 'orange' }
  ]

  const [activeCategory, setActiveCategory] = useState('frontend')

  const colorMap = {
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500' },
    green: { bg: 'bg-green-500/10', text: 'text-green-500', border: 'border-green-500' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'border-purple-500' },
    orange: { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500' }
  }

  return (
    <section id="skills" className="py-20 bg-light-card/50 dark:bg-dark-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            My technical toolkit across front-end development, Python, and machine learning.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? `${colorMap[cat.color].bg} ${colorMap[cat.color].text} border ${colorMap[cat.color].border}`
                  : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 fade-in">
          {profileData.skills[activeCategory].map((skill, index) => (
            <div
              key={skill}
              className="p-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg text-center hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-sm font-medium text-light-text dark:text-dark-text">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
