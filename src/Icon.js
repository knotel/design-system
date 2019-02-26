import React from 'react'
import styled from 'styled-components'
import { space, color, propTypes, cleanElement } from 'styled-system'
import PropTypes from 'prop-types'
import icons from '../icons.json'
import theme from './theme'

// Should be removed eventually after v1.0.0
const aliases = {
  scrollLeft: 'chevronLeft',
  chevronLight: 'chevronDown',
  chevronThick: 'chevronDownThick',
  // aliases for breaking changes from #153
  // should add propType warnings similar to the color name deprecation getters
  box: 'boxEmpty',
  car: 'cars',
  cruise: 'cruises',
  description: 'document',
  hotel: 'hotels',
  allInclusive: 'inclusive',
  radioFilled: 'radioChecked',
  radio: 'radioEmpty',
  add: 'radioPlus',
  minus: 'radioMinus',
  businessSeat: 'seatBusiness',
  economySeat: 'seatEconomy',
  plane: 'flights'
}

const getPath = ({ name }) => {
  return icons[name]
}

// Remove `space` props from the `svg` element prevents react warnings
const CleanSvg = cleanElement('svg')
CleanSvg.propTypes = {
  ...propTypes.space
}

const Base = ({ name, size, ...props }) => {
  const icon = getPath({ name })
  if (!icon) return false

  return (
    <CleanSvg
      {...props}
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="currentcolor"
    >
      <path d={icon.path} />
    </CleanSvg>
  )
}

const Icon = styled(Base)`
  flex: none;
  ${space} ${color};
`

Icon.displayName = 'Icon'

Icon.defaultProps = {
  name: 'checkLight',
  size: 24,
  theme: theme
}

const allKeys = Object.keys({
  ...icons,
  ...aliases
})

Icon.propTypes = {
  name: ({ name }) => {
    if (!allKeys.includes(name)) {
      return new Error(
        `Failed prop type: Invalid prop name of value '${name}' supplied to Icon, expected one of ${allKeys.toString()} is expected`
      )
    }
  },
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string
}

export default Icon
