import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { action } from '@storybook/addon-actions'

import Button from 'components/Button'

addDecorator(withA11y)

storiesOf('Button', module)
  .add('Default', () => (
    <Button handleClick={action('clicked')}>
      Default
    </Button>
  ))
  .add('Secondary', () => (
    <Button type="secondary" handleClick={action('clicked')}>
      Secondary
    </Button>
  ))
  .add('Disabled', () => (
    <Button type="disabled">
      Disabled
    </Button>
  ))
