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
import { Link } from '../Link'

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
        color: 'background',
        px: 4,
        py: 2,
        backgroundImage: (theme: Theme): string =>
          `linear-gradient(45deg, ${theme.colors?.secondary}, ${theme.colors?.primary})`,
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <div
          sx={{
            p: 3,
            flex: '1 1 auto',
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
        <div sx={{ flexGrow: 99999, py: 3 }}>
          <div
            sx={{
              fontSize: 4,
              fontWeight: 'heading',
              lineHeight: 'heading',
              fontFamily: 'heading',
            }}
          >
            {name.toUpperCase()}
          </div>
          <Link
            href={`mailto:${email}`}
            sx={{
              fontSize: 3,
              pt: 2,
              display: 'inline-block',
              color: 'inherit',
              ':hover,:focus': {
                color: 'text',
                borderBottomColor: 'text',
              },
            }}
            title="Email Me"
          >
            <FaEnvelope /> {email}
          </Link>
        </div>

        <div
          sx={{
            fontSize: 1,
            lineHeight: 'heading',
            fontFamily: 'heading',
            div: {
              flexGrow: 1,
              p: 1,
            },
          }}
        >
          <div>
            <a
              href={social.twitter}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                borderBottom: '2px solid transparent',
                outline: 'none',
                transition:
                  'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
                ':hover,:focus': {
                  color: 'text',
                  borderBottomColor: 'text',
                },
              }}
            >
              <FaTwitter /> {social.twitter}
            </a>
          </div>
          <div>
            <a
              href={social.linkedin}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                borderBottom: '2px solid transparent',
                outline: 'none',
                transition:
                  'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
                ':hover,:focus': {
                  color: 'text',
                  borderBottomColor: 'text',
                },
              }}
            >
              <FaLinkedin /> {social.linkedin}
            </a>
          </div>
          <div>
            <a
              href={social.gitlab}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                borderBottom: '2px solid transparent',
                outline: 'none',
                transition:
                  'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
                ':hover,:focus': {
                  color: 'text',
                  borderBottomColor: 'text',
                },
              }}
            >
              <FaGitlab /> {social.gitlab}
            </a>
          </div>
          <div>
            <a
              href={social.github}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                borderBottom: '2px solid transparent',
                outline: 'none',
                transition:
                  'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
                ':hover,:focus': {
                  color: 'text',
                  borderBottomColor: 'text',
                },
              }}
            >
              <FaGithub /> {social.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
