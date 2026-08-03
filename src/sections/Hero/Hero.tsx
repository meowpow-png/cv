import { hero } from '@/content/default'

export function Hero() {
  return (
    <header className="hero">
      <h1 className="hero-name">{hero.name}</h1>
      <p className="hero-title">{hero.title}</p>
      <ul className="hero-links">
        {hero.links.map((link) => (
          <li key={link.type} className="hero-links-item">
            {link.href ? <a href={link.href}>{link.text}</a> : link.text}
          </li>
        ))}
      </ul>
    </header>
  )
}
