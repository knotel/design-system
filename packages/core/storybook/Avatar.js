import React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar, Flex } from '../src'

storiesOf('Avatar', module)
  .add('Avatar component', () => state => (
    <Flex>
      <Avatar />
    </Flex>
  ))
  .add('Avatar sizes', () => state => (
    <Flex>
      <Avatar height="32" width="32" />
      <Avatar />
      <Avatar height="64" width="64" />
    </Flex>
  ))
