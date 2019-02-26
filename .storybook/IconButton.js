import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { IconButton } from '../src'

storiesOf('IconButton', module)
  .add('Close Button', () => (
    <IconButton name="close" onClick={action('clicked')} />
  ))
  .add('Disabled Close Button', () => (
    <IconButton disabled name="close" onClick={action('clicked')} />
  ))
