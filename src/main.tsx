import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { renderToStaticMarkup } from 'react-dom/server'
import { App } from './App'
import { cssPath as heroCssPath } from './sections/Hero'

const css = readFileSync(heroCssPath, 'utf-8')
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
