import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { Box, ToggleBadge } from '../src'

storiesOf('ToggleBadge', module).add(
  'ToggleBadge component',
  withInfo({
    inline: true,
    text: 'Use the <ToggleBadge /> component to render a primitive ToggleBadge.'
  })(() => (
    <Box>
      <ToggleBadge
        id="item1"
        label="On"
        selected={true}
        onChange={action('e')}
      />
      <ToggleBadge
        id="item2"
        label="Off"
        selected={false}
        onChange={action('e')}
      />
    </Box>
  ))
)
