import { hero } from '@/content/default'
import { GitHub, Mail, Terminal } from '@/shared/components/Icons'

import { type ComponentType } from 'react'

const icons: Record<string, ComponentType> = {
  website: Terminal,
  email: Mail,
  github: GitHub,
}

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-heading">
        <h1 className="hero-name">{hero.name}</h1>
        <p className="hero-title">{hero.title}</p>
      </div>
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
      <hr className="hero-divider" />
    </header>
  )
}
