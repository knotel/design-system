import React from 'react'
import PropTypes from 'prop-types'
import { Sentry } from 'react-activity'
import styled, { keyframes } from 'styled-components'
import theme from './theme'

const raiSentryPulse = keyframes`
  from {
    transform: scale(0);
    opacity: 1; 
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
`

const StyledSentry = styled(Sentry)`

  .rai-sentry {
    text-align: left;
    display: inline-block;
    position: relative;
    width: 2em;
    height: 2em; 
  }
  .rai-sentry .rai-wave-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    animation-duration: inherit; 
  }
  .rai-sentry .rai-wave {
    display: inline-block;
    border: 0.125em solid #727981;
    border-radius: 100%;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    animation-name: ${raiSentryPulse};
    animation-duration: inherit;
    animation-timing-function: linear;
    animation-iteration-count: infinite; 
  }

`

export default class Loader extends React.Component {
  render () {
    const { color } = this.props
    return <StyledSentry color={color} size={35} speed={0.7} />
  }
}

Loader.displayName = 'Loader'

Loader.defaultProps = {
  color: theme.colors.primary
}

Loader.propTypes = {
  color: PropTypes.string
}
