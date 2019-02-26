import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage, Box, Text, Flex } from '../src'

const image =
  'https://img.archilovers.com/projects/b_730_9e96dd59-7bb9-4ecb-ae3f-c67a70f56264.jpg'

storiesOf('BackgroundImage', module)
  .add('Basic', () => (
    <Box>
      <BackgroundImage image={image} width="320px">
        <Box p={4}>
          <Text fontSize={6} bold align="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Box>
  ))
  .add('Fixed Height', () => (
    <Box>
      <BackgroundImage height="320px" image={image} width="360px">
        <Box p={4}>
          <Text fontSize={6} bold align="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Box>
  ))
  .add('Responsive', () => (
    <Flex>
      <BackgroundImage
        width={['100px', '216px', '260px']}
        height="320px"
        image={image}
      >
        <Box p={4}>
          <Text fontSize={6} bold align="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Flex>
  ))
