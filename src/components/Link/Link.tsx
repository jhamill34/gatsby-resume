/** @jsx jsx */
import { ReactElement, ReactNode } from 'react'
import { jsx } from 'theme-ui'

type LinkProps = {
  /** */
  href: string

  /** */
  title: string

  /** */
  className?: string

  /** */
  children: ReactNode
}

export function Link(props: LinkProps): ReactElement {
  const { href, title, className } = props
  return (
    <a
      className={className}
      href={href}
      sx={{
        display: 'block',
        color: 'secondary',
        textDecoration: 'none',
        mb: 1,
        outline: 'none',
        borderBottom: '2px solid transparent',
        transition:
          'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
        ':hover, :focus': {
          color: 'primary',
          borderBottomColor: 'primary',
        },
      }}
      title={title}
    >
      {props.children}
    </a>
  )
}
