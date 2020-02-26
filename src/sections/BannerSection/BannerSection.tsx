/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Theme, Styled } from 'theme-ui'
import Img, { FixedObject } from 'gatsby-image'
import { graphql } from 'gatsby'
import { SocialList } from '../../components'

type BannerProps = {
  /** The persons name at the top of the resume */
  name: string

  /** The person's contact email */
  email: string

  /** The person's headshot to display in the upper corner */
  image: FixedObject

  /** An object refering to social media accounts */
  social: SocialModel
}

export const query = graphql`
  fragment BannerFragment on AirtableData {
    name
    email
  }
`

/**
 * This component belongs at the top of the page and
 * draws attention to the main contact information.
 */
export function BannerSection(props: BannerProps): ReactElement {
  const { name, email, image, social } = props
  return (
    <div
      sx={{
        px: 4,
        py: 2,
        bg: 'primary',
        backgroundImage: (theme: Theme): string =>
          `linear-gradient(45deg, ${theme.colors?.primary}, ${theme.colors?.secondary})`,
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
        <Styled.h1
          sx={{
            textAlign: ['center', 'left'],
            flexGrow: 99999,
          }}
        >
          {name.toUpperCase()}
        </Styled.h1>
        <SocialList email={email} social={social} />
      </div>
    </div>
  )
}
