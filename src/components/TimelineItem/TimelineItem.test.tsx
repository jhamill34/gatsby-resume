import React from 'react'
import { render } from '../test-helper'

import { TimelineItem } from './TimelineItem'
import '@testing-library/jest-dom/extend-expect'

describe('<TimelineItem />', () => {
  it('should have have no text', () => {
    const { container } = render(<TimelineItem />)

    expect(container).toHaveTextContent('')
  })
})
