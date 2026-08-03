import { readFileSync } from 'node:fs'
import { evaluateSync } from '@mdx-js/mdx'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

import {
  type EducationContent,
  type FooterContent,
  type HeroContent,
  type InterestsContent,
  type ProfileFrontmatter,
  type ProjectFrontmatter,
  type SkillsContent,
} from '@/content/default/types'

function readContent(path: string) {
  const source = readFileSync(path, 'utf-8')

  return evaluateSync(source, {
    Fragment,
    jsx,
    jsxs,
    remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'frontmatter' }]],
  })
}

const profileContent = readContent('src/content/default/profile.mdx')
export const profile = profileContent.default
export const profileCode = profileContent.frontmatter as ProfileFrontmatter
export const hero = readContent('src/content/default/hero.mdx').frontmatter as HeroContent
export const skills = readContent('src/content/default/skills.mdx').frontmatter as SkillsContent
export const education = readContent('src/content/default/education.mdx')
  .frontmatter as EducationContent
export const interests = readContent('src/content/default/interests.mdx')
  .frontmatter as InterestsContent
export const footer = readContent('src/content/default/footer.mdx').frontmatter as FooterContent

const projectSlugs = ['focusd', 'ledgerly', 'bookrest']

export const projects = projectSlugs.map((slug) => {
  const project = readContent(`src/content/default/projects/${slug}.mdx`)

  return {
    frontmatter: project.frontmatter as ProjectFrontmatter,
    Description: project.default,
  }
})
