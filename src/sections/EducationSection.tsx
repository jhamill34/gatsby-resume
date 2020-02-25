/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { FaGraduationCap } from 'react-icons/fa'
import { compareDesc, parseISO } from 'date-fns'
import { Section, EducationItem } from '../components'

type EducationProps = {
  education: Data<EducationModel>[]
}

export function EducationSection(props: EducationProps): ReactElement {
  const { education } = props

  return (
    <Section icon={<FaGraduationCap />} title="Education">
      {education
        .sort((a, b) =>
          compareDesc(parseISO(a.data.start), parseISO(b.data.start))
        )
        .map(e => (
          <EducationItem education={e.data} key={`education-${e.data.name}`} />
        ))}
    </Section>
  )
}
