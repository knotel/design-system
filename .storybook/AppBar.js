import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Box, AppBar } from '../src'
import theme from '../src/theme'

storiesOf('AppBar', module).add('AppBar component', () => (
  <Box bg={theme.colors.gray100} p={2}>
    <AppBar
      inverse={boolean('Inverse', false)}
      color={text('Color')}
      userPicture="https://randomuser.me/api/portraits/women/75.jpg"
    >
      <a href="">Sign Out</a>
    </AppBar>
  </Box>
))
