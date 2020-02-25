/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { FaPencilRuler } from 'react-icons/fa'

import { Section } from '../components/Section'
import { PrintableRow } from '../components/PrintableRow'
import { TimelineItem } from '../components/TimelineItem'
import { ProjectItem, Project } from '../components/ProjectItem'
import { Data } from '../models/resume'

type SoftwareProjectsProps = {
  projects: Data<Project>[]
}

export function SoftwareProjects(props: SoftwareProjectsProps): ReactElement {
  const { projects } = props

  return (
    <Section icon={<FaPencilRuler />} title="Software Projects">
      {projects.map(p => (
        <PrintableRow
          key={`project-${p.data.name}`}
          sx={{
            display: 'grid',
            gridTemplateColumns: '3em 1fr',
          }}
        >
          <TimelineItem />
          <ProjectItem project={p.data} />
        </PrintableRow>
      ))}
    </Section>
  )
}
