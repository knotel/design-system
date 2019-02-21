import React from 'react'
import styled from 'styled-components'
import Flex from '../Flex'
import Heading from '../Heading'
import theme from '../theme'
import StatusIndicator from './StatusIndicator'

const StatusTile = styled(Flex)`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0px 0px 2px 0px;
  width: 80px;
  height: 14px;
`

const Status = React.memo(({ preview, status }) => {
  if (!status) {
    return null
  }
  return (
    <StatusTile p={1} justify='center'
      align='center'
    >
      {!preview && <StatusIndicator mr={1} state={status} />}
      <Heading width='200px' fontSize={1}
        caps color={theme.colors.gray600}
      >
        {preview ? '                 ' : status}
      </Heading>
    </StatusTile>
  )
})

export default Status
