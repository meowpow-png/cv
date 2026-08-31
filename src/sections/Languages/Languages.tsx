import { SectionHeading } from '@/shared/components/SectionHeading'

import { type ComponentType } from 'react'

export interface LanguagesProps {
  heading?: string
  content?: ComponentType
}

export function Languages({ heading = 'Languages', content: Content }: LanguagesProps) {
  return (
    <section className="languages">
      <SectionHeading name={heading} />
      <div className="section-content">{Content && <Content />}</div>
    </section>
  )
}
