/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Styled } from 'theme-ui'
import { FaTwitter, FaLinkedin, FaGitlab, FaGithub } from 'react-icons/fa'
import { graphql } from 'gatsby'

export type Social = {
  github: string
  gitlab: string
  twitter: string
  linkedin: string
}

type SocialListProps = {
  /** object containing social media information */
  social: Social
}

export const query = graphql`
  fragment SocialFragment on SiteSiteMetadataSocial {
    github
    gitlab
    twitter
    linkedin
  }
`

/**
 * This component creates a list of social media links
 */
export function SocialList(props: SocialListProps): ReactElement {
  const { social } = props

  return (
    <ul
      sx={{
        fontSize: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        li: {
          listStyleType: 'none',
        },
      }}
    >
      <li>
        <Styled.a
          href={social.twitter}
          sx={{ variant: 'links.banner' }}
          title="Twitter Link"
        >
          <FaTwitter /> {social.twitter}
        </Styled.a>
      </li>
      <li>
        <Styled.a
          href={social.twitter}
          sx={{ variant: 'links.banner' }}
          title="Twitter Link"
        >
          <FaLinkedin /> {social.linkedin}
        </Styled.a>
      </li>
      <li>
        <Styled.a
          href={social.twitter}
          sx={{ variant: 'links.banner' }}
          title="Twitter Link"
        >
          <FaGitlab /> {social.gitlab}
        </Styled.a>
      </li>
      <li>
        <Styled.a
          href={social.twitter}
          sx={{ variant: 'links.banner' }}
          title="Twitter Link"
        >
          <FaGithub /> {social.github}
        </Styled.a>
      </li>
    </ul>
  )
}
