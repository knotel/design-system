import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, ImageHover, Text } from '../src'

const description = 'A low-level layout component that renders an image'

storiesOf('ImageHover', module)
  .add(
    'Image component',
    withInfo({
      text: description,
      inline: true
    })(() => (
      <ImageHover
        width="320px"
        height={200}
        image="https://www.priceline.com/home/public/assets/images/photos/photo-aruba.jpg"
      >
        <Box p={4}>
          <Text fontSize={4} bold textAlign="center" color="white">
            Zoom. Zoom.
          </Text>
        </Box>
      </ImageHover>
    ))
  )
  .add('With Content', () => (
    <ImageHover
      width="320px"
      height={200}
      image="https://www.priceline.com/home/public/assets/images/photos/photo-aruba.jpg"
    >
      <Box p={4}>
        <Text fontSize={4} bold textAlign="center" color="white">
          Zoom. Zoom.
        </Text>
      </Box>
    </ImageHover>
  ))
  .add('Responsive width, with Box', () => (
    <Box width={[1 / 2, 1 / 3, 1 / 4]}>
      <ImageHover image="https://www.priceline.com/home/public/assets/images/photos/photo-aruba.jpg">
        <Text fontSize={[3, 4, 5]} bold textAlign="center" color="white">
          Zoom. Zoom.
        </Text>
      </ImageHover>
    </Box>
  ))
