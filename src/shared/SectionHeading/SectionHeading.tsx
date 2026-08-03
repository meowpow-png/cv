export interface SectionHeadingProps {
  name: string
}

export function SectionHeading({ name }: SectionHeadingProps) {
  return (
    <h2 className="section-heading">
      <span className="section-heading-prompt">$</span>
      {name}
      <span className="section-heading-cursor">_</span>
    </h2>
  )
}
