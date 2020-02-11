import React from 'react'
import { render } from '../test-helper'

import { Skill } from '../../models/resume'
import { SkillItem } from './SkillItem'

const mockSkill: Skill = {
  name: 'Java',
  level: '0',
}

describe('<SkillItem />', () => {
  it('should render name', () => {
    const { getByText } = render(<SkillItem skill={mockSkill} />)
    expect(getByText('Java')).not.toBeNull()
  })
})
