import { profile as ProfileContent } from '@/content/default'
import { SectionHeading } from '@/shared/components/SectionHeading'

export function Profile() {
  return (
    <section className="profile">
      <SectionHeading name="profile_" />
      <ProfileContent />
    </section>
  )
}
