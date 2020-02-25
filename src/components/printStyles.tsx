import React, { ReactElement } from 'react'
import { Global } from '@emotion/core'

export function PrintStyles(): ReactElement {
  return (
    <Global
      styles={{
        '@media print': {
          '@page': {
            size: '8.5in 11in',
          },

          body: {
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
          },
        },
      }}
    />
  )
}
