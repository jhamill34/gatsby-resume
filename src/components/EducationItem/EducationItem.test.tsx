import React from 'react'
import { render } from '../test-helper'

import { EducationItem } from './EducationItem'

const mockEd: EducationModel = {
  name: 'University of Washington',
  start: '2012-09-01',
  end: '2014-06-15',
  major: 'Electrical Engineering',
  specialization: 'VLSI',
  location: 'Seattle, WA',
  description: 'Lorem Ipsum',
}

describe('<EducationItem />', () => {
  it('should render school name', () => {
    const { getByText } = render(<EducationItem education={mockEd} />)

    expect(getByText('University of Washington')).not.toBeNull()
  })

  it('should render dates', () => {
    const { getByText } = render(
      <EducationItem education={mockEd}></EducationItem>
    )

    expect(getByText('Sep 2012 - Jun 2014')).not.toBeNull()
  })

  it('should render present if end is empty', () => {
    const { getByText } = render(
      <EducationItem education={{ ...mockEd, end: '' }}></EducationItem>
    )

    expect(getByText('Sep 2012 - Present')).not.toBeNull()
  })

  it('should render degree', () => {
    const { getByText } = render(
      <EducationItem education={mockEd}></EducationItem>
    )

    expect(getByText('Electrical Engineering')).not.toBeNull()
  })

  it('should render concentration', () => {
    const { getByText } = render(
      <EducationItem education={mockEd}></EducationItem>
    )

    expect(getByText('VLSI')).not.toBeNull()
  })
})
