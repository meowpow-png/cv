import { footer } from '@/content/default'
import { version } from '@/shared/version'

export function Footer() {
  return (
    <footer className="footer">
      {footer.text} · {version}
    </footer>
  )
}
