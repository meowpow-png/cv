import { SectionHeading } from '@/shared/components/SectionHeading'

import { type SkillsContent } from '@/shared/content-types'

export interface SkillsProps {
  content: SkillsContent
}

export function Skills({ content }: SkillsProps) {
  const columns = [
    { label: 'Languages', items: content.languages },
    { label: 'Frameworks', items: content.frameworks },
    { label: 'Systems', items: content.systems },
    { label: 'Tools', items: content.tools },
  ]

  return (
    <section className="skills">
      <SectionHeading name="Skills" />
      <div className="section-content">
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
      </div>
    </section>
  )
}
