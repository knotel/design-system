/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import { shallowWithTheme } from 'enzyme-theme-utils'
import Map from '../src'

let map

describe('Map', () => {
  test('Does not error with no props', () => {
    wrapper = shallowWithTheme(<Map />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  test('renders correctly', () => {
    map = <Map />
    wrapper = shallowWithTheme(map).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
