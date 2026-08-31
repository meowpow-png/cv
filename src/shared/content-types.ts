import { type ComponentType } from 'react'

interface HeroLink {
  type: string
  text: string
  href?: string
}

export interface HeroContent {
  name: string
  title?: string
  links: HeroLink[]
}

export type ProfileContent = ComponentType

export interface SkillsContent {
  languages: string[]
  frameworks: string[]
  tools: string[]
  systems: string[]
}

export interface ProjectFrontmatter {
  title: string
  repo: string
  linkLabel: string
  stack: string[]
}

export interface ProjectContent {
  frontmatter: ProjectFrontmatter
  Description: ComponentType
}

export interface WorkExperienceFrontmatter {
  role: string
  company: string
  period: string
}

export interface WorkExperienceEntry {
  frontmatter: WorkExperienceFrontmatter
  Description: ComponentType
}

export interface EducationContent {
  degree: string
  institution: string
  location: string
  coursework: string[]
}

export interface FooterContent {
  text: string
}
