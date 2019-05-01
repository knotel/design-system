import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon, ProgressBar, Text } from '../src'

storiesOf('ProgressBar', module)
  .add('ProgressBar component', () => (
    <div>
      <ProgressBar progress={'25%'} />
      <ProgressBar color="secondary" bg="lightGray" progress={'40%'} />
      <ProgressBar color="success" bg="lightGray" progress={[1 / 2]}>
        <Text color="white" pr={2}>
          50%
        </Text>
      </ProgressBar>
      <ProgressBar color="danger" bg="gray" progress={'75%'} align="flex-start">
        <Text pl={1}>Danger w/ Diff</Text>
      </ProgressBar>
      <ProgressBar color="error" bg="gray" progress={[1 / 8]}>
        <Text pr={1}>Responsive</Text>
      </ProgressBar>
    </div>
  ))
  .add('With an Icon', () => (
    <ProgressBar color="success" bg="lightGray" progress={100}>
      <Icon name="Check" color="white" />
    </ProgressBar>
  ))
  .add('Responsive', () => (
    <ProgressBar
      color="success"
      bg="lightGray"
      progress={[1 / 3, 1 / 4, 1 / 8]}
    >
      <Icon name="Check" color="white" />
    </ProgressBar>
  ))
