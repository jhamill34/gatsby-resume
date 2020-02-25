/** @jsx jsx */
import { ReactElement, ReactNode } from 'react'
import { jsx } from 'theme-ui'

type PrintableRowProps = {
  /**
   * @default true
   */
  printable?: boolean

  /** */
  className?: string

  /** */
  children: ReactNode
}

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
