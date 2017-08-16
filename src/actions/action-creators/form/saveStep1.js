import actionTypes from '../../action-types'

export function saveStep1(title, location, note) {
  return {
    type: actionTypes.SAVE_STEP_1,
    title,
    location,
    note
  }
}
