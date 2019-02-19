import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme as themeGet, space, color } from 'styled-system'
import theme from './theme'

const type = props => {
  const mtaColors = {
    ace: '#2850AD',
    bdfm: '#FF6319',
    g: '#6CBE45',
    jz: '#996633',
    l: '#A7A9AC',
    nqrw: '#FCCC0A',
    s: '#808183',
    _123: '#EE352E',
    _456: '#00933C',
    _7: '#B933AD'
  }
  const markerColors = {
    blue: {
      backgroundColor: mtaColors.ace,
      color: props.theme.colors.white
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
  return !(props.bg && props.color) && (markerColors[props.bg] || mtaColors.s)
}

const Marker = styled.div`
  border-radius: 50%;
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[0]}px;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
	width: 40px;
	height: 40px;
  line-height: 40px;
	color: white;
	text-align: center;
	font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
	font-weight: 700;
  ${space} ${type} ${color};
`

Marker.displayName = 'Marker'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Marker.propTypes = {
  bg: PropTypes.string,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Marker.defaultProps = {
  px: 2,
  py: 1,
  theme: theme
}

export default Marker
