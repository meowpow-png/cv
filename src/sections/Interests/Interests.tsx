import { interests } from '@/content/default'
import { SectionHeading } from '@/shared/SectionHeading'

export function Interests() {
  return (
    <section className="interests">
      <SectionHeading name="interests_" />
      <p className="interests-list">{interests.items.join(' / ')}</p>
    </section>
  )
}
