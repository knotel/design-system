import styled from 'styled-components'
import theme from './theme'
import { Image as ImageAlias } from 'react-primitives'

const Image = styled(ImageAlias)`
  display: block;
  max-width: 100%;
  height: auto;
`

Image.displayName = 'Image'

Image.defaultProps = {
  theme: theme
}

export default Image
