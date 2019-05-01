import styled from 'styled-components'
import PropTypes from 'prop-types'
import { darken } from 'polished'
import theme from './theme'

import ButtonOutline from './ButtonOutline'

const type = props => {
  switch (props.type) {
    case 'primary':
      return {
        color: props.theme.colors.primary
      }
    case 'secondary':
      return {
        color: props.theme.colors.secondary
      }
    case 'success':
      return {
        color: props.theme.colors.success
      }
    case 'danger':
      return {
        color: props.theme.colors.danger
      }
    case 'error':
      return {
        color: props.theme.colors.error
      }
    default:
      return {
        color: props.theme.colors.primary
      }
  }
}

const ButtonGhost = styled(ButtonOutline)`
  background: ${theme.colors.white};
  border: none;
  &:hover {
    color: ${props =>
      props.disabled
        ? null
        : darken(
            0.075,
            props.type ? theme.colors[props.type] : theme.colors.gray
          )};
  }
  ${type}
`

ButtonGhost.propTypes = {
  type: PropTypes.string
}

ButtonGhost.defaultProps = {
  theme: theme,
  type: 'primary'
}

ButtonGhost.displayName = 'ButtonGhost'

export default ButtonGhost
