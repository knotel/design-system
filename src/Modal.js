import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Flex from './Flex'
import Card from './Card'
import Skrim from './Skrim'
import CloseButton from './CloseButton'
import theme from './theme'

const Wrapper = styled(Flex)`
  bottom: 0;
  left: 0;
  pointer-events: ${props => (props.showModal ? 'auto' : 'none')};
  position: fixed;
  right: 0;
  top: 0;
  visibility: ${props => (props.showModal ? 'visible' : 'hidden')};
`

const Modal = styled(Card)`
  background: ${props => props.theme.colors.white};
  bottom: 0;
  box-shadow: ${props => props.theme.boxShadows[2]};
  left: 0;
  opacity: ${props => (props.showModal ? 1 : 0)};
  pointer-events: ${props => (props.showModal ? 'auto' : 'none')};
  position: fixed;
  right: 0;
  top: 0;
  visibility: ${props => (props.showModal ? 'visible' : 'hidden')};
  z-index: 200;
  ${props => props.theme.mediaQueries['md']} {
    border-radius: 2px;
    bottom: initial;
    left: initial;
    margin-left: initial;
    min-height: 200px;
    right: initial;
    top: 25%;
    min-width: 400px;
  }
`

const StyledSkrim = styled(Skrim)`
  visibility: ${props => (props.showModal ? 'visible' : 'hidden')};
  opacity: ${props => (props.showModal ? 1 : 0)};
  pointer-events: ${props => (props.showModal ? 'auto' : 'none')};
  transition: all 0.15s ${props => props.theme.easeOut};
`

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  right: 20px;
  top: 20px;
`

export default class StyledModal extends React.Component {
  render() {
    const { children, showModal, closable, onTriggerClose } = this.props
    return (
      <Wrapper showModal={showModal} flexDirection="column" align="center">
        <StyledSkrim showModal={showModal} onClick={closable && onTriggerClose}>
          {children}
        </StyledSkrim>
        <Modal flexDirection="column" showModal={showModal}>
          {closable && <StyledCloseButton onClick={onTriggerClose} />}
        </Modal>
      </Wrapper>
    )
  }
}

StyledModal.displayName = 'Modal'

StyledModal.defaultProps = {
  closable: true,
  showModal: false
}

StyledModal.propTypes = {
  onClick: PropTypes.func,
  closable: PropTypes.bool,
  onTriggerClose: PropTypes.func
}
