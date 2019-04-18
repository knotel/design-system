/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import { shallowWithTheme, mountWithTheme } from 'enzyme-theme-utils'
import { Image, theme } from 'pcln-design-system'
import Collapsable from '../src'

let carousel, wrapper

const images = [
  'https://via.placeholder.com/150/abcdef/111111?text=1',
  'https://via.placeholder.com/150/abcdef/111111?text=2',
  'https://via.placeholder.com/150/abcdef/111111?text=3',
  'https://via.placeholder.com/150/abcdef/111111?text=4',
  'https://via.placeholder.com/150/abcdef/111111?text=5',
  'https://via.placeholder.com/150/abcdef/111111?text=6',
  'https://via.placeholder.com/150/abcdef/111111?text=7',
  'https://via.placeholder.com/150/abcdef/111111?text=8',
  'https://via.placeholder.com/150/abcdef/111111?text=9',
  'https://via.placeholder.com/150/abcdef/111111?text=10',
  'https://via.placeholder.com/150/abcdef/111111?text=11',
  'https://via.placeholder.com/150/abcdef/111111?text=12',
  'https://via.placeholder.com/150/abcdef/111111?text=13',
  'https://via.placeholder.com/150/abcdef/111111?text=14',
  'https://via.placeholder.com/150/abcdef/111111?text=15',
  'https://via.placeholder.com/150/abcdef/111111?text=16',
  'https://via.placeholder.com/150/abcdef/111111?text=17'
]

const items = images.map((image, index) => <Image key={index} src={image} />)

describe('Collapsable', () => {
  test('Does not error with no props', () => {
    wrapper = shallowWithTheme(<Collapsable />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  test('renders correctly', () => {
    carousel = <Collapsable>{items}</Collapsable>
    wrapper = shallowWithTheme(carousel).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
