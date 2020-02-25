/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Theme } from 'theme-ui'
import { graphql } from 'gatsby'
import { Data } from '../models/resume'

export type Skill = {
  name: string
  level: string
}

type SkillListProps = {
  /** an array of skills wrapped in a data key */
  skills: Data<Skill>[]
}

export const query = graphql`
  fragment SkillFragment on AirtableData {
    name
    level
  }
`

/**
 * This component renders a list of skills
 */
export function SkillList(props: SkillListProps): ReactElement {
  const { skills } = props

  return (
    <ul sx={{ display: 'flex', flexWrap: 'wrap', my: 1, p: 0 }}>
      {skills.map(s => (
        <li
          key={`skill-list-${s.data.name}`}
          sx={{
            listStyleType: 'none',
            fontSize: 1,
            color: 'background',
            backgroundImage: (theme: Theme): string =>
              `linear-gradient(90deg, ${theme.colors?.secondary}, ${theme.colors?.primary})`,
            fontWeight: 'bold',
            mr: 1,
            mb: 1,
            px: 2,
            py: 1,
            borderRadius: 4,
            transition: 'all 0.3s ease-in-out',
            ':hover, :focus': {
              backgroundImage: (theme: Theme): string =>
                `linear-gradient(90deg, ${theme.colors?.primary}, ${theme.colors?.secondary})`,
            },
          }}
        >
          {s.data.name}
        </li>
      ))}
    </ul>
  )
}
