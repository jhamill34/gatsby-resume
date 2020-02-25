/** @jsx jsx */
import { ReactNode, ReactElement } from 'react'
import { jsx } from 'theme-ui'

type ColumnLayoutProps = {
  /** */
  main: ReactNode

  /** */
  side: ReactNode
}

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
        }}
      >
        {props.side}
      </div>
    </div>
  )
}
