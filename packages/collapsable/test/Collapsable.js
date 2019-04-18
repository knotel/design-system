/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import { shallowWithTheme } from 'enzyme-theme-utils'
import { Image } from 'pcln-design-system'
import Collapsable from '../src'

let carousel, wrapper

const images = [
  'https://via.placeholder.com/150/abcdef/111111?text=1',
  'https://via.placeholder.com/150/abcdef/111111?text=2',
  'https://via.placeholder.com/150/abcdef/111111?text=3',
  'https://via.placeholder.com/150/abcdef/111111?text=4'
]

const items = images.map((image, index) => <Image key={index} src={image} />)

describe('Collapsable', () => {
  test('Does not error with no props', () => {
    wrapper = shallowWithTheme(<Collapsable />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })

  test('renders correctly', () => {
    carousel = (
      <Collapsable trigger="Show me the pictures!">{items}</Collapsable>
    )
    wrapper = shallowWithTheme(carousel).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
