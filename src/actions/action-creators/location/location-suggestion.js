import actionTypes from '../../action-types'
import {CALL_API} from 'redux-api-middleware'

const api = (location) => {
  return {
    [CALL_API]: {
      endpoint: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&sensor=false`,
      method: 'GET',
      types: [
        actionTypes.GET_LOCATION_SUGGESTION_REQUEST,
        {
          type: actionTypes.GET_LOCATION_SUGGESTION_SUCCESS,
          payload: (action, state, response) => response.json()
        },
        {
          type: actionTypes.GET_LOCATION_SUGGESTION_FAILURE,
          payload: (action, state, response) => response.json()
        }
      ]
    }
  }
}

export const getLocationSuggestion = () => (dispatch) => dispatch(api())
