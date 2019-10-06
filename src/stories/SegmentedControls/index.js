import React, { useState } from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import SegmentedControls from 'components/SegmentedControls'

const semestersOptions = [
  {
    id: 1,
    value: '',
    title: 'Todos os semestres'
  },
  {
    id: 2,
    value: '2019.2',
    title: '2° semestre de 2019'
  },
  {
    id: 3,
    value: '2020.1',
    title: '1° semestre de 2020'
  }
]

const SegmentedControlsState = () => {
  const [semester, setSemester] = useState('')

  const handleSemester = item => {
    setSemester(item)
  }

  return (
    <SegmentedControls
      name="switch-controls"
      options={semestersOptions}
      handleChange={(value) => handleSemester(value)}
      value={semester}
    />
  )
}

addDecorator(withA11y)

storiesOf('Segmented Controls', module)
  .add('Default', () => (
    <SegmentedControlsState />
  ))
