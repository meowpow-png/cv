import { GitHub, Mail, Phone, Terminal } from '@/shared/components/Icons'

import { type ComponentType } from 'react'
import { type HeroContent } from '@/shared/content-types'

export interface HeroProps {
  content: HeroContent
}

const icons: Record<string, ComponentType> = {
  website: Terminal,
  email: Mail,
  github: GitHub,
  phone: Phone,
}

export function Hero({ content }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero-heading">
        <h1 className="hero-name">{content.name}</h1>
        {content.title && <p className="hero-title">{content.title}</p>}
      </div>
      <ul className="hero-links">
        {content.links.map((link) => {
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
