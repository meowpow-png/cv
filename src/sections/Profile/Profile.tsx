import { type ProfileContent } from '@/shared/content-types'

export interface ProfileProps {
  content: ProfileContent
}

export function Profile({ content: Content }: ProfileProps) {
  return (
    <section className="profile">
      <div className="section-content">
        <Content />
      </div>
    </section>
  )
}
