/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { FaTwitter, FaLinkedin, FaGitlab, FaGithub } from 'react-icons/fa'
import { Link } from '../Link'
import { Social } from '../../models/resume'

type SocialListProps = {
  social: Social
}

export function SocialList(props: SocialListProps): ReactElement {
  const { social } = props

  return (
    <div
      sx={{
        fontSize: 1,
        lineHeight: 'heading',
        fontFamily: 'heading',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Link
        activeColor="text"
        color="inherit"
        href={social.twitter}
        title="Twitter Link"
      >
        <FaTwitter /> {social.twitter}
      </Link>
      <Link
        activeColor="text"
        color="inherit"
        href={social.linkedin}
        title="Linked In Link"
      >
        <FaLinkedin /> {social.linkedin}
      </Link>
      <Link
        activeColor="text"
        color="inherit"
        href={social.gitlab}
        title="Gitlab Link"
      >
        <FaGitlab /> {social.gitlab}
      </Link>
      <Link
        activeColor="text"
        color="inherit"
        href={social.github}
        title="Github Link"
      >
        <FaGithub /> {social.github}
      </Link>
    </div>
  )
}
