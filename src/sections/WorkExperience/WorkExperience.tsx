import { SectionHeading } from '@/shared/components/SectionHeading'

import { type ComponentType } from 'react'

export interface WorkExperienceProps {
  heading?: string
  content?: ComponentType
}

export function WorkExperience({
  heading = 'Work Experience',
  content: Content,
}: WorkExperienceProps) {
  return (
    <section className="work-experience">
      <SectionHeading name={heading} />
      <div className="section-content">{Content && <Content />}</div>
    </section>
  )
}
