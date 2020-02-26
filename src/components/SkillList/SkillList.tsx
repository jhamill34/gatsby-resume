/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

type SkillListProps = {
  /** an array of skills wrapped in a data key */
  skills: Data<SkillModel>[]
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
            fontWeight: 'bold',
            letterSpacing: 0.5,
            bg: 'secondary',
            mr: 1,
            mb: 1,
            px: 2,
            py: 1,
            borderRadius: '1em',
            transition: 'all 0.2s ease-in-out',
            ':hover, :focus': {
              bg: 'primary',
            },
          }}
        >
          {s.data.name}
        </li>
      ))}
    </ul>
  )
}
