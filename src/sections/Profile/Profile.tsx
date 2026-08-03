import { profile as ProfileContent, profileCode } from '@/content/default'
import { SectionHeading } from '@/shared/components/SectionHeading'

export function Profile() {
  return (
    <section className="profile">
      <SectionHeading name="profile_" />
      <div className="profile-body">
        <ProfileContent />
        <div className="profile-code">
          {profileCode.code.map((line, index) => (
            <div key={index} className="profile-code-line">
              <span className="profile-code-line-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="profile-code-line-text">{line}</span>
            </div>
          ))}
          <div className="profile-code-line">
            <span className="profile-code-line-number" />
            <span className="profile-code-cursor">_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
