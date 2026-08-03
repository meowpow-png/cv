import { chromium } from 'playwright'

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto(`file://${process.cwd()}/dist/cv.html`)
  await page.pdf({ path: 'dist/cv.pdf', printBackground: true })

  await browser.close()
}

main().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
