/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import { shallowWithTheme, mountWithTheme } from 'enzyme-theme-utils'
import { Image, theme } from 'pcln-design-system'
import Tabs from '../src'

let tabs, wrapper

const images = [
  'https://via.placeholder.com/150/abcdef/111111?text=1',
  'https://via.placeholder.com/150/abcdef/111111?text=2',
  'https://via.placeholder.com/150/abcdef/111111?text=3'
]

const items = images.map((image, index) => <Image key={index} src={image} />)

describe('Tabs', () => {
  test('Does not error with no props', () => {
    wrapper = shallowWithTheme(<Tabs />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  test('renders correctly', () => {
    tabs = <Tabs>{items}</Tabs>
    wrapper = shallowWithTheme(tabs).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
