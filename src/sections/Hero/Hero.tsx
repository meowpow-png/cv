export interface HeroProps {
  name: string
  title: string
  tagline?: string
}

export function Hero({ name, title, tagline }: HeroProps) {
  return (
    <header className="hero">
      <h1 className="hero-name">{name}</h1>
      <p className="hero-title">{title}</p>
      {tagline && <p className="hero-tagline">{tagline}</p>}
    </header>
  )
}
