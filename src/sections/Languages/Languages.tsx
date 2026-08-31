import { SectionHeading } from '@/shared/components/SectionHeading'

export interface LanguagesProps {
  heading?: string
}

export function Languages({ heading = 'Languages' }: LanguagesProps) {
  return (
    <section className="languages">
      <SectionHeading name={heading} />
      <div className="section-content" />
    </section>
  )
}
