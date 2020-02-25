/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { Section, ProjectItem } from '../components'
import { Project, Data } from '../models/resume'

type OtherProjectsProps = {
  otherProjects: Data<Project>[]
}

export function OtherProjects(props: OtherProjectsProps): ReactElement {
  const { otherProjects } = props

  return (
    <Section title="Other Projects">
      {otherProjects.map(p => (
        <ProjectItem key={`small-project-${p.data.name}`} project={p.data} />
      ))}
    </Section>
  )
}
