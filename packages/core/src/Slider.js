import React from 'react'
import styled from 'styled-components'
import { Range } from 'rc-slider'
import { space, color, propTypes } from 'styled-system'
import theme from './theme'

const Slider = styled(Range)`
  position: relative;
  height: 32px;
  padding-top: 12px;
  border-radius: 9999px;
  touch-action: none;

  ${space} ${color} & .rc-slider-rail, & .rc-slider-track {
    height: 8px;
  }
  & .rc-slider-handle {
    width: 32px;
    height: 32px;
    margin-left: -16px;
    margin-top: -12px;
  }

  & .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: ${props => props.theme.colors.gray};
    border-radius: 9999px;
  }

  & .rc-slider-track {
    position: absolute;
    left: 0;
    border-radius: 9999px;
    background-color: currentcolor;
  }

  & .rc-slider-handle {
    position: absolute;
    cursor: pointer;
    cursor: grab;
    border-radius: 9999px;
    border: solid 4px currentcolor;
    background-color: #fff;
    touch-action: pan-x;

    &:hover {
    }
    &:active {
    }
    &:focus {
      box-shadow: 0 0 0 2px ${props => props.theme.colors.blue};
    }
  }

  &.rc-slider-disabled {
    color: ${props => props.theme.colors.gray};
    .rc-slider-track {
    }
    .rc-slider-handle {
      box-shadow: none;
      cursor: default;
    }
  }
`

Slider.defaultProps = {
  allowCross: false,
  color: 'blue',
  theme
}

Slider.propTypes = {
  ...propTypes.space,
  ...propTypes.color
}

export default Slider
