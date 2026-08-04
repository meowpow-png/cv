import { chromium } from 'playwright'

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto(`file://${process.cwd()}/dist/cv.html`)
  await page.pdf({
    path: 'dist/cv.pdf',
    printBackground: true,
    width: '210mm',
    height: '297mm',
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  })

  await browser.close()
}

main().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
