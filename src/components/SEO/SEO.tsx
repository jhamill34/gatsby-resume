/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'

/**
 * This component defines meta tags to use for search
 * engine optimization
 */
export function SEO(): ReactElement {
  return (
    <Helmet>
      <meta charSet="utf-8" />
    </Helmet>
  )
}
