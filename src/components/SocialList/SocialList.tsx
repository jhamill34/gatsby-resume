/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Styled } from 'theme-ui'
import {
  FaTwitter,
  FaLinkedin,
  FaGitlab,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa'

import { graphql } from 'gatsby'

export const query = graphql`
  fragment SocialFragment on SiteSiteMetadataSocial {
    github
    gitlab
    twitter
    linkedin
  }
`

type SocialListProps = {
  /** Email for contacting */
  email: string

  /** object containing social media information */
  social: SocialModel
}

/**
 * This component creates a list of social media links
 */
export function SocialList(props: SocialListProps): ReactElement {
  const { social } = props

  return (
    <ul
      sx={{
        fontSize: 4,
        p: 0,
        display: 'flex',
        flexGrow: 1,
        li: {
          mx: 2,
          flexGrow: 1,
          lineHeight: 0,
          listStyleType: 'none',
          textAlign: 'center',
        },
      }}
    >
      <li>
        <Styled.a
          href={`mailto:${props.email}`}
          sx={{ variant: 'links.banner' }}
          title="Email Me"
        >
          <FaEnvelope />
        </Styled.a>
      </li>
      <li>
        <Styled.a
          href={`https://${social.twitter}`}
          sx={{ variant: 'links.banner' }}
          title="Twitter Link"
        >
          <FaTwitter />
        </Styled.a>
      </li>
      <li>
        <Styled.a
          href={`https://${social.linkedin}`}
          sx={{ variant: 'links.banner' }}
          title="Linked In Link"
        >
          <FaLinkedin />
        </Styled.a>
      </li>
      <li>
        <Styled.a
          href={`https://${social.gitlab}`}
          sx={{ variant: 'links.banner' }}
          title="Gitlab Link"
        >
          <FaGitlab />
        </Styled.a>
      </li>
      <li>
        <Styled.a
          href={`https://${social.github}`}
          sx={{ variant: 'links.banner' }}
          title="Github Link"
        >
          <FaGithub />
        </Styled.a>
      </li>
    </ul>
  )
}
