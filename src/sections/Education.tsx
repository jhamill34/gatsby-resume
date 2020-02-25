/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { FaGraduationCap } from 'react-icons/fa'
import { compareDesc, parseISO } from 'date-fns'
import { Section } from '../components/Section'
import { EducationItem, Education as Edu } from '../components/EducationItem'
import { Data } from '../models/resume'

type EducationProps = {
  education: Data<Edu>[]
}

export function Education(props: EducationProps): ReactElement {
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
