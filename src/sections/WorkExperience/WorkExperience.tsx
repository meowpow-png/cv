import { SectionHeading } from '@/shared/components/SectionHeading'

import { type WorkExperienceEntry } from '@/shared/content-types'

export interface WorkExperienceProps {
  heading?: string
  content: WorkExperienceEntry[]
}

export function WorkExperience({ heading = 'Work Experience', content }: WorkExperienceProps) {
  return (
    <section className="work-experience">
      <SectionHeading name={heading} />
      <div className="section-content">
        <ol className="work-experience-list">
          {content.map(({ frontmatter, Description }) => (
            <li key={frontmatter.role} className="work-experience-item">
              <h3 className="work-experience-item-role">{frontmatter.role}</h3>
              <p className="work-experience-item-company">{frontmatter.company}</p>
              <p className="work-experience-item-period">{frontmatter.period}</p>
              <Description />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
