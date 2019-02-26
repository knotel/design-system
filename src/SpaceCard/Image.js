import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import BackgroundImage from '../BackgroundImage'
import Flex from '../Flex'
import Heading from '../Heading'
import Text from '../Text'

import Status from './Status'
import { transformFloorNumber } from './util'

const PhotoPreview = styled(BackgroundImage)`
  width: 100%;
  background: #e8e8e8;
  border-radius: 4px;
  height: 200px;
`

const Preview = styled(Text)`
  white-space: nowrap;
  background: ${props => props.color || '#A3A3A3'};
  border-radius: 4px;
  height: ${props => props.height || '12px'};
  width: ${props => props.width || '80px'};
  margin-top: 4px;
  margin-bottom: 4px;
`

const GradientFlex = styled(Flex)`
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 ); /* IE6-9 */
`

const Photo = styled(BackgroundImage)`
  width: 100%;
`

const ShadowFlex = styled(Flex)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 200px;
  box-sizing: border-box;
`

const Image = ({
  imageUrl,
  preview,
  floorNumber,
  address,
  neighborhood,
  liked
}) => {
  if (preview) {
    return (
      <PhotoPreview>
        <ShadowFlex flexDirection="column" justify="space-between">
          <Flex justify="flex-end">{<Status preview={preview} />}</Flex>
          <Flex flexDirection="column" justify="flex-end" p={3}>
            <Preview color={'white'} width={'80px'} height={'4px'} />
            <Preview color={'white'} width={'200px'} height={'12px'} />
          </Flex>
        </ShadowFlex>
      </PhotoPreview>
    )
  }
  return (
    <Photo image={imageUrl} height="200px">
      <ShadowFlex flexDirection="column" justify="space-between">
        <Flex justify="flex-start">
          <Status preview={preview} />
        </Flex>
        <GradientFlex justify="space-between" align="center" p={3}>
          <Flex flexDirection="column" justify="flex-end" align="flex-start">
            <Heading fontSize={1} caps color="white">
              {neighborhood}
            </Heading>
            <Heading fontSize={3} color="white">
              {`${address}${floorNumber &&
                ' ,' + transformFloorNumber(floorNumber)}`}
            </Heading>
          </Flex>
        </GradientFlex>
      </ShadowFlex>
    </Photo>
  )
}

Image.propTypes = {
  imageUrl: PropTypes.string,
  preview: PropTypes.bool,
  floorNumber: PropTypes.string,
  address: PropTypes.string,
  neighborhood: PropTypes.string,
  liked: PropTypes.bool
}

Image.defaultProps = {
  preview: false,
  liked: false
}

export default Image
