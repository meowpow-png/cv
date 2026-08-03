import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { renderToStaticMarkup } from 'react-dom/server'

import { App } from '@/App'

import { cssPath as educationCssPath } from '@/sections/Education'
import { cssPath as footerCssPath } from '@/sections/Footer'
import { cssPath as heroCssPath } from '@/sections/Hero'
import { cssPath as interestsCssPath } from '@/sections/Interests'
import { cssPath as profileCssPath } from '@/sections/Profile'
import { cssPath as projectsCssPath } from '@/sections/Projects'
import { cssPath as skillsCssPath } from '@/sections/Skills'
import { cssPath as arrowLinkCssPath } from '@/shared/ArrowLink'
import { cssPath as sectionHeadingCssPath } from '@/shared/SectionHeading'

const tokensCssPath = 'src/shared/tokens.css'

const cssPaths = [
  tokensCssPath,
  heroCssPath,
  profileCssPath,
  skillsCssPath,
  projectsCssPath,
  educationCssPath,
  interestsCssPath,
  footerCssPath,
  sectionHeadingCssPath,
  arrowLinkCssPath,
]

const css = cssPaths.map((path) => readFileSync(path, 'utf-8')).join('\n')
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

mkdirSync('dist', { recursive: true })
writeFileSync('dist/cv.html', document)
