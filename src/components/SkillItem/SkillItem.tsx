/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Theme } from 'theme-ui'
import { Skill } from '../../models/resume'

type SkillItemProps = {
  skill: Skill
}

export function SkillItem(props: SkillItemProps): ReactElement {
  const { name } = props.skill

  return (
    <div
      sx={{
        fontSize: 0,
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
      {name}
    </div>
  )
}
