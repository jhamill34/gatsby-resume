/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { format, parseISO } from 'date-fns'
import { SkillItem } from '../SkillItem'
import { Experience } from '../../models/resume'

type ExperienceItemProps = {
  experience: Experience
}

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
    <div
      sx={{
        mb: 3,
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <div
          sx={{
            fontSize: 3,
            fontWeight: 'heading',
            lineHeight: 'heading',
            fontFamily: 'heading',
            minWidth: 250,
            mr: 3,
          }}
        >
          {position}
        </div>

        <div
          sx={{
            fontSize: 1,
            color: 'muted',
            fontWeight: 'heading',
          }}
        >
          {name}
        </div>
      </div>
      <div sx={{ fontSize: 1, mb: 2, color: 'muted' }}>{timeFrame}</div>
      {description}

      <div sx={{ display: 'flex', flexWrap: 'wrap', my: 2 }}>
        {technologies.map(t => (
          <SkillItem key={`proj-tech-${t.data.name}`} skill={t.data} />
        ))}
      </div>
    </div>
  )
}
