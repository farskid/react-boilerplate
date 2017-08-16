import * as step1Action from './action-creators/form/saveStep1'
import * as selectedDaysAction from './action-creators/daypicker/selectedDays'
import * as selectedTimesAction from './action-creators/daypicker/selectedTimes'
import * as locationSuggestionAction from './action-creators/location/location-suggestion'

module.exports = {
  ...step1Action,
  ...selectedDaysAction,
  ...selectedTimesAction,
  ...locationSuggestionAction
}
