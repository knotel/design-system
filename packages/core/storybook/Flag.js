import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Card, Flag, Flex, Icon, Text } from '../src'

storiesOf('Flag', module)
  .add('Default', () => (
    <Box p={3}>
      <Card py={0}>
        <Flag mt={2}>Hello Flag</Flag>
        <Box p={3}>Hello</Box>
      </Card>
    </Box>
  ))
  .add('Colors', () => (
    <Box p={3}>
      <Card pb={3}>
        <Flag width={192} mt={2} bg="orange">
          <b>Hello</b> Orange
        </Flag>
        <Flag mt={3} bg="blue">
          Hello Blue
        </Flag>
        <Flag mt={3} bg="purple">
          Hello Purple
        </Flag>
      </Card>
    </Box>
  ))

  .add('with custom hex bg color', () => (
    <Box p={3}>
      <Card pb={3}>
        <Flag width={192} mt={2} bg="#085397">
          <b>Hello</b> #085397
        </Flag>
        <Flag width={192} mt={2} bg="#f2633a">
          <b>Hello</b> #f2633a
        </Flag>
        <Flag width={192} mt={2} bg="#0a84c1">
          <b>Hello</b> #0a84c1
        </Flag>
        <Flag width={192} mt={2} bg="#3c910e">
          <b>Hello</b> #3c910e
        </Flag>
      </Card>
    </Box>
  ))
  .add('Compensating for 1px border', () => (
    <Box p={3}>
      <Card pb={3}>
        <Flag width={192} ml={-9} mt={2}>
          <b>Hello</b>
        </Flag>
      </Card>
    </Box>
  ))
  .add('Wrapped text', () => (
    <Box p={3}>
      <Card pb={3}>
        <Flag mt={2}>
          <b>Hello</b>
          This is a really long string of text that should wrap when it gets too
          long. But then the flag part to the right will probably break.
        </Flag>
      </Card>
    </Box>
  ))
  .add('With Icon', () => (
    <Box p={3}>
      <Card pb={3}>
        <Flag mt={2}>
          <Flex>
            <Icon size={14} mr={1} name="Loyalty" />
            <Text>Hello World</Text>
          </Flex>
        </Flag>
      </Card>
    </Box>
  ))
