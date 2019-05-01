import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ButtonGhost } from '../src'

storiesOf('ButtonGhost', module)
  .add('ButtonGhost component', () => (
    <div>
      <ButtonGhost mr={2}>Primary</ButtonGhost>
      <ButtonGhost type="secondary" mr={2}>
        Secondary
      </ButtonGhost>
      <ButtonGhost type="success" mr={2}>
        Success
      </ButtonGhost>
      <ButtonGhost type="danger" mr={2}>
        Danger
      </ButtonGhost>
      <ButtonGhost type="error" mr={2}>
        Error
      </ButtonGhost>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <ButtonGhost size="large" mr={2}>
        Large
      </ButtonGhost>
      <ButtonGhost size="medium" mr={2}>
        Medium
      </ButtonGhost>
      <ButtonGhost size="small" mr={2}>
        Small
      </ButtonGhost>
    </div>
  ))
  .add('fullWidth', () => <ButtonGhost fullWidth>Full Width</ButtonGhost>)
  .add('disabled', () => <ButtonGhost disabled>Disabled</ButtonGhost>)
