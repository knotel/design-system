import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from '../Card'
import Flex from '../Flex'
import Box from '../Box'

import Image from './Image'

const CardWrapper = styled(Card)`
  cursor: pointer;
  border-radius: 2px;
  background-color: white;
  width: calc(100% - 32px);
  position: relative;
`

const Content = styled(Flex)`
  padding: 16px 8px;
  ${props => props.theme.mediaQueries['md']} {
    padding: 16px;
  }
`

export default class ImageSpaceCard extends React.Component {
  handleClick = () => {
    this.props.onClick()
  };

  render () {
    const {
      id: spaceId,
      className,
      imageUrl,
      address,
      neighborhood,
      rentMonth,
      baseRent,
      monthlyRent,
      moveInReadyDate,
      companySize,
      sqft,
      preview,
      floorNumber,
      marginX,
      marginY,
      isCollection,
      liked,
    } = this.props

    console.log(this.props)
    return (
      <CardWrapper onClick={this.handleClick} mx={marginX}
        my={marginY} style={this.props.style} className={className}
      >
        <Image
          imageUrl={imageUrl}
          floorNumber={floorNumber}
          address={address}
          neighborhood={neighborhood}
          liked={liked}
          preview={preview} />
        <Content flexDirection="column">
          {this.props.children}
        </Content>
      </CardWrapper>
    )
  }
}

ImageSpaceCard.defaultProps = {
  imageUrl: '',
  neighborhood: `Hell's Kitchen`,
  address: '150 West 51st Street #1932',
  moveInReadyDate: 'Sept 9',
  buildingClass: 'A',
  lease: '3 Years (flexible)',

  baseRent: '$75 sqft',
  sqft: '1200',
  floorNumber: '',
  onClicked: () => { },
  preview: false,
  liked: false,
  isCollection: false,
  marginX: 0,
  marginY: 0,
  rentMonth: '',
  monthlyRent: '',
  style: {},
}

ImageSpaceCard.propTypes = {
  imageUrl: PropTypes.string,
  neighborhood: PropTypes.string,
  rentMonth: PropTypes.string,
  monthlyRent: PropTypes.string,
  address: PropTypes.string,
  moveInReadyDate: PropTypes.string,
  companySize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  baseRent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sqft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  floorNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClicked: PropTypes.func,
  preview: PropTypes.bool,
  marginX: PropTypes.number,
  marginY: PropTypes.number,
  liked: PropTypes.bool,
  isCollection: PropTypes.bool,
  style: PropTypes.object,
}
