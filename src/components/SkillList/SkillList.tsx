/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { Data, Skill } from '../../models/resume'
import { SkillItem } from '../SkillItem'

type SkillListProps = {
  /** */
  skills: Data<Skill>[]
}

export function SkillList(props: SkillListProps): ReactElement {
  const { skills } = props

  return (
    <div sx={{ display: 'flex', flexWrap: 'wrap', my: 2 }}>
      {skills.map(s => (
        <SkillItem key={`skill-${s.data.name}`} skill={s.data} />
      ))}
    </div>
  )
}
