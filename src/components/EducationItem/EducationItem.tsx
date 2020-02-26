/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Styled } from 'theme-ui'
import { format, parseISO } from 'date-fns'

import { graphql } from 'gatsby'

type EducationItemProps = {
  /** An object of all education related information */
  education: EducationModel
}

export const query = graphql`
  fragment EducationFragment on AirtableData {
    name
    location
    major
    specialization
    start
    end
  }
`

/**
 * Formats items intended to highlight a person's education
 * on the resume
 *
 * Note: This component only makes sense in a <Section /> tag so
 * the heading levels start at h3 here
 */
export function EducationItem(props: EducationItemProps): ReactElement {
  const { name, major, specialization, start, end } = props.education

  const startFmt = format(parseISO(start), 'MMM yyyy')
  const endFmt = end ? format(parseISO(end), 'MMM yyyy') : 'Present'
  const timeFrame = `${startFmt} - ${endFmt}`

  return (
    <div sx={{ mb: 2 }}>
      <Styled.h3>{major}</Styled.h3>
      <em>{specialization}</em>
      <Styled.h4>{name}</Styled.h4>
      {timeFrame}
    </div>
  )
}
