import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Skrim = styled.div`
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`

export default class StyledSkrim extends React.Component {
  render() {
    const { onClick, className, children } = this.props
    return (
      <Skrim className={className} onClick={onClick}>
        {children}
      </Skrim>
    )
  }
}

StyledSkrim.displayName = 'Skrim'

StyledSkrim.propTypes = {
  onClick: PropTypes.func
}
