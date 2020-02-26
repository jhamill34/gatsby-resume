/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { FaPencilRuler } from 'react-icons/fa'
import {
  Section,
  PrintableRow,
  TimelineItem,
  ProjectItem,
} from '../../components'

type SoftwareProjectsProps = {
  projects: Data<ProjectModel>[]
}

export function SoftwareProjectsSection(
  props: SoftwareProjectsProps
): ReactElement {
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
