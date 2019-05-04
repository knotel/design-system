import styled from 'styled-components'
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates/initialize'
import { space, color, themeGet } from 'styled-system'

export const Datepicker = styled(SingleDatePicker)`
  ${space} ${color} 

  .CalendarDay__selected_span {
    background: #82e0aa;
    color: white;
    border: 1px solid ${themeGet('colors.alphablue')};
  }

  .CalendarDay__selected {
    background: ${themeGet('colors.alphablue')};
    color: white;
  }

  .CalendarDay__selected:hover {
    background: ${themeGet('colors.alphablue')};
    color: white;
  }

  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span {
    background: ${themeGet('colors.alphablue')};
  }
`

Datepicker.defaultProps = {
  color: 'blue'
}

Datepicker.propTypes = {
  ...space.propTypes,
  ...color.propTypes
}

export default Datepicker
