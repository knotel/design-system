import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BackgroundImage from './BackgroundImage'
import Box from './Box'

const OverflowBox = styled(Box)`
  overflow: hidden;
`

const HoverableBackgroundImage = styled(BackgroundImage)`
  -webkit-transition: all ${props => props.theme.duration.normal};
  -moz-transition: all ${props => props.theme.duration.normal};
  -o-transition: all ${props => props.theme.duration.normal};
  transition: all ${props => props.theme.duration.normal};
  &:hover {
    -ms-transform: scale(${props => (props.zoom ? props.zoom : '1.2')});
    -moz-transform: scale(${props => (props.zoom ? props.zoom : '1.2')});
    -webkit-transform: scale(${props => (props.zoom ? props.zoom : '1.2')});
    -o-transform: scale(${props => (props.zoom ? props.zoom : '1.2')});
    transform: scale(${props => (props.zoom ? props.zoom : '1.2')});
  }
`

const ImageHover = ({ children, width, ...props }) => (
  <OverflowBox width={width}>
    <HoverableBackgroundImage image={props.image} width={props.width}>
      {children}
    </HoverableBackgroundImage>
  </OverflowBox>
)

ImageHover.propTypes = {
  image: PropTypes.string,
  zoom: PropTypes.number
}

ImageHover.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4',
  zoom: 1.2,
  duration: 0.5
}

ImageHover.displayName = 'ImageHover'

export default ImageHover
