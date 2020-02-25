/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Styled } from 'theme-ui'
import { FaMagic } from 'react-icons/fa'
import { Section } from '../components/Section'
import { SkillList, Skill } from '../components/SkillList'
import { Data } from '../models/resume'

type SkillsProps = {
  skills: Data<Skill>[]
}

export function Skills(props: SkillsProps): ReactElement {
  const { skills } = props

  return (
    <Section icon={<FaMagic />} title="Skills">
      <Styled.h3>Proficient</Styled.h3>
      <SkillList skills={skills.filter(s => parseInt(s.data.level) > 0)} />

      <Styled.h3>Interested In</Styled.h3>
      <SkillList skills={skills.filter(s => parseInt(s.data.level) === 0)} />
    </Section>
  )
}
