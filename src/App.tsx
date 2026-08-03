import { Education } from '@/sections/Education'
import { Footer } from '@/sections/Footer'
import { Hero } from '@/sections/Hero'
import { Interests } from '@/sections/Interests'
import { Profile } from '@/sections/Profile'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'

export function App() {
  return (
    <>
      <div className="app-content">
        <Hero />
        <Profile />
        <Skills />
        <Projects />
        <Education />
        <Interests />
        <Footer />
      </div>
    </>
  )
}

export const cssPath = 'src/App.css'
