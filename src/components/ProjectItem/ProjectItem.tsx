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
    <div sx={{ mb: 3 }}>
      <div
        sx={{
          fontSize: 3,
          fontWeight: 'heading',
          lineHeight: 'heading',
          fontFamily: 'heading',
        }}
      >
        {name}
      </div>
      {description}

      <div sx={{ fontSize: 1, ml: 3 }}>
        {repository ? (
          <a
            href={repository}
            sx={{ display: 'block', color: 'secondary' }}
            title="Link to Repository"
          >
            <FaGitlab /> {repository}
          </a>
        ) : null}
        {link ? (
          <a
            href={link}
            sx={{ display: 'block', color: 'secondary' }}
            title="Link to Project"
          >
            <FaLink /> {link}
          </a>
        ) : null}
      </div>

      <div sx={{ display: 'flex', flexWrap: 'wrap', my: 2 }}>
        {technologies.map(t => (
          <SkillItem key={`proj-tech-${t.data.name}`} skill={t.data} />
        ))}
      </div>
    </div>
  )
}
