import { readFileSync } from 'node:fs'

const svg = readFileSync('src/shared/assets/icons/Terminal.svg', 'utf-8')

export function Terminal() {
  return <span className="icon" dangerouslySetInnerHTML={{ __html: svg }} />
}
