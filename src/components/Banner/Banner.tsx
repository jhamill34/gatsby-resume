/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Theme } from 'theme-ui'
import Img, { FixedObject } from 'gatsby-image'
import {
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGitlab,
  FaGithub,
} from 'react-icons/fa'
import { Social } from '../../models/resume'

type BannerProps = {
  name: string
  email: string
  image: FixedObject
  social: Social
}

export function Banner(props: BannerProps): ReactElement {
  const { name, email, image, social } = props
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        color: 'background',
        backgroundImage: (theme: Theme): string =>
          `linear-gradient(45deg, ${theme.colors?.secondary}, ${theme.colors?.primary})`,
      }}
    >
      <div
        sx={{
          p: 3,
          flexGrow: 1,
          textAlign: 'center',
        }}
      >
        <Img
          fixed={image}
          sx={{
            borderRadius: '100%',
            border: (theme: Theme): string =>
              `4px solid ${theme.colors?.background}`,
          }}
        />
      </div>
      <div sx={{ alignSelf: 'center', flexGrow: 1, p: 3 }}>
        <div
          sx={{
            fontSize: 5,
            fontWeight: 'heading',
            lineHeight: 'heading',
            fontFamily: 'heading',
          }}
        >
          {name.toUpperCase()}
        </div>
        <div sx={{ fontSize: 3, lineHeight: 'heading', fontFamily: 'heading' }}>
          <a href={`mailto:${email}`} sx={{ color: 'inherit' }}>
            <FaEnvelope /> {email}
          </a>
        </div>
      </div>

      <div
        sx={{
          flexBasis: '30%',
          flexGrow: 1,
          fontSize: 3,
          lineHeight: 'heading',
          fontFamily: 'heading',
          alignSelf: 'center',
          p: 3,
        }}
      >
        <div sx={{ mb: 2 }}>
          <a href={social.twitter} sx={{ color: 'inherit' }}>
            <FaTwitter /> {social.twitter}
          </a>
        </div>
        <div sx={{ mb: 2 }}>
          <a href={social.linkedin} sx={{ color: 'inherit' }}>
            <FaLinkedin /> {social.linkedin}
          </a>
        </div>
        <div sx={{ mb: 2 }}>
          <a href={social.gitlab} sx={{ color: 'inherit' }}>
            <FaGitlab /> {social.gitlab}
          </a>
        </div>
        <div sx={{ mb: 2 }}>
          <a href={social.github} sx={{ color: 'inherit' }}>
            <FaGithub /> {social.github}
          </a>
        </div>
      </div>
    </div>
  )
}
