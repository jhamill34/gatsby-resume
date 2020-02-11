/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { format, parseISO } from 'date-fns'

import { Education } from '../../models/resume'

type EducationItemProps = {
  education: Education
}

export function EducationItem(props: EducationItemProps): ReactElement {
  const { name, major, specialization, start, end } = props.education

  const startFmt = format(parseISO(start), 'MMM yyyy')
  const endFmt = end ? format(parseISO(end), 'MMM yyyy') : 'Present'
  const timeFrame = `${startFmt} - ${endFmt}`

  return (
    <div
      sx={{
        mb: 3,
      }}
    >
      <div
        sx={{
          mb: 1,
        }}
      >
        <div
          sx={{
            fontSize: 2,
            fontWeight: 'heading',
          }}
        >
          {major}
        </div>
        <div sx={{ fontSize: 1, fontStyle: 'italic' }}>{specialization}</div>
      </div>
      <div sx={{ fontSize: 1, fontWeight: 'bold', color: 'muted' }}>{name}</div>
      <div sx={{ fontSize: 1 }}>{timeFrame}</div>
    </div>
  )
}
