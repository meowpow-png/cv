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
      <Hero name="Jane Doe" title="Software Engineer" tagline="Building things that work" />
      <Profile />
      <Skills />
      <Projects />
      <Education />
      <Interests />
      <Footer />
    </>
  )
}
