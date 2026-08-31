import { readMdx } from '@/shared/mdx'

import { type ComponentType } from 'react'
import {
  type EducationContent,
  type HeroContent,
  type ProfileContent,
  type WorkExperienceEntry,
  type WorkExperienceFrontmatter,
} from '@/shared/content-types'

export const profile = readMdx('src/content/generic/profile.mdx').default as ProfileContent

const workExperienceSlugs = ['konobar', 'zavarivac', 'glazbenik']

export const workExperience: WorkExperienceEntry[] = workExperienceSlugs.map((slug) => {
  const entry = readMdx(`src/content/generic/work-experience/${slug}.mdx`)

  return {
    frontmatter: entry.frontmatter as WorkExperienceFrontmatter,
    Description: entry.default,
  }
})

export const education = readMdx('src/content/generic/education.mdx')
  .frontmatter as EducationContent
export const languages = readMdx('src/content/generic/languages.mdx').default as ComponentType

const heroFrontmatter = readMdx('src/content/generic/hero.mdx').frontmatter as HeroContent

const phoneNumber = process.env.PHONE_NUMBER

export const hero: HeroContent = {
  ...heroFrontmatter,
  links: phoneNumber
    ? [...heroFrontmatter.links, { type: 'phone', text: phoneNumber, href: `tel:${phoneNumber}` }]
    : heroFrontmatter.links,
}
