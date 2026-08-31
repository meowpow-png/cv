import { hero, profile } from '@/content/generic'

export function App() {
  return (
    <div className="app-content">
      <Hero content={hero} />
      <Profile content={profile} />
    </div>
  )
}

export const cssPath = 'src/apps/generic/App.css'
