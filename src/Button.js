import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color, space } from 'styled-system'
import { darken } from 'polished'
import theme from './theme'

const size = props => {
  switch (props.size) {
    case 'small':
      return {
        fontSize: `${props.theme.fontSizes[0]}px`,
        padding: '7px 12px'
      }
    case 'medium':
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: '9.5px 18px'
      }
    case 'large':
      return {
        fontSize: `${props.theme.fontSizes[2]}px`,
        padding: '12px 22px'
      }
    default:
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: '9.5px 18px'
      }
  }
}

const type = props => {
  switch (props.type) {
    case 'primary':
      return {
        backgroundColor: props.theme.colors.primary,
        color: props.theme.colors.white
      }
    case 'secondary':
      return {
        backgroundColor: props.theme.colors.secondary,
        color: props.theme.colors.white
      }
    case 'success':
      return {
        backgroundColor: props.theme.colors.success,
        color: props.theme.colors.white
      }
    case 'danger':
      return {
        backgroundColor: props.theme.colors.error,
        color: props.theme.colors.white
      }
    default:
      return {
        backgroundColor: props.theme.colors.darkPink,
        color: props.theme.colors.darkPink
      }
  }
}

const fullWidth = props => (props.fullWidth ? { width: '100%' } : null)
const Button = styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.5;
  cursor: pointer;
  border-radius: ${props => props.theme.radius};
  border-width: 0;
  border-style: solid;

  &:disabled {
    opacity: 0.25;
  }

  &:hover {
    background-color: ${props =>
    props.disabled
      ? null
      : darken(
        0.075,
        props.bg ? theme.colors[props.bg] : theme.colors.gray50
      )};
  }

  &:focus {
    outline: none;
  }

  ${fullWidth} ${size} ${space} ${type} ${color};
`

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Button.propTypes = {
  /** Size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  color: PropTypes.string,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Button.defaultProps = {
  theme: theme,
  type: 'primary'
}

Button.displayName = 'Button'

export default Button
