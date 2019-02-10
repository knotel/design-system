import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button } from '../src'

storiesOf('Button', module)
  .add(
    'Button component',
    withInfo({
      inline: true,
      text: 'Use the <Button /> components to render a primitive button.'
    })(() => <Button size="large">Button</Button>)
  )
  .add('color', () => (
    <div>
      <Button mr={2}>Button</Button>
      <Button bg="success" mr={2}>
        Success
      </Button>
      <Button bg="warning" mr={2}>
        Button
      </Button>
      <Button bg="error" mr={2}>
        Error
      </Button>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <Button size="large" mr={2}>
        Large
      </Button>
      <Button size="medium" mr={2}>
        Medium
      </Button>
      <Button size="small" mr={2}>
        Small
      </Button>
    </div>
  ))
  .add('fullWidth', () => <Button fullWidth>Full Width</Button>)
  .add('disabled', () => <Button disabled>Disabled</Button>)
