import React from 'react'
import renderer from 'react-test-renderer'
import Datepicker from '../src'

describe('Slider', () => {
  test('renders', () => {
    const json = renderer.create(<Datepicker />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
