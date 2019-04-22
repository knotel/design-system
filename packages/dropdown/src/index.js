import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Card, Relative } from 'pcln-design-system'
import styled from 'styled-components'

class Dropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.isOpen
    }
  }

  toggleView = () => {
    const isOpen = !this.state.isOpen
    console.log('>', isOpen)
    this.setState({ isOpen })
  }

  render() {
    const { title, isOpen } = this.state
    return (
      <Box {...this.props}>
        <Button onClick={() => this.toggleView()}>{this.props.title}</Button>
        <Card p={2} width={240} hidden={!isOpen}>
          <OverflowContainer w={1} mb={3}>
            {this.props.children}
          </OverflowContainer>
        </Card>
      </Box>
    )
  }
}

const OverflowContainer = styled(Relative)`
  overflow: hidden;
`

Dropdown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  isOpen: PropTypes.bool
}

Dropdown.defaultProps = {
  children: [],
  isOpen: false
}

export default Dropdown
