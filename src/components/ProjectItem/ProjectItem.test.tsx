import React from 'react'
import { render } from '../test-helper'
import { ProjectItem } from './ProjectItem'

const mockProj: ProjectModel = {
  name: 'Color Mode Addon',
  description: 'Lorem Ipsum',
  link: 'https://example.com',
  repository: 'https://github.com',
  technologies: [
    { data: { name: 'Java', level: '1' } },
    { data: { name: 'C++', level: '2' } },
  ],
}

describe('<ProjectItem />', () => {
  it('should render title', () => {
    const { getByText } = render(<ProjectItem project={mockProj} />)

    expect(getByText('Color Mode Addon')).not.toBeNull()
  })

  it('should render description', () => {
    const { getByText } = render(<ProjectItem project={mockProj} />)

    expect(getByText('Lorem Ipsum')).not.toBeNull()
  })

  it('should render repo link', () => {
    const { getByTitle } = render(<ProjectItem project={mockProj} />)

    const elem = getByTitle('Link to Repository')
    expect(elem).toHaveProperty('href')
    expect(elem.getAttribute('href')).toEqual('https://github.com')
  })

  it('should render project link', () => {
    const { getByTitle } = render(<ProjectItem project={mockProj} />)

    const elem = getByTitle('Link to Project')
    expect(elem).toHaveProperty('href')
    expect(elem.getAttribute('href')).toEqual('https://example.com')
  })

  it('should not render project link if undefined', () => {
    const { queryByTitle } = render(
      <ProjectItem project={{ ...mockProj, link: '' }} />
    )

    const elem = queryByTitle('Link to Project')
    expect(elem).toEqual(null)
  })

  it('should not render repo link if undefined', () => {
    const { queryByTitle } = render(
      <ProjectItem project={{ ...mockProj, repository: '' }} />
    )

    const elem = queryByTitle('Link to Repository')
    expect(elem).toEqual(null)
  })

  it('should render technologies', () => {
    const { getByText } = render(<ProjectItem project={mockProj} />)

    expect(getByText('Java')).not.toBeNull()
    expect(getByText('C++')).not.toBeNull()
  })
})
