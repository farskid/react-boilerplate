import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(browserHistory)
    )
  )
)

export default store
