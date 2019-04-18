import React from 'react'
import Flex from './Flex'
import PropTypes from 'prop-types'

const ProgressBar = props => {
  return (
    <Flex alignItems="flex-start" bg={props.bg} my={1}>
      <Flex
        width={props.progress}
        bg={props.color}
        py={1}
        justifyContent={props.align}
      >
        {props.children}
      </Flex>
    </Flex>
  )
}

ProgressBar.displayName = 'ProgressBar'

ProgressBar.propTypes = {
  height: PropTypes.string,
  align: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  progress: PropTypes.number
}

ProgressBar.defaultProps = {
  height: '5px',
  align: 'flex-end',
  color: 'green',
  bg: 'lightGray',
  progress: 0
}

export default ProgressBar
