import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet, space, fontSize } from 'styled-system'
import { darken } from 'polished'
import theme from './theme'
import Box from './Box'

const ToggleBadge = props => {
  const { selected, disabled, label } = props
  return (
    <ToggleBadgeWrapper selected={selected} disabled={disabled}>
      <label>
        {label}
        <StyledInput type="checkbox" {...props} />
      </label>
    </ToggleBadgeWrapper>
  )
}

const ToggleBadgeWrapper = styled(Box)`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 99999px;
  font-weight: ${props => props.theme.bold};
  font-family: inherit;
  cursor: pointer;
  background-color: ${props =>
    props.selected ? props.theme.colors[props.bg] : props.unSelectedBg};
  color: ${props => props.theme.colors[props.color]};
  ${space} ${fontSize};
  &:hover {
    background-color: ${props => darken(0.075, props.theme.colors[props.bg])};
  }
`

ToggleBadgeWrapper.defaultProps = {
  px: 2,
  py: 1,
  mx: 1,
  my: 1,
  fontSize: 0,
  theme,
  color: 'blue',
  bg: 'lightBlue',
  unSelectedBg: 'transparent'
}

const StyledInput = styled.input`
  appearance: none;
  opacity: 1;
  background: red;
  position: absolute;
  z-index: 999;
`

ToggleBadge.displayName = 'ToggleBadge'

ToggleBadge.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  unSelectedBg: PropTypes.string,
  selected: PropTypes.bool,
  ...space.propTypes,
  ...fontSize.propTypes
}

export default ToggleBadge
