import { skills } from '@/content/default'
import { SectionHeading } from '@/shared/components/SectionHeading'

const columns = [
  { label: 'Languages', items: skills.languages },
  { label: 'Frameworks', items: skills.frameworks },
  { label: 'Systems', items: skills.systems },
  { label: 'Tools', items: skills.tools },
]

export function Skills() {
  return (
    <section className="skills">
      <SectionHeading name="Skills" />
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
