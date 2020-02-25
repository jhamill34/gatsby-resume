/** @jsx jsx */
import { ReactNode, ReactElement } from 'react'
import { jsx, Styled } from 'theme-ui'

type SectionProps = {
  /** The title of the section */
  title: string

  /**
   * The icon to use for a section, if undefined
   * then no icon is used
   */
  icon?: ReactElement

  /** Child nodes to render */
  children: ReactNode
}

/**
 * This component defines an area to use as a resume section.
 */
export function Section(props: SectionProps): ReactElement {
  return (
    <div sx={{ px: 3 }}>
      <Styled.h2>
        {props.icon} {props.title.toUpperCase()}
      </Styled.h2>
      <Styled.p>{props.children}</Styled.p>
    </div>
  )
}
