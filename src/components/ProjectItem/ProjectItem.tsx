/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Styled } from 'theme-ui'
import { FaGitlab, FaLink } from 'react-icons/fa'
import { Project } from '../../models/resume'
import { SkillList } from '../SkillList'

type ProjectItemProps = {
  /** Object containing project related information */
  project: Project
}

/**
 * Formats items intended to highlight a person's software projects
 * on the resume
 *
 * Note: This component only makes sense in a <Section /> tag so
 * the heading levels start at h3 here
 */
export function ProjectItem(props: ProjectItemProps): ReactElement {
  const { name, repository, link, description, technologies } = props.project

  return (
    <div>
      <Styled.h3>
        {link ? (
          <Styled.a
            color="text"
            href={link}
            sx={{ variant: 'links.heading' }}
            title="Link to Project"
          >
            {name} <FaLink />
          </Styled.a>
        ) : (
          name
        )}
      </Styled.h3>
      {repository ? (
        <Styled.a
          href={repository}
          sx={{ fontWeight: 'bold' }}
          title="Link to Repository"
        >
          <FaGitlab /> Link to Repo
        </Styled.a>
      ) : null}

      <Styled.p>{description}</Styled.p>

      <SkillList skills={technologies} />
    </div>
  )
}
