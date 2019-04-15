import React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar, Flex } from '../src'

storiesOf('Avatar', module)
.add('Avatar component', () => state => (
    <Flex>
      <Avatar />
    </Flex>
  ))
