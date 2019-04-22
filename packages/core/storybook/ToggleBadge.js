import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { Box, ToggleBadge } from '../src'

storiesOf('ToggleBadge', module)
  .add(
    'ToggleBadge component',
    withInfo({
      inline: true,
      text:
        'Use the <ToggleBadge /> component to render a primitive ToggleBadge.'
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
  .add('Colors', () => (
    <Box>
      <ToggleBadge
        id="item3"
        label="Red"
        bg="lightRed"
        color="red"
        selected={false}
        onChange={action('e')}
      />
      <ToggleBadge
        id="item4"
        label="Red"
        bg="lightRed"
        color="red"
        selected={true}
        onChange={action('e')}
      />
      <ToggleBadge
        id="item5"
        label="Green"
        bg="lightGreen"
        color="green"
        selected={false}
        onChange={action('e')}
      />
      <ToggleBadge
        id="item6"
        label="Green"
        bg="lightGreen"
        color="green"
        selected={true}
        onChange={action('e')}
      />
      <ToggleBadge
        id="item7"
        label="Blue"
        bg="lightBlue"
        color="blue"
        selected={false}
        onChange={action('e')}
      />
      <ToggleBadge
        id="item8"
        label="Blue"
        bg="lightBlue"
        color="blue"
        selected={true}
        onChange={action('e')}
      />
    </Box>
  ))
