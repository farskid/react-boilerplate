import actionTypes from '../../action-types'

export function addToSelectedTimes(time) {
  return {
    type: actionTypes.ADD_TO_SELECTED_TIMES,
    time
  }
}
