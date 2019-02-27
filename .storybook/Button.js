import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button } from '../src'

storiesOf('Button', module)
  .add('Button component', () => (
    <div>
      <Button mr={2}>Primary</Button>
      <Button type="secondary" mr={2}>
        Secondary
      </Button>
      <Button type="success" mr={2}>
        Success
      </Button>
      <Button type="danger" mr={2}>
        Danger
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
