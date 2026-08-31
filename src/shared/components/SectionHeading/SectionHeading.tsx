export interface SectionHeadingProps {
  name: string
}

export function SectionHeading({ name }: SectionHeadingProps) {
  return <h2 className="section-heading">{name}</h2>
}
