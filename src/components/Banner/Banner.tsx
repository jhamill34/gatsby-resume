/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Theme, Styled } from 'theme-ui'
import Img, { FixedObject } from 'gatsby-image'
import { FaEnvelope } from 'react-icons/fa'
import { Social } from '../../models/resume'
import { SocialList } from '../SocialList'

type BannerProps = {
  /** The persons name at the top of the resume */
  name: string

  /** The person's contact email */
  email: string

  /** The person's headshot to display in the upper corner */
  image: FixedObject

  /** An object refering to social media accounts */
  social: Social
}

/**
 * This component belongs at the top of the page and
 * draws attention to the main contact information.
 */
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
        <div
          sx={{
            flexGrow: 99999,
            py: 3,
            fontSize: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Styled.h1>{name.toUpperCase()}</Styled.h1>
          <Styled.a
            href={`mailto:${email}`}
            sx={{ variant: 'links.banner' }}
            title="Email Me"
          >
            <FaEnvelope /> {email}
          </Styled.a>
        </div>

        <SocialList social={social} />
      </div>
    </div>
  )
}
