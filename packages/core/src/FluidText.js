import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  textStyle,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  space,
  color,
  themeGet
} from 'styled-system'
import theme from './theme'
import { mapProps, deprecatedPropType } from './utils'
import { fluidRange } from 'polished'

export const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase',
        letterSpacing: themeGet('letterSpacings.caps')(props)
      }
    : null

export const regular = props =>
  props.regular ? { fontWeight: props.theme.regular } : null

export const bold = props =>
  props.bold ? { fontWeight: props.theme.bold } : null

const fluidStyles = {
  ...fluidRange(
    {
      prop: 'fontSize',
      fromSize: props.theme.fontSizes[0],
      toSize: props.theme.s[5]
    },
    props.theme.mediaQueries[0],
    props.theme.mediaQueries[3]
  )
}

const FluidText = mapProps(({ align, ...props }) => ({
  textAlign: align,
  ...props
}))(styled.div`
  ${textStyle}
  ${fluidStyles}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${space}
  ${color}
  ${caps}
  ${regular}
  ${bold}
`)

FluidText.displayName = 'FluidText'

FluidText.propTypes = {
  ...textStyle.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  align: deprecatedPropType('textAlign')
}

FluidText.defaultProps = {
  theme: theme
}

FluidText.span = Text.withComponent('span')
FluidText.p = Text.withComponent('p')
FluidText.s = Text.withComponent('s')

export default FluidText
