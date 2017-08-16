import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import store from './store'
import createRouter from './routes'

// Import Styles
import './styles/index.scss'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>{createRouter(history)}</Provider>
  , document.getElementById('app')
)
