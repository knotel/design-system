import styled from 'styled-components'
import PropTypes from 'prop-types'
import { darken } from 'polished'
import theme from './theme'

import Button from './Button'

const type = props => {
  switch (props.type) {
    case 'primary':
      return {
        border: `2px solid ${props.theme.colors.primary}`,
        color: props.theme.colors.primary
      }
    case 'secondary':
      return {
        border: `2px solid ${props.theme.colors.secondary}`,
        color: props.theme.colors.secondary
      }
    case 'success':
      return {
        border: `2px solid ${props.theme.colors.success}`,
        color: props.theme.colors.success
      }
    case 'error':
      return {
        border: `2px solid ${props.theme.colors.error}`,
        color: props.theme.colors.error
      }
    default:
      return {
        border: `2px solid ${props.theme.colors.primary}`,
        color: props.theme.colors.primary
      }
  }
}

const ButtonOutline = styled(Button)`
    background: ${theme.colors.white};
    ${type}
    &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.white};
    border-color: ${props =>
      props.disabled
        ? null
        : darken(
            0.075,
            props.type ? theme.colors[props.type] : theme.colors.gray50
          )}
    color: ${props =>
      props.disabled
        ? null
        : darken(
            0.075,
            props.type ? theme.colors[props.type] : theme.colors.gray50
          )}
  }
`

ButtonOutline.propTypes = {
  type: PropTypes.string
}

ButtonOutline.defaultProps = {
  theme: theme,
  type: 'primary'
}

ButtonOutline.displayName = 'ButtonOutline'

export default ButtonOutline
