/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'

type SEOProps = {
  /** */
  title: string

  /** */
  description: string
}

/**
 * This component defines meta tags to use for search
 * engine optimization
 */
export function SEO(props: SEOProps): ReactElement {
  const { title, description } = props

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta content={description} name="description" />
      <html lang="en" />
    </Helmet>
  )
}
