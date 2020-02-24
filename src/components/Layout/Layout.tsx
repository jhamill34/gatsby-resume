/** @jsx jsx */
import { ReactNode, ReactElement } from 'react'
import { jsx } from 'theme-ui'

type LayoutProps = {
  children: ReactNode
}

export function Layout(props: LayoutProps): ReactElement {
  return (
    <div
      sx={{
        maxWidth: '1024px',
        margin: 'auto',
        boxShadow: '0 2px 26px rgba(0, 0, 0, 0.08)',
        '@media print': {
          height: '11in',
        },
      }}
    >
      {props.children}
    </div>
  )
}
