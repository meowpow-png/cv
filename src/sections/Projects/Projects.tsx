import { ArrowLink } from '@/shared/components/ArrowLink'
import { SectionHeading } from '@/shared/components/SectionHeading'

import { type ProjectContent } from '@/shared/content-types'

export interface ProjectsProps {
  content: ProjectContent[]
}

export function Projects({ content }: ProjectsProps) {
  return (
    <section className="projects">
      <SectionHeading name="Projects" />
      <div className="section-content">
        <ol className="projects-list">
          {content.map(({ frontmatter, Description }) => (
            <li key={frontmatter.title} className="projects-item">
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
      </div>
    </section>
  )
}
