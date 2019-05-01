import React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar, Box, Icon, Text, Flex } from '../src'

const image =
  'https://images.globest.com/contrib/content/uploads/sites/409/2018/10/Amol-Sarva.jpg'

storiesOf('Avatar', module)
  .add('Logged Out', () => (
    <Box>
      <Avatar width="32px" height="32px">
        <Icon color="lightGrey" size={24} m={1} name="User" />
      </Avatar>
    </Box>
  ))
  .add('Logged In', () => (
    <Box>
      <Avatar image={image} width="32px" height="32px" />
    </Box>
  ))
  .add('Sizes', () => (
    <Box>
      <Avatar image={image} width="32px" height="32px" />
      <Avatar image={image} width="48px" height="48px" />
      <Avatar image={image} width="64px" height="64px" />
      <Avatar width="48px" height="48px">
        <Icon color="lightGrey" size={32} m={2} name="User" />
      </Avatar>
    </Box>
  ))
  .add('Responsive', () => (
    <Flex>
      <Avatar
        width={['48px', '64px', '128px']}
        height={['48px', '64px', '128px']}
        image={image}
      />
    </Flex>
  ))

storiesOf('Avatar', module)
