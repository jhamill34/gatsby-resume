/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'

export function SEO(): ReactElement {
  return (
    <Helmet>
      <meta charSet="utf-8" />
    </Helmet>
  )
}
