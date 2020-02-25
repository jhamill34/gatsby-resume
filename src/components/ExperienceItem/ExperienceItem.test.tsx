import React from 'react'
import { render } from '../test-helper'

import { ExperienceItem } from './ExperienceItem'

const mockExp: ExperienceModel = {
  name: 'Google',
  position: 'Full Stack Engineer',
  location: 'Seattle, WA',
  start: '2019-01-01',
  end: '2020-01-01',
  description: 'Lorem Ipsum',
  printable: true,
  technologies: [
    { data: { name: 'Java', level: '1' } },
    { data: { name: 'C++', level: '2' } },
  ],
}

describe('<ExperienceItem />', () => {
  it('should render description', () => {
    const { getByText } = render(<ExperienceItem experience={mockExp} />)

    expect(getByText('Lorem Ipsum')).not.toBeNull()
  })

  it('should render position', () => {
    const { getByText } = render(<ExperienceItem experience={mockExp} />)

    expect(getByText('Full Stack Engineer')).not.toBeNull()
  })

  it('should render company', () => {
    const { getByText } = render(<ExperienceItem experience={mockExp} />)

    expect(getByText('Google')).not.toBeNull()
  })

  it('should render dates', () => {
    const { getByText } = render(<ExperienceItem experience={mockExp} />)

    expect(getByText('Jan 2019 - Jan 2020')).not.toBeNull()
  })

  it('should render present if end is empty', () => {
    const { getByText } = render(
      <ExperienceItem experience={{ ...mockExp, end: '' }} />
    )

    expect(getByText('Jan 2019 - Present')).not.toBeNull()
  })

  it('should render technologies', () => {
    const { getByText } = render(<ExperienceItem experience={mockExp} />)

    expect(getByText('Java')).not.toBeNull()
    expect(getByText('C++')).not.toBeNull()
  })
})
