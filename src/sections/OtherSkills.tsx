/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { FaMagic } from 'react-icons/fa'
import { Section, SkillList } from '../components'
import { Skill, Data } from '../models/resume'

type OtherSkillsProps = {
  skills: Data<Skill>[]
}

export function OtherSkills(props: OtherSkillsProps): ReactElement {
  const { skills } = props

  return (
    <Section icon={<FaMagic />} title="Other Skills">
      <SkillList skills={skills.filter(s => parseInt(s.data.level) > 0)} />
    </Section>
  )
}
