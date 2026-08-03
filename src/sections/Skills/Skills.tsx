import { skills } from '@/content/default'
import { SectionHeading } from '@/shared/SectionHeading'

const columns = [
  { label: 'Languages', items: skills.languages },
  { label: 'Frameworks & Libraries', items: skills.frameworks },
  { label: 'Tools & Technologies', items: skills.tools },
  { label: 'Core Skills', items: skills.coreSkills },
]

export function Skills() {
  return (
    <section className="skills">
      <SectionHeading name="skills_" />
      <div className="skills-columns">
        {columns.map((column) => (
          <div key={column.label} className="skills-column">
            <h3 className="skills-column-label">{column.label}</h3>
            <ul className="skills-column-list">
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
