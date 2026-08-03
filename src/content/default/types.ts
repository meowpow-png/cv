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

export interface SkillsContent {
  languages: string[]
  frameworks: string[]
  tools: string[]
  concepts: string[]
}

export interface ProjectFrontmatter {
  title: string
  repo: string
  stack: string[]
}

export interface EducationContent {
  degree: string
  institution: string
  location: string
  coursework: string[]
}

export interface InterestsContent {
  items: string[]
}

export interface FooterContent {
  prompt: string
  tagline: string
}

export interface ProfileFrontmatter {
  code: string[]
}
