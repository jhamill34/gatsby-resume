/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { Data, Skill } from '../models/resume'
import { SkillItem } from './SkillItem'

type SkillListProps = {
  /** an array of skills wrapped in a data key */
  skills: Data<Skill>[]
}

/**
 * This component renders a list of skills
 */
export function SkillList(props: SkillListProps): ReactElement {
  const { skills } = props

  return (
    <ul sx={{ display: 'flex', flexWrap: 'wrap', my: 1, p: 0 }}>
      {skills.map(s => (
        <SkillItem key={`skill-${s.data.name}`} skill={s.data} />
      ))}
    </ul>
  )
}
