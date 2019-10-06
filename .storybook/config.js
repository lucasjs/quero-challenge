import { addDecorator, addParameters, configure } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

function loadStories() {
  require('stories')
}

addDecorator(centered)

addParameters({
  backgrounds: [
    { name: 'Light', value: '#cdd6e0', default: true },
    { name: 'Dark', value: '#191f29' },
  ],
})

configure(loadStories, module)
