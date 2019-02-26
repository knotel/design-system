import React from 'react'
import renderer from 'react-test-renderer'
import { Slider } from '..'

describe('Slider', () => {
  test('renders', () => {
    const json = renderer
      .create(<Slider />, { disableLifecycleMethods: true })
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
