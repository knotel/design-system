import styled from 'styled-components'
import { space, propTypes } from 'styled-system'
import PropTypes from 'prop-types'

const borders = ({ color, theme }) => {
  const borderColor = color ? theme.colors[color] : theme.colors.gray300
  const focusColor = color ? borderColor : theme.colors.primary
  return {
    'border-color': borderColor,
    'box-shadow': `0 0 0 1px ${borderColor}`,
    ':focus': {
      outline: 0,
      'border-color': focusColor,
      'box-shadow': `0 0 0 2px ${focusColor}`
    }
  }
}

const Textarea = styled.textarea`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  font-size: ${props => props.theme.fontSizes[1]}px;
  background-color: transparent;
  border-radius: ${props => props.theme.radius};
  border-width: 0px;
  border-style: solid;
  border-color: ${props => props.theme.gray};
  box-sizing: border-box;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;

  margin: 0;

  resize: none;
  ::placeholder {
    color: ${props => props.theme.gray};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space};
`

Textarea.displayName = 'Textarea'
Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  ...propTypes.borders,
  ...propTypes.space
}

export default Textarea
