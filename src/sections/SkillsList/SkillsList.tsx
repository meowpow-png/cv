import { SectionHeading } from '@/shared/components/SectionHeading'

import { type ComponentType } from 'react'

export interface SkillsListProps {
  heading?: string
  content?: ComponentType
}

export function SkillsList({ heading = 'Skills', content: Content }: SkillsListProps) {
  return (
    <section className="skills-list">
      <SectionHeading name={heading} />
      <div className="section-content">{Content && <Content />}</div>
    </section>
  )
}
