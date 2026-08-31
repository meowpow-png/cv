import { Education } from '@/sections/Education'
import { Footer } from '@/sections/Footer'
import { Hero } from '@/sections/Hero'
import { Profile } from '@/sections/Profile'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'

import { education, footer, hero, profile, projects, skills } from '@/content/default'

export function App() {
  return (
    <>
      <div className="app-content">
        <Hero content={hero} />
        <Skills content={skills} />
        <Projects content={projects} />
        <Profile content={profile} />
        <Education content={education} />
        <Footer content={footer} />
      </div>
    </>
  )
}

export const cssPath = 'src/apps/technical/App.css'
