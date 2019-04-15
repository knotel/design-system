import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '../Text'
import Flex from '../Flex'
import Box from '../Box'
import theme from '../theme'

import SvgIcon from './SvgIcon'

const Unwrappable = styled(Text.span)`
  white-space: nowrap;
  font-family: 'halyard-display', sans-serif;
  font-weight: 500;
`

const Preview = styled(Box)`
  white-space: nowrap;
  background: ${props => props.color || props.theme.colors.gray500};
  border-radius: 4px;
  height: 8px;
  min-width: 40px;
  margin-top: 4px;
  margin-bottom: 4px;
`

const IconInfo = ({ icon, title, value, preview, width, height }) => (
  <Flex flexDirection="row" align="top">
    <SvgIcon
      width={width}
      icon={icon}
      pr={2}
      height={height}
      size={18}
      color={theme.colors.gray800}
    />
    <Flex flexDirection="column">
      {preview ? (
        <Preview />
      ) : (
        <Unwrappable fontSize={'10pt'} color={'#A3A3A3'}>
          {title}
        </Unwrappable>
      )}
      {preview ? (
        <Preview color="#cacaca" />
      ) : (
        <Text fontSize={1} color={'#333'}>
          {value}
        </Text>
      )}
    </Flex>
  </Flex>
)

IconInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  preview: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
}

IconInfo.defaultProps = {
  preview: false,
  width: '20px',
  height: '20px'
}

export default IconInfo
