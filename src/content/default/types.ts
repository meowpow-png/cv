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
  coreSkills: string[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectFrontmatter {
  title: string
  repo: ProjectLink
  stack: string[]
  link: ProjectLink
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
