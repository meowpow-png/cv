import { Education } from '@/sections/Education'
import { Hero } from '@/sections/Hero'
import { Languages } from '@/sections/Languages'
import { Profile } from '@/sections/Profile'
import { Skills } from '@/sections/Skills'
import { WorkExperience } from '@/sections/WorkExperience'

import { hero, profile } from '@/content/generic'

export function App() {
  return (
    <div className="app-content">
      <Hero content={hero} />
      <Profile content={profile} />
      <WorkExperience heading="Radno iskustvo" />
      <Skills heading="Vještine" />
      <Education heading="Obrazovanje" />
      <Languages heading="Jezici" />
    </div>
  )
}

export const cssPath = 'src/apps/generic/App.css'
