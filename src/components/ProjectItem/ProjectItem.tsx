/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { FaGitlab, FaLink } from 'react-icons/fa'
import { SkillItem } from '../SkillItem'
import { Project } from '../../models/resume'

type ProjectItemProps = {
  project: Project
}

export function ProjectItem(props: ProjectItemProps): ReactElement {
  const { name, repository, link, description, technologies } = props.project
  return (
    <div sx={{ m: 1 }}>
      <div
        sx={{
          fontSize: 3,
          fontWeight: 'heading',
          lineHeight: 'heading',
          fontFamily: 'heading',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {link ? (
          <a
            href={link}
            sx={{
              display: 'block',
              color: 'text',
              textDecoration: 'none',
              outline: 'none',
              borderBottom: '2px solid transparent',
              transition:
                'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
              ':hover, :focus': {
                color: 'primary',
                borderBottomColor: 'primary',
              },
            }}
            title="Link to Project"
          >
            {name} <FaLink />
          </a>
        ) : (
          name
        )}
        {repository ? (
          <a
            href={repository}
            sx={{
              display: 'block',
              fontSize: 1,
              color: 'secondary',
              textDecoration: 'none',
              my: 1,
              outline: 'none',
              borderBottom: '2px solid transparent',
              transition:
                'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
              ':hover, :focus': {
                color: 'primary',
                borderBottomColor: 'primary',
              },
            }}
            title="Link to Repository"
          >
            <FaGitlab /> Link to Repo
          </a>
        ) : null}
      </div>
      {description}

      <div sx={{ display: 'flex', flexWrap: 'wrap', my: 2 }}>
        {technologies.map(t => (
          <SkillItem key={`proj-tech-${t.data.name}`} skill={t.data} />
        ))}
      </div>
    </div>
  )
}
