import { readFileSync } from 'node:fs'

const svg = readFileSync('src/shared/assets/icons/Phone.svg', 'utf-8')

export function Phone() {
  return <span className="icon" dangerouslySetInnerHTML={{ __html: svg }} />
}
