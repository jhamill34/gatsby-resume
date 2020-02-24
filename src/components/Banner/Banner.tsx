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
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        color: 'background',
        px: 4,
        backgroundImage: (theme: Theme): string =>
          `linear-gradient(45deg, ${theme.colors?.secondary}, ${theme.colors?.primary})`,
      }}
    >
      <div
        sx={{
          p: 3,
          flex: '1 1 auto',
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
      <div sx={{ alignSelf: 'center', flexGrow: 99999, p: 3 }}>
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
          flexGrow: 99999,
          fontSize: 2,
          lineHeight: 'heading',
          fontFamily: 'heading',
          alignSelf: 'center',
          p: 3,
        }}
      >
        <div sx={{ mb: 2 }}>
          <a
            href={social.twitter}
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            <FaTwitter /> {social.twitter}
          </a>
        </div>
        <div sx={{ mb: 2 }}>
          <a
            href={social.linkedin}
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            <FaLinkedin /> {social.linkedin}
          </a>
        </div>
        <div sx={{ mb: 2 }}>
          <a
            href={social.gitlab}
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            <FaGitlab /> {social.gitlab}
          </a>
        </div>
        <div sx={{ mb: 2 }}>
          <a
            href={social.github}
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            <FaGithub /> {social.github}
          </a>
        </div>
      </div>
    </div>
  )
}
