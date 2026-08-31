import { readMdx } from '@/shared/mdx'

import { type HeroContent, type ProfileContent } from '@/shared/content-types'

export const profile = readMdx('src/content/generic/profile.mdx').default as ProfileContent

const heroFrontmatter = readMdx('src/content/generic/hero.mdx').frontmatter as HeroContent

const phoneNumber = process.env.PHONE_NUMBER

export const hero: HeroContent = {
  ...heroFrontmatter,
  links: phoneNumber
    ? [...heroFrontmatter.links, { type: 'phone', text: phoneNumber, href: `tel:${phoneNumber}` }]
    : heroFrontmatter.links,
}
