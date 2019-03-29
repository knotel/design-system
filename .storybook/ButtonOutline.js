import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ButtonOutline } from '../src'

storiesOf('ButtoOutline', module)
  .add('ButtoOutline component', () => (
    <div>
      <ButtonOutline mr={2}>Primary</ButtonOutline>
      <ButtonOutline type="secondary" mr={2}>
        Secondary
      </ButtonOutline>
      <ButtonOutline type="success" mr={2}>
        Success
      </ButtonOutline>
      <ButtonOutline type="error" mr={2}>
        Error
      </ButtonOutline>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <ButtonOutline size="large" mr={2}>
        Large
      </ButtonOutline>
      <ButtonOutline size="medium" mr={2}>
        Medium
      </ButtonOutline>
      <ButtonOutline size="small" mr={2}>
        Small
      </ButtonOutline>
    </div>
  ))
  .add('fullWidth', () => <ButtonOutline fullWidth>Full Width</ButtonOutline>)
  .add('disabled', () => <ButtonOutline disabled>Disabled</ButtonOutline>)
