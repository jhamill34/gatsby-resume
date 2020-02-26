/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { FaBriefcase } from 'react-icons/fa'
import { compareDesc, parseISO } from 'date-fns'
import {
  Section,
  PrintableRow,
  TimelineItem,
  ExperienceItem,
} from '../../components'

type WorkExperienceProps = {
  experience: Data<ExperienceModel>[]
}

export function WorkExperienceSection(
  props: WorkExperienceProps
): ReactElement {
  const { experience } = props

  return (
    <Section icon={<FaBriefcase />} title="Work Experience">
      {experience
        .sort((a, b) =>
          compareDesc(parseISO(a.data.start), parseISO(b.data.start))
        )
        .map(e => (
          <PrintableRow
            key={`experience-${e.data.name}`}
            printable={e.data.printable}
            sx={{
              display: 'grid',
              gridTemplateColumns: '3em 1fr',
            }}
          >
            <TimelineItem />
            <ExperienceItem experience={e.data} />
          </PrintableRow>
        ))}
    </Section>
  )
}
