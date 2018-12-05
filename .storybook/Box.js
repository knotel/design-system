import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, Text } from '../src'

const description =
  'A low-level layout component for setting width, margin, padding, and color'

storiesOf('Box', module)
  .add(
    'Layout component',
    withInfo({
      text: description,
      inline: true
    })(() => (
      <Box p={3}>
        <Text>Hello</Text>
      </Box>
    ))
  )
  .add('Padding', () => (
    <Box p={3}>
      <Text>Hello</Text>
    </Box>
  ))
  .add('Margin', () => (
    <Box m={3}>
      <Text>Hello</Text>
    </Box>
  ))
  .add('Color', () => (
    <Box p={3} color="blue">
      <Text>Hello</Text>
    </Box>
  ))
  .add('Background Color', () => (
    <Box p={3} color="white" bg="blue">
      <Text>Hello</Text>
    </Box>
  ))
  .add('Width', () => (
    <Box p={3} width={1 / 2} color="white" bg="blue">
      <Text>Half Width</Text>
    </Box>
  ))
  .add('Pixel Width', () => (
    <Box p={3} width={256} color="white" bg="blue">
      <Text>256px width</Text>
    </Box>
  ))
  .add('VW Width', () => (
    <Box p={3} width="50vw" color="white" bg="blue">
      <Text>50vw width</Text>
    </Box>
  ))
  .add('Directional Padding', () => (
    <Box p={3}>
      <Box m={1} pt={3} color="white" bg="blue">
        <Text>Padding Top</Text>
      </Box>
      <Box m={1} pr={3} color="white" bg="blue">
        <Text>Padding Right</Text>
      </Box>
      <Box m={1} pb={3} color="white" bg="blue">
        <Text>Padding Bottom</Text>
      </Box>
      <Box m={1} pl={3} color="white" bg="blue">
        <Text>Padding Left</Text>
      </Box>
      <Box m={1} px={3} color="white" bg="blue">
        <Text>Padding X-Axis</Text>
      </Box>
      <Box m={1} py={3} color="white" bg="blue">
        <Text>Padding Y-Axis</Text>
      </Box>
    </Box>
  ))
  .add('Directional Margin', () => (
    <Box p={3}>
      <Box mt={3} color="white" bg="blue">
        <Text>Margin Top</Text>
      </Box>
      <Box mr={3} color="white" bg="blue">
        <Text>Margin Right</Text>
      </Box>
      <Box mb={3} color="white" bg="blue">
        <Text>Margin Bottom</Text>
      </Box>
      <Box ml={3} color="white" bg="blue">
        <Text>Margin Left</Text>
      </Box>
      <Box mx={3} color="white" bg="blue">
        <Text>Margin X-Axis</Text>
      </Box>
      <Box my={3} color="white" bg="blue">
        <Text>Margin Y-Axis</Text>
      </Box>
    </Box>
  ))
