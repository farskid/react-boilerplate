import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import eventReducer from './event'

export default combineReducers({
  routing,
  eventReducer
})
