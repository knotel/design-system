import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon, Flex, Box, Text, theme } from '../src'
import icons from '../icons.json'

const keys = Object.keys(icons).filter(name => name !== 'legacy')

storiesOf('Icon', module)
  .add('Icons', () => (
    <Box p={2} color={theme.colors.text} bg="white">
      <Flex wrap>
        {keys.map(name => (
          <Box key={name} w={[1 / 3, 1 / 5, 1 / 6, 1 / 8]} mx={2} my={3}>
            <Icon name={name} size={48} />
            <Text fontSize={0}>{name}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  ))
  .add('Color', () => (
    <div>
      <Icon color="blue" size={48} m={2} name="planeOutlineEngine" />
      <Icon color="green" size={48} m={2} name="hotel" />
      <Icon color="orange" size={48} m={2} name="carLine" />
    </div>
  ))
