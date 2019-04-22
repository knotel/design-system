import React from 'react'
import { storiesOf } from '@storybook/react'
import Dropdown from '../src/index'

storiesOf('Dropdown', module).add('Basic', () => (
  <Dropdown title="Anything">
    <p>Hi</p>
  </Dropdown>
))
