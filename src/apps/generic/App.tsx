import { Education } from '@/sections/Education'
import { Hero } from '@/sections/Hero'
import { Languages } from '@/sections/Languages'
import { Profile } from '@/sections/Profile'
import { SkillsList } from '@/sections/SkillsList'
import { WorkExperience } from '@/sections/WorkExperience'

import { education, hero, languages, profile, skills, workExperience } from '@/content/generic'

export function App() {
  return (
    <div className="app-content">
      <Hero content={hero} />
      <Profile content={profile} />
      <WorkExperience heading="Radno iskustvo" content={workExperience} />
      <SkillsList heading="Vještine" content={skills} />
      <Education heading="Obrazovanje" content={education} />
      <Languages heading="Jezici" content={languages} />
    </div>
  )
}

export const cssPath = 'src/apps/generic/App.css'
