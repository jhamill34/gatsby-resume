import React from 'react'
import { render } from '../test-helper'
import { Section } from './Section'

describe('<Section />', () => {
  it('should have a title', () => {
    const { getByText } = render(<Section title="Title">Body</Section>)

    expect(getByText('TITLE')).not.toBeNull()
  })

  it('should render children', () => {
    const { getByText } = render(<Section title="Title">Body</Section>)

    expect(getByText('Body')).not.toBeNull()
  })

  it('should render an optional icon', () => {
    const { getByText } = render(
      <Section icon={<div data-testid="icon">ICON</div>} title="Title">
        Body
      </Section>
    )

    expect(getByText('ICON')).not.toBeNull()
  })
})
