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
      backgroundColor: mtaColors._456,
      color: props.theme.colors.white
    },
    line_5: {
      backgroundColor: mtaColors._456,
      color: props.theme.colors.white
    },
    line_6: {
      backgroundColor: mtaColors._456,
      color: props.theme.colors.white
    },
    green: {
      backgroundColor: mtaColors._456,
      color: props.theme.colors.white
    },
    line_G: {
      backgroundColor: mtaColors.g,
      color: props.theme.colors.darkGreen
    },
    lightGreen: {
      backgroundColor: mtaColors.g,
      color: props.theme.colors.darkGreen
    },
    line_1: {
      backgroundColor: mtaColors._123,
      color: props.theme.colors.white
    },
    line_2: {
      backgroundColor: mtaColors._123,
      color: props.theme.colors.white
    },
    line_3: {
      backgroundColor: mtaColors._123,
      color: props.theme.colors.white
    },
    red: {
      backgroundColor: mtaColors._123,
      color: props.theme.colors.white
    },
    line_J: {
      backgroundColor: mtaColors.jz,
      color: props.theme.colors.white
    },
    line_Z: {
      backgroundColor: mtaColors.jz,
      color: props.theme.colors.white
    },
    orange: {
      backgroundColor: mtaColors.jz,
      color: props.theme.colors.white
    },
    line_B: {
      backgroundColor: mtaColors.bdfm,
      color: props.theme.colors.white
    },
    line_D: {
      backgroundColor: mtaColors.bdfm,
      color: props.theme.colors.white
    },
    line_F: {
      backgroundColor: mtaColors.bdfm,
      color: props.theme.colors.white
    },
    line_M: {
      backgroundColor: mtaColors.bdfm,
      color: props.theme.colors.white
    },
    lightOrange: {
      backgroundColor: mtaColors.bdfm,
      color: props.theme.colors.white
    },
    line_N: {
      backgroundColor: mtaColors.nqrw,
      color: props.theme.colors.white
    },
    line_Q: {
      backgroundColor: mtaColors.nqrw,
      color: props.theme.colors.white
    },
    line_R: {
      backgroundColor: mtaColors.nqrw,
      color: props.theme.colors.white
    },
    line_W: {
      backgroundColor: mtaColors.nqrw,
      color: props.theme.colors.white
    },
    yellow: {
      backgroundColor: mtaColors.nqrw,
      color: props.theme.colors.white
    },
    line_7: {
      backgroundColor: mtaColors._7,
      color: props.theme.colors.white
    },
    purple: {
      backgroundColor: mtaColors._7,
      color: props.theme.colors.white
    },
    line_S: {
      backgroundColor: mtaColors.s,
      color: props.theme.colors.white
    },
    gray: {
      backgroundColor: mtaColors.s,
      color: props.theme.colors.white
    },
    line_L: {
      backgroundColor: mtaColors.l,
      color: props.theme.colors.white
    },
    gray50: {
      backgroundColor: mtaColors.l,
      color: props.theme.colors.white
    }
  }
  return !(props.bg && props.color) && (markerColors[props.bg] || mtaColors.s)
}

const Marker = styled.div`
  border-radius: 50%;
  display: inline-block;
  width: ${props => props.theme.fontSizes[4]}px;
  height: ${props => props.theme.fontSizes[4]}px;
  font-size: ${props => props.theme.fontSizes[2]}px;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
	color: grey;
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
