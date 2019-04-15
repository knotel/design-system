import styled from 'styled-components'
import Flex from '../Flex'

const yellow = '#F1BB00'
const red = '#FF655A'
const green = '#53bd9d'

const statusToColor = status => {
  switch (status) {
    case 'Available':
      return green
    case 'Occupied':
      return red
    case 'Predicted':
      return yellow
    default:
      return red
  }
}

const StatusIndicator = styled(Flex)`
  background-color: ${props => statusToColor(props.state)};
  height: 8px;
  width: 8px;
  border-radius: 50%;
`

export default StatusIndicator
