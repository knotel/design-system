import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Nav } from '../src'
import theme from '../src/theme'

storiesOf('Navigation', module)
  .add('Nav', () => (
    <Box bg={theme.colors.gray100} p={2}>
      <Nav>This is a Nav</Nav>
    </Box>
  ))