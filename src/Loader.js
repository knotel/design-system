import React from 'react'
import PropTypes from 'prop-types'
import { Sentry } from 'react-activity'
// import 'react-activity/dist/react-activity.css'
import theme from './theme'

export default class Loader extends React.Component {
  render() {
    const { color } = this.props
    return <Sentry color={color} size={35} speed={0.7} />
  }
}

Loader.displayName = 'Loader'

Loader.defaultProps = {
  color: theme.colors.primary
}

Loader.propTypes = {
  color: PropTypes.string
}
