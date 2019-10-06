import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { action } from '@storybook/addon-actions'

import Modal from 'components/Modal'
import Button from 'components/Button'

addDecorator(withA11y)

storiesOf('Modal', module)
  .add('Default', () => (
    <Modal
      title="Title"
      subtitle="Subtitle"
      hideModal={action('close')}
      show
      actions={
        <>
          <Button handleClick={action('cancel')}>
            Cancel
          </Button>
          <Button
            type="secondary"
            handleClick={action('add')}
          >
            Add
          </Button>
        </>
      }
    >
      Content
    </Modal>
  ))
