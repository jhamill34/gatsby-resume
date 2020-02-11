import React from 'react'
import { matchers } from 'jest-emotion'
import { render } from '../test-helper'
import { Layout } from './Layout'

expect.extend(matchers)

describe('<Layout />', () => {
  it('should render children', () => {
    const { getByText } = render(<Layout>Hello</Layout>)

    expect(getByText('Hello')).not.toBeNull()
  })

  it('should have a max width', () => {
    const { container } = render(<Layout>Child</Layout>)
    expect(container.firstChild).toHaveStyleRule('max-width', '1000px')
  })
})
