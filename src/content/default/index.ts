import { readMdx } from '@/shared/mdx'

import {
  type EducationContent,
  type FooterContent,
  type HeroContent,
  type ProjectFrontmatter,
  type SkillsContent,
} from '@/shared/content-types'

export const profile = readMdx('src/content/default/profile.mdx').default
export const hero = readMdx('src/content/default/hero.mdx').frontmatter as HeroContent
export const skills = readMdx('src/content/default/skills.mdx').frontmatter as SkillsContent
export const education = readMdx('src/content/default/education.mdx')
  .frontmatter as EducationContent
export const footer = readMdx('src/content/default/footer.mdx').frontmatter as FooterContent

const projectSlugs = ['wifi-admin', 'mipe', 'hackaprompt']

export const projects = projectSlugs.map((slug) => {
  const project = readMdx(`src/content/default/projects/${slug}.mdx`)

  return {
    frontmatter: project.frontmatter as ProjectFrontmatter,
    Description: project.default,
  }
})
