import { readFileSync } from 'node:fs'

const svg = readFileSync('src/shared/assets/icons/Mail.svg', 'utf-8')

export function Mail() {
  return <span className="icon" dangerouslySetInnerHTML={{ __html: svg }} />
}
