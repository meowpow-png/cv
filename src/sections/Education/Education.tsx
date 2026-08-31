import { SectionHeading } from '@/shared/components/SectionHeading'

import { type EducationContent } from '@/shared/content-types'

export interface EducationProps {
  heading?: string
  courseworkLabel?: string
  content: EducationContent
}

export function Education({
  heading = 'Education',
  courseworkLabel = 'Relevant Coursework',
  content,
}: EducationProps) {
  return (
    <section className="education">
      <SectionHeading name={heading} />
      <div className="section-content">
        <div className="education-entry">
          <h3 className="education-entry-degree">{content.degree}</h3>
          <p className="education-entry-institution">
            {content.institution}, {content.location}
          </p>
          <p className="education-entry-coursework">
            <strong>{courseworkLabel}:</strong> {content.coursework.join(', ')}
          </p>
        </div>
      </div>
    </section>
  )
}
