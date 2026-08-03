import { interests } from '@/content/default'
import { SectionHeading } from '@/shared/components/SectionHeading'

export function Interests() {
  return (
    <section className="interests">
      <SectionHeading name="interests" />
      <p className="interests-list">{interests.items.join(' / ')}</p>
    </section>
  )
}
