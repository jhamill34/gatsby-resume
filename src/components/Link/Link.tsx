/** @jsx jsx */
import { ReactElement, ReactNode } from 'react'
import { jsx } from 'theme-ui'

type LinkProps = {
  /** */
  href: string

  /** */
  title: string

  /**
   * @default 'secondary'
   */
  color?: string

  /**
   * @default 'primary'
   */
  activeColor?: string

  /**
   * @default 'inherit'
   */
  size?: number

  /** */
  children: ReactNode
}

export function Link(props: LinkProps): ReactElement {
  const {
    href,
    title,
    color = 'secondary',
    activeColor = 'primary',
    size = 'inherit',
  } = props
  return (
    <a
      href={href}
      sx={{
        display: 'block',
        color,
        textDecoration: 'none',
        mb: 1,
        fontSize: size,
        outline: 'none',
        borderBottom: '2px solid transparent',
        transition:
          'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
        ':hover, :focus': {
          color: activeColor,
          borderBottomColor: activeColor,
        },
      }}
      title={title}
    >
      {props.children}
    </a>
  )
}
