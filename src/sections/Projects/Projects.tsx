import { projects } from '@/content/default'
import { ArrowLink } from '@/shared/components/ArrowLink'
import { SectionHeading } from '@/shared/components/SectionHeading'

export function Projects() {
  return (
    <section className="projects">
      <SectionHeading name="projects" />
      <ol className="projects-list">
        {projects.map(({ frontmatter, Description }, index) => (
          <li key={frontmatter.title} className="projects-item">
            <span className="projects-item-index">{String(index + 1).padStart(2, '0')}</span>
            <div className="projects-item-body">
              <div className="projects-item-header">
                <h3 className="projects-item-title">{frontmatter.title}</h3>
                <ArrowLink href={frontmatter.repo.href} label={frontmatter.repo.label} />
              </div>
              <Description />
              <p className="projects-item-stack">{frontmatter.stack.join(' · ')}</p>
              <ArrowLink href={frontmatter.link.href} label={frontmatter.link.label} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
