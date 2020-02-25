/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { FaGitlab, FaLink } from 'react-icons/fa'
import { Project } from '../../models/resume'
import { Link } from '../Link'
import { SkillList } from '../SkillList'

type ProjectItemProps = {
  /** */
  project: Project

  /** */
  fontSize?: number
}

export function ProjectItem(props: ProjectItemProps): ReactElement {
  const { name, repository, link, description, technologies } = props.project

  const { fontSize = 3 } = props
  return (
    <div sx={{ m: 1 }}>
      <div
        sx={{
          fontSize,
          fontWeight: 'heading',
          lineHeight: 'heading',
          fontFamily: 'heading',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {link ? (
          <Link href={link} sx={{ color: 'text' }} title="Link to Project">
            {name} <FaLink />
          </Link>
        ) : (
          name
        )}
        {repository ? (
          <Link
            href={repository}
            sx={{ fontSize: 1 }}
            title="Link to Repository"
          >
            <FaGitlab /> Link to Repo
          </Link>
        ) : null}
      </div>
      <div sx={{ fontSize: fontSize - 1 }}>{description}</div>

      <SkillList skills={technologies} />
    </div>
  )
}
