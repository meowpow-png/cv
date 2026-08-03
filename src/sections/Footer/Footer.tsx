import { footer } from '@/content/default'
import { version } from '@/shared/version'

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer-prompt">
        <span className="footer-prompt-user">{footer.prompt}</span> {footer.tagline}
      </p>
      <p className="footer-version">{version}</p>
    </footer>
  )
}
