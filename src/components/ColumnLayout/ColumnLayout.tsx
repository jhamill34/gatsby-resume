/** @jsx jsx */
import { ReactNode, ReactElement } from 'react'
import { jsx } from 'theme-ui'

type ColumnLayoutProps = {
  /** The main content node */
  main: ReactNode

  /** The secondary content node*/
  side: ReactNode
}

/**
 * This component enforces a horizontal heiarchy of content where
 * the larger side is emphasized and the "sidebar" is less important.
 */
export function ColumnLayout(props: ColumnLayoutProps): ReactElement {
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <div
        sx={{
          flexBasis: 0,
          flexGrow: 99999,
          minWidth: 320,
        }}
      >
        {props.main}
      </div>
      <div
        sx={{
          flexBasis: 250,
          flexGrow: 1,
          fontSize: 2,
        }}
      >
        {props.side}
      </div>
    </div>
  )
}
