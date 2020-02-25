/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { FaBook } from 'react-icons/fa'
import { Section, SkillList } from '../components'
import { Skill, Data } from '../models/resume'

type InterestsProps = {
  skills: Data<Skill>[]
}

export function Interests(props: InterestsProps): ReactElement {
  const { skills } = props

  return (
    <Section icon={<FaBook />} title="Interests">
      <SkillList skills={skills.filter(s => parseInt(s.data.level) === 0)} />
    </Section>
  )
}
