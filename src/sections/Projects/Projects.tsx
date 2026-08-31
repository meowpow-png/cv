import { projects } from '@/content/default'
import { ArrowLink } from '@/shared/components/ArrowLink'
import { SectionHeading } from '@/shared/components/SectionHeading'

export function Projects() {
  return (
    <section className="projects">
      <SectionHeading name="Projects" />
      <ol className="projects-list">
        {projects.map(({ frontmatter, Description }) => (
          <li key={frontmatter.title} className="projects-item">
            <span className="projects-item-marker" />
            <div className="projects-item-body">
              <div className="projects-item-header">
                <h3 className="projects-item-title">{frontmatter.title}</h3>
                <ArrowLink href={frontmatter.repo} label={frontmatter.linkLabel} />
              </div>
              <Description />
              <p className="projects-item-stack">{frontmatter.stack.join(' · ')}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
