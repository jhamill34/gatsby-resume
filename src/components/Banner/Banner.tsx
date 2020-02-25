/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Theme } from 'theme-ui'
import Img, { FixedObject } from 'gatsby-image'
import { FaEnvelope } from 'react-icons/fa'
import { Social } from '../../models/resume'
import { Link } from '../Link'
import { SocialList } from '../SocialList'

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
        <div
          sx={{
            flexGrow: 99999,
            py: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
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
            activeColor="text"
            color="inherit"
            href={`mailto:${email}`}
            size={3}
            title="Email Me"
          >
            <FaEnvelope /> {email}
          </Link>
        </div>

        <SocialList social={social} />
      </div>
    </div>
  )
}
