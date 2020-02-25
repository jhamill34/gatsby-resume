/** @jsx jsx */
import { ReactElement, ReactNode } from 'react'
import { jsx } from 'theme-ui'

type PrintableRowProps = {
  /**
   * Dictates if this node should be
   * left out in print mode
   *
   * @default true
   */
  printable?: boolean

  /**
   * This is a bare bones component so we
   * might want to add styles to it through a
   * class name
   */
  className?: string

  /** Child nodes to render */
  children: ReactNode
}

/**
 * This component encapsulates logic to determine to render or keep
 * the component when being printed
 */
export function PrintableRow(props: PrintableRowProps): ReactElement {
  const { printable = true } = props

  return (
    <div
      className={props.className}
      sx={{
        '@media print': {
          display: printable ? 'grid' : 'none',
        },
      }}
    >
      {props.children}
    </div>
  )
}
