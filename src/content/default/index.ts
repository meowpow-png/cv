import { readFileSync } from 'node:fs'
import { evaluateSync } from '@mdx-js/mdx'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

import { type HeroContent } from '@/content/default/types'

function readContent(path: string) {
  const source = readFileSync(path, 'utf-8')

  return evaluateSync(source, {
    Fragment,
    jsx,
    jsxs,
    remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'frontmatter' }]],
  })
}

export const profile = readContent('src/content/default/profile.mdx').default
export const hero = readContent('src/content/default/hero.mdx').frontmatter as HeroContent
