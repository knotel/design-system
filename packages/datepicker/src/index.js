import styled from 'styled-components'
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates'
import { space, color, themeGet } from 'styled-system'

export const Datepicker = styled(DateRangePicker)`
  ${space} ${color} 

  .CalendarDay__selected_span {
    background: #82e0aa; //background
    color: white; //text
    border: 1px solid ${themeGet('colors.alphablue')}; //default styles include a border
  }

  // Will edit selected date or the endpoints of a range of dates
  .CalendarDay__selected {
    background: ${themeGet('colors.alphablue')};
    color: white;
  }

  // Will edit when hovered over. _span style also has this property
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
