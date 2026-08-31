import { chromium } from 'playwright'

import { cvTypeNames } from '@/shared/cv-types'

async function main() {
  const browser = await chromium.launch()

  for (const name of cvTypeNames) {
    const page = await browser.newPage()

    await page.goto(`file://${process.cwd()}/dist/${name}.html`)
    await page.pdf({
      path: `dist/${name}.pdf`,
      printBackground: true,
      width: '210mm',
      height: '297mm',
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    })

    await page.close()
  }

  await browser.close()
}

main().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
