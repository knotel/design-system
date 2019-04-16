import styled from 'styled-components'
import PropTypes from 'prop-types'
import { width, height } from 'styled-system'
import theme from './theme'
import BackgroundImage from './BackgroundImage'

const image = props =>
  props.image ? { backgroundImage: `url(${props.image})` } : null

const Avatar = styled(BackgroundImage)`
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.theme.colors.lightGray};
  ${image} ${height} ${width};
`
const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Avatar.propTypes = {
  image: PropTypes.string,
  width: numberStringOrArray,
  height: numberStringOrArray
}

Avatar.defaultProps = {
  theme: theme
}

Avatar.displayName = 'Avatar'

export default Avatar
