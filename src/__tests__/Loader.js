import React from 'react'
import renderer from 'react-test-renderer'
import { Loader } from '..'

describe('Loader', () => {
  test('renders', () => {
    const json = renderer
      .create(<Loader />, { disableLifecycleMethods: true })
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
