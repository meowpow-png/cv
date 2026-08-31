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
        <div className="app-grid">
          <aside className="app-sidebar">
            <Skills content={skills} />
            <Education content={education} />
          </aside>
          <main className="app-main">
            <Profile content={profile} />
            <Projects content={projects} />
          </main>
        </div>
        <Footer content={footer} />
      </div>
    </>
  )
}

export const cssPath = 'src/apps/dev/App.css'
