/** @jsx jsx */
import { ReactNode, ReactElement } from 'react'
import { jsx, Theme } from 'theme-ui'

type SectionProps = {
  /** */
  title: string

  /** */
  icon?: ReactElement

  /** */
  children: ReactNode
}

export function Section(props: SectionProps): ReactElement {
  return (
    <div
      sx={{
        px: 3,
      }}
    >
      <div
        sx={{
          fontSize: 4,
          fontWeight: 'heading',
          lineHeight: 'heading',
          fontFamily: 'heading',
          py: 3,
          my: 3,
          borderBottom: (theme: Theme): string =>
            `1px solid ${theme.colors?.text}`,
        }}
      >
        {props.icon} {props.title.toUpperCase()}
      </div>
      {props.children}
    </div>
  )
}