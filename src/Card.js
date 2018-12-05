import styled from 'styled-components'
import Box from './Box'
import theme from './theme'
import PropTypes from 'prop-types'
import { borderRadius, propTypes } from 'styled-system'

const boxShadow = props => {
  const boxShadows = {
    sm: {
      'box-shadow': props.theme.boxShadows[0]
    },
    md: {
      'box-shadow': props.theme.boxShadows[1]
    },
    lg: {
      'box-shadow': props.theme.boxShadows[2]
    },
    xl: {
      'box-shadow': props.theme.boxShadows[3]
    }
  }
  return boxShadows[props.boxShadowSize]
}

const boxBorder = props => ({
  border: `${props.borderWidth}px solid ${
    props.theme.colors[props.borderColor]
  }`
})

const Card = styled(Box)`
  ${boxShadow} ${boxBorder} ${borderRadius};
  background-color: ${props => props.backgroundColor};
`

Card.propTypes = {
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  borderColor: PropTypes.string,
  ...propTypes.borderRadius,
  borderWidth: PropTypes.oneOf([1, 2]),
  backgroundColor: PropTypes.string
}

Card.defaultProps = {
  borderColor: 'gray300',
  borderRadius: 1,
  borderWidth: 1,
  theme: theme,
  backgroundColor: 'white'
}

Card.displayName = 'Card'

export default Card
