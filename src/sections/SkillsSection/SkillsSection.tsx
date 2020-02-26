/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Styled } from 'theme-ui'
import { FaMagic } from 'react-icons/fa'
import { Section, SkillList } from '../../components'

type SkillsProps = {
  skills: Data<SkillModel>[]
}

export function SkillsSection(props: SkillsProps): ReactElement {
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
