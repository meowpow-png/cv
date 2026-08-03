import { hero } from '@/content/default'
import { GitHub, Mail, MapPin, Terminal } from '@/shared/components'

import { type ComponentType } from 'react'

const icons: Record<string, ComponentType> = {
  website: Terminal,
  email: Mail,
  location: MapPin,
  github: GitHub,
}

export function Hero() {
  return (
    <header className="hero">
      <h1 className="hero-name">{hero.name}</h1>
      <p className="hero-title">{hero.title}</p>
      <ul className="hero-links">
        {hero.links.map((link) => {
          const Icon = icons[link.type]

          return (
            <li key={link.type} className="hero-links-item">
              {Icon && <Icon />}
              {link.href ? <a href={link.href}>{link.text}</a> : link.text}
            </li>
          )
        })}
      </ul>
    </header>
  )
}
