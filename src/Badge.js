import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme as themeGet, space, color } from 'styled-system'
import theme from './theme'

const type = props => {
  const badgeColors = {
    blue: {
      backgroundColor: props.theme.colors.blue,
      color: props.theme.colors.white
    },
    lightBlue: {
      backgroundColor: props.theme.colors.lightBlue,
      color: props.theme.colors.darkBlue
    },
    green: {
      backgroundColor: props.theme.colors.green,
      color: props.theme.colors.white
    },
    lightGreen: {
      backgroundColor: props.theme.colors.lightGreen,
      color: props.theme.colors.darkGreen
    },
    red: {
      backgroundColor: props.theme.colors.red,
      color: props.theme.colors.white
    },
    lightRed: {
      backgroundColor: props.theme.colors.lightRed,
      color: props.theme.colors.darkRed
    },
    orange: {
      backgroundColor: props.theme.colors.orange,
      color: props.theme.colors.text
    },
    lightOrange: {
      backgroundColor: props.theme.colors.lightOrange,
      color: props.theme.colors.darkOrange
    },
    gray: {
      backgroundColor: props.theme.colors.gray600,
      color: props.theme.colors.white
    },
    gray50: {
      backgroundColor: props.theme.colors.gray50,
      color: props.theme.colors.text
    }
  }
  return (
    !(props.bg && props.color) && (badgeColors[props.bg] || badgeColors.gray50)
  )
}

const Badge = styled.div`
  border-radius: 99999px;
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[0]}px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
  ${space} ${type} ${color};
`

Badge.displayName = 'Badge'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Badge.propTypes = {
  bg: PropTypes.string,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Badge.defaultProps = {
  px: 2,
  py: 1,
  theme: theme
}

export default Badge
