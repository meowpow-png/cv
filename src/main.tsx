import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { renderToStaticMarkup } from 'react-dom/server'

import { App as DevApp, cssPath as devCssPath } from '@/apps/dev/App'
import { App as GenericApp, cssPath as genericCssPath } from '@/apps/generic/App'

import { cssPath as educationCssPath } from '@/sections/Education'
import { cssPath as footerCssPath } from '@/sections/Footer'
import { cssPath as heroCssPath } from '@/sections/Hero'
import { cssPath as profileCssPath } from '@/sections/Profile'
import { cssPath as projectsCssPath } from '@/sections/Projects'
import { cssPath as skillsCssPath } from '@/sections/Skills'
import { cssPath as arrowLinkCssPath } from '@/shared/components/ArrowLink'
import { cssPath as iconsCssPath } from '@/shared/components/Icons'
import { cssPath as sectionHeadingCssPath } from '@/shared/components/SectionHeading'

import { type ComponentType } from 'react'

interface CvType {
  name: string
  App: ComponentType
  cssPath: string
}

const cvTypes: CvType[] = [
  { name: 'generic', App: GenericApp, cssPath: genericCssPath },
  { name: 'dev', App: DevApp, cssPath: devCssPath },
]

const tokensCssPath = 'src/shared/tokens.css'
const sectionContentCssPath = 'src/shared/section-content.css'

const sharedCssPaths = [
  tokensCssPath,
  sectionContentCssPath,
  heroCssPath,
  profileCssPath,
  skillsCssPath,
  projectsCssPath,
  educationCssPath,
  footerCssPath,
  sectionHeadingCssPath,
  arrowLinkCssPath,
  iconsCssPath,
]

const fontFiles = [
  'playfair-display-400.woff2',
  'playfair-display-700.woff2',
  'jetbrains-mono-400.woff2',
  'jetbrains-mono-700.woff2',
  'ibm-plex-sans-400.woff2',
  'ibm-plex-sans-500.woff2',
  'ibm-plex-sans-600.woff2',
  'ibm-plex-sans-700.woff2',
]

mkdirSync('dist/fonts', { recursive: true })

for (const { name, App, cssPath } of cvTypes) {
  const css = [...sharedCssPaths, cssPath].map((path) => readFileSync(path, 'utf-8')).join('\n')
  const body = renderToStaticMarkup(<App />)

  const document = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CV</title>
    <style>${css}</style>
  </head>
  <body>${body}</body>
</html>
`

  writeFileSync(`dist/${name}.html`, document)
}

for (const fontFile of fontFiles) {
  copyFileSync(`src/shared/assets/fonts/${fontFile}`, `dist/fonts/${fontFile}`)
}
