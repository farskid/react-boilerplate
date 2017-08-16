import actionTypes from '../../action-types'

export function addToSelectedDays(day) {
  return {
    type: actionTypes.ADD_TO_SELECTED_DAYS,
    day
  }
}
