import { readFileSync } from 'node:fs'

const svg = readFileSync('src/shared/assets/icons/GitHub.svg', 'utf-8')

export function GitHub() {
  return <span className="icon" dangerouslySetInnerHTML={{ __html: svg }} />
}
