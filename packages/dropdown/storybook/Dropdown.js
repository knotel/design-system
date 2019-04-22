import React from 'react'
import { storiesOf } from '@storybook/react'
import Dropdown from '../src/index'
import Slider from '../src/../../slider/src'

storiesOf('Dropdown', module)
  .add('Basic', () => (
    <Dropdown title="Hello">
      <p>Hello</p>
    </Dropdown>
  ))
  .add('Complex', () => (
    <Dropdown title="What is your budget?">
      <Slider value={[8, 70]} color="green" mb={2} />
      <Slider value={[16, 64]} color="red" mb={2} />
    </Dropdown>
  ))
