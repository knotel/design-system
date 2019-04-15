import styled from 'styled-components'

import Box from '../Box'

const SvgButton = styled(Box)`
    background-image: url('/assets/${props => props.icon}.svg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: ${({ width, height }) =>
    width && height ? `${width} ${height}` : '20px 20px'}; 
  width: ${({ width }) => width || '20px'};
  height: ${({ height }) => height || '20px'};
  outline: none;
  background-origin: content-box;
`

export default SvgButton
