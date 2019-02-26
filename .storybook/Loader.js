import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Loader, Flex } from '../src'

storiesOf('Loader', module).add(
  'Loader component',
  withInfo({
    inline: true,
    text: 'Use the <Loader /> component to show that something is loading.'
  })(() => (
    <Flex>
      <Loader />
    </Flex>
  ))
)
