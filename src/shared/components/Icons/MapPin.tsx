import { readFileSync } from 'node:fs'

const svg = readFileSync('src/shared/assets/icons/MapPin.svg', 'utf-8')

export function MapPin() {
  return <span className="icon" dangerouslySetInnerHTML={{ __html: svg }} />
}
