import { education } from '@/content/default'
import { SectionHeading } from '@/shared/components/SectionHeading'

export function Education() {
  return (
    <section className="education">
      <SectionHeading name="education" />
      <div className="education-entry">
        <h3 className="education-entry-degree">{education.degree}</h3>
        <p className="education-entry-institution">
          {education.institution}, {education.location}
        </p>
        <p className="education-entry-coursework">
          <strong>Relevant Coursework:</strong> {education.coursework.join(', ')}
        </p>
      </div>
    </section>
  )
}
