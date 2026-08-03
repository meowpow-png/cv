export interface SectionHeadingProps {
  name: string
}

export function SectionHeading({ name }: SectionHeadingProps) {
  return (
    <h2 className="section-heading">
      <span className="section-heading-prompt">$</span>
      {name}
    </h2>
  )
}
