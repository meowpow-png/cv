interface HeroLink {
  type: string
  text: string
  href?: string
}

export interface HeroContent {
  name: string
  title: string
  links: HeroLink[]
}
