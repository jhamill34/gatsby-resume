/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Styled } from 'theme-ui'
import { format, parseISO } from 'date-fns'
import { graphql } from 'gatsby'
import { Data } from '../../models/resume'
import { SkillList, Skill } from '../SkillList'

export type Experience = {
  name: string
  position: string
  location: string
  description: string
  start: string
  end: string
  technologies: Data<Skill>[]
  printable: boolean
}

type ExperienceItemProps = {
  experience: Experience
}

export const query = graphql`
  fragment WorkExperienceFragment on AirtableData {
    name
    position
    location
    description
    start
    end
    printable
    technologies {
      data {
        ...SkillFragment
      }
    }
  }
`

/**
 * Formats items intended to highlight a person's work experience
 * on the resume
 *
 * Note: This component only makes sense in a <Section /> tag so
 * the heading levels start at h3 here
 */
export function ExperienceItem(props: ExperienceItemProps): ReactElement {
  const {
    description,
    position,
    name,
    start,
    end,
    technologies,
  } = props.experience

  const startFmt = format(parseISO(start), 'MMM yyyy')
  const endFmt = end ? format(parseISO(end), 'MMM yyyy') : 'Present'
  const timeFrame = `${startFmt} - ${endFmt}`

  return (
    <div>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <Styled.h3 sx={{ minWidth: 230, mr: 3 }}>{position}</Styled.h3>
        <Styled.h4>{name}</Styled.h4>
      </div>

      <div sx={{ fontSize: 2, color: 'muted' }}>{timeFrame}</div>

      <Styled.p>{description}</Styled.p>

      <SkillList skills={technologies} />
    </div>
  )
}
