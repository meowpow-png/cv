export interface ArrowLinkProps {
  href: string
  label: string
}

export function ArrowLink({ href, label }: ArrowLinkProps) {
  return (
    <a className="arrow-link" href={href}>
      {label}
      <span className="arrow-link-arrow">→</span>
    </a>
  )
}
