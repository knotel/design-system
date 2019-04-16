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
    default:
      return {
        color: props.theme.colors.primary
      }
  }
}

const ButtonGhost = styled(ButtonOutline)`
  background: ${theme.colors.white};
  border: ${props => `2px solid ${props.type.color}`};
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
