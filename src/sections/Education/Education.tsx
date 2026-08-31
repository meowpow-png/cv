import { SectionHeading } from '@/shared/components/SectionHeading'

import { type EducationContent } from '@/shared/content-types'

export interface EducationProps {
  content: EducationContent
}

export function Education({ content }: EducationProps) {
  return (
    <section className="education">
      <SectionHeading name="Education" />
      <div className="section-content">
        <div className="education-entry">
          <h3 className="education-entry-degree">{content.degree}</h3>
          <p className="education-entry-institution">
            {content.institution}, {content.location}
          </p>
          <p className="education-entry-coursework">
            <strong>Relevant Coursework:</strong> {content.coursework.join(', ')}
          </p>
        </div>
      </div>
    </section>
  )
}
