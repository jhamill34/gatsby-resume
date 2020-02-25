/** @jsx jsx */
import { ReactElement } from 'react'
import { jsx, Theme } from 'theme-ui'

/**
 * This component can be used to create a timeline
 * when used adjacent to each other.
 */
export function TimelineItem(): ReactElement {
  return (
    <div
      sx={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        sx={{
          width: '1em',
          height: '1em',
          borderRadius: '1em',
          bg: 'background',
          flexShrink: 0,
          border: (theme: Theme): string =>
            `4px solid ${theme.colors?.primary}`,
        }}
      />
      <div
        sx={{
          flexBasis: '100%',
          minHeight: '2px',
          minWidth: '2px',
          flexGrow: 1,
          bg: 'secondary',
        }}
      />
    </div>
  )
}
