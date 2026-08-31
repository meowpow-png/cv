import { SectionHeading } from '@/shared/components/SectionHeading'

export interface WorkExperienceProps {
  heading?: string
}

export function WorkExperience({ heading = 'Work Experience' }: WorkExperienceProps) {
  return (
    <section className="work-experience">
      <SectionHeading name={heading} />
      <div className="section-content" />
    </section>
  )
}
