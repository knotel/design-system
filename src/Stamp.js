import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme as themeGet, space, fontSize, color } from 'styled-system'
import theme from './theme'

const Stamp = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  min-height: 24px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => theme.colors.gray300};
  ${space} ${fontSize} ${color};
`

Stamp.displayName = 'Stamp'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Stamp.propTypes = {
  bg: PropTypes.string,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Stamp.defaultProps = {
  px: 1,
  py: 0,
  theme: theme,
  color: 'gray',
  bg: 'gray50',
  fontSize: 0
}

export default Stamp
