import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Box, SpaceCard } from '../src'

const StyledBox = styled(Box)`
  width: 500px;
`

const imageUrls = [
  'https://uproxx.files.wordpress.com/2016/12/spacejam-feat-uproxx.jpg?quality=100',
  'https://languagejazz.files.wordpress.com/2015/11/5737573149_8b9c0f111e_b.jpg',
  'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5c07f876c2241bb2a3457e83/1544026234152/?format=2500w'
]

storiesOf('SpaceCard', module).add('default', () => (
  <StyledBox>
    <SpaceCard
      boxShadowSize="sm"
      m={4}
      p={4}
      width={1 / 2}
      color="text"
      bg="white"
      borderWidth={1}
      imageUrl={imageUrls[0]}
    >
      <div>This is the first line</div>
      <div>This is the second line</div>
    </SpaceCard>
    <SpaceCard
      boxShadowSize="sm"
      m={4}
      p={4}
      width={1 / 2}
      color="text"
      bg="white"
      borderWidth={1}
      imageUrl={imageUrls[1]}
    />
    <SpaceCard
      boxShadowSize="sm"
      m={4}
      p={4}
      width={1 / 2}
      color="text"
      bg="white"
      borderWidth={1}
      imageUrl={imageUrls[2]}
    />
  </StyledBox>
))
