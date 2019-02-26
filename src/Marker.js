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
    line_A: {
      backgroundColor: mtaColors.ace,
      color: props.theme.colors.white
    },
    line_C: {
      backgroundColor: mtaColors.ace,
      color: props.theme.colors.white
    },
    line_E: {
      backgroundColor: mtaColors.ace,
      color: props.theme.colors.white
    },
    blue: {
      backgroundColor: mtaColors.ace,
      color: props.theme.colors.white
    },
    line_4: {
      backgroundColor: props.theme.colors._456,
      color: props.theme.colors.white
    },
    line_5: {
      backgroundColor: props.theme.colors._456,
      color: props.theme.colors.white
    },
    line_6: {
      backgroundColor: props.theme.colors._456,
      color: props.theme.colors.white
    },
    green: {
      backgroundColor: props.theme.colors._456,
      color: props.theme.colors.white
    },
    line_G: {
      backgroundColor: props.theme.colors.g,
      color: props.theme.colors.darkGreen
    },
    lightGreen: {
      backgroundColor: props.theme.colors.g,
      color: props.theme.colors.darkGreen
    },
    line_1: {
      backgroundColor: props.theme.colors._123,
      color: props.theme.colors.white
    },
    line_2: {
      backgroundColor: props.theme.colors._123,
      color: props.theme.colors.white
    },
    line_3: {
      backgroundColor: props.theme.colors._123,
      color: props.theme.colors.white
    },
    red: {
      backgroundColor: props.theme.colors._123,
      color: props.theme.colors.white
    },
    line_J: {
      backgroundColor: props.theme.colors.jz,
      color: props.theme.colors.white
    },
    line_Z: {
      backgroundColor: props.theme.colors.jz,
      color: props.theme.colors.white
    },
    orange: {
      backgroundColor: props.theme.colors.jz,
      color: props.theme.colors.white
    },
    lightOrange: {
      backgroundColor: props.theme.colors.bdfm,
      color: props.theme.colors.white
    },
    yellow: {
      backgroundColor: props.theme.colors.nqrw,
      color: props.theme.colors.white
    },
    purple: {
      backgroundColor: props.theme.colors._7,
      color: props.theme.colors.white
    },
    gray: {
      backgroundColor: props.theme.colors.s,
      color: props.theme.colors.white
    },
    gray50: {
      backgroundColor: props.theme.colors.l,
      color: props.theme.colors.white
    }
  }
  return !(props.bg && props.color) && (markerColors[props.bg] || mtaColors.s)
}

const Marker = styled.div`
  border-radius: 50%;
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[2]}px;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
	width: 30px;
	height: 30px;
  line-height: 20px;
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
