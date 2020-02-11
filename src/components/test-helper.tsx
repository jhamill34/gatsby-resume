import React from 'react'
import { render, RenderResult, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'

/** */
function Wrapper(props: { children?: React.ReactNode }): React.ReactElement {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

/** */
function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult {
  return render(ui, { wrapper: Wrapper, ...options })
}

export { customRender as render }
