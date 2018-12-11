import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Card, Text } from '../src'

storiesOf('Card', module)
  .add('Box Shadows with default border', () => (
    <Box>
      <Card
        boxShadowSize="sm"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={1}
      >
        <Text>Small Shadow</Text>
      </Card>
      <Card
        boxShadowSize="md"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={1}
      >
        <Text>Medium Shadow</Text>
      </Card>
      <Card
        boxShadowSize="lg"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={1}
      >
        <Text>Large Shadow</Text>
      </Card>
      <Card
        boxShadowSize="xl"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={1}
      >
        <Text>XLarge Shadow</Text>
      </Card>
    </Box>
  ))
  .add('Box Shadows with focused 2px border', () => (
    <Box>
      <Card
        boxShadowSize="sm"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={2}
      >
        <Text>Small Shadow</Text>
      </Card>
      <Card
        boxShadowSize="md"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={2}
      >
        <Text>Medium Shadow</Text>
      </Card>
      <Card
        boxShadowSize="lg"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={2}
      >
        <Text>Large Shadow</Text>
      </Card>
      <Card
        boxShadowSize="xl"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={2}
      >
        <Text>XLarge Shadow</Text>
      </Card>
    </Box>
  ))
  .add('Box Shadows with varying border radii', () => (
    <Box>
      <Card
        boxShadowSize="sm"
        m={4}
        p={4}
        width={1 / 2}
        color="black"
        bg="white"
        borderRadius={0}
      >
        <Text>Small Shadow - 0px</Text>
      </Card>
      <Card
        boxShadowSize="md"
        m={4}
        p={4}
        width={1 / 2}
        color="black"
        bg="white"
        borderRadius={10}
      >
        <Text>Medium Shadow - 10px</Text>
      </Card>
      <Card
        boxShadowSize="lg"
        m={4}
        p={4}
        width={1 / 2}
        color="black"
        bg="white"
        borderRadius={20}
      >
        <Text>Large Shadow - 20px</Text>
      </Card>
      <Card
        boxShadowSize="xl"
        m={4}
        p={4}
        width={1 / 2}
        color="black"
        bg="white"
        borderRadius="30px"
      >
        <Text>XLarge Shadow - 30px</Text>
      </Card>
    </Box>
  ))
