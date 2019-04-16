import React from 'react'
import { storiesOf } from '@storybook/react'
import { Modal, SmallModalHeader, ModalHeader, ScrollLock } from '../src/index'
import Box from '../../core/src/Box'
import Button from '../../core/src/Button'
import styled from 'styled-components'

const StyledModal = styled(Modal)`
  height: ${props => props.height};
`

class ModalStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.scrollLock = new ScrollLock()
  }

  render() {
    return (
      <div style={{ height: '1500px' }}>
        <Button
          onClick={() => {
            if (this.props.lock) {
              this.scrollLock.on()
            }
            this.setState({ isOpen: true })
          }}
        >
          Open
        </Button>
        <StyledModal
          isOpen={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false })
            if (this.props.lock) {
              this.scrollLock.off()
            }
          }}
          {...this.props}
        >
          <Box p={2}>{this.children}</Box>
        </StyledModal>
      </div>
    )
  }
}

storiesOf('Modal', module)
  .add('Raw', () => (
    <ModalStory width={['100px', '200px', '500px']} disableCloseButton />
  ))
  .add('With SmallModalHeader', () => (
    <ModalStory
      header={<SmallModalHeader />}
      width={['80vw', '400px', '500px']}
    />
  ))
  .add('With ModalHeader (and scrollLock!)', () => (
    <ModalStory
      header={
        <ModalHeader
          title="Modal title"
          onClose={() => {
            alert('This should handle close')
          }}
        >
          <div style={{ height: '1000px' }}>
            Content with 1000px height<button tabIndex="1">Some action</button>
          </div>
        </ModalHeader>
      }
      height={['90vh', '460px', '560px']}
      width={['80vw', '400px', '500px']}
      lock={true}
    />
  ))
  .add('With Overflow', () => (
    <ModalStory
      header={<SmallModalHeader />}
      width={['80vw', '400px', '500px']}
      enableOverflow
    />
  ))
  .add('With imagemode and colorful', () => (
    <ModalStory
      bg="orange"
      header={<SmallModalHeader />}
      width={['100px', '200px', '500px']}
      imgMode
      disableCloseButton
    />
  ))
  .add('Lightbox', () => (
    <ModalStory
      bg="orange"
      header={<SmallModalHeader />}
      width={['100px', '200px', '500px']}
      imgMode
    >
      <p>Hello.</p>
    </ModalStory>
  ))
