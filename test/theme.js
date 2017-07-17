import {
  theme,
  colors,
} from '../src'

describe('theme', () => {
  test('exports an object', () => {
    expect(typeof theme).toBe('object')
  })

  test('exports colors', () => {
    expect(typeof colors).toBe('object')
  })
})
