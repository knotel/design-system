import React from 'react'
import { storiesOf } from '@storybook/react'
import Component from '@reach/component-component'
import Datepicker from '../src'

storiesOf('Datepicker', module)
  .add('Basic', () => (
    <Component
      initialState={{
        value: [32, 64]
      }}
      children={({ state, setState }) => (
        <Datepicker
          value={state.value}
          onChange={value => {
            setState({ value })
          }}
        />
      )}
    />
  ))
  .add('Single value', () => <Datepicker value={[32]} />)
  .add('Multiple values', () => (
    <Datepicker value={[16, 32, 64, 128]} max={256} />
  ))
