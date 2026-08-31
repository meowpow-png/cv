import { version } from '@/shared/version'

import { type FooterContent } from '@/shared/content-types'

export interface FooterProps {
  content: FooterContent
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="footer">
      {content.text} · {version}
    </footer>
  )
}
