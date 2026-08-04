import { readFileSync } from 'node:fs'

interface PackageJson {
  version: string
}

function formatVersion(rawVersion: string): string {
  const [year, month, patch] = rawVersion.split('.')

  if (!year || !month || !patch) {
    throw new Error(`Expected a CalVer version (YYYY.M.PATCH), got "${rawVersion}"`)
  }
  return `v${year}.${month.padStart(2, '0')}.${patch}`
}

const { version: rawVersion } = JSON.parse(readFileSync('package.json', 'utf-8')) as PackageJson

export const version = formatVersion(rawVersion)
