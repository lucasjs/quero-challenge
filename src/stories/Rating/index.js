import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import Rating from 'components/Rating'

addDecorator(withA11y)

storiesOf('Rating', module)
  .add('Default', () => (
    <Rating value={3} />
  ))
